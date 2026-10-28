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
            "BOSSES.cerbere.time": { valeur: 300, unite: "s", texte: "Arrive à X secondes de jeu", texteDuJeu: "le tutoriel (« Toutes les 5 minutes »)" },
            "BOSSES.cerbere.health": { valeur: 15, unite: "PV", texte: "Vie (× la vie qui monte avec le temps, à son arrivée)" },
            "BOSSES.cerbere.size": { valeur: 34, unite: "px", texte: "Taille" },
            "BOSSES.cerbere.speed": { valeur: 60, unite: "px/s", texte: "Vitesse" },
            "BOSSES.cerbere.gold": { valeur: 15, unite: "or", texte: "Or gagné en le tuant" },
            "BOSSES.cerbere.xp": { valeur: 15, unite: "XP", texte: "XP gagnée en le tuant" }
        },
        "Hydre de Lerne": {
            "BOSSES.hydre.time": { valeur: 600, unite: "s", texte: "Arrive à X secondes de jeu", texteDuJeu: "le tutoriel (« Toutes les 5 minutes »)" },
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
            "BOSSES.meduse.time": { valeur: 900, unite: "s", texte: "Arrive à X secondes de jeu", texteDuJeu: "le tutoriel (« Toutes les 5 minutes »)" },
            "BOSSES.meduse.health": { valeur: 160, unite: "PV", texte: "Vie (× la vie qui monte avec le temps, à son arrivée)" },
            "BOSSES.meduse.size": { valeur: 42, unite: "px", texte: "Taille" },
            "BOSSES.meduse.speed": { valeur: 50, unite: "px/s", texte: "Vitesse" },
            "BOSSES.meduse.gold": { valeur: 40, unite: "or", texte: "Or gagné en la tuant" },
            "BOSSES.meduse.xp": { valeur: 40, unite: "XP", texte: "XP gagnée en la tuant" },
            "MEDUSA_GAZE_INTERVAL": { valeur: 6, unite: "s", texte: "Temps entre deux regards (une planète changée en pierre)" },
            "MEDUSA_FIRST_GAZE": { valeur: 2.5, unite: "s", texte: "1er regard, X secondes après son arrivée à l'écran" }
        },
        "Typhon": {
            "BOSSES.typhon.time": { valeur: 1200, unite: "s", texte: "Arrive à X secondes de jeu", texteDuJeu: "le tutoriel (« Toutes les 5 minutes »)" },
            "BOSSES.typhon.health": { valeur: 260, unite: "PV", texte: "Vie (× la vie qui monte avec le temps, à son arrivée)" },
            "BOSSES.typhon.size": { valeur: 46, unite: "px", texte: "Taille" },
            "BOSSES.typhon.speed": { valeur: 50, unite: "px/s", texte: "Vitesse" },
            "BOSSES.typhon.gold": { valeur: 60, unite: "or", texte: "Or gagné en le tuant" },
            "BOSSES.typhon.xp": { valeur: 60, unite: "XP", texte: "XP gagnée en le tuant" }
        },
        "Chimère": {
            "BOSSES.chimere.time": { valeur: 1500, unite: "s", texte: "Arrive à X secondes de jeu", texteDuJeu: "le tutoriel (« Toutes les 5 minutes »)" },
            "BOSSES.chimere.health": { valeur: 400, unite: "PV", texte: "Vie (× la vie qui monte avec le temps, à son arrivée)" },
            "BOSSES.chimere.size": { valeur: 50, unite: "px", texte: "Taille" },
            "BOSSES.chimere.speed": { valeur: 45, unite: "px/s", texte: "Vitesse" },
            "BOSSES.chimere.gold": { valeur: 90, unite: "or", texte: "Or gagné en la tuant" },
            "BOSSES.chimere.xp": { valeur: 90, unite: "XP", texte: "XP gagnée en la tuant" }
        },
        "Charybde": {
            "BOSSES.charybde.time": { valeur: 1800, unite: "s", texte: "Arrive à X secondes de jeu", texteDuJeu: "le tutoriel (« Toutes les 5 minutes »)" },
            "BOSSES.charybde.health": { valeur: 600, unite: "PV", texte: "Vie (× la vie qui monte avec le temps, à son arrivée)" },
            "BOSSES.charybde.size": { valeur: 54, unite: "px", texte: "Taille" },
            "BOSSES.charybde.speed": { valeur: 45, unite: "px/s", texte: "Vitesse" },
            "BOSSES.charybde.gold": { valeur: 130, unite: "or", texte: "Or gagné en la tuant" },
            "BOSSES.charybde.xp": { valeur: 130, unite: "XP", texte: "XP gagnée en la tuant" }
        },
        "Python": {
            "BOSSES.python.time": { valeur: 2100, unite: "s", texte: "Arrive à X secondes de jeu", texteDuJeu: "le tutoriel (« Toutes les 5 minutes »)" },
            "BOSSES.python.health": { valeur: 850, unite: "PV", texte: "Vie (× la vie qui monte avec le temps, à son arrivée)" },
            "BOSSES.python.size": { valeur: 58, unite: "px", texte: "Taille" },
            "BOSSES.python.speed": { valeur: 40, unite: "px/s", texte: "Vitesse" },
            "BOSSES.python.gold": { valeur: 180, unite: "or", texte: "Or gagné en le tuant" },
            "BOSSES.python.xp": { valeur: 180, unite: "XP", texte: "XP gagnée en le tuant" }
        },
        "Cronos": {
            "BOSSES.cronos.time": { valeur: 2400, unite: "s", texte: "Arrive à X secondes de jeu", texteDuJeu: "le tutoriel (« Toutes les 5 minutes »)" },
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
            "SHOP_ITEMS.speed.baseCost": { valeur: 20, unite: "or", texte: "Prix du 1er niveau (vitesse x2)" },
            "SHOP_ITEMS.speed.costGrowth": { valeur: 4, unite: "×", texte: "Le prix est multiplié par ce nombre à chaque niveau" }
        },
        "Sauter dans le temps": {
            "SHOP_ITEMS.skip.baseCost": { valeur: 15, unite: "or", texte: "Prix du 1er niveau (le 1er saut)" },
            "SHOP_ITEMS.skip.costGrowth": { valeur: 3, unite: "×", texte: "Le prix est multiplié par ce nombre à chaque niveau" }
        },
        "Liens d'orbite": {
            "SHOP_ITEMS.links.baseCost": { valeur: 30, unite: "or", texte: "Prix du 1er niveau (le lien « Droite »)" },
            "SHOP_ITEMS.links.costGrowth": { valeur: 2.5, unite: "×", texte: "Le prix est multiplié par ce nombre à chaque niveau" }
        },
        "Nouvelle divinité": {
            "SHOP_ITEMS.god.baseCost": { valeur: 20, unite: "or", texte: "Prix du 1er dieu" },
            "SHOP_ITEMS.god.costGrowth": { valeur: 2.5, unite: "×", texte: "Chaque dieu coûte X fois plus cher que le précédent" }
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
    "Temps": {
        "Vitesses et sauts": {
            "GAME_SPEED_OPTIONS": { valeur: [1, 2, 4], unite: "×", texte: "Vitesses du jeu (la 1re est la normale, les autres s'achètent dans le shop)", texteDuJeu: "le shop (« x2, puis x4 ») et le tutoriel (« x2, x4 »)" },
            "TIME_SKIP_OPTIONS": { valeur: [10, 30, 100], unite: "s", texte: "Sauts dans le temps (un bouton par saut, achetés dans le shop ; la touche T fait le plus grand)", texteDuJeu: "le shop (« +10 s, puis +30 s, puis +100 s »)" }
        },
        "Recharge du saut": {
            "SKIP_COOLDOWN_MIN": { valeur: 4, unite: "s", texte: "Temps de recharge minimum après un saut" },
            "SKIP_COOLDOWN_PER_SECOND": { valeur: 0.3, unite: "s", texte: "Recharge par seconde sautée (0.3 : un saut de 100 s → 30 s de recharge)" },
            "SKIP_COOLDOWN_MAX": { valeur: 60, unite: "s", texte: "Temps de recharge maximum" }
        }
    },
    "Combos d'orbite": {
        "Lien « Opposé »": {
            "OPPOSITE_BONUSES.fire.damage": { valeur: 1, unite: "", texte: "Héphaïstos en face : dégâts par balle en plus", texteDuJeu: "la description de ce bonus (OPPOSITE_BONUSES dans index.html, et langues/)" },
            "OPPOSITE_BONUSES.water.shield": { valeur: 1, unite: "", texte: "Poséidon en face : bouclier", texteDuJeu: "la description de ce bonus (OPPOSITE_BONUSES dans index.html, et langues/)" },
            "OPPOSITE_BONUSES.water.shieldRecharge": { valeur: 0.5, unite: "%", texte: "Poséidon en face : recharge du bouclier plus rapide", texteDuJeu: "la description de ce bonus (OPPOSITE_BONUSES dans index.html, et langues/)" },
            "OPPOSITE_BONUSES.plant.lifeOnHit": { valeur: 0.03, unite: "PV", texte: "Déméter en face : vie à chaque balle qui touche", texteDuJeu: "la description de ce bonus (OPPOSITE_BONUSES dans index.html, et langues/)" },
            "OPPOSITE_BONUSES.air.attackSpeed": { valeur: 0.25, unite: "%", texte: "Éole en face : vitesse d'attaque en plus", texteDuJeu: "la description de ce bonus (OPPOSITE_BONUSES dans index.html, et langues/)" },
            "OPPOSITE_BONUSES.light.critChance": { valeur: 0.1, unite: "%", texte: "Apollon en face : chance de critique en plus", texteDuJeu: "la description de ce bonus (OPPOSITE_BONUSES dans index.html, et langues/)" },
            "OPPOSITE_BONUSES.moon.range": { valeur: 60, unite: "px", texte: "Artémis en face : portée en plus", texteDuJeu: "la description de ce bonus (OPPOSITE_BONUSES dans index.html, et langues/)" },
            "OPPOSITE_BONUSES.aegis.comboProcChance": { valeur: 0.15, unite: "%", texte: "Athéna en face : chance de déclencher un combo au hasard", texteDuJeu: "la description de ce bonus (OPPOSITE_BONUSES dans index.html, et langues/)" },
            "OPPOSITE_BONUSES.thunder.critDamage": { valeur: 0.5, unite: "%", texte: "Zeus en face : dégâts critiques en plus", texteDuJeu: "la description de ce bonus (OPPOSITE_BONUSES dans index.html, et langues/)" },
            "OPPOSITE_BONUSES.war.lifeOnKill": { valeur: 0.5, unite: "PV", texte: "Arès en face : vie à chaque ennemi tué", texteDuJeu: "la description de ce bonus (OPPOSITE_BONUSES dans index.html, et langues/)" },
            "OPPOSITE_BONUSES.love.maxHealthOnHit": { valeur: 0.001, unite: "PV", texte: "Aphrodite en face : vie max à chaque balle qui touche", texteDuJeu: "la description de ce bonus (OPPOSITE_BONUSES dans index.html, et langues/)" },
            "OPPOSITE_BONUSES.swift.bulletSpeed": { valeur: 0.5, unite: "%", texte: "Hermès en face : vitesse des balles en plus", texteDuJeu: "la description de ce bonus (OPPOSITE_BONUSES dans index.html, et langues/)" },
            "OPPOSITE_BONUSES.hearth.regen": { valeur: 0.15, unite: "PV/s", texte: "Hestia en face : régénération en plus", texteDuJeu: "la description de ce bonus (OPPOSITE_BONUSES dans index.html, et langues/)" }
        },
        "Explosions et zones": {
            "COMBO_EXPLOSION_RADIUS": { valeur: 70, unite: "px", texte: "Explosion : rayon" },
            "COMBO_EXPLOSION_DAMAGE": { valeur: 0.8, unite: "×", texte: "Explosion : dégâts sur chaque ennemi autour (× les dégâts de la balle)" },
            "COMBO_ZONE_DURATION": { valeur: 3, unite: "s", texte: "Braises / flaque au sol : durée" },
            "COMBO_ZONE_RADIUS": { valeur: 45, unite: "px", texte: "Braises / flaque au sol : rayon" },
            "COMBO_MINE_DURATION": { valeur: 6, unite: "s", texte: "Graine explosive : disparaît après X secondes si personne ne marche dessus" },
            "COMBO_MINE_DAMAGE": { valeur: 2.5, unite: "×", texte: "Graine explosive : dégâts (× les dégâts de la balle)" },
            "COMBO_METEOR_DAMAGE": { valeur: 3, unite: "×", texte: "Météore : dégâts (× les dégâts de la balle)" },
            "COMBO_NOVA_COUNT": { valeur: 6, unite: "", texte: "Éclats qui partent dans toutes les directions", texteDuJeu: "les descriptions des combos et des fusions (index.html et langues/)" },
            "COMBO_NOVA_DAMAGE": { valeur: 0.6, unite: "×", texte: "Dégâts d'un éclat (× les dégâts de la balle)" },
            "COMBO_VORTEX_RADIUS": { valeur: 110, unite: "px", texte: "Tourbillon : rayon" },
            "COMBO_VORTEX_PULL": { valeur: 0.6, unite: "%", texte: "Tourbillon : force d'attraction (100 % = colle tout le monde sur l'impact)" },
            "COMBO_BLACKHOLE_DURATION": { valeur: 2, unite: "s", texte: "Trou noir : durée" },
            "COMBO_BLACKHOLE_RADIUS": { valeur: 150, unite: "px", texte: "Trou noir : rayon" }
        },
        "Brûlure, poison, saignement": {
            "COMBO_BURN_DURATION": { valeur: 3, unite: "s", texte: "Brûlure : durée", texteDuJeu: "les descriptions des combos et des fusions (index.html et langues/)" },
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
            "COMBO_THUNDER_TARGETS": { valeur: 2, unite: "", texte: "Foudre : ennemis frappés au hasard sur tout l'écran", texteDuJeu: "les descriptions des combos et des fusions (index.html et langues/)" },
            "COMBO_THUNDER_DAMAGE": { valeur: 1.5, unite: "×", texte: "Foudre : dégâts (× les dégâts de la balle)" }
        },
        "Critiques, soins et bouclier": {
            "COMBO_CRIT_CHANCE": { valeur: 0.2, unite: "%", texte: "Chance de critique en plus" },
            "COMBO_CRIT_BONUS_DAMAGE": { valeur: 1, unite: "%", texte: "Dégâts critiques en plus", texteDuJeu: "les descriptions des combos et des fusions (index.html et langues/)" },
            "COMBO_HEAL": { valeur: 0.08, unite: "PV", texte: "Soin à chaque coup" },
            "COMBO_SHIELD_CHARGE": { valeur: 0.6, unite: "s", texte: "Recharge du bouclier gagnée à chaque coup" },
            "COMBO_EXECUTE_THRESHOLD": { valeur: 0.2, unite: "%", texte: "Achève les ennemis sous X % de leur vie (pas les super ennemis)" },
            "COMBO_WEAKEN_DURATION": { valeur: 3, unite: "s", texte: "Affaibli : durée", texteDuJeu: "les descriptions des combos et des fusions (index.html et langues/)" },
            "COMBO_WEAKEN_MULTIPLIER": { valeur: 1.5, unite: "×", texte: "Affaibli : dégâts subis (1.5 = +50 %)", texteDuJeu: "les descriptions des combos et des fusions (index.html et langues/)" }
        }
    },
    "Caméra": {
        "Dézoom selon la portée": {
            "CAMERA_RANGE_SCREEN_RATIO": { valeur: 0.95, unite: "%", texte: "La portée occupe au plus X % de la demi-largeur de l'écran" },
            "CAMERA_MAX_RANGE": { valeur: 1000, unite: "px", texte: "Au-delà de cette portée, la caméra ne dézoome plus (et les ennemis naissent plus près)" }
        }
    }
};
