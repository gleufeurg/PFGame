//RÉGLAGES DU JEU : toutes les statistiques du jeu (vie, vitesse, taille, prix...), rangées par catégories et sous-catégories.
//
//LE PLUS SIMPLE : ouvre game-design/outils/editeur-reglages.html dans ton navigateur (double-clic sur le fichier).
//À LA MAIN : change une « valeur » ci-dessous, enregistre, puis recharge le jeu (F5).
//  - les pourcentages (unite: "%") sont écrits en fraction : 0.1 = 10 %, 1 = 100 %, 2 = 200 % ;
//  - Infinity = sans limite (un niveau maximum infini dans le shop) ;
//  - texteDuJeu = ce nombre est aussi écrit dans un texte du jeu : si tu le changes, change aussi ce texte.
//Le nom entre guillemets est le nom dans le code : index.html lit la valeur avec reglage("NOM").
//Ce fichier est réécrit par l'éditeur : si tu le modifies à la main, garde la même forme.
const REGLAGES = {
    "Joueur": {
        "Stats de départ": {
            "BASE_STATS.maxHealth": { valeur: 10, unite: "PV", texte: "Points de vie au début d'une partie" },
            "BASE_STATS.regen": { valeur: 0, unite: "PV/s", texte: "Points de vie regagnés par seconde" },
            "BASE_STATS.dodge": { valeur: 0, unite: "points", texte: "Points d'esquive au début (chance d'esquiver = x / (x + 1), avec x = les points ÷ 100)" },
            "BASE_STATS.shield": { valeur: 0, unite: "", texte: "Bouclier : 1 ou plus = un bouclier bloque un coup, puis se recharge" },
            "BASE_STATS.shieldRecharge": { valeur: 1, unite: "×", texte: "Vitesse de recharge du bouclier (1.5 = 50 % plus rapide)" },
            "BASE_STATS.lifeOnKill": { valeur: 0, unite: "PV", texte: "Points de vie regagnés à chaque ennemi tué" },
            "BASE_STATS.damage": { valeur: 1, unite: "", texte: "Dégâts par balle" },
            "BASE_STATS.attackSpeed": { valeur: 1, unite: "×", texte: "Cadence de tir (1 = normale, 1.5 = 50 % plus rapide)" },
            "BASE_STATS.range": { valeur: 300, unite: "px", texte: "Portée : distance max pour viser" },
            "BASE_STATS.bulletSpeed": { valeur: 1, unite: "×", texte: "Vitesse des balles" },
            "BASE_STATS.bulletCount": { valeur: 1, unite: "", texte: "Balles par tir (côte à côte, en mur)" },
            "BASE_STATS.critChance": { valeur: 0, unite: "%", texte: "Chance de coup critique" },
            "BASE_STATS.critDamage": { valeur: 2, unite: "%", texte: "Dégâts d'un coup critique (200 % = le double)" },
            "BASE_STATS.lifeOnHit": { valeur: 0, unite: "PV", texte: "Points de vie regagnés à chaque balle qui touche" },
            "BASE_STATS.maxHealthOnHit": { valeur: 0, unite: "PV", texte: "Points de vie max gagnés (pour la partie) à chaque balle qui touche" },
            "BASE_STATS.comboProcChance": { valeur: 0, unite: "%", texte: "Chance, à chaque tir, de déclencher un effet de combo au hasard" },
            "BASE_STATS.goldMultiplier": { valeur: 1, unite: "×", texte: "Or gagné" },
            "BASE_STATS.xpMultiplier": { valeur: 1, unite: "×", texte: "XP gagnée" }
        },
        "Défense": {
            "SHIELD_COOLDOWN": { valeur: 10, unite: "s", texte: "Temps de recharge du bouclier (divisé par la vitesse de recharge)" }
        },
        "Corps": {
            "PLAYER_RADIUS": { valeur: 32, unite: "px", texte: "Taille du joueur (rayon) : un ennemi le touche à cette distance (plus sa propre taille). Change aussi le dessin" }
        }
    },
    "Tirs": {
        "Joueur": {
            "BASE_FIRE_INTERVAL": { valeur: 0.35, unite: "s", texte: "Temps entre deux tirs du joueur (divisé par sa cadence de tir)" },
            "BASE_BULLET_SPEED": { valeur: 400, unite: "px/s", texte: "Vitesse des balles (multipliée par la vitesse des balles)" }
        },
        "Planètes": {
            "PLANET_FIRE_INTERVAL": { valeur: 1, unite: "s", texte: "Temps entre deux tirs d'une planète (divisé par sa cadence de tir)" },
            "MIN_SHOOTER_SPEED": { valeur: 0.15, unite: "%", texte: "Cadence minimum d'une planète (même avec des compétences qui la ralentissent)" }
        },
        "Balles": {
            "BULLET_SIZE": { valeur: 4, unite: "px", texte: "Taille d'une balle (rayon)" },
            "MIN_BULLET_SIZE_FACTOR": { valeur: 0.4, unite: "%", texte: "Taille minimum d'une balle (les compétences d'Éole la font rétrécir)" },
            "BULLET_WALL_SPACING": { valeur: 10, unite: "px", texte: "Écart entre deux balles d'un même tir (le mur de balles)" }
        }
    },
    "Planètes": {
        "Stats de départ": {
            "PLANET_BASE_STATS.damage": { valeur: 1, unite: "", texte: "Dégâts par balle" },
            "PLANET_BASE_STATS.attackSpeed": { valeur: 1, unite: "×", texte: "Cadence de tir (1 = un tir par seconde)" },
            "PLANET_BASE_STATS.range": { valeur: 250, unite: "px", texte: "Portée, depuis la planète" },
            "PLANET_BASE_STATS.bulletSpeed": { valeur: 1, unite: "×", texte: "Vitesse des balles" },
            "PLANET_BASE_STATS.bulletCount": { valeur: 1, unite: "", texte: "Balles par tir" },
            "PLANET_BASE_STATS.critChance": { valeur: 0, unite: "%", texte: "Chance de coup critique" },
            "PLANET_BASE_STATS.critDamage": { valeur: 2, unite: "%", texte: "Dégâts d'un coup critique" },
            "PLANET_BASE_STATS.lifeOnHit": { valeur: 0, unite: "PV", texte: "Points de vie regagnés par le joueur à chaque balle de la planète qui touche" },
            "PLANET_BASE_STATS.maxHealthOnHit": { valeur: 0, unite: "PV", texte: "Points de vie max gagnés par le joueur (pour la partie) à chaque balle qui touche" },
            "PLANET_BASE_STATS.comboProcChance": { valeur: 0, unite: "%", texte: "Chance, à chaque tir, de déclencher un effet de combo au hasard" }
        },
        "Orbites": {
            "ORBITS.inner.radius": { valeur: 130, unite: "px", texte: "Orbite intérieure : distance au joueur" },
            "ORBITS.inner.speed": { valeur: 0.25, unite: "rad/s", texte: "Orbite intérieure : vitesse de rotation (0.25 = un tour en 25 s ; négatif = dans l'autre sens)", min: -10 },
            "ORBITS.middle.radius": { valeur: 200, unite: "px", texte: "Orbite du milieu : distance au joueur" },
            "ORBITS.middle.speed": { valeur: -0.17, unite: "rad/s", texte: "Orbite du milieu : vitesse de rotation (négatif = dans l'autre sens)", min: -10 },
            "ORBITS.outer.radius": { valeur: 270, unite: "px", texte: "Orbite extérieure : distance au joueur" },
            "ORBITS.outer.speed": { valeur: 0.12, unite: "rad/s", texte: "Orbite extérieure : vitesse de rotation (négatif = dans l'autre sens)", min: -10 },
            "PLANET_SIZE": { valeur: 20, unite: "px", texte: "Taille des planètes" }
        }
    },
    "Pouvoirs des dieux": {
        "Rythme des pouvoirs": {
            "PLANET_POWERS.charm.interval": { valeur: 8, unite: "s", texte: "Aphrodite : temps de recharge du charme (moins la réduction de recharge : x / (100 + x), avec x points)" },
            "PLANET_POWERS.warCry.interval": { valeur: 12, unite: "s", texte: "Arès : temps de recharge du cri de guerre" },
            "PLANET_POWERS.bloom.interval": { valeur: 9, unite: "s", texte: "Déméter : temps de recharge du rayon de vie" },
            "PLANET_POWERS.moonArrow.interval": { valeur: 6, unite: "s", texte: "Artémis : temps de recharge de la grande flèche" },
            "PLANET_POWERS.tide.interval": { valeur: 10, unite: "s", texte: "Poséidon : temps de recharge de la vague" }
        },
        "Héphaïstos : traînée de feu": {
            "FIRE_TRAIL_STEP": { valeur: 14, unite: "px", texte: "Un point de feu tous les X pixels parcourus par la balle" },
            "FIRE_TRAIL_DURATION": { valeur: 1.2, unite: "s", texte: "Durée d'un point de feu avant qu'il s'éteigne (+ les compétences)" },
            "FIRE_TRAIL_RADIUS": { valeur: 9, unite: "px", texte: "Taille d'un point de feu (× la taille des balles)" },
            "FIRE_TRAIL_BURN_TIME": { valeur: 1, unite: "s", texte: "Durée de la brûlure après avoir touché la traînée" }
        },
        "Héphaïstos : la voie du marteau": {
            "HAMMER_CHARGE_TIME": { valeur: 1, unite: "s", texte: "Avant chaque tir, la planète se charge pendant X secondes : elle grossit et tremble (moins si elle tire plus vite)" },
            "HAMMER_CHARGE_GROW": { valeur: 0.35, unite: "%", texte: "Taille en plus de la planète quand elle est chargée, juste avant le tir" },
            "HAMMER_SHAKE": { valeur: 2.5, unite: "px", texte: "Tremblement de la planète chargée (graphismes élevés)" },
            "HAMMER_RELEASE_TIME": { valeur: 0.4, unite: "s", texte: "Après le tir, la planète se dégonfle et se calme en X secondes" }
        },
        "Poséidon : la vague": {
            "TIDE_WAVE_SPEED": { valeur: 320, unite: "px/s", texte: "Vitesse du front de la vague" },
            "TIDE_PUSH_FACTOR": { valeur: 2, unite: "×", texte: "Distance max dont un ennemi est emporté (× le recul de la vague)" },
            "TIDE_SLOW_DURATION": { valeur: 1.5, unite: "s", texte: "Ralenti des ennemis après la vague" },
            "FRAGILE_DURATION": { valeur: 4, unite: "s", texte: "Durée pendant laquelle un ennemi reste frêle" }
        },
        "Déméter : le rayon de vie": {
            "WEAKEN_FROM_BLOOM": { valeur: 3, unite: "s", texte: "Durée de l'affaiblissement des ennemis touchés" },
            "VINE_BASE_DURATION": { valeur: 2.5, unite: "s", texte: "Durée d'immobilisation d'une liane (+ les compétences)" },
            "VINE_LIFETIME": { valeur: 8, unite: "s", texte: "Une liane qui n'a attrapé personne disparaît après X secondes" }
        },
        "Artémis": {
            "MOON_ARROW_SIZE": { valeur: 2.6, unite: "×", texte: "Grande flèche : taille (× une balle)" },
            "MOON_ARROW_SPEED": { valeur: 1.8, unite: "×", texte: "Grande flèche : vitesse (× une balle)" },
            "BOUNCE_RANGE": { valeur: 180, unite: "px", texte: "Distance max d'un rebond de balle" }
        },
        "Zeus": {
            "ARC_BASE_RANGE": { valeur: 120, unite: "px", texte: "Portée d'un éclair" },
            "CONDUCT_DURATION": { valeur: 6, unite: "s", texte: "Durée pendant laquelle un ennemi reste conducteur" },
            "BOLT_BASE_RADIUS": { valeur: 90, unite: "px", texte: "Zone électrocutée par la foudre" },
            "BOLT_SPLASH_DAMAGE": { valeur: 0.5, unite: "×", texte: "Dégâts de la foudre sur les ennemis autour (× les dégâts de la balle)" },
            "BOLT_COOLDOWN": { valeur: 1, unite: "s", texte: "Un même ennemi ne reçoit pas la foudre 2 fois en moins de X secondes" }
        },
        "Arès : le cri de guerre": {
            "WAR_CRY_DAMAGE": { valeur: 0.15, unite: "%", texte: "Dégâts en plus, par point de cri de guerre" },
            "WAR_CRY_CRIT_CHANCE": { valeur: 0.04, unite: "%", texte: "Chance de critique en plus, par point" },
            "WAR_CRY_CRIT_DAMAGE": { valeur: 0.2, unite: "%", texte: "Dégâts critiques en plus, par point" },
            "WAR_CRY_BASE_DURATION": { valeur: 4, unite: "s", texte: "Durée du cri de guerre (+ les compétences)" }
        },
        "Contre les super ennemis": {
            "BOSS_KNOCKBACK_FACTOR": { valeur: 0.3, unite: "%", texte: "Les super ennemis sont moins repoussés (30 % = repoussés 3 fois moins loin)" }
        }
    },
    "Ennemis": {
        "Feu (rouge)": {
            "ENEMY_TYPES.fire.speed": { valeur: 90, unite: "px/s", texte: "Vitesse" },
            "ENEMY_TYPES.fire.minHealth": { valeur: 0.8, unite: "PV", texte: "Vie au début, au minimum" },
            "ENEMY_TYPES.fire.maxHealth": { valeur: 1.2, unite: "PV", texte: "Vie au début, au maximum" },
            "ENEMY_TYPES.fire.gold": { valeur: 1, unite: "or", texte: "Or gagné en le tuant" },
            "ENEMY_TYPES.fire.xp": { valeur: 1, unite: "XP", texte: "XP gagnée en le tuant" }
        },
        "Eau (bleu)": {
            "ENEMY_TYPES.water.speed": { valeur: 50, unite: "px/s", texte: "Vitesse" },
            "ENEMY_TYPES.water.minHealth": { valeur: 1.4, unite: "PV", texte: "Vie au début, au minimum" },
            "ENEMY_TYPES.water.maxHealth": { valeur: 2.2, unite: "PV", texte: "Vie au début, au maximum" },
            "ENEMY_TYPES.water.gold": { valeur: 1, unite: "or", texte: "Or gagné en le tuant" },
            "ENEMY_TYPES.water.xp": { valeur: 1, unite: "XP", texte: "XP gagnée en le tuant" }
        },
        "Plante (vert)": {
            "ENEMY_TYPES.plant.speed": { valeur: 35, unite: "px/s", texte: "Vitesse" },
            "ENEMY_TYPES.plant.minHealth": { valeur: 2.2, unite: "PV", texte: "Vie au début, au minimum" },
            "ENEMY_TYPES.plant.maxHealth": { valeur: 3.4, unite: "PV", texte: "Vie au début, au maximum" },
            "ENEMY_TYPES.plant.gold": { valeur: 1, unite: "or", texte: "Or gagné en le tuant" },
            "ENEMY_TYPES.plant.xp": { valeur: 1, unite: "XP", texte: "XP gagnée en le tuant" }
        },
        "Air (blanc)": {
            "ENEMY_TYPES.air.speed": { valeur: 70, unite: "px/s", texte: "Vitesse" },
            "ENEMY_TYPES.air.minHealth": { valeur: 0.6, unite: "PV", texte: "Vie au début, au minimum" },
            "ENEMY_TYPES.air.maxHealth": { valeur: 1, unite: "PV", texte: "Vie au début, au maximum" },
            "ENEMY_TYPES.air.gold": { valeur: 1, unite: "or", texte: "Or gagné en le tuant" },
            "ENEMY_TYPES.air.xp": { valeur: 1, unite: "XP", texte: "XP gagnée en le tuant" }
        },
        "Vie qui monte avec le temps": {
            "ENEMY_HEALTH_GROWTH": { valeur: 0.3, unite: "%", texte: "Vie en plus par minute de jeu" },
            "ENEMY_HEALTH_GROWTH_SQUARED": { valeur: 0.03, unite: "%", texte: "Vie en plus par minute au carré (ce qui accélère)" },
            "ENEMY_HEALTH_LATE_GROWTH": { valeur: 1.05, unite: "×", texte: "Et le tout multiplié par ce nombre chaque minute (fait monter vite la fin de partie)" }
        },
        "Taille": {
            "ENEMY_BASE_SIZE": { valeur: 4, unite: "px", texte: "Taille d'un ennemi à 0 PV (rayon)" },
            "ENEMY_SIZE_PER_HEALTH": { valeur: 4, unite: "px", texte: "Taille en plus par point de vie de départ" },
            "ENEMY_SHRINK_SPEED": { valeur: 10, unite: "", texte: "Vitesse à laquelle un ennemi abîmé rétrécit" }
        },
        "Apparition": {
            "ENEMY_SPAWN_INTERVAL_START": { valeur: 1.2, unite: "s", texte: "Écart entre deux ennemis au début d'une partie" },
            "ENEMY_SPAWN_RAMP": { valeur: 0.005, unite: "", texte: "Montée de la difficulté : écart = écart du début ÷ (1 + ce nombre × secondes de jeu)" },
            "ENEMY_SPAWN_INTERVAL_MIN": { valeur: 0.35, unite: "s", texte: "Écart minimum entre deux ennemis (le plus rapide possible)" },
            "ENEMY_FIRST_SPAWN_DELAY": { valeur: 0.3, unite: "s", texte: "Le 1er ennemi arrive après X secondes" }
        },
        "Mouvements spéciaux": {
            "SPECIAL_MOVEMENT_CHANCE": { valeur: 0.1, unite: "%", texte: "Part des ennemis qui ont un mouvement spécial (les autres vont tout droit)" },
            "MOVEMENT_UNLOCKS.spiral.time": { valeur: 60, unite: "s", texte: "La spirale arrive à X secondes de jeu" },
            "MOVEMENT_UNLOCKS.zigzag.time": { valeur: 300, unite: "s", texte: "Le zigzag arrive à X secondes de jeu" },
            "MOVEMENT_UNLOCKS.wave.time": { valeur: 600, unite: "s", texte: "Le mouvement onduleux arrive à X secondes de jeu" },
            "MOVEMENT_VARIATION_TIME": { valeur: 750, unite: "s", texte: "À partir de X secondes de jeu, chaque ennemi spécial varie son mouvement" },
            "MOVEMENT_WARNING_TIME": { valeur: 3, unite: "s", texte: "Alerte avant le 1er ennemi d'un nouveau mouvement" },
            "MOVEMENT_SOLO_TIME": { valeur: 5, unite: "s", texte: "Après ce 1er ennemi, les autres attendent X secondes (ou sa mort)" },
            "ENEMY_SPIRAL_SPEED": { valeur: 0.4, unite: "", texte: "Spirale : vitesse de rotation autour du joueur" },
            "SPIRAL_OVAL_MAX": { valeur: 0.6, unite: "%", texte: "Spirale : à quel point elle peut être ovale (0 = cercle parfait)" },
            "ZIGZAG_STOP_AND_GO_CHANCE": { valeur: 0.4, unite: "%", texte: "Zigzag : chance de s'arrêter à un virage puis de repartir d'un coup" },
            "ENEMY_WAVE_AMPLITUDE": { valeur: 40, unite: "px", texte: "Onduleux : écart max sur le côté" },
            "ENEMY_WAVE_FREQUENCY": { valeur: 3, unite: "", texte: "Onduleux : vitesse des oscillations" }
        }
    },
    "Super ennemis": {
        "Tous les super ennemis": {
            "BOSS_WARNING_TIME": { valeur: 8, unite: "s", texte: "Alerte avant l'arrivée d'un super ennemi jamais vaincu" },
            "BOSS_RANDOM_CHANCE_START": { valeur: 0.001, unite: "%", texte: "Une fois vaincus, chance qu'un ennemi soit remplacé par l'un d'eux, au début d'une partie" },
            "BOSS_RANDOM_CHANCE_PER_SECOND": { valeur: 0.00002, unite: "%", texte: "Chance en plus par seconde de jeu" },
            "CHECKPOINT_OFFSET": { valeur: 2, unite: "s", texte: "Paliers (menu de mort) : la partie repart X secondes après l'heure du super ennemi" }
        },
        "Cerbère": {
            "BOSSES.cerbere.time": { valeur: 300, unite: "s", texte: "Arrive à X secondes de jeu" },
            "BOSSES.cerbere.health": { valeur: 15, unite: "PV", texte: "Vie (× la vie qui monte avec le temps, à son arrivée)" },
            "BOSSES.cerbere.size": { valeur: 34, unite: "px", texte: "Taille" },
            "BOSSES.cerbere.speed": { valeur: 60, unite: "px/s", texte: "Vitesse" },
            "BOSSES.cerbere.gold": { valeur: 15, unite: "or", texte: "Or gagné en le tuant" },
            "BOSSES.cerbere.xp": { valeur: 15, unite: "XP", texte: "XP gagnée en le tuant" }
        },
        "Hydre de Lerne": {
            "BOSSES.hydre.time": { valeur: 600, unite: "s", texte: "Arrive à X secondes de jeu", texteDuJeu: "le tutoriel dit qu'un super ennemi arrive « toutes les X minutes », X = l'heure de Cerbère : garde le même écart entre les super ennemis" },
            "BOSSES.hydre.health": { valeur: 60, unite: "PV", texte: "Vie (× la vie qui monte avec le temps, à son arrivée)" },
            "BOSSES.hydre.size": { valeur: 38, unite: "px", texte: "Taille" },
            "BOSSES.hydre.speed": { valeur: 55, unite: "px/s", texte: "Vitesse" },
            "BOSSES.hydre.gold": { valeur: 25, unite: "or", texte: "Or gagné en la tuant" },
            "BOSSES.hydre.xp": { valeur: 25, unite: "XP", texte: "XP gagnée en la tuant" },
            "HYDRA_MAX_GENERATION": { valeur: 3, unite: "", texte: "Nombre de dédoublements (3 = 1 → 2 → 4 → 8 têtes)" },
            "HYDRA_HEALTH_SHARE": { valeur: 0.55, unite: "%", texte: "Vie d'une nouvelle tête (× la vie de sa mère)" },
            "HYDRA_SIZE_SHARE": { valeur: 0.78, unite: "%", texte: "Taille d'une nouvelle tête (× la taille de sa mère)" },
            "HYDRA_SPEED_BONUS": { valeur: 0.15, unite: "%", texte: "Vitesse en plus d'une nouvelle tête" },
            "HYDRA_REWARD_SHARE": { valeur: 0.4, unite: "%", texte: "Or et XP d'une nouvelle tête (× ceux de sa mère)" },
            "HYDRA_WAVE_COUNT": { valeur: 30, unite: "", texte: "Têtes de la dernière vague (pendant le duel)" },
            "HYDRA_WAVE_COUNT_REPEAT": { valeur: 14, unite: "", texte: "Têtes de la dernière vague quand l'Hydre revient comme ennemi rare" },
            "HYDRA_WAVE_HEALTH": { valeur: 0.08, unite: "%", texte: "Vie d'une tête de la vague (× la vie de la 1re hydre)" },
            "HYDRA_WAVE_SIZE": { valeur: 12, unite: "px", texte: "Taille d'une tête de la vague" },
            "HYDRA_WAVE_REWARD": { valeur: 0.06, unite: "%", texte: "Or et XP d'une tête de la vague (× ceux de la 1re hydre)" }
        },
        "Méduse": {
            "BOSSES.meduse.time": { valeur: 900, unite: "s", texte: "Arrive à X secondes de jeu", texteDuJeu: "le tutoriel dit qu'un super ennemi arrive « toutes les X minutes », X = l'heure de Cerbère : garde le même écart entre les super ennemis" },
            "BOSSES.meduse.health": { valeur: 160, unite: "PV", texte: "Vie (× la vie qui monte avec le temps, à son arrivée)" },
            "BOSSES.meduse.size": { valeur: 42, unite: "px", texte: "Taille" },
            "BOSSES.meduse.speed": { valeur: 50, unite: "px/s", texte: "Vitesse" },
            "BOSSES.meduse.gold": { valeur: 40, unite: "or", texte: "Or gagné en la tuant" },
            "BOSSES.meduse.xp": { valeur: 40, unite: "XP", texte: "XP gagnée en la tuant" },
            "MEDUSA_GAZE_INTERVAL": { valeur: 6, unite: "s", texte: "Temps entre deux regards (une planète changée en pierre)" },
            "MEDUSA_FIRST_GAZE": { valeur: 2.5, unite: "s", texte: "1er regard, X secondes après son arrivée à l'écran" }
        },
        "Typhon": {
            "BOSSES.typhon.time": { valeur: 1200, unite: "s", texte: "Arrive à X secondes de jeu", texteDuJeu: "le tutoriel dit qu'un super ennemi arrive « toutes les X minutes », X = l'heure de Cerbère : garde le même écart entre les super ennemis" },
            "BOSSES.typhon.health": { valeur: 260, unite: "PV", texte: "Vie (× la vie qui monte avec le temps, à son arrivée)" },
            "BOSSES.typhon.size": { valeur: 46, unite: "px", texte: "Taille" },
            "BOSSES.typhon.speed": { valeur: 50, unite: "px/s", texte: "Vitesse" },
            "BOSSES.typhon.gold": { valeur: 60, unite: "or", texte: "Or gagné en le tuant" },
            "BOSSES.typhon.xp": { valeur: 60, unite: "XP", texte: "XP gagnée en le tuant" }
        },
        "Chimère": {
            "BOSSES.chimere.time": { valeur: 1500, unite: "s", texte: "Arrive à X secondes de jeu", texteDuJeu: "le tutoriel dit qu'un super ennemi arrive « toutes les X minutes », X = l'heure de Cerbère : garde le même écart entre les super ennemis" },
            "BOSSES.chimere.health": { valeur: 400, unite: "PV", texte: "Vie (× la vie qui monte avec le temps, à son arrivée)" },
            "BOSSES.chimere.size": { valeur: 50, unite: "px", texte: "Taille" },
            "BOSSES.chimere.speed": { valeur: 45, unite: "px/s", texte: "Vitesse" },
            "BOSSES.chimere.gold": { valeur: 90, unite: "or", texte: "Or gagné en la tuant" },
            "BOSSES.chimere.xp": { valeur: 90, unite: "XP", texte: "XP gagnée en la tuant" }
        },
        "Charybde": {
            "BOSSES.charybde.time": { valeur: 1800, unite: "s", texte: "Arrive à X secondes de jeu", texteDuJeu: "le tutoriel dit qu'un super ennemi arrive « toutes les X minutes », X = l'heure de Cerbère : garde le même écart entre les super ennemis" },
            "BOSSES.charybde.health": { valeur: 600, unite: "PV", texte: "Vie (× la vie qui monte avec le temps, à son arrivée)" },
            "BOSSES.charybde.size": { valeur: 54, unite: "px", texte: "Taille" },
            "BOSSES.charybde.speed": { valeur: 45, unite: "px/s", texte: "Vitesse" },
            "BOSSES.charybde.gold": { valeur: 130, unite: "or", texte: "Or gagné en la tuant" },
            "BOSSES.charybde.xp": { valeur: 130, unite: "XP", texte: "XP gagnée en la tuant" }
        },
        "Python": {
            "BOSSES.python.time": { valeur: 2100, unite: "s", texte: "Arrive à X secondes de jeu", texteDuJeu: "le tutoriel dit qu'un super ennemi arrive « toutes les X minutes », X = l'heure de Cerbère : garde le même écart entre les super ennemis" },
            "BOSSES.python.health": { valeur: 850, unite: "PV", texte: "Vie (× la vie qui monte avec le temps, à son arrivée)" },
            "BOSSES.python.size": { valeur: 58, unite: "px", texte: "Taille" },
            "BOSSES.python.speed": { valeur: 40, unite: "px/s", texte: "Vitesse" },
            "BOSSES.python.gold": { valeur: 180, unite: "or", texte: "Or gagné en le tuant" },
            "BOSSES.python.xp": { valeur: 180, unite: "XP", texte: "XP gagnée en le tuant" }
        },
        "Cronos": {
            "BOSSES.cronos.time": { valeur: 2400, unite: "s", texte: "Arrive à X secondes de jeu", texteDuJeu: "le tutoriel dit qu'un super ennemi arrive « toutes les X minutes », X = l'heure de Cerbère : garde le même écart entre les super ennemis" },
            "BOSSES.cronos.health": { valeur: 1200, unite: "PV", texte: "Vie (× la vie qui monte avec le temps, à son arrivée)" },
            "BOSSES.cronos.size": { valeur: 64, unite: "px", texte: "Taille" },
            "BOSSES.cronos.speed": { valeur: 40, unite: "px/s", texte: "Vitesse" },
            "BOSSES.cronos.gold": { valeur: 260, unite: "or", texte: "Or gagné en le tuant" },
            "BOSSES.cronos.xp": { valeur: 260, unite: "XP", texte: "XP gagnée en le tuant" },
            "CRONOS_SLOW_INTERVAL": { valeur: 10, unite: "s", texte: "Temps entre deux ralentis du temps" },
            "CRONOS_FIRST_SLOW": { valeur: 3, unite: "s", texte: "1er ralenti, X secondes après son arrivée à l'écran" },
            "CRONOS_SLOW_DURATION": { valeur: 4, unite: "s", texte: "Durée d'un ralenti" },
            "CRONOS_SLOW_FACTOR": { valeur: 0.35, unite: "%", texte: "Pendant un ralenti, toi, tes planètes et tes balles allez à X % de votre vitesse" }
        }
    },
    "Shop": {
        "Cadence de tir": {
            "SHOP_ITEMS.attackSpeed.value": { valeur: 0.1, unite: "%", texte: "Vitesse d'attaque en plus, par niveau" },
            "SHOP_ITEMS.attackSpeed.baseCost": { valeur: 10, unite: "or", texte: "Prix du 1er niveau" },
            "SHOP_ITEMS.attackSpeed.costGrowth": { valeur: 1.5, unite: "×", texte: "Le prix est multiplié par ce nombre à chaque niveau" },
            "SHOP_ITEMS.attackSpeed.maxLevel": { valeur: Infinity, unite: "", texte: "Niveau maximum", infini: true }
        },
        "Portée": {
            "SHOP_ITEMS.range.value": { valeur: 25, unite: "px", texte: "Portée en plus, par niveau" },
            "SHOP_ITEMS.range.baseCost": { valeur: 10, unite: "or", texte: "Prix du 1er niveau" },
            "SHOP_ITEMS.range.costGrowth": { valeur: 1.5, unite: "×", texte: "Le prix est multiplié par ce nombre à chaque niveau" },
            "SHOP_ITEMS.range.maxLevel": { valeur: Infinity, unite: "", texte: "Niveau maximum", infini: true }
        },
        "Balle supplémentaire": {
            "SHOP_ITEMS.bulletCount.value": { valeur: 1, unite: "", texte: "Balles par tir en plus, par niveau" },
            "SHOP_ITEMS.bulletCount.baseCost": { valeur: 60, unite: "or", texte: "Prix du 1er niveau" },
            "SHOP_ITEMS.bulletCount.costGrowth": { valeur: 2.5, unite: "×", texte: "Le prix est multiplié par ce nombre à chaque niveau" },
            "SHOP_ITEMS.bulletCount.maxLevel": { valeur: 3, unite: "", texte: "Niveau maximum", infini: true }
        },
        "Vie max": {
            "SHOP_ITEMS.maxHealth.value": { valeur: 2, unite: "PV", texte: "Points de vie max en plus, par niveau" },
            "SHOP_ITEMS.maxHealth.baseCost": { valeur: 8, unite: "or", texte: "Prix du 1er niveau" },
            "SHOP_ITEMS.maxHealth.costGrowth": { valeur: 1.5, unite: "×", texte: "Le prix est multiplié par ce nombre à chaque niveau" },
            "SHOP_ITEMS.maxHealth.maxLevel": { valeur: Infinity, unite: "", texte: "Niveau maximum", infini: true }
        },
        "Dégâts": {
            "SHOP_ITEMS.damage.value": { valeur: 1, unite: "", texte: "Dégâts par balle en plus, par niveau" },
            "SHOP_ITEMS.damage.baseCost": { valeur: 15, unite: "or", texte: "Prix du 1er niveau" },
            "SHOP_ITEMS.damage.costGrowth": { valeur: 1.6, unite: "×", texte: "Le prix est multiplié par ce nombre à chaque niveau" },
            "SHOP_ITEMS.damage.maxLevel": { valeur: Infinity, unite: "", texte: "Niveau maximum", infini: true }
        },
        "Régénération": {
            "SHOP_ITEMS.regen.value": { valeur: 0.05, unite: "PV/s", texte: "Points de vie regagnés par seconde en plus, par niveau" },
            "SHOP_ITEMS.regen.baseCost": { valeur: 12, unite: "or", texte: "Prix du 1er niveau" },
            "SHOP_ITEMS.regen.costGrowth": { valeur: 1.6, unite: "×", texte: "Le prix est multiplié par ce nombre à chaque niveau" },
            "SHOP_ITEMS.regen.maxLevel": { valeur: Infinity, unite: "", texte: "Niveau maximum", infini: true }
        },
        "Esquive": {
            "SHOP_ITEMS.dodge.value": { valeur: 5, unite: "points", texte: "Points d'esquive en plus, par niveau (chance d'esquiver = x / (x + 1), avec x = les points ÷ 100)" },
            "SHOP_ITEMS.dodge.baseCost": { valeur: 25, unite: "or", texte: "Prix du 1er niveau" },
            "SHOP_ITEMS.dodge.costGrowth": { valeur: 1.6, unite: "×", texte: "Le prix est multiplié par ce nombre à chaque niveau" },
            "SHOP_ITEMS.dodge.maxLevel": { valeur: Infinity, unite: "", texte: "Niveau maximum", infini: true }
        },
        "Chance de critique": {
            "SHOP_ITEMS.critChance.value": { valeur: 0.02, unite: "%", texte: "Chance de coup critique en plus, par niveau" },
            "SHOP_ITEMS.critChance.baseCost": { valeur: 20, unite: "or", texte: "Prix du 1er niveau" },
            "SHOP_ITEMS.critChance.costGrowth": { valeur: 1.6, unite: "×", texte: "Le prix est multiplié par ce nombre à chaque niveau" },
            "SHOP_ITEMS.critChance.maxLevel": { valeur: 10, unite: "", texte: "Niveau maximum", infini: true }
        },
        "Dégâts critiques": {
            "SHOP_ITEMS.critDamage.value": { valeur: 0.2, unite: "%", texte: "Dégâts critiques en plus, par niveau" },
            "SHOP_ITEMS.critDamage.baseCost": { valeur: 20, unite: "or", texte: "Prix du 1er niveau" },
            "SHOP_ITEMS.critDamage.costGrowth": { valeur: 1.6, unite: "×", texte: "Le prix est multiplié par ce nombre à chaque niveau" },
            "SHOP_ITEMS.critDamage.maxLevel": { valeur: Infinity, unite: "", texte: "Niveau maximum", infini: true }
        },
        "Vitesse des balles": {
            "SHOP_ITEMS.bulletSpeed.value": { valeur: 0.15, unite: "%", texte: "Vitesse des balles en plus, par niveau" },
            "SHOP_ITEMS.bulletSpeed.baseCost": { valeur: 8, unite: "or", texte: "Prix du 1er niveau" },
            "SHOP_ITEMS.bulletSpeed.costGrowth": { valeur: 1.4, unite: "×", texte: "Le prix est multiplié par ce nombre à chaque niveau" },
            "SHOP_ITEMS.bulletSpeed.maxLevel": { valeur: 6, unite: "", texte: "Niveau maximum", infini: true }
        },
        "Accélérer le temps": {
            "SHOP_ITEMS.speed.baseCost": { valeur: 80, unite: "or", texte: "Prix du 1er niveau (vitesse x4 ; x2 est offerte par le tutoriel)" },
            "SHOP_ITEMS.speed.costGrowth": { valeur: 4, unite: "×", texte: "Le prix est multiplié par ce nombre à chaque niveau" }
        },
        "Sauter dans le temps": {
            "SHOP_ITEMS.skip.baseCost": { valeur: 45, unite: "or", texte: "Prix du 1er niveau (le 2e saut ; le 1er est offert par le tutoriel)" },
            "SHOP_ITEMS.skip.costGrowth": { valeur: 3, unite: "×", texte: "Le prix est multiplié par ce nombre à chaque niveau" }
        },
        "Liens d'orbite": {
            "SHOP_ITEMS.links.baseCost": { valeur: 30, unite: "or", texte: "Prix du 1er niveau (le lien « Droite »)" },
            "SHOP_ITEMS.links.costGrowth": { valeur: 2.5, unite: "×", texte: "Le prix est multiplié par ce nombre à chaque niveau" }
        },
        "Nouvelle divinité": {
            "SHOP_ITEMS.god.baseCost": { valeur: 20, unite: "or", texte: "Prix du 1er dieu (acheté à la fin de la 1re partie, pendant le tutoriel)" },
            "SHOP_ITEMS.god.costGrowth": { valeur: 10, unite: "×", texte: "Chaque dieu coûte X fois plus cher que le précédent (le 2e : 20 x 10 = 200 or)" }
        }
    },
    "Compétences": {
        "Prix en XP": {
            "SKILL_COST_BASE": { valeur: 5, unite: "XP", texte: "Prix de la compétence de départ (et prix de base des petites compétences)" },
            "SKILL_COST_PER_STEP": { valeur: 4, unite: "XP", texte: "Prix en plus, pour une petite compétence, par pas qui la sépare du départ" },
            "NOTABLE_COST_MULTIPLIER": { valeur: 1.5, unite: "×", texte: "Une notable coûte X fois plus qu'une petite compétence au même endroit" },
            "KEYSTONE_COST": { valeur: 60, unite: "XP", texte: "Prix d'une keystone (+ 2 XP par pas depuis le départ)" },
            "GRAND_COST": { valeur: 150, unite: "XP", texte: "Prix de la grande keystone" },
            "SKILL_TIER_GROWTH": { valeur: 1.5, unite: "×", texte: "Chaque dieu a des compétences X fois plus chères que le dieu d'avant" }
        },
        "Éveil des dieux": {
            "AWAKENING_DAMAGE_PER_LEVEL": { valeur: 0.05, unite: "%", texte: "Dégâts en plus pour la planète, par niveau d'Éveil" },
            "AWAKENING_BASE_COST": { valeur: 100, unite: "XP", texte: "Prix du 1er niveau d'Éveil du 1er dieu (× la hausse des compétences pour chaque dieu suivant)" },
            "AWAKENING_COST_GROWTH": { valeur: 1.25, unite: "×", texte: "Le prix est multiplié par ce nombre à chaque niveau d'Éveil" }
        }
    },
    "Compétences des dieux": {
        "Héphaïstos": {
            "SKILLS.Héphaïstos.Dactyle.damage": { valeur: 0.5, unite: "", texte: "Dactyle (petite compétence) : « +X dégât par balle »" },
            "SKILLS.Héphaïstos.Telchine.bulletSize": { valeur: 0.08, unite: "%", texte: "Telchine (petite compétence) : « Balles X% plus grosses »" },
            "SKILLS.Héphaïstos.Cyclope.critDamage": { valeur: 0.1, unite: "%", texte: "Cyclope (petite compétence) : « +X% de dégâts critiques »" },
            "SKILLS.Héphaïstos.Lemnos.damageMultiplier": { valeur: 0.15, unite: "%", texte: "Lemnos (au bout d'une voie) : « +X% de dégâts »" },
            "SKILLS.Héphaïstos.Cacus.fireTrail": { valeur: 0.4, unite: "%", texte: "Cacus (au bout d'une voie) : « La traînée de feu brûle plus fort : +X% des dégâts de la balle par seconde »" },
            "SKILLS.Héphaïstos.Phlégéthon.fireTrail": { valeur: 0.4, unite: "%", texte: "Phlégéthon (au bout d'une voie) : « Traînée de feu : les balles d'Héphaïstos laissent derrière elles une traînée de feu ; les ennemis qui la touchent brûlent (X% des dégâts de la balle par seconde) »" },
            "SKILLS.Héphaïstos.Pyrois.fireTrailDuration": { valeur: 0.6, unite: "s", texte: "Pyrois (au bout d'une voie) : « La traînée de feu dure X s de plus »" },
            "SKILLS.Héphaïstos.Aethon.fireTrail": { valeur: 0.4, unite: "%", texte: "Aethon (au bout d'une voie) : « La traînée de feu brûle plus fort : +X% des dégâts de la balle par seconde »" },
            "SKILLS.Héphaïstos.Pyriphlégéthon.fireTrailWidth": { valeur: 1, unite: "%", texte: "Pyriphlégéthon (au bout d'une voie) : « Brasier : la traînée de feu est X fois plus large et dure … s de plus » (100 % = 2 fois)" },
            "SKILLS.Héphaïstos.Pyriphlégéthon.fireTrailDuration": { valeur: 1, unite: "s", texte: "Pyriphlégéthon (au bout d'une voie) : « Brasier : la traînée de feu est … fois plus large et dure X s de plus »" },
            "SKILLS.Héphaïstos.Hestia.damage": { valeur: 1, unite: "", texte: "Hestia (départ) : « +X dégât par balle »" },
            "SKILLS.Héphaïstos.Prométhée.critChance": { valeur: 0.03, unite: "%", texte: "Prométhée (notable) : « +X% de chance de coup critique »" },
            "SKILLS.Héphaïstos.Kédalion.critDamage": { valeur: 0.25, unite: "%", texte: "Kédalion (notable) : « +X% de dégâts critiques »" },
            "SKILLS.Héphaïstos.Stéropès.bulletSize": { valeur: 0.2, unite: "%", texte: "Stéropès (notable) : « Balles X% plus grosses »" },
            "SKILLS.Héphaïstos.Argès.damage": { valeur: 2, unite: "", texte: "Argès (notable) : « +X dégâts par balle »" },
            "SKILLS.Héphaïstos.Aglaé.pierce": { valeur: 1, unite: "", texte: "Aglaé (notable) : « Les balles traversent X ennemi de plus »" },
            "SKILLS.Héphaïstos.Talos.damageMultiplier": { valeur: 0.15, unite: "%", texte: "Talos (notable) : « +X% de dégâts »" },
            "SKILLS.Héphaïstos.Kratos.damage": { valeur: 1, unite: "", texte: "Kratos (notable) : « +X dégât par balle »" },
            "SKILLS.Héphaïstos.Bia.pierce": { valeur: 1, unite: "", texte: "Bia (notable) : « Les balles traversent X ennemi de plus »" },
            "SKILLS.Héphaïstos.Brontès.damageMultiplier": { valeur: 1, unite: "%", texte: "Brontès (keystone) : « Marteau : +X% de dégâts, mais …% de vitesse d'attaque en moins »" },
            "SKILLS.Héphaïstos.Brontès.attackSpeed": { valeur: -0.35, unite: "%", texte: "Brontès (keystone) : « Marteau : +…% de dégâts, mais X% de vitesse d'attaque en moins » (négatif = en moins)", min: -1 },
            "SKILLS.Héphaïstos.Cabires.bulletSize": { valeur: 1, unite: "%", texte: "Cabires (keystone) : « Enclume : balles X fois plus grosses, mais …% plus lentes » (100 % = 2 fois)" },
            "SKILLS.Héphaïstos.Cabires.bulletSpeed": { valeur: -0.3, unite: "%", texte: "Cabires (keystone) : « Enclume : balles … fois plus grosses, mais X% plus lentes » (négatif = en moins)", min: -1 },
            "SKILLS.Héphaïstos.Hécate.pierce": { valeur: 999, unite: "", texte: "Hécate (keystone) : « Coulée de lave : les balles traversent TOUS les ennemis, jusqu'au bord de l'écran » (pas écrit dans la description)" },
            "SKILLS.Héphaïstos.Etna.damageMultiplier": { valeur: 1.5, unite: "%", texte: "Etna (grande keystone) : « GRANDE KEYSTONE : +X% de dégâts et balles …% plus grosses, mais …% de vitesse d'attaque en moins »" },
            "SKILLS.Héphaïstos.Etna.bulletSize": { valeur: 0.5, unite: "%", texte: "Etna (grande keystone) : « GRANDE KEYSTONE : +…% de dégâts et balles X% plus grosses, mais …% de vitesse d'attaque en moins »" },
            "SKILLS.Héphaïstos.Etna.attackSpeed": { valeur: -0.3, unite: "%", texte: "Etna (grande keystone) : « GRANDE KEYSTONE : +…% de dégâts et balles …% plus grosses, mais X% de vitesse d'attaque en moins » (négatif = en moins)", min: -1 }
        },
        "Poséidon": {
            "SKILLS.Poséidon.Néréide.maxHealth": { valeur: 1, unite: "PV", texte: "Néréide (petite compétence) : « +X PV max »" },
            "SKILLS.Poséidon.Océanide.regen": { valeur: 0.02, unite: "PV/s", texte: "Océanide (petite compétence) : « +X PV régénérés par seconde »" },
            "SKILLS.Poséidon.Naïade.fragility": { valeur: 0.02, unite: "%", texte: "Naïade (petite compétence) : « Ennemis frêles : +X% de dégâts subis »" },
            "SKILLS.Poséidon.Amymone.range": { valeur: 40, unite: "px", texte: "Amymone (au bout d'une voie) : « +X de portée (la vague va aussi plus loin) »" },
            "SKILLS.Poséidon.Pontos.fragility": { valeur: 0.05, unite: "%", texte: "Pontos (au bout d'une voie) : « Ennemis frêles : +X% de dégâts subis »" },
            "SKILLS.Poséidon.Eurybia.cooldownReduction": { valeur: 15, unite: "", texte: "Eurybia (au bout d'une voie) : « La vague : +X de réduction de recharge »" },
            "SKILLS.Poséidon.Cymo.range": { valeur: 20, unite: "px", texte: "Cymo (au bout d'une voie) : « +X de portée »" },
            "SKILLS.Poséidon.Cymopolée.range": { valeur: 60, unite: "px", texte: "Cymopolée (au bout d'une voie) : « Ressac : +X de portée (la vague va aussi plus loin) »" },
            "SKILLS.Poséidon.Rhodé.range": { valeur: 30, unite: "px", texte: "Rhodé (au bout d'une voie) : « +X de portée »" },
            "SKILLS.Poséidon.Benthésicymé.range": { valeur: 80, unite: "px", texte: "Benthésicymé (au bout d'une voie) : « Houle : +X de portée (la vague va aussi plus loin) »" },
            "SKILLS.Poséidon.Thétis.tideWave": { valeur: 60, unite: "", texte: "Thétis (départ) : « Raz-de-marée : toutes les … s, une vague part de Poséidon jusqu'à sa portée, repousse les ennemis, les ralentit et les rend frêles : +…% de dégâts subis pendant … s » (pas écrit dans la description)" },
            "SKILLS.Poséidon.Thétis.fragility": { valeur: 0.35, unite: "%", texte: "Thétis (départ) : « Raz-de-marée : toutes les … s, une vague part de Poséidon jusqu'à sa portée, repousse les ennemis, les ralentit et les rend frêles : +X% de dégâts subis pendant … s »" },
            "SKILLS.Poséidon.Doris.regen": { valeur: 0.05, unite: "PV/s", texte: "Doris (notable) : « +X PV régénérés par seconde »" },
            "SKILLS.Poséidon.Galatée.range": { valeur: 40, unite: "px", texte: "Galatée (notable) : « +X de portée (la vague va aussi plus loin) »" },
            "SKILLS.Poséidon.Protée.dodge": { valeur: 10, unite: "", texte: "Protée (notable) : « +X points d'esquive »" },
            "SKILLS.Poséidon.Phorcys.shield": { valeur: 1, unite: "", texte: "Phorcys (notable) : « Bouclier : bloque un coup, se recharge en … s » (pas écrit dans la description)" },
            "SKILLS.Poséidon.Glaucos.fragility": { valeur: 0.05, unite: "%", texte: "Glaucos (notable) : « Ennemis frêles : +X% de dégâts subis »" },
            "SKILLS.Poséidon.Leucothée.cooldownReduction": { valeur: 15, unite: "", texte: "Leucothée (notable) : « La vague : +X de réduction de recharge »" },
            "SKILLS.Poséidon.Palémon.tideWave": { valeur: 30, unite: "", texte: "Palémon (notable) : « +X de recul de la vague »" },
            "SKILLS.Poséidon.Nérée.maxHealth": { valeur: 3, unite: "PV", texte: "Nérée (notable) : « +X PV max »" },
            "SKILLS.Poséidon.Amphitrite.tideShield": { valeur: 2, unite: "", texte: "Amphitrite (keystone) : « Bouclier des marées : chaque vague te rend invincible pendant X s »" },
            "SKILLS.Poséidon.Céto.fragility": { valeur: 0.15, unite: "%", texte: "Céto (keystone) : « Ennemis frêles : +X% de dégâts subis »" },
            "SKILLS.Poséidon.Triton.cooldownReduction": { valeur: 40, unite: "", texte: "Triton (keystone) : « La vague : +X de réduction de recharge, et +… de portée »" },
            "SKILLS.Poséidon.Triton.range": { valeur: 80, unite: "px", texte: "Triton (keystone) : « La vague : +… de réduction de recharge, et +X de portée »" },
            "SKILLS.Poséidon.Océanos.fragility": { valeur: 0.25, unite: "%", texte: "Océanos (grande keystone) : « GRANDE KEYSTONE : ennemis frêles +X% de dégâts subis, et bouclier des marées +… s »" },
            "SKILLS.Poséidon.Océanos.tideShield": { valeur: 1, unite: "", texte: "Océanos (grande keystone) : « GRANDE KEYSTONE : ennemis frêles +…% de dégâts subis, et bouclier des marées +X s »" }
        },
        "Déméter": {
            "SKILLS.Déméter.Dryade.lifeOnKill": { valeur: 0.05, unite: "PV", texte: "Dryade (petite compétence) : « +X PV regagné par ennemi tué »" },
            "SKILLS.Déméter.Hamadryade.xpMultiplier": { valeur: 0.05, unite: "%", texte: "Hamadryade (petite compétence) : « +X% d'XP gagnée »" },
            "SKILLS.Déméter.Mélie.bloomRadius": { valeur: 8, unite: "", texte: "Mélie (petite compétence) : « +X de rayon du rayon de vie »" },
            "SKILLS.Déméter.Despina.vineCount": { valeur: 1, unite: "", texte: "Despina (au bout d'une voie) : « +X liane à chaque rayon de vie »" },
            "SKILLS.Déméter.Métanire.bloomHeal": { valeur: 0.5, unite: "PV", texte: "Métanire (au bout d'une voie) : « Le rayon de vie soigne X PV de plus »" },
            "SKILLS.Déméter.Dryope.bloomRadius": { valeur: 25, unite: "", texte: "Dryope (au bout d'une voie) : « +X de rayon du rayon de vie »" },
            "SKILLS.Déméter.Perséphone.bloomHeal": { valeur: 1, unite: "PV", texte: "Perséphone (départ) : « Rayon de vie : toutes les … s, Déméter te soigne de X PV et affaiblit les ennemis autour d'elle (+…% de dégâts subis pendant … s) »" },
            "SKILLS.Déméter.Perséphone.bloomRadius": { valeur: 120, unite: "", texte: "Perséphone (départ) : « Rayon de vie : toutes les … s, Déméter te soigne de … PV et affaiblit les ennemis autour d'elle (+…% de dégâts subis pendant … s) » (pas écrit dans la description)" },
            "SKILLS.Déméter.Thallo.xpMultiplier": { valeur: 0.1, unite: "%", texte: "Thallo (notable) : « +X% d'XP gagnée »" },
            "SKILLS.Déméter.Auxo.bloomHeal": { valeur: 0.5, unite: "PV", texte: "Auxo (notable) : « Le rayon de vie soigne X PV de plus »" },
            "SKILLS.Déméter.Chloris.regen": { valeur: 0.05, unite: "PV/s", texte: "Chloris (notable) : « +X PV régénérés par seconde »" },
            "SKILLS.Déméter.Aristée.lifeOnKill": { valeur: 0.2, unite: "PV", texte: "Aristée (notable) : « +X PV regagnés par ennemi tué »" },
            "SKILLS.Déméter.Iasion.bloomRadius": { valeur: 25, unite: "", texte: "Iasion (notable) : « +X de rayon du rayon de vie »" },
            "SKILLS.Déméter.Eubouleus.vineCount": { valeur: 1, unite: "", texte: "Eubouleus (notable) : « +X liane à chaque rayon de vie »" },
            "SKILLS.Déméter.Carpo.cooldownReduction": { valeur: 15, unite: "", texte: "Carpo (notable) : « Le rayon de vie : +X de réduction de recharge »" },
            "SKILLS.Déméter.Anthée.vineDuration": { valeur: 1, unite: "s", texte: "Anthée (notable) : « Les lianes immobilisent X s de plus »" },
            "SKILLS.Déméter.Karpos.vineCount": { valeur: 3, unite: "", texte: "Karpos (keystone) : « Lianes : chaque rayon de vie fait pousser X lianes sous des ennemis, qui les immobilisent … s (pas les super ennemis) »" },
            "SKILLS.Déméter.Triptolème.bloomHeal": { valeur: 2, unite: "PV", texte: "Triptolème (keystone) : « Le rayon de vie soigne X PV de plus, et +… de réduction de recharge »" },
            "SKILLS.Déméter.Triptolème.cooldownReduction": { valeur: 30, unite: "", texte: "Triptolème (keystone) : « Le rayon de vie soigne … PV de plus, et +X de réduction de recharge »" },
            "SKILLS.Déméter.Pan.bloomRadius": { valeur: 60, unite: "", texte: "Pan (keystone) : « +X de rayon du rayon de vie et +… lianes »" },
            "SKILLS.Déméter.Pan.vineCount": { valeur: 2, unite: "", texte: "Pan (keystone) : « +… de rayon du rayon de vie et +X lianes »" },
            "SKILLS.Déméter.Gaïa.vineCount": { valeur: 3, unite: "", texte: "Gaïa (grande keystone) : « GRANDE KEYSTONE : +X lianes, qui immobilisent … s de plus, et +… de réduction de recharge du rayon de vie (2 fois plus souvent) »" },
            "SKILLS.Déméter.Gaïa.vineDuration": { valeur: 2, unite: "s", texte: "Gaïa (grande keystone) : « GRANDE KEYSTONE : +… lianes, qui immobilisent X s de plus, et +… de réduction de recharge du rayon de vie (2 fois plus souvent) »" },
            "SKILLS.Déméter.Gaïa.cooldownReduction": { valeur: 100, unite: "", texte: "Gaïa (grande keystone) : « GRANDE KEYSTONE : +… lianes, qui immobilisent … s de plus, et +X de réduction de recharge du rayon de vie (2 fois plus souvent) »" }
        },
        "Éole": {
            "SKILLS.Éole.Aura.range": { valeur: 15, unite: "px", texte: "Aura (petite compétence) : « +X de portée »" },
            "SKILLS.Éole.Héliade.bulletSpeed": { valeur: 0.1, unite: "%", texte: "Héliade (petite compétence) : « +X% de vitesse des balles »" },
            "SKILLS.Éole.Anémoï.attackSpeed": { valeur: 0.06, unite: "%", texte: "Anémoï (petite compétence) : « +X% de vitesse d'attaque »" },
            "SKILLS.Éole.Kaikias.attackSpeed": { valeur: 0.15, unite: "%", texte: "Kaikias (au bout d'une voie) : « +X% de vitesse d'attaque »" },
            "SKILLS.Éole.Skiron.bulletSpeed": { valeur: 0.2, unite: "%", texte: "Skiron (au bout d'une voie) : « +X% de vitesse des balles »" },
            "SKILLS.Éole.Zéphyr.attackSpeed": { valeur: 0.1, unite: "%", texte: "Zéphyr (départ) : « +X% de vitesse d'attaque »" },
            "SKILLS.Éole.Éos.range": { valeur: 30, unite: "px", texte: "Éos (notable) : « +X de portée »" },
            "SKILLS.Éole.Héméra.attackSpeed": { valeur: 0.2, unite: "%", texte: "Héméra (notable) : « +X% de vitesse d'attaque »" },
            "SKILLS.Éole.Iris.bulletSpeed": { valeur: 0.2, unite: "%", texte: "Iris (notable) : « +X% de vitesse des balles »" },
            "SKILLS.Éole.Borée.attackSpeed": { valeur: 0.15, unite: "%", texte: "Borée (notable) : « +X% de vitesse d'attaque »" },
            "SKILLS.Éole.Notos.damageVs": { valeur: 1, unite: "", texte: "Notos (notable) : « +X dégât contre les plantes »" },
            "SKILLS.Éole.Euros.damageVs": { valeur: 2, unite: "", texte: "Euros (notable) : « +X dégâts contre les plantes »" },
            "SKILLS.Éole.Phosphoros.bulletSpeed": { valeur: 0.3, unite: "%", texte: "Phosphoros (notable) : « +X% de vitesse des balles »" },
            "SKILLS.Éole.Hespéros.attackSpeed": { valeur: 0.1, unite: "%", texte: "Hespéros (notable) : « +X% de vitesse d'attaque »" },
            "SKILLS.Éole.Séléné.attackSpeed": { valeur: 1, unite: "%", texte: "Séléné (keystone) : « Rafale : +X% de vitesse d'attaque, mais …% de dégâts en moins »" },
            "SKILLS.Éole.Séléné.damageMultiplier": { valeur: -0.3, unite: "%", texte: "Séléné (keystone) : « Rafale : +…% de vitesse d'attaque, mais X% de dégâts en moins » (négatif = en moins)", min: -1 },
            "SKILLS.Éole.Phaéton.bulletCount": { valeur: 1, unite: "", texte: "Phaéton (keystone) : « +X balle par tir »" },
            "SKILLS.Éole.Astraïos.attackSpeed": { valeur: 0.6, unite: "%", texte: "Astraïos (keystone) : « Ouragan : +X% de vitesse d'attaque, mais balles …% plus petites »" },
            "SKILLS.Éole.Astraïos.bulletSize": { valeur: -0.4, unite: "%", texte: "Astraïos (keystone) : « Ouragan : +…% de vitesse d'attaque, mais balles X% plus petites » (négatif = en moins)", min: -1 },
            "SKILLS.Éole.Thyella.attackSpeed": { valeur: 1.5, unite: "%", texte: "Thyella (grande keystone) : « GRANDE KEYSTONE : +X% de vitesse d'attaque et +… balle par tir, mais …% de dégâts en moins »" },
            "SKILLS.Éole.Thyella.bulletCount": { valeur: 1, unite: "", texte: "Thyella (grande keystone) : « GRANDE KEYSTONE : +…% de vitesse d'attaque et +X balle par tir, mais …% de dégâts en moins »" },
            "SKILLS.Éole.Thyella.damageMultiplier": { valeur: -0.3, unite: "%", texte: "Thyella (grande keystone) : « GRANDE KEYSTONE : +…% de vitesse d'attaque et +… balle par tir, mais X% de dégâts en moins » (négatif = en moins)", min: -1 }
        },
        "Apollon": {
            "SKILLS.Apollon.Pléiade.goldMultiplier": { valeur: 0.05, unite: "%", texte: "Pléiade (petite compétence) : « +X% d'or gagné »" },
            "SKILLS.Apollon.Hyade.xpMultiplier": { valeur: 0.05, unite: "%", texte: "Hyade (petite compétence) : « +X% d'XP gagnée »" },
            "SKILLS.Apollon.Titanide.damage": { valeur: 0.5, unite: "", texte: "Titanide (petite compétence) : « +X dégât par balle »" },
            "SKILLS.Apollon.Amalthée.goldMultiplier": { valeur: 0.25, unite: "%", texte: "Amalthée (au bout d'une voie) : « +X% d'or gagné »" },
            "SKILLS.Apollon.Phébé.attackSpeed": { valeur: 0.15, unite: "%", texte: "Phébé (au bout d'une voie) : « +X% de vitesse d'attaque »" },
            "SKILLS.Apollon.Nyx.damage": { valeur: 2, unite: "", texte: "Nyx (au bout d'une voie) : « +X dégâts par balle »" },
            "SKILLS.Apollon.Tyché.goldMultiplier": { valeur: 0.1, unite: "%", texte: "Tyché (départ) : « +X% d'or gagné »" },
            "SKILLS.Apollon.Kairos.goldMultiplier": { valeur: 0.15, unite: "%", texte: "Kairos (notable) : « +X% d'or gagné »" },
            "SKILLS.Apollon.Eutychia.goldMultiplier": { valeur: 0.25, unite: "%", texte: "Eutychia (notable) : « +X% d'or gagné »" },
            "SKILLS.Apollon.Coéos.xpMultiplier": { valeur: 0.1, unite: "%", texte: "Coéos (notable) : « +X% d'XP gagnée »" },
            "SKILLS.Apollon.Mnémosyne.xpMultiplier": { valeur: 0.2, unite: "%", texte: "Mnémosyne (notable) : « +X% d'XP gagnée »" },
            "SKILLS.Apollon.Hypérion.damage": { valeur: 1, unite: "", texte: "Hypérion (notable) : « +X dégât par balle »" },
            "SKILLS.Apollon.Astrée.damageVs": { valeur: 1, unite: "", texte: "Astrée (notable) : « +X dégât contre les ennemis d'air »" },
            "SKILLS.Apollon.Agathodaïmon.goldMultiplier": { valeur: 0.1, unite: "%", texte: "Agathodaïmon (notable) : « +X% d'or gagné »" },
            "SKILLS.Apollon.Théia.damage": { valeur: 1, unite: "", texte: "Théia (notable) : « +X dégât par balle »" },
            "SKILLS.Apollon.Ploutos.goldMultiplier": { valeur: 0.5, unite: "%", texte: "Ploutos (keystone) : « +X% d'or gagné »" },
            "SKILLS.Apollon.Astéria.bulletCount": { valeur: 1, unite: "", texte: "Astéria (keystone) : « +X balle par tir »" },
            "SKILLS.Apollon.Érébos.damage": { valeur: 3, unite: "", texte: "Érébos (keystone) : « +X dégâts par balle »" },
            "SKILLS.Apollon.Chaos.goldMultiplier": { valeur: 1, unite: "%", texte: "Chaos (grande keystone) : « GRANDE KEYSTONE : +X% d'or gagné »" }
        },
        "Artémis": {
            "SKILLS.Artémis.Nymphe.range": { valeur: 10, unite: "px", texte: "Nymphe (petite compétence) : « +X de portée »" },
            "SKILLS.Artémis.Oréade.damage": { valeur: 0.5, unite: "", texte: "Oréade (petite compétence) : « +X dégât par balle »" },
            "SKILLS.Artémis.Pléione.bulletSpeed": { valeur: 0.08, unite: "%", texte: "Pléione (petite compétence) : « +X% de vitesse des balles »" },
            "SKILLS.Artémis.Méléagre.bounce": { valeur: 1, unite: "", texte: "Méléagre (au bout d'une voie) : « Les balles rebondissent sur X ennemi de plus »" },
            "SKILLS.Artémis.Endymion.moonArrow": { valeur: 1, unite: "", texte: "Endymion (au bout d'une voie) : « Flèche de lune : +X fois les dégâts d'une balle »" },
            "SKILLS.Artémis.Léto.moonArrow": { valeur: 3, unite: "", texte: "Léto (départ) : « Flèche de lune : toutes les … s, Artémis tire une grande flèche qui transperce tous les ennemis sur son passage (X fois les dégâts d'une balle) »" },
            "SKILLS.Artémis.Callisto.attackSpeed": { valeur: 0.1, unite: "%", texte: "Callisto (notable) : « +X% de vitesse d'attaque »" },
            "SKILLS.Artémis.Britomartis.damage": { valeur: 1, unite: "", texte: "Britomartis (notable) : « +X dégât par balle »" },
            "SKILLS.Artémis.Aréthuse.moonArrow": { valeur: 1, unite: "", texte: "Aréthuse (notable) : « Flèche de lune : +X fois les dégâts d'une balle »" },
            "SKILLS.Artémis.Opis.bulletSpeed": { valeur: 0.2, unite: "%", texte: "Opis (notable) : « +X% de vitesse des balles »" },
            "SKILLS.Artémis.Cyrène.cooldownReduction": { valeur: 15, unite: "", texte: "Cyrène (notable) : « La flèche de lune : +X de réduction de recharge »" },
            "SKILLS.Artémis.Atalante.attackSpeed": { valeur: 0.15, unite: "%", texte: "Atalante (notable) : « +X% de vitesse d'attaque »" },
            "SKILLS.Artémis.Procris.damage": { valeur: 1, unite: "", texte: "Procris (notable) : « +X dégât par balle »" },
            "SKILLS.Artémis.Taygète.range": { valeur: 30, unite: "px", texte: "Taygète (notable) : « +X de portée »" },
            "SKILLS.Artémis.Orion.bounce": { valeur: 2, unite: "", texte: "Orion (keystone) : « Rebond : les balles d'Artémis rebondissent sur X autres ennemis proches »" },
            "SKILLS.Artémis.Hippolyte.moonArrow": { valeur: 3, unite: "", texte: "Hippolyte (keystone) : « Flèche de lune : +X fois les dégâts d'une balle, et +… de réduction de recharge »" },
            "SKILLS.Artémis.Hippolyte.cooldownReduction": { valeur: 30, unite: "", texte: "Hippolyte (keystone) : « Flèche de lune : +… fois les dégâts d'une balle, et +X de réduction de recharge »" },
            "SKILLS.Artémis.Actéon.bounce": { valeur: 1, unite: "", texte: "Actéon (keystone) : « +X rebond et +…% de vitesse d'attaque »" },
            "SKILLS.Artémis.Actéon.attackSpeed": { valeur: 0.25, unite: "%", texte: "Actéon (keystone) : « +… rebond et +X% de vitesse d'attaque »" },
            "SKILLS.Artémis.Agrotera.cooldownReduction": { valeur: 100, unite: "", texte: "Agrotera (grande keystone) : « GRANDE KEYSTONE : +X de réduction de recharge de la flèche de lune (2 fois plus souvent), et +… fois les dégâts d'une balle »" },
            "SKILLS.Artémis.Agrotera.moonArrow": { valeur: 4, unite: "", texte: "Agrotera (grande keystone) : « GRANDE KEYSTONE : +… de réduction de recharge de la flèche de lune (2 fois plus souvent), et +X fois les dégâts d'une balle »" }
        },
        "Athéna": {
            "SKILLS.Athéna.Nikè.maxHealth": { valeur: 1, unite: "PV", texte: "Nikè (petite compétence) : « +X PV max »" },
            "SKILLS.Athéna.Aglaure.dodge": { valeur: 2, unite: "", texte: "Aglaure (petite compétence) : « +X points d'esquive »" },
            "SKILLS.Athéna.Hersé.xpMultiplier": { valeur: 0.04, unite: "%", texte: "Hersé (petite compétence) : « +X% d'XP gagnée »" },
            "SKILLS.Athéna.Pallas.dodge": { valeur: 8, unite: "", texte: "Pallas (au bout d'une voie) : « +X points d'esquive »" },
            "SKILLS.Athéna.Bellérophon.damage": { valeur: 2, unite: "", texte: "Bellérophon (au bout d'une voie) : « +X dégâts par balle »" },
            "SKILLS.Athéna.Métis.xpMultiplier": { valeur: 0.05, unite: "%", texte: "Métis (départ) : « +X% d'XP gagnée »" },
            "SKILLS.Athéna.Érichthonios.damage": { valeur: 1, unite: "", texte: "Érichthonios (notable) : « +X dégât par balle »" },
            "SKILLS.Athéna.Pandrosos.maxHealth": { valeur: 2, unite: "PV", texte: "Pandrosos (notable) : « +X PV max »" },
            "SKILLS.Athéna.Arachné.attackSpeed": { valeur: 0.1, unite: "%", texte: "Arachné (notable) : « +X% de vitesse d'attaque »" },
            "SKILLS.Athéna.Tritonis.dodge": { valeur: 5, unite: "", texte: "Tritonis (notable) : « +X points d'esquive »" },
            "SKILLS.Athéna.Ergané.damage": { valeur: 1, unite: "", texte: "Ergané (notable) : « +X dégât par balle »" },
            "SKILLS.Athéna.Zélos.attackSpeed": { valeur: 0.1, unite: "%", texte: "Zélos (notable) : « +X% de vitesse d'attaque »" },
            "SKILLS.Athéna.Hygie.regen": { valeur: 0.05, unite: "PV/s", texte: "Hygie (notable) : « +X PV régénérés par seconde »" },
            "SKILLS.Athéna.Aidôs.xpMultiplier": { valeur: 0.1, unite: "%", texte: "Aidôs (notable) : « +X% d'XP gagnée »" },
            "SKILLS.Athéna.Égide.dodge": { valeur: 8, unite: "", texte: "Égide (keystone) : « +X points d'esquive »" },
            "SKILLS.Athéna.Promachos.damage": { valeur: 2, unite: "", texte: "Promachos (keystone) : « +X dégâts par balle »" },
            "SKILLS.Athéna.Glaucopis.range": { valeur: 60, unite: "px", texte: "Glaucopis (keystone) : « +X de portée (les yeux de la chouette) »" },
            "SKILLS.Athéna.Parthénos.xpMultiplier": { valeur: 1, unite: "%", texte: "Parthénos (grande keystone) : « GRANDE KEYSTONE : +X% d'XP gagnée »" }
        },
        "Zeus": {
            "SKILLS.Zeus.Astrapé.damage": { valeur: 0.5, unite: "", texte: "Astrapé (petite compétence) : « +X dégât par balle »" },
            "SKILLS.Zeus.Brontè.attackSpeed": { valeur: 0.05, unite: "%", texte: "Brontè (petite compétence) : « +X% de vitesse d'attaque »" },
            "SKILLS.Zeus.Kéraunos.arcDamage": { valeur: 0.05, unite: "%", texte: "Kéraunos (petite compétence) : « Éclairs : +X% de dégâts »" },
            "SKILLS.Zeus.Salmonée.chainArcs": { valeur: 1, unite: "", texte: "Salmonée (au bout d'une voie) : « +X éclair par balle »" },
            "SKILLS.Zeus.Dodone.attackSpeed": { valeur: 0.2, unite: "%", texte: "Dodone (au bout d'une voie) : « +X% de vitesse d'attaque »" },
            "SKILLS.Zeus.Thémis.chainArcs": { valeur: 1, unite: "", texte: "Thémis (départ) : « Arc électrique : chaque balle de Zeus qui touche envoie un éclair vers un ennemi proche (…% des dégâts), qui devient conducteur » (pas écrit dans la description)" },
            "SKILLS.Zeus.Thémis.arcDamage": { valeur: 0.4, unite: "%", texte: "Thémis (départ) : « Arc électrique : chaque balle de Zeus qui touche envoie un éclair vers un ennemi proche (X% des dégâts), qui devient conducteur »" },
            "SKILLS.Zeus.Dikè.damage": { valeur: 1, unite: "", texte: "Dikè (notable) : « +X dégât par balle »" },
            "SKILLS.Zeus.Eiréné.chainArcs": { valeur: 1, unite: "", texte: "Eiréné (notable) : « +X éclair par balle »" },
            "SKILLS.Zeus.Eunomia.arcRange": { valeur: 40, unite: "", texte: "Eunomia (notable) : « +X de portée des éclairs »" },
            "SKILLS.Zeus.Horkos.arcDamage": { valeur: 0.1, unite: "%", texte: "Horkos (notable) : « Éclairs : +X% de dégâts »" },
            "SKILLS.Zeus.Ganymède.attackSpeed": { valeur: 0.1, unite: "%", texte: "Ganymède (notable) : « +X% de vitesse d'attaque »" },
            "SKILLS.Zeus.Hébé.chainArcs": { valeur: 1, unite: "", texte: "Hébé (notable) : « +X éclair par balle »" },
            "SKILLS.Zeus.Némésis.damage": { valeur: 1, unite: "", texte: "Némésis (notable) : « +X dégât par balle »" },
            "SKILLS.Zeus.Io.arcDamage": { valeur: 0.15, unite: "%", texte: "Io (notable) : « Éclairs : +X% de dégâts »" },
            "SKILLS.Zeus.Aétos.boltDamage": { valeur: 3, unite: "", texte: "Aétos (keystone) : « Foudre : un ennemi conducteur touché par un 2e éclair reçoit la foudre (X fois les dégâts de la balle), qui électrocute les ennemis autour : ils deviennent conducteurs à leur tour »" },
            "SKILLS.Zeus.Ammon.bulletCount": { valeur: 1, unite: "", texte: "Ammon (keystone) : « +X balle par tir »" },
            "SKILLS.Zeus.Olympios.chainArcs": { valeur: 2, unite: "", texte: "Olympios (keystone) : « +X éclairs par balle et +… de portée des éclairs »" },
            "SKILLS.Zeus.Olympios.arcRange": { valeur: 40, unite: "", texte: "Olympios (keystone) : « +… éclairs par balle et +X de portée des éclairs »" },
            "SKILLS.Zeus.Aithér.boltDamage": { valeur: 4, unite: "", texte: "Aithér (grande keystone) : « GRANDE KEYSTONE : la foudre fait +X fois les dégâts de la balle et électrocute …% plus loin »" },
            "SKILLS.Zeus.Aithér.boltRadius": { valeur: 0.5, unite: "%", texte: "Aithér (grande keystone) : « GRANDE KEYSTONE : la foudre fait +… fois les dégâts de la balle et électrocute X% plus loin »" }
        },
        "Arès": {
            "SKILLS.Arès.Phobos.damage": { valeur: 0.5, unite: "", texte: "Phobos (petite compétence) : « +X dégât par balle »" },
            "SKILLS.Arès.Deimos.warCryDuration": { valeur: 0.3, unite: "s", texte: "Deimos (petite compétence) : « Cri de guerre : +X s »" },
            "SKILLS.Arès.Alala.lifeOnKill": { valeur: 0.05, unite: "PV", texte: "Alala (petite compétence) : « +X PV regagné par ennemi tué »" },
            "SKILLS.Arès.Diomède.lifeOnKill": { valeur: 0.2, unite: "PV", texte: "Diomède (au bout d'une voie) : « +X PV regagné par ennemi tué »" },
            "SKILLS.Arès.Ascalaphe.warCryDuration": { valeur: 1, unite: "s", texte: "Ascalaphe (au bout d'une voie) : « Cri de guerre : +X s »" },
            "SKILLS.Arès.Ényo.warCry": { valeur: 1, unite: "", texte: "Ényo (départ) : « Cri de guerre : toutes les … s, toi et toutes les planètes faites +…% de dégâts, +…% de chance de critique et +…% de dégâts critiques pendant … s » (pas écrit dans la description)" },
            "SKILLS.Arès.Éris.damage": { valeur: 1, unite: "", texte: "Éris (notable) : « +X dégât par balle »" },
            "SKILLS.Arès.Kydoimos.attackSpeed": { valeur: 0.1, unite: "%", texte: "Kydoimos (notable) : « +X% de vitesse d'attaque »" },
            "SKILLS.Arès.Makhai.warCryDuration": { valeur: 1, unite: "s", texte: "Makhai (notable) : « Cri de guerre : +X s »" },
            "SKILLS.Arès.Polémos.damage": { valeur: 1, unite: "", texte: "Polémos (notable) : « +X dégât par balle »" },
            "SKILLS.Arès.Penthésilée.lifeOnKill": { valeur: 0.2, unite: "PV", texte: "Penthésilée (notable) : « +X PV regagné par ennemi tué »" },
            "SKILLS.Arès.Otréra.cooldownReduction": { valeur: 15, unite: "", texte: "Otréra (notable) : « Le cri de guerre : +X de réduction de recharge »" },
            "SKILLS.Arès.Antiope.attackSpeed": { valeur: 0.1, unite: "%", texte: "Antiope (notable) : « +X% de vitesse d'attaque »" },
            "SKILLS.Arès.Androktasiai.warCry": { valeur: 0.5, unite: "%", texte: "Androktasiai (notable) : « Cri de guerre X% plus fort »" },
            "SKILLS.Arès.Kyknos.damagePerKill": { valeur: 0.001, unite: "", texte: "Kyknos (keystone) : « Soif de gloire : chaque ennemi tué par Arès lui donne +X dégât par balle, pour toujours »" },
            "SKILLS.Arès.Œnomaos.warCry": { valeur: 1, unite: "%", texte: "Œnomaos (keystone) : « Cri de guerre X fois plus fort » (100 % = 2 fois)" },
            "SKILLS.Arès.Phlégyas.cooldownReduction": { valeur: 30, unite: "", texte: "Phlégyas (keystone) : « Le cri de guerre : +X de réduction de recharge, et dure … s de plus »" },
            "SKILLS.Arès.Phlégyas.warCryDuration": { valeur: 1, unite: "s", texte: "Phlégyas (keystone) : « Le cri de guerre : +… de réduction de recharge, et dure X s de plus »" },
            "SKILLS.Arès.Kères.damagePerKill": { valeur: 0.002, unite: "", texte: "Kères (grande keystone) : « GRANDE KEYSTONE : chaque ennemi tué par Arès lui donne +X dégât de plus, pour toujours, et cri de guerre … fois plus fort »" },
            "SKILLS.Arès.Kères.warCry": { valeur: 1, unite: "%", texte: "Kères (grande keystone) : « GRANDE KEYSTONE : chaque ennemi tué par Arès lui donne +… dégât de plus, pour toujours, et cri de guerre X fois plus fort » (100 % = 2 fois)" }
        },
        "Aphrodite": {
            "SKILLS.Aphrodite.Charis.maxHealth": { valeur: 1, unite: "PV", texte: "Charis (petite compétence) : « +X PV max »" },
            "SKILLS.Aphrodite.Himéros.charmRadius": { valeur: 6, unite: "", texte: "Himéros (petite compétence) : « +X de rayon de charme »" },
            "SKILLS.Aphrodite.Pothos.dodge": { valeur: 2, unite: "", texte: "Pothos (petite compétence) : « +X points d'esquive »" },
            "SKILLS.Aphrodite.Harmonie.charmRadius": { valeur: 20, unite: "", texte: "Harmonie (au bout d'une voie) : « +X de rayon de charme »" },
            "SKILLS.Aphrodite.Énée.charmDuration": { valeur: 0.5, unite: "s", texte: "Énée (au bout d'une voie) : « Charme : +X s »" },
            "SKILLS.Aphrodite.Éros.charmRadius": { valeur: 80, unite: "", texte: "Éros (départ) : « Rayon de charme : toutes les … s, Aphrodite charme les ennemis autour d'elle pendant … s : ils font demi-tour et blessent leurs alliés (pas les super ennemis) » (pas écrit dans la description)" },
            "SKILLS.Aphrodite.Éros.charmDuration": { valeur: 2, unite: "s", texte: "Éros (départ) : « Rayon de charme : toutes les … s, Aphrodite charme les ennemis autour d'elle pendant X s : ils font demi-tour et blessent leurs alliés (pas les super ennemis) »" },
            "SKILLS.Aphrodite.Peitho.charmDuration": { valeur: 0.5, unite: "s", texte: "Peitho (notable) : « Charme : +X s »" },
            "SKILLS.Aphrodite.Antéros.dodge": { valeur: 5, unite: "", texte: "Antéros (notable) : « +X points d'esquive »" },
            "SKILLS.Aphrodite.Adonis.charmRadius": { valeur: 20, unite: "", texte: "Adonis (notable) : « +X de rayon de charme »" },
            "SKILLS.Aphrodite.Psyché.cooldownReduction": { valeur: 15, unite: "", texte: "Psyché (notable) : « Le rayon de charme : +X de réduction de recharge »" },
            "SKILLS.Aphrodite.Hymen.lifeOnKill": { valeur: 0.2, unite: "PV", texte: "Hymen (notable) : « +X PV regagné par ennemi tué »" },
            "SKILLS.Aphrodite.Euphrosyne.maxHealth": { valeur: 3, unite: "PV", texte: "Euphrosyne (notable) : « +X PV max »" },
            "SKILLS.Aphrodite.Hermaphrodite.charmDuration": { valeur: 0.5, unite: "s", texte: "Hermaphrodite (notable) : « Charme : +X s »" },
            "SKILLS.Aphrodite.Rhodos.cooldownReduction": { valeur: 15, unite: "", texte: "Rhodos (notable) : « Le rayon de charme : +X de réduction de recharge »" },
            "SKILLS.Aphrodite.Pandémos.charmRadius": { valeur: 50, unite: "", texte: "Pandémos (keystone) : « Foule : +X de rayon de charme »" },
            "SKILLS.Aphrodite.Ourania.charmPower": { valeur: 1, unite: "%", texte: "Ourania (keystone) : « Les ennemis charmés blessent X fois plus leurs alliés » (100 % = 2 fois)" },
            "SKILLS.Aphrodite.Cythérée.cooldownReduction": { valeur: 40, unite: "", texte: "Cythérée (keystone) : « Le rayon de charme : +X de réduction de recharge »" },
            "SKILLS.Aphrodite.Phanès.charmDuration": { valeur: 1.5, unite: "s", texte: "Phanès (grande keystone) : « GRANDE KEYSTONE : charme +X s, et +… de réduction de recharge du rayon de charme (2 fois plus souvent) »" },
            "SKILLS.Aphrodite.Phanès.cooldownReduction": { valeur: 100, unite: "", texte: "Phanès (grande keystone) : « GRANDE KEYSTONE : charme +… s, et +X de réduction de recharge du rayon de charme (2 fois plus souvent) »" }
        },
        "Hermès": {
            "SKILLS.Hermès.Kéryx.bulletSpeed": { valeur: 0.08, unite: "%", texte: "Kéryx (petite compétence) : « +X% de vitesse des balles »" },
            "SKILLS.Hermès.Hodios.attackSpeed": { valeur: 0.04, unite: "%", texte: "Hodios (petite compétence) : « +X% de vitesse d'attaque »" },
            "SKILLS.Hermès.Agoraios.dodge": { valeur: 2, unite: "", texte: "Agoraios (petite compétence) : « +X points d'esquive »" },
            "SKILLS.Hermès.Angelos.attackSpeed": { valeur: 0.15, unite: "%", texte: "Angelos (au bout d'une voie) : « +X% de vitesse d'attaque »" },
            "SKILLS.Hermès.Dolios.dodge": { valeur: 5, unite: "", texte: "Dolios (au bout d'une voie) : « +X points d'esquive »" },
            "SKILLS.Hermès.Kriophoros.bulletSpeed": { valeur: 0.2, unite: "%", texte: "Kriophoros (au bout d'une voie) : « +X% de vitesse des balles »" },
            "SKILLS.Hermès.Maïa.attackSpeed": { valeur: 0.05, unite: "%", texte: "Maïa (départ) : « +X% de vitesse d'attaque »" },
            "SKILLS.Hermès.Psychopompe.bulletSpeed": { valeur: 0.2, unite: "%", texte: "Psychopompe (notable) : « +X% de vitesse des balles »" },
            "SKILLS.Hermès.Argos.attackSpeed": { valeur: 0.1, unite: "%", texte: "Argos (notable) : « +X% de vitesse d'attaque »" },
            "SKILLS.Hermès.Chioné.dodge": { valeur: 5, unite: "", texte: "Chioné (notable) : « +X points d'esquive »" },
            "SKILLS.Hermès.Autolycos.goldMultiplier": { valeur: 0.1, unite: "%", texte: "Autolycos (notable) : « +X% d'or gagné »" },
            "SKILLS.Hermès.Myrtilos.bulletSpeed": { valeur: 0.2, unite: "%", texte: "Myrtilos (notable) : « +X% de vitesse des balles »" },
            "SKILLS.Hermès.Daphnis.attackSpeed": { valeur: 0.1, unite: "%", texte: "Daphnis (notable) : « +X% de vitesse d'attaque »" },
            "SKILLS.Hermès.Eudoros.dodge": { valeur: 5, unite: "", texte: "Eudoros (notable) : « +X points d'esquive »" },
            "SKILLS.Hermès.Abdère.bulletSpeed": { valeur: 0.15, unite: "%", texte: "Abdère (notable) : « +X% de vitesse des balles »" },
            "SKILLS.Hermès.Talaria.attackSpeed": { valeur: 0.3, unite: "%", texte: "Talaria (keystone) : « +X% de vitesse d'attaque »" },
            "SKILLS.Hermès.Pétase.dodge": { valeur: 10, unite: "", texte: "Pétase (keystone) : « +X points d'esquive »" },
            "SKILLS.Hermès.Caducée.bulletCount": { valeur: 1, unite: "", texte: "Caducée (keystone) : « +X balle par tir »" },
            "SKILLS.Hermès.Aion.attackSpeed": { valeur: 0.5, unite: "%", texte: "Aion (grande keystone) : « GRANDE KEYSTONE : +X% de vitesse d'attaque »" }
        },
        "Hestia": {
            "SKILLS.Hestia.Vestale.regen": { valeur: 0.02, unite: "PV/s", texte: "Vestale (petite compétence) : « +X PV régénérés par seconde »" },
            "SKILLS.Hestia.Lare.maxHealth": { valeur: 1, unite: "PV", texte: "Lare (petite compétence) : « +X PV max »" },
            "SKILLS.Hestia.Pénate.dodge": { valeur: 2, unite: "", texte: "Pénate (petite compétence) : « +X points d'esquive »" },
            "SKILLS.Hestia.Prytanée.regen": { valeur: 0.1, unite: "PV/s", texte: "Prytanée (au bout d'une voie) : « +X PV régénérés par seconde »" },
            "SKILLS.Hestia.Éléos.dodge": { valeur: 5, unite: "", texte: "Éléos (au bout d'une voie) : « +X points d'esquive »" },
            "SKILLS.Hestia.Rhéa.maxHealth": { valeur: 2, unite: "PV", texte: "Rhéa (départ) : « +X PV max »" },
            "SKILLS.Hestia.Tabiti.regen": { valeur: 0.05, unite: "PV/s", texte: "Tabiti (notable) : « +X PV régénérés par seconde »" },
            "SKILLS.Hestia.Agathodaimon.maxHealth": { valeur: 2, unite: "PV", texte: "Agathodaimon (notable) : « +X PV max »" },
            "SKILLS.Hestia.Philotès.lifeOnKill": { valeur: 0.2, unite: "PV", texte: "Philotès (notable) : « +X PV regagné par ennemi tué »" },
            "SKILLS.Hestia.Eucléia.dodge": { valeur: 5, unite: "", texte: "Eucléia (notable) : « +X points d'esquive »" },
            "SKILLS.Hestia.Homonoia.regen": { valeur: 0.05, unite: "PV/s", texte: "Homonoia (notable) : « +X PV régénérés par seconde »" },
            "SKILLS.Hestia.Euthénia.maxHealth": { valeur: 3, unite: "PV", texte: "Euthénia (notable) : « +X PV max »" },
            "SKILLS.Hestia.Elpis.regen": { valeur: 0.1, unite: "PV/s", texte: "Elpis (notable) : « +X PV régénérés par seconde »" },
            "SKILLS.Hestia.Hestiade.dodge": { valeur: 5, unite: "", texte: "Hestiade (notable) : « +X points d'esquive »" },
            "SKILLS.Hestia.Vesta.maxHealth": { valeur: 5, unite: "PV", texte: "Vesta (keystone) : « +X PV max »" },
            "SKILLS.Hestia.Boulaia.regen": { valeur: 0.15, unite: "PV/s", texte: "Boulaia (keystone) : « +X PV régénérés par seconde »" },
            "SKILLS.Hestia.Sôtéria.dodge": { valeur: 10, unite: "", texte: "Sôtéria (keystone) : « +X points d'esquive »" },
            "SKILLS.Hestia.Ananké.maxHealth": { valeur: 8, unite: "PV", texte: "Ananké (grande keystone) : « GRANDE KEYSTONE : +X PV max »" }
        }
    },
    "Tutoriel": {
        "La vague de la 1re partie": {
            "TUTORIAL_WAVE_TIME": { valeur: 30, unite: "s", texte: "Pendant la 1re partie du tutoriel, une énorme vague arrive à ce moment de la partie (le joueur meurt vite et découvre le shop)" },
            "TUTORIAL_WAVE_ENEMIES": { valeur: 40, unite: "ennemis", texte: "Nombre d'ennemis de la vague, tout autour du joueur" },
            "TUTORIAL_WAVE_HEALTH": { valeur: 3, unite: "×", texte: "Vie des ennemis de la vague, comparée à un ennemi normal" }
        }
    },
    "Temps": {
        "Vitesses et sauts": {
            "GAME_SPEED_OPTIONS": { valeur: [1, 2, 4], unite: "×", texte: "Vitesses du jeu (la 1re est la normale, la 2e est offerte par le tutoriel, les autres s'achètent dans le shop)" },
            "TIME_SKIP_OPTIONS": { valeur: [10, 30, 100], unite: "s", texte: "Sauts dans le temps (un bouton par saut : le 1er est offert par le tutoriel, les autres s'achètent dans le shop)" }
        },
        "Recharge du saut": {
            "SKIP_COOLDOWN_MIN": { valeur: 4, unite: "s", texte: "Temps de recharge minimum après un saut" },
            "SKIP_COOLDOWN_PER_SECOND": { valeur: 0.3, unite: "s", texte: "Recharge par seconde sautée (0.3 : un saut de 100 s → 30 s de recharge)" },
            "SKIP_COOLDOWN_MAX": { valeur: 60, unite: "s", texte: "Temps de recharge maximum" }
        }
    },
    "Combos d'orbite": {
        "Lien « Opposé »": {
            "OPPOSITE_BONUSES.fire.damage": { valeur: 1, unite: "", texte: "Héphaïstos en face : dégâts par balle en plus" },
            "OPPOSITE_BONUSES.water.shield": { valeur: 1, unite: "", texte: "Poséidon en face : bouclier", texteDuJeu: "la description du bonus (« un bouclier qui bloque un coup »)" },
            "OPPOSITE_BONUSES.water.shieldRecharge": { valeur: 0.5, unite: "%", texte: "Poséidon en face : recharge du bouclier plus rapide" },
            "OPPOSITE_BONUSES.plant.lifeOnHit": { valeur: 0.03, unite: "PV", texte: "Déméter en face : vie à chaque balle qui touche" },
            "OPPOSITE_BONUSES.air.attackSpeed": { valeur: 0.25, unite: "%", texte: "Éole en face : vitesse d'attaque en plus" },
            "OPPOSITE_BONUSES.light.critChance": { valeur: 0.1, unite: "%", texte: "Apollon en face : chance de critique en plus" },
            "OPPOSITE_BONUSES.moon.range": { valeur: 60, unite: "px", texte: "Artémis en face : portée en plus" },
            "OPPOSITE_BONUSES.aegis.comboProcChance": { valeur: 0.15, unite: "%", texte: "Athéna en face : chance de déclencher un combo au hasard" },
            "OPPOSITE_BONUSES.thunder.critDamage": { valeur: 0.5, unite: "%", texte: "Zeus en face : dégâts critiques en plus" },
            "OPPOSITE_BONUSES.war.lifeOnKill": { valeur: 0.5, unite: "PV", texte: "Arès en face : vie à chaque ennemi tué" },
            "OPPOSITE_BONUSES.love.maxHealthOnHit": { valeur: 0.001, unite: "PV", texte: "Aphrodite en face : vie max à chaque balle qui touche" },
            "OPPOSITE_BONUSES.swift.bulletSpeed": { valeur: 0.5, unite: "%", texte: "Hermès en face : vitesse des balles en plus" },
            "OPPOSITE_BONUSES.hearth.regen": { valeur: 0.15, unite: "PV/s", texte: "Hestia en face : régénération en plus" }
        },
        "Explosions et zones": {
            "COMBO_EXPLOSION_RADIUS": { valeur: 70, unite: "px", texte: "Explosion : rayon" },
            "COMBO_EXPLOSION_DAMAGE": { valeur: 0.8, unite: "×", texte: "Explosion : dégâts sur chaque ennemi autour (× les dégâts de la balle)" },
            "COMBO_ZONE_DURATION": { valeur: 3, unite: "s", texte: "Braises / flaque au sol : durée" },
            "COMBO_ZONE_RADIUS": { valeur: 45, unite: "px", texte: "Braises / flaque au sol : rayon" },
            "COMBO_MINE_DURATION": { valeur: 6, unite: "s", texte: "Graine explosive : disparaît après X secondes si personne ne marche dessus" },
            "COMBO_MINE_DAMAGE": { valeur: 2.5, unite: "×", texte: "Graine explosive : dégâts (× les dégâts de la balle)" },
            "COMBO_METEOR_DAMAGE": { valeur: 3, unite: "×", texte: "Météore : dégâts (× les dégâts de la balle)" },
            "COMBO_NOVA_COUNT": { valeur: 6, unite: "", texte: "Éclats qui partent dans toutes les directions" },
            "COMBO_NOVA_DAMAGE": { valeur: 0.6, unite: "×", texte: "Dégâts d'un éclat (× les dégâts de la balle)" },
            "COMBO_VORTEX_RADIUS": { valeur: 110, unite: "px", texte: "Tourbillon : rayon" },
            "COMBO_VORTEX_PULL": { valeur: 0.6, unite: "%", texte: "Tourbillon : force d'attraction (100 % = colle tout le monde sur l'impact)" },
            "COMBO_BLACKHOLE_DURATION": { valeur: 2, unite: "s", texte: "Trou noir : durée" },
            "COMBO_BLACKHOLE_RADIUS": { valeur: 150, unite: "px", texte: "Trou noir : rayon" }
        },
        "Brûlure, poison, saignement": {
            "COMBO_BURN_DURATION": { valeur: 3, unite: "s", texte: "Brûlure : durée" },
            "COMBO_BURN_DPS": { valeur: 0.6, unite: "×", texte: "Brûlure : dégâts par seconde (× les dégâts de la balle)" },
            "COMBO_POISON_DURATION": { valeur: 4, unite: "s", texte: "Poison : durée" },
            "COMBO_POISON_DPS": { valeur: 0.5, unite: "×", texte: "Poison : dégâts par seconde (× les dégâts de la balle)" },
            "COMBO_POISON_SPREAD": { valeur: 2, unite: "", texte: "Poison : voisins contaminés quand un ennemi empoisonné meurt" },
            "COMBO_BLEED_DURATION": { valeur: 4, unite: "s", texte: "Saignement : durée" },
            "COMBO_BLEED_DPS": { valeur: 0.3, unite: "×", texte: "Saignement : dégâts par seconde ajoutés à chaque coup (× les dégâts de la balle)" },
            "COMBO_BLEED_MAX": { valeur: 3, unite: "×", texte: "Saignement maximum (× les dégâts de la balle)" }
        },
        "Ralentir et bloquer": {
            "COMBO_SLOW_DURATION": { valeur: 2, unite: "s", texte: "Ralenti : durée" },
            "COMBO_SLOW_FACTOR": { valeur: 0.45, unite: "%", texte: "Ralenti : vitesse des ennemis ralentis" },
            "COMBO_FREEZE_DURATION": { valeur: 1.2, unite: "s", texte: "Gel : durée (l'ennemi est immobile)" },
            "COMBO_FREEZE_AREA_DURATION": { valeur: 0.7, unite: "s", texte: "Gel de zone : durée (plus court : il touche beaucoup d'ennemis)" },
            "COMBO_ROOT_DURATION": { valeur: 0.6, unite: "s", texte: "Racines : durée" },
            "COMBO_KNOCKBACK": { valeur: 30, unite: "px", texte: "Recul des ennemis touchés" },
            "COMBO_CONFUSE_DURATION": { valeur: 1.5, unite: "s", texte: "Confusion : l'ennemi repart en arrière pendant X secondes" },
            "COMBO_REWIND_CHANCE": { valeur: 0.25, unite: "%", texte: "Chance de renvoyer l'ennemi au bord de l'écran" },
            "COMBO_CHARM_DURATION": { valeur: 2.5, unite: "s", texte: "Charme : l'ennemi fait demi-tour pendant X secondes" },
            "COMBO_CHARM_DPS": { valeur: 3, unite: "", texte: "Charme : dégâts par seconde de l'ennemi charmé sur les ennemis qu'il touche" }
        },
        "Rebonds, éclats et foudre": {
            "COMBO_CHAIN_RANGE": { valeur: 160, unite: "px", texte: "Rebond : distance max" },
            "COMBO_CHAIN_DAMAGE": { valeur: 0.7, unite: "×", texte: "Rebond : dégâts (× les dégâts de la balle)" },
            "COMBO_SPLIT_DAMAGE": { valeur: 0.5, unite: "×", texte: "Balle divisée : dégâts de chaque morceau (× les dégâts de la balle)" },
            "COMBO_PIERCE_COUNT": { valeur: 1, unite: "", texte: "Ennemis traversés par la balle" },
            "COMBO_ECHO_DELAY": { valeur: 0.5, unite: "s", texte: "Écho : frappe une 2e fois après X secondes" },
            "COMBO_THUNDER_TARGETS": { valeur: 2, unite: "", texte: "Foudre : ennemis frappés au hasard sur tout l'écran" },
            "COMBO_THUNDER_DAMAGE": { valeur: 1.5, unite: "×", texte: "Foudre : dégâts (× les dégâts de la balle)" }
        },
        "Critiques, soins et bouclier": {
            "COMBO_CRIT_CHANCE": { valeur: 0.2, unite: "%", texte: "Chance de critique en plus" },
            "COMBO_CRIT_BONUS_DAMAGE": { valeur: 1, unite: "%", texte: "Dégâts critiques en plus" },
            "COMBO_HEAL": { valeur: 0.08, unite: "PV", texte: "Soin à chaque coup" },
            "COMBO_SHIELD_CHARGE": { valeur: 0.6, unite: "s", texte: "Recharge du bouclier gagnée à chaque coup" },
            "COMBO_EXECUTE_THRESHOLD": { valeur: 0.2, unite: "%", texte: "Achève les ennemis sous X % de leur vie (pas les super ennemis)" },
            "COMBO_WEAKEN_DURATION": { valeur: 3, unite: "s", texte: "Affaibli : durée" },
            "COMBO_WEAKEN_MULTIPLIER": { valeur: 1.5, unite: "×", texte: "Affaibli : dégâts subis (1.5 = +50 %)" }
        }
    },
    "Caméra": {
        "Dézoom selon la portée": {
            "CAMERA_RANGE_SCREEN_RATIO": { valeur: 0.95, unite: "%", texte: "La portée occupe au plus X % de la demi-largeur de l'écran" },
            "CAMERA_PORTRAIT_HEIGHT_RATIO": { valeur: 0.6, unite: "%", texte: "Écran en hauteur (téléphone) : la caméra se base sur X % de la hauteur de l'écran quand c'est plus que sa largeur (la portée peut alors dépasser un peu sur les côtés, et le jeu dézoome moins)" },
            "CAMERA_MAX_RANGE": { valeur: 1000, unite: "px", texte: "Au-delà de cette portée, la caméra ne dézoome plus (et les ennemis naissent plus près)" }
        }
    },
    "Pack Premium": {
        "Temps": {
            "PREMIUM_SPEEDS": { valeur: [8, 10], unite: "×", texte: "Vitesses du jeu en plus avec le Pack Premium (après celles du shop)" },
            "PREMIUM_SKIPS": { valeur: [500, 999], unite: "s", texte: "Sauts dans le temps en plus avec le Pack Premium (après ceux du shop)" }
        }
    }
};
