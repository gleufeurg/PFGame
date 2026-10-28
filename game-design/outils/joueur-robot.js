// JOUEUR ROBOT : simule un joueur qui enchaîne les parties, pour mesurer le RYTHME DE PROGRESSION du jeu.
// Il joue jusqu'à sa mort, achète dans le shop et dans les skill trees, puis rejoue... et note à quel moment
// (en minutes « réelles », comme un vrai joueur) il obtient chaque dieu.
//
// Utilisation (il faut Node.js et Playwright, comme pour generer-docs.js) :
//   node game-design/outils/joueur-robot.js            -> 2 heures de jeu simulées
//   node game-design/outils/joueur-robot.js 360        -> 6 heures de jeu simulées
// Le calcul prend du temps (environ 1 minute de calcul pour 10 minutes de jeu en fin de partie).
//
// Ce que fait le robot :
// - il joue à la vitesse la plus rapide qu'il a achetée (x1, x2 ou x4), sauf pendant les duels (x1) ;
// - à sa mort : la moitié de l'or gagné pendant la partie va dans une « cagnotte » pour le prochain dieu ; il achète ce dieu dès qu'il peut,
//   et dépense le reste dans les améliorations les moins chères ;
// - il prend les compétences les moins chères, tous dieux confondus, et le meilleur lien d'orbite acheté ;
//   l'XP qui reste va dans l'Éveil le moins cher (dieux à l'arbre complet) ;
// - il ne saute pas dans le temps, ne change pas les orbites, et compte 15 s par mort (le temps de faire ses achats).
// Un vrai joueur fait d'autres choix : les résultats donnent un ordre d'idée, pas un chiffre exact.
const { chromium } = require('playwright');
const path = require('path');
const ROOT = path.join(__dirname, '..', '..');
const MAX_REAL_MINUTES = Number(process.argv[2] || 120);
const RUN_CAP = 3600;   // une partie s'arrête au plus à 60 min de jeu (sinon le calcul pourrait ne jamais finir)

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    await page.addInitScript(() => {
        localStorage.setItem('language', 'fr');
        window.requestAnimationFrame = () => 0; // la boucle normale du jeu est coupée : c'est le robot qui fait avancer le temps
    });
    await page.route(/^https?:/, (route) => route.abort()); // pas besoin d'internet
    await page.goto('file://' + path.join(ROOT, 'index.html'));
    await page.waitForTimeout(500);
    await page.evaluate(() => {
        skipTutorial(); // pas de tutoriel : ses bulles mettraient la partie en pause
        window.robotGodFund = 0; // l'or mis de côté pour le prochain dieu
        window.robotSpeed = function () {
            const level = SHOP_ITEMS.find((item) => item.timeUpgrade === 'speed').level;
            return [1, 2, 4][Math.min(2, level)];
        };
        window.robotShop = function () {
            const godItem = SHOP_ITEMS.find((item) => item.unlocksGod);
            let bought = true;
            let guard = 0;
            while (bought && guard++ < 5000) {
                bought = false;
                const godCost = getShopItemCost(godItem);
                const godLeft = godItem.level < godItem.maxLevel;
                if (godLeft && gold >= godCost) {
                    buyShopItem(godItem);
                    robotGodFund = Math.max(0, robotGodFund - godCost);
                    bought = true;
                    continue;
                }
                const reserve = godLeft ? Math.min(gold, robotGodFund) : 0;
                const others = SHOP_ITEMS.filter((item) => !item.unlocksGod && item.level < item.maxLevel && gold - getShopItemCost(item) >= reserve);
                others.sort((a, b) => getShopItemCost(a) - getShopItemCost(b));
                if (others.length > 0) {
                    buyShopItem(others[0]);
                    bought = true;
                }
            }
            let found = true;
            while (found) {
                found = false;
                let best = null;
                for (const tree of SKILL_TREES) {
                    if (tree.isLocked) continue;
                    for (const node of tree.nodes) {
                        if (!node.unlocked && node.cost <= xp && getNodeState(tree, node) === 'available' && (best === null || node.cost < best.cost)) best = node;
                    }
                }
                if (best !== null) {
                    xp -= best.cost;
                    best.unlocked = true;
                    found = true;
                }
            }
            // l'XP qui reste : l'Éveil le moins cher, parmi les dieux à l'arbre complet
            let awakened = true;
            while (awakened) {
                awakened = false;
                const ready = SKILL_TREES.filter((tree) => !tree.isLocked && isTreeComplete(tree));
                ready.sort((a, b) => getAwakeningCost(a) - getAwakeningCost(b));
                if (ready.length > 0 && getAwakeningCost(ready[0]) <= xp) {
                    xp -= getAwakeningCost(ready[0]);
                    ready[0].awakening++;
                    awakened = true;
                }
            }
            for (const tree of SKILL_TREES) {
                tree.linkMode = ['both', 'right', 'left'].find((mode) => isLinkModeUnlocked(mode)) || 'none';
            }
            refreshStats();
        };
        // Avance de "seconds" secondes de jeu. Renvoie le temps réel que ça aurait pris (duel = vitesse x1)
        window.robotPlay = function (seconds) {
            const speed = robotSpeed();
            let realTime = 0;
            for (let step = 0; step < seconds * 60 && !isGameOver; step++) {
                realTime += (bossDuel !== null ? 1 : 1 / speed) / 60;
                updateGame(1 / 60);
                updatePlanetPositions();
            }
            return { over: isGameOver, time: runTime, real: realTime };
        };
    });

    const format = (seconds) => Math.floor(seconds / 60) + ':' + String(Math.floor(seconds % 60)).padStart(2, '0');
    let real = 0;
    let run = 0;
    const godTimes = {};
    console.log('partie | temps réel (min) | durée | or gagné | XP gagnée | dieux | niveaux du shop | compétences | niveaux d\'Éveil | vitesse');
    while (real < MAX_REAL_MINUTES * 60) {
        run++;
        let state;
        do {
            state = await page.evaluate(() => robotPlay(30));
            real += state.real;
        } while (!state.over && state.time < RUN_CAP);
        real += 15;
        const info = await page.evaluate(() => ({
            time: runTime, gold: runGold, xp: runXp, gods: planets.length, speed: robotSpeed(),
            shop: SHOP_ITEMS.reduce((sum, item) => sum + item.level, 0),
            skills: SKILL_TREES.reduce((sum, tree) => sum + tree.nodes.filter((node) => node.unlocked).length, 0),
            awakening: SKILL_TREES.reduce((sum, tree) => sum + tree.awakening, 0)
        }));
        console.log(`${run} | ${(real / 60).toFixed(1)} | ${format(info.time)} | ${Math.round(info.gold)} | ${Math.round(info.xp)} | ${info.gods} | ${info.shop} | ${info.skills} | ${info.awakening} | x${info.speed}`);
        const gods = await page.evaluate(() => { robotGodFund += runGold * 0.5; robotShop(); restartGame(0); return planets.length; });
        for (let god = 1; god <= gods; god++) {
            if (godTimes[god] === undefined) godTimes[god] = Math.round(real / 60);
        }
    }
    console.log('\nChaque dieu obtenu après (minutes réelles) : ' + Object.entries(godTimes).map(([god, minutes]) => `dieu ${god} → ${minutes} min`).join(', '));
    await browser.close();
})();
