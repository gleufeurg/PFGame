//Vérifie que chaque fichier de langues/ traduit TOUS les textes du jeu.
//Lancer depuis la racine du dépôt :  node game-design/outils/verifier-traductions.js
//Il faut Playwright (npm install playwright), comme pour generer-docs.js.
//
//Comment il trouve les textes :
//1. il ouvre le jeu dans une langue sans dictionnaire, fait le tour des menus, et lit MISSING_TRANSLATIONS
//   (la liste des textes que t() n'a pas trouvés : tous ceux qui ont été affichés) ;
//2. il cherche aussi dans index.html tous les t("...") écrits en dur (ceux qu'on ne voit pas pendant le tour).
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ROOT = path.join(__dirname, '..', '..');

(async () => {
    const browser = await chromium.launch();
    const keys = new Set();
    for (const touch of [false, true]) { //souris puis doigt : certains textes changent
        const context = await browser.newContext({ hasTouch: touch, locale: 'en-US' });
        const page = await context.newPage();
        //les fichiers de langues/ sont remplacés par des fichiers vides : le jeu est en anglais, mais sans dictionnaire,
        //donc chaque texte que t() reçoit est noté comme "manquant"
        await page.route(/langues\/\w+\.js$/, function (route) { route.fulfill({ body: '' }); });
        await page.goto('file://' + path.join(ROOT, 'index.html'));
        await page.waitForTimeout(500);
        const found = await page.evaluate(function () {
            //le tour des menus : chaque fenêtre, chaque compétence, chaque lien d'orbite, chaque code de triche
            gold = 1e7;
            xp = 1e7;
            const visitTrees = function () {
                for (const tree of SKILL_TREES) {
                    openSkillTree(tree);
                    showNodeInfoHint();
                    tree.nodes.forEach(showNodeInfo);
                    for (const mode of Object.keys(LINK_MODES)) {
                        tree.linkMode = mode;
                        renderOrbitLinks(tree);
                        renderStatsPanel();
                    }
                    closeSkillTree();
                }
            };
            visitTrees();
            const godItem = SHOP_ITEMS.find(function (item) { return item.unlocksGod; });
            for (let i = 0; i < 4; i++) {
                buyShopItem(godItem);
            }
            visitTrees();
            renderShop();
            openSaveCode('export');
            closeSaveCode();
            openSaveCode('import');
            closeSaveCode();
            for (const code of Object.keys(CHEAT_CODES)) {
                if (code !== 'thanatos') {
                    CHEAT_CODES[code]();
                }
            }
            visitTrees();
            renderShop();
            renderSkipButtons();
            renderSpeedButtons();
            return [...MISSING_TRANSLATIONS];
        });
        found.forEach(function (key) { keys.add(key); });
        await context.close();
    }
    await browser.close();

    const source = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
    const literal = /(?<![\w$.])t\(\s*(?:[\w.]+\s*\?\s*)?"((?:[^"\\]|\\.)*)"(?:\s*:\s*"((?:[^"\\]|\\.)*)")?/g;
    let match;
    while ((match = literal.exec(source))) {
        for (const text of [match[1], match[2]]) {
            if (text !== undefined) {
                keys.add(JSON.parse('"' + text + '"'));
            }
        }
    }

    let hasProblem = false;
    for (const file of fs.readdirSync(path.join(ROOT, 'langues'))) {
        const code = file.replace('.js', '');
        const sandbox = { window: {} };
        vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'langues', file), 'utf8'), sandbox);
        const dictionary = sandbox.window.TRADUCTIONS[code] || {};
        const missing = [...keys].filter(function (key) { return typeof dictionary[key] !== 'string'; });
        const placeholders = function (text) { return (text.match(/\{\w+\}/g) || []).sort().join(','); };
        const broken = Object.keys(dictionary).filter(function (key) { return placeholders(key) !== placeholders(dictionary[key]); });
        console.log(file + ' : ' + missing.length + ' texte(s) manquant(s), ' + broken.length + ' {mot} oublié(s)');
        missing.forEach(function (key) { console.log('   manque : ' + JSON.stringify(key)); });
        broken.forEach(function (key) { console.log('   {mot} différent : ' + JSON.stringify(key)); });
        hasProblem = hasProblem || missing.length > 0 || broken.length > 0;
    }
    process.exitCode = hasProblem ? 1 : 0;
})();
