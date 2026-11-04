# Les réglages du jeu

Généré à partir de `reglages.js` par `game-design/outils/generer-docs.js`.

Toutes les statistiques du jeu (566 réglages) sont dans le fichier `reglages.js`, à la racine du dépôt, rangées par catégories et sous-catégories. Pour les changer, le plus simple est l'**éditeur de réglages** : ouvre `game-design/outils/editeur-reglages.html` dans ton navigateur (double-clic), change les valeurs, « Tester dans le jeu », puis « Enregistrer » (voir [README.md](README.md)).

- Les pourcentages sont écrits en % ici et dans l'éditeur, mais en fraction dans `reglages.js` (10 % = 0.1).
- Le **nom dans le code** est celui que `index.html` lit avec `reglage("NOM")`.
- ⚠️ = ce nombre est aussi écrit dans un texte du jeu : si on le change, il faut aussi changer ce texte (dans `index.html` et `langues/`).
- Les valeurs de **chaque compétence** des skill trees sont dans la catégorie « Compétences des dieux » (une sous-catégorie par dieu) : leur description dans le jeu se met à jour toute seule.`SKILL_TREES_DATA` (`index.html`).

## Sommaire

- [Joueur](#joueur) : Stats de départ, Défense, Corps
- [Tirs](#tirs) : Joueur, Planètes, Balles
- [Planètes](#planètes) : Stats de départ, Orbites
- [Pouvoirs des dieux](#pouvoirs-des-dieux) : Rythme des pouvoirs, Héphaïstos : traînée de feu, Poséidon : la vague, Déméter : le rayon de vie, Artémis, Zeus, Arès : le cri de guerre, Contre les super ennemis
- [Ennemis](#ennemis) : Feu (rouge), Eau (bleu), Plante (vert), Air (blanc), Vie qui monte avec le temps, Taille, Apparition, Mouvements spéciaux
- [Super ennemis](#super-ennemis) : Tous les super ennemis, Cerbère, Hydre de Lerne, Méduse, Typhon, Chimère, Charybde, Python, Cronos
- [Shop](#shop) : Cadence de tir, Portée, Balle supplémentaire, Vie max, Dégâts, Régénération, Esquive, Chance de critique, Dégâts critiques, Vitesse des balles, Accélérer le temps, Sauter dans le temps, Liens d'orbite, Nouvelle divinité
- [Compétences](#compétences) : Prix en XP, Éveil des dieux
- [Compétences des dieux](#compétences-des-dieux) : Héphaïstos, Poséidon, Déméter, Éole, Apollon, Artémis, Athéna, Zeus, Arès, Aphrodite, Hermès, Hestia
- [Tutoriel](#tutoriel) : La vague de la 1re partie
- [Temps](#temps) : Vitesses et sauts, Recharge du saut
- [Combos d'orbite](#combos-dorbite) : Lien « Opposé », Explosions et zones, Brûlure, poison, saignement, Ralentir et bloquer, Rebonds, éclats et foudre, Critiques, soins et bouclier
- [Caméra](#caméra) : Dézoom selon la portée
- [Pack Premium](#pack-premium) : Temps

## Joueur

### Stats de départ

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Points de vie au début d'une partie | 10 PV | `BASE_STATS.maxHealth` |
| Points de vie regagnés par seconde | 0 PV/s | `BASE_STATS.regen` |
| Points d'esquive au début (chance d'esquiver = x / (x + 1), avec x = les points ÷ 100) | 0 points | `BASE_STATS.dodge` |
| Bouclier : 1 ou plus = un bouclier bloque un coup, puis se recharge | 0 | `BASE_STATS.shield` |
| Vitesse de recharge du bouclier (1.5 = 50 % plus rapide) | 1 × | `BASE_STATS.shieldRecharge` |
| Points de vie regagnés à chaque ennemi tué | 0 PV | `BASE_STATS.lifeOnKill` |
| Dégâts par balle | 1 | `BASE_STATS.damage` |
| Cadence de tir (1 = normale, 1.5 = 50 % plus rapide) | 1 × | `BASE_STATS.attackSpeed` |
| Portée : distance max pour viser | 300 px | `BASE_STATS.range` |
| Vitesse des balles | 1 × | `BASE_STATS.bulletSpeed` |
| Balles par tir (côte à côte, en mur) | 1 | `BASE_STATS.bulletCount` |
| Chance de coup critique | 0 % | `BASE_STATS.critChance` |
| Dégâts d'un coup critique (200 % = le double) | 200 % | `BASE_STATS.critDamage` |
| Points de vie regagnés à chaque balle qui touche | 0 PV | `BASE_STATS.lifeOnHit` |
| Points de vie max gagnés (pour la partie) à chaque balle qui touche | 0 PV | `BASE_STATS.maxHealthOnHit` |
| Chance, à chaque tir, de déclencher un effet de combo au hasard | 0 % | `BASE_STATS.comboProcChance` |
| Or gagné | 1 × | `BASE_STATS.goldMultiplier` |
| XP gagnée | 1 × | `BASE_STATS.xpMultiplier` |

### Défense

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Temps de recharge du bouclier (divisé par la vitesse de recharge) | 10 s | `SHIELD_COOLDOWN` |

### Corps

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Taille du joueur (rayon) : un ennemi le touche à cette distance (plus sa propre taille). Change aussi le dessin | 32 px | `PLAYER_RADIUS` |

## Tirs

### Joueur

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Temps entre deux tirs du joueur (divisé par sa cadence de tir) | 0,35 s | `BASE_FIRE_INTERVAL` |
| Vitesse des balles (multipliée par la vitesse des balles) | 400 px/s | `BASE_BULLET_SPEED` |

### Planètes

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Temps entre deux tirs d'une planète (divisé par sa cadence de tir) | 1 s | `PLANET_FIRE_INTERVAL` |
| Cadence minimum d'une planète (même avec des compétences qui la ralentissent) | 15 % | `MIN_SHOOTER_SPEED` |

### Balles

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Taille d'une balle (rayon) | 4 px | `BULLET_SIZE` |
| Taille minimum d'une balle (les compétences d'Éole la font rétrécir) | 40 % | `MIN_BULLET_SIZE_FACTOR` |
| Écart entre deux balles d'un même tir (le mur de balles) | 10 px | `BULLET_WALL_SPACING` |

## Planètes

### Stats de départ

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Dégâts par balle | 1 | `PLANET_BASE_STATS.damage` |
| Cadence de tir (1 = un tir par seconde) | 1 × | `PLANET_BASE_STATS.attackSpeed` |
| Portée, depuis la planète | 250 px | `PLANET_BASE_STATS.range` |
| Vitesse des balles | 1 × | `PLANET_BASE_STATS.bulletSpeed` |
| Balles par tir | 1 | `PLANET_BASE_STATS.bulletCount` |
| Chance de coup critique | 0 % | `PLANET_BASE_STATS.critChance` |
| Dégâts d'un coup critique | 200 % | `PLANET_BASE_STATS.critDamage` |
| Points de vie regagnés par le joueur à chaque balle de la planète qui touche | 0 PV | `PLANET_BASE_STATS.lifeOnHit` |
| Points de vie max gagnés par le joueur (pour la partie) à chaque balle qui touche | 0 PV | `PLANET_BASE_STATS.maxHealthOnHit` |
| Chance, à chaque tir, de déclencher un effet de combo au hasard | 0 % | `PLANET_BASE_STATS.comboProcChance` |

### Orbites

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Orbite intérieure : distance au joueur | 130 px | `ORBITS.inner.radius` |
| Orbite intérieure : vitesse de rotation (0.25 = un tour en 25 s ; négatif = dans l'autre sens) | 0,25 rad/s | `ORBITS.inner.speed` |
| Orbite du milieu : distance au joueur | 200 px | `ORBITS.middle.radius` |
| Orbite du milieu : vitesse de rotation (négatif = dans l'autre sens) | -0,17 rad/s | `ORBITS.middle.speed` |
| Orbite extérieure : distance au joueur | 270 px | `ORBITS.outer.radius` |
| Orbite extérieure : vitesse de rotation (négatif = dans l'autre sens) | 0,12 rad/s | `ORBITS.outer.speed` |
| Taille des planètes | 20 px | `PLANET_SIZE` |

## Pouvoirs des dieux

### Rythme des pouvoirs

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Aphrodite : temps de recharge du charme (moins la réduction de recharge : x / (100 + x), avec x points) | 8 s | `PLANET_POWERS.charm.interval` |
| Arès : temps de recharge du cri de guerre | 12 s | `PLANET_POWERS.warCry.interval` |
| Déméter : temps de recharge du rayon de vie | 9 s | `PLANET_POWERS.bloom.interval` |
| Artémis : temps de recharge de la grande flèche | 6 s | `PLANET_POWERS.moonArrow.interval` |
| Poséidon : temps de recharge de la vague | 10 s | `PLANET_POWERS.tide.interval` |

### Héphaïstos : traînée de feu

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Un point de feu tous les X pixels parcourus par la balle | 14 px | `FIRE_TRAIL_STEP` |
| Durée d'un point de feu avant qu'il s'éteigne (+ les compétences) | 1,2 s | `FIRE_TRAIL_DURATION` |
| Taille d'un point de feu (× la taille des balles) | 9 px | `FIRE_TRAIL_RADIUS` |
| Durée de la brûlure après avoir touché la traînée | 1 s | `FIRE_TRAIL_BURN_TIME` |

### Poséidon : la vague

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Vitesse du front de la vague | 320 px/s | `TIDE_WAVE_SPEED` |
| Distance max dont un ennemi est emporté (× le recul de la vague) | 2 × | `TIDE_PUSH_FACTOR` |
| Ralenti des ennemis après la vague | 1,5 s | `TIDE_SLOW_DURATION` |
| Durée pendant laquelle un ennemi reste frêle | 4 s | `FRAGILE_DURATION` |

### Déméter : le rayon de vie

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Durée de l'affaiblissement des ennemis touchés | 3 s | `WEAKEN_FROM_BLOOM` |
| Durée d'immobilisation d'une liane (+ les compétences) | 2,5 s | `VINE_BASE_DURATION` |
| Une liane qui n'a attrapé personne disparaît après X secondes | 8 s | `VINE_LIFETIME` |

### Artémis

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Grande flèche : taille (× une balle) | 2,6 × | `MOON_ARROW_SIZE` |
| Grande flèche : vitesse (× une balle) | 1,8 × | `MOON_ARROW_SPEED` |
| Distance max d'un rebond de balle | 180 px | `BOUNCE_RANGE` |

### Zeus

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Portée d'un éclair | 120 px | `ARC_BASE_RANGE` |
| Durée pendant laquelle un ennemi reste conducteur | 6 s | `CONDUCT_DURATION` |
| Zone électrocutée par la foudre | 90 px | `BOLT_BASE_RADIUS` |
| Dégâts de la foudre sur les ennemis autour (× les dégâts de la balle) | 0,5 × | `BOLT_SPLASH_DAMAGE` |
| Un même ennemi ne reçoit pas la foudre 2 fois en moins de X secondes | 1 s | `BOLT_COOLDOWN` |

### Arès : le cri de guerre

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Dégâts en plus, par point de cri de guerre | 15 % | `WAR_CRY_DAMAGE` |
| Chance de critique en plus, par point | 4 % | `WAR_CRY_CRIT_CHANCE` |
| Dégâts critiques en plus, par point | 20 % | `WAR_CRY_CRIT_DAMAGE` |
| Durée du cri de guerre (+ les compétences) | 4 s | `WAR_CRY_BASE_DURATION` |

### Contre les super ennemis

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Les super ennemis sont moins repoussés (30 % = repoussés 3 fois moins loin) | 30 % | `BOSS_KNOCKBACK_FACTOR` |

## Ennemis

### Feu (rouge)

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Vitesse | 90 px/s | `ENEMY_TYPES.fire.speed` |
| Vie au début, au minimum | 0,8 PV | `ENEMY_TYPES.fire.minHealth` |
| Vie au début, au maximum | 1,2 PV | `ENEMY_TYPES.fire.maxHealth` |
| Or gagné en le tuant | 1 or | `ENEMY_TYPES.fire.gold` |
| XP gagnée en le tuant | 1 XP | `ENEMY_TYPES.fire.xp` |

### Eau (bleu)

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Vitesse | 50 px/s | `ENEMY_TYPES.water.speed` |
| Vie au début, au minimum | 1,4 PV | `ENEMY_TYPES.water.minHealth` |
| Vie au début, au maximum | 2,2 PV | `ENEMY_TYPES.water.maxHealth` |
| Or gagné en le tuant | 1 or | `ENEMY_TYPES.water.gold` |
| XP gagnée en le tuant | 1 XP | `ENEMY_TYPES.water.xp` |

### Plante (vert)

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Vitesse | 35 px/s | `ENEMY_TYPES.plant.speed` |
| Vie au début, au minimum | 2,2 PV | `ENEMY_TYPES.plant.minHealth` |
| Vie au début, au maximum | 3,4 PV | `ENEMY_TYPES.plant.maxHealth` |
| Or gagné en le tuant | 1 or | `ENEMY_TYPES.plant.gold` |
| XP gagnée en le tuant | 1 XP | `ENEMY_TYPES.plant.xp` |

### Air (blanc)

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Vitesse | 70 px/s | `ENEMY_TYPES.air.speed` |
| Vie au début, au minimum | 0,6 PV | `ENEMY_TYPES.air.minHealth` |
| Vie au début, au maximum | 1 PV | `ENEMY_TYPES.air.maxHealth` |
| Or gagné en le tuant | 1 or | `ENEMY_TYPES.air.gold` |
| XP gagnée en le tuant | 1 XP | `ENEMY_TYPES.air.xp` |

### Vie qui monte avec le temps

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Vie en plus par minute de jeu | 30 % | `ENEMY_HEALTH_GROWTH` |
| Vie en plus par minute au carré (ce qui accélère) | 3 % | `ENEMY_HEALTH_GROWTH_SQUARED` |
| Et le tout multiplié par ce nombre chaque minute (fait monter vite la fin de partie) | 1,05 × | `ENEMY_HEALTH_LATE_GROWTH` |

### Taille

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Taille d'un ennemi à 0 PV (rayon) | 4 px | `ENEMY_BASE_SIZE` |
| Taille en plus par point de vie de départ | 4 px | `ENEMY_SIZE_PER_HEALTH` |
| Vitesse à laquelle un ennemi abîmé rétrécit | 10 | `ENEMY_SHRINK_SPEED` |

### Apparition

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Écart entre deux ennemis au début d'une partie | 1,2 s | `ENEMY_SPAWN_INTERVAL_START` |
| Montée de la difficulté : écart = écart du début ÷ (1 + ce nombre × secondes de jeu) | 0,005 | `ENEMY_SPAWN_RAMP` |
| Écart minimum entre deux ennemis (le plus rapide possible) | 0,35 s | `ENEMY_SPAWN_INTERVAL_MIN` |
| Le 1er ennemi arrive après X secondes | 0,3 s | `ENEMY_FIRST_SPAWN_DELAY` |

### Mouvements spéciaux

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Part des ennemis qui ont un mouvement spécial (les autres vont tout droit) | 10 % | `SPECIAL_MOVEMENT_CHANCE` |
| La spirale arrive à X secondes de jeu | 60 s | `MOVEMENT_UNLOCKS.spiral.time` |
| Le zigzag arrive à X secondes de jeu | 300 s | `MOVEMENT_UNLOCKS.zigzag.time` |
| Le mouvement onduleux arrive à X secondes de jeu | 600 s | `MOVEMENT_UNLOCKS.wave.time` |
| À partir de X secondes de jeu, chaque ennemi spécial varie son mouvement | 750 s | `MOVEMENT_VARIATION_TIME` |
| Alerte avant le 1er ennemi d'un nouveau mouvement | 3 s | `MOVEMENT_WARNING_TIME` |
| Après ce 1er ennemi, les autres attendent X secondes (ou sa mort) | 5 s | `MOVEMENT_SOLO_TIME` |
| Spirale : vitesse de rotation autour du joueur | 0,4 | `ENEMY_SPIRAL_SPEED` |
| Spirale : à quel point elle peut être ovale (0 = cercle parfait) | 60 % | `SPIRAL_OVAL_MAX` |
| Zigzag : chance de s'arrêter à un virage puis de repartir d'un coup | 40 % | `ZIGZAG_STOP_AND_GO_CHANCE` |
| Onduleux : écart max sur le côté | 40 px | `ENEMY_WAVE_AMPLITUDE` |
| Onduleux : vitesse des oscillations | 3 | `ENEMY_WAVE_FREQUENCY` |

## Super ennemis

### Tous les super ennemis

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Alerte avant l'arrivée d'un super ennemi jamais vaincu | 8 s | `BOSS_WARNING_TIME` |
| Une fois vaincus, chance qu'un ennemi soit remplacé par l'un d'eux, au début d'une partie | 0,1 % | `BOSS_RANDOM_CHANCE_START` |
| Chance en plus par seconde de jeu | 0,002 % | `BOSS_RANDOM_CHANCE_PER_SECOND` |
| Paliers (menu de mort) : la partie repart X secondes après l'heure du super ennemi | 2 s | `CHECKPOINT_OFFSET` |

### Cerbère

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Arrive à X secondes de jeu | 300 s | `BOSSES.cerbere.time` |
| Vie (× la vie qui monte avec le temps, à son arrivée) | 15 PV | `BOSSES.cerbere.health` |
| Taille | 34 px | `BOSSES.cerbere.size` |
| Vitesse | 60 px/s | `BOSSES.cerbere.speed` |
| Or gagné en le tuant | 15 or | `BOSSES.cerbere.gold` |
| XP gagnée en le tuant | 15 XP | `BOSSES.cerbere.xp` |

### Hydre de Lerne

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Arrive à X secondes de jeu ⚠️ (aussi écrit dans le tutoriel dit qu'un super ennemi arrive « toutes les X minutes », X = l'heure de Cerbère : garde le même écart entre les super ennemis) | 600 s | `BOSSES.hydre.time` |
| Vie (× la vie qui monte avec le temps, à son arrivée) | 60 PV | `BOSSES.hydre.health` |
| Taille | 38 px | `BOSSES.hydre.size` |
| Vitesse | 55 px/s | `BOSSES.hydre.speed` |
| Or gagné en la tuant | 25 or | `BOSSES.hydre.gold` |
| XP gagnée en la tuant | 25 XP | `BOSSES.hydre.xp` |
| Nombre de dédoublements (3 = 1 → 2 → 4 → 8 têtes) | 3 | `HYDRA_MAX_GENERATION` |
| Vie d'une nouvelle tête (× la vie de sa mère) | 55 % | `HYDRA_HEALTH_SHARE` |
| Taille d'une nouvelle tête (× la taille de sa mère) | 78 % | `HYDRA_SIZE_SHARE` |
| Vitesse en plus d'une nouvelle tête | 15 % | `HYDRA_SPEED_BONUS` |
| Or et XP d'une nouvelle tête (× ceux de sa mère) | 40 % | `HYDRA_REWARD_SHARE` |
| Têtes de la dernière vague (pendant le duel) | 30 | `HYDRA_WAVE_COUNT` |
| Têtes de la dernière vague quand l'Hydre revient comme ennemi rare | 14 | `HYDRA_WAVE_COUNT_REPEAT` |
| Vie d'une tête de la vague (× la vie de la 1re hydre) | 8 % | `HYDRA_WAVE_HEALTH` |
| Taille d'une tête de la vague | 12 px | `HYDRA_WAVE_SIZE` |
| Or et XP d'une tête de la vague (× ceux de la 1re hydre) | 6 % | `HYDRA_WAVE_REWARD` |

### Méduse

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Arrive à X secondes de jeu ⚠️ (aussi écrit dans le tutoriel dit qu'un super ennemi arrive « toutes les X minutes », X = l'heure de Cerbère : garde le même écart entre les super ennemis) | 900 s | `BOSSES.meduse.time` |
| Vie (× la vie qui monte avec le temps, à son arrivée) | 160 PV | `BOSSES.meduse.health` |
| Taille | 42 px | `BOSSES.meduse.size` |
| Vitesse | 50 px/s | `BOSSES.meduse.speed` |
| Or gagné en la tuant | 40 or | `BOSSES.meduse.gold` |
| XP gagnée en la tuant | 40 XP | `BOSSES.meduse.xp` |
| Temps entre deux regards (une planète changée en pierre) | 6 s | `MEDUSA_GAZE_INTERVAL` |
| 1er regard, X secondes après son arrivée à l'écran | 2,5 s | `MEDUSA_FIRST_GAZE` |

### Typhon

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Arrive à X secondes de jeu ⚠️ (aussi écrit dans le tutoriel dit qu'un super ennemi arrive « toutes les X minutes », X = l'heure de Cerbère : garde le même écart entre les super ennemis) | 1200 s | `BOSSES.typhon.time` |
| Vie (× la vie qui monte avec le temps, à son arrivée) | 260 PV | `BOSSES.typhon.health` |
| Taille | 46 px | `BOSSES.typhon.size` |
| Vitesse | 50 px/s | `BOSSES.typhon.speed` |
| Or gagné en le tuant | 60 or | `BOSSES.typhon.gold` |
| XP gagnée en le tuant | 60 XP | `BOSSES.typhon.xp` |

### Chimère

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Arrive à X secondes de jeu ⚠️ (aussi écrit dans le tutoriel dit qu'un super ennemi arrive « toutes les X minutes », X = l'heure de Cerbère : garde le même écart entre les super ennemis) | 1500 s | `BOSSES.chimere.time` |
| Vie (× la vie qui monte avec le temps, à son arrivée) | 400 PV | `BOSSES.chimere.health` |
| Taille | 50 px | `BOSSES.chimere.size` |
| Vitesse | 45 px/s | `BOSSES.chimere.speed` |
| Or gagné en la tuant | 90 or | `BOSSES.chimere.gold` |
| XP gagnée en la tuant | 90 XP | `BOSSES.chimere.xp` |

### Charybde

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Arrive à X secondes de jeu ⚠️ (aussi écrit dans le tutoriel dit qu'un super ennemi arrive « toutes les X minutes », X = l'heure de Cerbère : garde le même écart entre les super ennemis) | 1800 s | `BOSSES.charybde.time` |
| Vie (× la vie qui monte avec le temps, à son arrivée) | 600 PV | `BOSSES.charybde.health` |
| Taille | 54 px | `BOSSES.charybde.size` |
| Vitesse | 45 px/s | `BOSSES.charybde.speed` |
| Or gagné en la tuant | 130 or | `BOSSES.charybde.gold` |
| XP gagnée en la tuant | 130 XP | `BOSSES.charybde.xp` |

### Python

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Arrive à X secondes de jeu ⚠️ (aussi écrit dans le tutoriel dit qu'un super ennemi arrive « toutes les X minutes », X = l'heure de Cerbère : garde le même écart entre les super ennemis) | 2100 s | `BOSSES.python.time` |
| Vie (× la vie qui monte avec le temps, à son arrivée) | 850 PV | `BOSSES.python.health` |
| Taille | 58 px | `BOSSES.python.size` |
| Vitesse | 40 px/s | `BOSSES.python.speed` |
| Or gagné en le tuant | 180 or | `BOSSES.python.gold` |
| XP gagnée en le tuant | 180 XP | `BOSSES.python.xp` |

### Cronos

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Arrive à X secondes de jeu ⚠️ (aussi écrit dans le tutoriel dit qu'un super ennemi arrive « toutes les X minutes », X = l'heure de Cerbère : garde le même écart entre les super ennemis) | 2400 s | `BOSSES.cronos.time` |
| Vie (× la vie qui monte avec le temps, à son arrivée) | 1200 PV | `BOSSES.cronos.health` |
| Taille | 64 px | `BOSSES.cronos.size` |
| Vitesse | 40 px/s | `BOSSES.cronos.speed` |
| Or gagné en le tuant | 260 or | `BOSSES.cronos.gold` |
| XP gagnée en le tuant | 260 XP | `BOSSES.cronos.xp` |
| Temps entre deux ralentis du temps | 10 s | `CRONOS_SLOW_INTERVAL` |
| 1er ralenti, X secondes après son arrivée à l'écran | 3 s | `CRONOS_FIRST_SLOW` |
| Durée d'un ralenti | 4 s | `CRONOS_SLOW_DURATION` |
| Pendant un ralenti, toi, tes planètes et tes balles allez à X % de votre vitesse | 35 % | `CRONOS_SLOW_FACTOR` |

## Shop

### Cadence de tir

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Vitesse d'attaque en plus, par niveau | 10 % | `SHOP_ITEMS.attackSpeed.value` |
| Prix du 1er niveau | 10 or | `SHOP_ITEMS.attackSpeed.baseCost` |
| Le prix est multiplié par ce nombre à chaque niveau | 1,5 × | `SHOP_ITEMS.attackSpeed.costGrowth` |
| Niveau maximum | ∞ | `SHOP_ITEMS.attackSpeed.maxLevel` |

### Portée

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Portée en plus, par niveau | 25 px | `SHOP_ITEMS.range.value` |
| Prix du 1er niveau | 10 or | `SHOP_ITEMS.range.baseCost` |
| Le prix est multiplié par ce nombre à chaque niveau | 1,5 × | `SHOP_ITEMS.range.costGrowth` |
| Niveau maximum | ∞ | `SHOP_ITEMS.range.maxLevel` |

### Balle supplémentaire

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Balles par tir en plus, par niveau | 1 | `SHOP_ITEMS.bulletCount.value` |
| Prix du 1er niveau | 60 or | `SHOP_ITEMS.bulletCount.baseCost` |
| Le prix est multiplié par ce nombre à chaque niveau | 2,5 × | `SHOP_ITEMS.bulletCount.costGrowth` |
| Niveau maximum | 3 | `SHOP_ITEMS.bulletCount.maxLevel` |

### Vie max

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Points de vie max en plus, par niveau | 2 PV | `SHOP_ITEMS.maxHealth.value` |
| Prix du 1er niveau | 8 or | `SHOP_ITEMS.maxHealth.baseCost` |
| Le prix est multiplié par ce nombre à chaque niveau | 1,5 × | `SHOP_ITEMS.maxHealth.costGrowth` |
| Niveau maximum | ∞ | `SHOP_ITEMS.maxHealth.maxLevel` |

### Dégâts

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Dégâts par balle en plus, par niveau | 1 | `SHOP_ITEMS.damage.value` |
| Prix du 1er niveau | 15 or | `SHOP_ITEMS.damage.baseCost` |
| Le prix est multiplié par ce nombre à chaque niveau | 1,6 × | `SHOP_ITEMS.damage.costGrowth` |
| Niveau maximum | ∞ | `SHOP_ITEMS.damage.maxLevel` |

### Régénération

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Points de vie regagnés par seconde en plus, par niveau | 0,05 PV/s | `SHOP_ITEMS.regen.value` |
| Prix du 1er niveau | 12 or | `SHOP_ITEMS.regen.baseCost` |
| Le prix est multiplié par ce nombre à chaque niveau | 1,6 × | `SHOP_ITEMS.regen.costGrowth` |
| Niveau maximum | ∞ | `SHOP_ITEMS.regen.maxLevel` |

### Esquive

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Points d'esquive en plus, par niveau (chance d'esquiver = x / (x + 1), avec x = les points ÷ 100) | 5 points | `SHOP_ITEMS.dodge.value` |
| Prix du 1er niveau | 25 or | `SHOP_ITEMS.dodge.baseCost` |
| Le prix est multiplié par ce nombre à chaque niveau | 1,6 × | `SHOP_ITEMS.dodge.costGrowth` |
| Niveau maximum | ∞ | `SHOP_ITEMS.dodge.maxLevel` |

### Chance de critique

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Chance de coup critique en plus, par niveau | 2 % | `SHOP_ITEMS.critChance.value` |
| Prix du 1er niveau | 20 or | `SHOP_ITEMS.critChance.baseCost` |
| Le prix est multiplié par ce nombre à chaque niveau | 1,6 × | `SHOP_ITEMS.critChance.costGrowth` |
| Niveau maximum | 10 | `SHOP_ITEMS.critChance.maxLevel` |

### Dégâts critiques

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Dégâts critiques en plus, par niveau | 20 % | `SHOP_ITEMS.critDamage.value` |
| Prix du 1er niveau | 20 or | `SHOP_ITEMS.critDamage.baseCost` |
| Le prix est multiplié par ce nombre à chaque niveau | 1,6 × | `SHOP_ITEMS.critDamage.costGrowth` |
| Niveau maximum | ∞ | `SHOP_ITEMS.critDamage.maxLevel` |

### Vitesse des balles

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Vitesse des balles en plus, par niveau | 15 % | `SHOP_ITEMS.bulletSpeed.value` |
| Prix du 1er niveau | 8 or | `SHOP_ITEMS.bulletSpeed.baseCost` |
| Le prix est multiplié par ce nombre à chaque niveau | 1,4 × | `SHOP_ITEMS.bulletSpeed.costGrowth` |
| Niveau maximum | 6 | `SHOP_ITEMS.bulletSpeed.maxLevel` |

### Accélérer le temps

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Prix du 1er niveau (vitesse x4 ; x2 est offerte par le tutoriel) | 80 or | `SHOP_ITEMS.speed.baseCost` |
| Le prix est multiplié par ce nombre à chaque niveau | 4 × | `SHOP_ITEMS.speed.costGrowth` |

### Sauter dans le temps

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Prix du 1er niveau (le 2e saut ; le 1er est offert par le tutoriel) | 45 or | `SHOP_ITEMS.skip.baseCost` |
| Le prix est multiplié par ce nombre à chaque niveau | 3 × | `SHOP_ITEMS.skip.costGrowth` |

### Liens d'orbite

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Prix du 1er niveau (le lien « Droite ») | 30 or | `SHOP_ITEMS.links.baseCost` |
| Le prix est multiplié par ce nombre à chaque niveau | 2,5 × | `SHOP_ITEMS.links.costGrowth` |

### Nouvelle divinité

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Prix du 1er dieu (acheté à la fin de la 1re partie, pendant le tutoriel) | 20 or | `SHOP_ITEMS.god.baseCost` |
| Chaque dieu coûte X fois plus cher que le précédent (le 2e : 20 x 10 = 200 or) | 10 × | `SHOP_ITEMS.god.costGrowth` |

## Compétences

### Prix en XP

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Prix de la compétence de départ (et prix de base des petites compétences) | 5 XP | `SKILL_COST_BASE` |
| Prix en plus, pour une petite compétence, par pas qui la sépare du départ | 4 XP | `SKILL_COST_PER_STEP` |
| Une notable coûte X fois plus qu'une petite compétence au même endroit | 1,5 × | `NOTABLE_COST_MULTIPLIER` |
| Prix d'une keystone (+ 2 XP par pas depuis le départ) | 60 XP | `KEYSTONE_COST` |
| Prix de la grande keystone | 150 XP | `GRAND_COST` |
| Chaque dieu a des compétences X fois plus chères que le dieu d'avant | 1,5 × | `SKILL_TIER_GROWTH` |

### Éveil des dieux

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Dégâts en plus pour la planète, par niveau d'Éveil | 5 % | `AWAKENING_DAMAGE_PER_LEVEL` |
| Prix du 1er niveau d'Éveil du 1er dieu (× la hausse des compétences pour chaque dieu suivant) | 100 XP | `AWAKENING_BASE_COST` |
| Le prix est multiplié par ce nombre à chaque niveau d'Éveil | 1,25 × | `AWAKENING_COST_GROWTH` |

## Compétences des dieux

### Héphaïstos

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Dactyle (petite compétence) : « +X dégât par balle » | 0,5 | `SKILLS.Héphaïstos.Dactyle.damage` |
| Telchine (petite compétence) : « Balles X% plus grosses » | 8 % | `SKILLS.Héphaïstos.Telchine.bulletSize` |
| Cyclope (petite compétence) : « +X% de dégâts critiques » | 10 % | `SKILLS.Héphaïstos.Cyclope.critDamage` |
| Lemnos (au bout d'une voie) : « +X% de dégâts » | 15 % | `SKILLS.Héphaïstos.Lemnos.damageMultiplier` |
| Cacus (au bout d'une voie) : « La traînée de feu brûle plus fort : +X% des dégâts de la balle par seconde » | 40 % | `SKILLS.Héphaïstos.Cacus.fireTrail` |
| Phlégéthon (au bout d'une voie) : « Traînée de feu : les balles d'Héphaïstos laissent derrière elles une traînée de feu ; les ennemis qui la touchent brûlent (X% des dégâts de la balle par seconde) » | 40 % | `SKILLS.Héphaïstos.Phlégéthon.fireTrail` |
| Pyrois (au bout d'une voie) : « La traînée de feu dure X s de plus » | 0,6 s | `SKILLS.Héphaïstos.Pyrois.fireTrailDuration` |
| Aethon (au bout d'une voie) : « La traînée de feu brûle plus fort : +X% des dégâts de la balle par seconde » | 40 % | `SKILLS.Héphaïstos.Aethon.fireTrail` |
| Pyriphlégéthon (au bout d'une voie) : « Brasier : la traînée de feu est X fois plus large et dure … s de plus » (100 % = 2 fois) | 100 % | `SKILLS.Héphaïstos.Pyriphlégéthon.fireTrailWidth` |
| Pyriphlégéthon (au bout d'une voie) : « Brasier : la traînée de feu est … fois plus large et dure X s de plus » | 1 s | `SKILLS.Héphaïstos.Pyriphlégéthon.fireTrailDuration` |
| Hestia (départ) : « +X dégât par balle » | 1 | `SKILLS.Héphaïstos.Hestia.damage` |
| Prométhée (notable) : « +X% de chance de coup critique » | 3 % | `SKILLS.Héphaïstos.Prométhée.critChance` |
| Kédalion (notable) : « +X% de dégâts critiques » | 25 % | `SKILLS.Héphaïstos.Kédalion.critDamage` |
| Stéropès (notable) : « Balles X% plus grosses » | 20 % | `SKILLS.Héphaïstos.Stéropès.bulletSize` |
| Argès (notable) : « +X dégâts par balle » | 2 | `SKILLS.Héphaïstos.Argès.damage` |
| Aglaé (notable) : « Les balles traversent X ennemi de plus » | 1 | `SKILLS.Héphaïstos.Aglaé.pierce` |
| Talos (notable) : « +X% de dégâts » | 15 % | `SKILLS.Héphaïstos.Talos.damageMultiplier` |
| Kratos (notable) : « +X dégât par balle » | 1 | `SKILLS.Héphaïstos.Kratos.damage` |
| Bia (notable) : « Les balles traversent X ennemi de plus » | 1 | `SKILLS.Héphaïstos.Bia.pierce` |
| Brontès (keystone) : « Marteau : +X% de dégâts, mais …% de vitesse d'attaque en moins » | 100 % | `SKILLS.Héphaïstos.Brontès.damageMultiplier` |
| Brontès (keystone) : « Marteau : +…% de dégâts, mais X% de vitesse d'attaque en moins » (négatif = en moins) | -35 % | `SKILLS.Héphaïstos.Brontès.attackSpeed` |
| Cabires (keystone) : « Enclume : balles X fois plus grosses, mais …% plus lentes » (100 % = 2 fois) | 100 % | `SKILLS.Héphaïstos.Cabires.bulletSize` |
| Cabires (keystone) : « Enclume : balles … fois plus grosses, mais X% plus lentes » (négatif = en moins) | -30 % | `SKILLS.Héphaïstos.Cabires.bulletSpeed` |
| Hécate (keystone) : « Coulée de lave : les balles traversent TOUS les ennemis, jusqu'au bord de l'écran » (pas écrit dans la description) | 999 | `SKILLS.Héphaïstos.Hécate.pierce` |
| Etna (grande keystone) : « GRANDE KEYSTONE : +X% de dégâts et balles …% plus grosses, mais …% de vitesse d'attaque en moins » | 150 % | `SKILLS.Héphaïstos.Etna.damageMultiplier` |
| Etna (grande keystone) : « GRANDE KEYSTONE : +…% de dégâts et balles X% plus grosses, mais …% de vitesse d'attaque en moins » | 50 % | `SKILLS.Héphaïstos.Etna.bulletSize` |
| Etna (grande keystone) : « GRANDE KEYSTONE : +…% de dégâts et balles …% plus grosses, mais X% de vitesse d'attaque en moins » (négatif = en moins) | -30 % | `SKILLS.Héphaïstos.Etna.attackSpeed` |

### Poséidon

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Néréide (petite compétence) : « +X PV max » | 1 PV | `SKILLS.Poséidon.Néréide.maxHealth` |
| Océanide (petite compétence) : « +X PV régénérés par seconde » | 0,02 PV/s | `SKILLS.Poséidon.Océanide.regen` |
| Naïade (petite compétence) : « Ennemis frêles : +X% de dégâts subis » | 2 % | `SKILLS.Poséidon.Naïade.fragility` |
| Amymone (au bout d'une voie) : « +X de portée (la vague va aussi plus loin) » | 40 px | `SKILLS.Poséidon.Amymone.range` |
| Pontos (au bout d'une voie) : « Ennemis frêles : +X% de dégâts subis » | 5 % | `SKILLS.Poséidon.Pontos.fragility` |
| Eurybia (au bout d'une voie) : « La vague : +X de réduction de recharge » | 15 | `SKILLS.Poséidon.Eurybia.cooldownReduction` |
| Cymo (au bout d'une voie) : « +X de portée » | 20 px | `SKILLS.Poséidon.Cymo.range` |
| Cymopolée (au bout d'une voie) : « Ressac : +X de portée (la vague va aussi plus loin) » | 60 px | `SKILLS.Poséidon.Cymopolée.range` |
| Rhodé (au bout d'une voie) : « +X de portée » | 30 px | `SKILLS.Poséidon.Rhodé.range` |
| Benthésicymé (au bout d'une voie) : « Houle : +X de portée (la vague va aussi plus loin) » | 80 px | `SKILLS.Poséidon.Benthésicymé.range` |
| Thétis (départ) : « Raz-de-marée : toutes les … s, une vague part de Poséidon jusqu'à sa portée, repousse les ennemis, les ralentit et les rend frêles : +…% de dégâts subis pendant … s » (pas écrit dans la description) | 60 | `SKILLS.Poséidon.Thétis.tideWave` |
| Thétis (départ) : « Raz-de-marée : toutes les … s, une vague part de Poséidon jusqu'à sa portée, repousse les ennemis, les ralentit et les rend frêles : +X% de dégâts subis pendant … s » | 35 % | `SKILLS.Poséidon.Thétis.fragility` |
| Doris (notable) : « +X PV régénérés par seconde » | 0,05 PV/s | `SKILLS.Poséidon.Doris.regen` |
| Galatée (notable) : « +X de portée (la vague va aussi plus loin) » | 40 px | `SKILLS.Poséidon.Galatée.range` |
| Protée (notable) : « +X points d'esquive » | 10 | `SKILLS.Poséidon.Protée.dodge` |
| Phorcys (notable) : « Bouclier : bloque un coup, se recharge en … s » (pas écrit dans la description) | 1 | `SKILLS.Poséidon.Phorcys.shield` |
| Glaucos (notable) : « Ennemis frêles : +X% de dégâts subis » | 5 % | `SKILLS.Poséidon.Glaucos.fragility` |
| Leucothée (notable) : « La vague : +X de réduction de recharge » | 15 | `SKILLS.Poséidon.Leucothée.cooldownReduction` |
| Palémon (notable) : « +X de recul de la vague » | 30 | `SKILLS.Poséidon.Palémon.tideWave` |
| Nérée (notable) : « +X PV max » | 3 PV | `SKILLS.Poséidon.Nérée.maxHealth` |
| Amphitrite (keystone) : « Bouclier des marées : chaque vague te rend invincible pendant X s » | 2 | `SKILLS.Poséidon.Amphitrite.tideShield` |
| Céto (keystone) : « Ennemis frêles : +X% de dégâts subis » | 15 % | `SKILLS.Poséidon.Céto.fragility` |
| Triton (keystone) : « La vague : +X de réduction de recharge, et +… de portée » | 40 | `SKILLS.Poséidon.Triton.cooldownReduction` |
| Triton (keystone) : « La vague : +… de réduction de recharge, et +X de portée » | 80 px | `SKILLS.Poséidon.Triton.range` |
| Océanos (grande keystone) : « GRANDE KEYSTONE : ennemis frêles +X% de dégâts subis, et bouclier des marées +… s » | 25 % | `SKILLS.Poséidon.Océanos.fragility` |
| Océanos (grande keystone) : « GRANDE KEYSTONE : ennemis frêles +…% de dégâts subis, et bouclier des marées +X s » | 1 | `SKILLS.Poséidon.Océanos.tideShield` |

### Déméter

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Dryade (petite compétence) : « +X PV regagné par ennemi tué » | 0,05 PV | `SKILLS.Déméter.Dryade.lifeOnKill` |
| Hamadryade (petite compétence) : « +X% d'XP gagnée » | 5 % | `SKILLS.Déméter.Hamadryade.xpMultiplier` |
| Mélie (petite compétence) : « +X de rayon du rayon de vie » | 8 | `SKILLS.Déméter.Mélie.bloomRadius` |
| Despina (au bout d'une voie) : « +X liane à chaque rayon de vie » | 1 | `SKILLS.Déméter.Despina.vineCount` |
| Métanire (au bout d'une voie) : « Le rayon de vie soigne X PV de plus » | 0,5 PV | `SKILLS.Déméter.Métanire.bloomHeal` |
| Dryope (au bout d'une voie) : « +X de rayon du rayon de vie » | 25 | `SKILLS.Déméter.Dryope.bloomRadius` |
| Perséphone (départ) : « Rayon de vie : toutes les … s, Déméter te soigne de X PV et affaiblit les ennemis autour d'elle (+…% de dégâts subis pendant … s) » | 1 PV | `SKILLS.Déméter.Perséphone.bloomHeal` |
| Perséphone (départ) : « Rayon de vie : toutes les … s, Déméter te soigne de … PV et affaiblit les ennemis autour d'elle (+…% de dégâts subis pendant … s) » (pas écrit dans la description) | 120 | `SKILLS.Déméter.Perséphone.bloomRadius` |
| Thallo (notable) : « +X% d'XP gagnée » | 10 % | `SKILLS.Déméter.Thallo.xpMultiplier` |
| Auxo (notable) : « Le rayon de vie soigne X PV de plus » | 0,5 PV | `SKILLS.Déméter.Auxo.bloomHeal` |
| Chloris (notable) : « +X PV régénérés par seconde » | 0,05 PV/s | `SKILLS.Déméter.Chloris.regen` |
| Aristée (notable) : « +X PV regagnés par ennemi tué » | 0,2 PV | `SKILLS.Déméter.Aristée.lifeOnKill` |
| Iasion (notable) : « +X de rayon du rayon de vie » | 25 | `SKILLS.Déméter.Iasion.bloomRadius` |
| Eubouleus (notable) : « +X liane à chaque rayon de vie » | 1 | `SKILLS.Déméter.Eubouleus.vineCount` |
| Carpo (notable) : « Le rayon de vie : +X de réduction de recharge » | 15 | `SKILLS.Déméter.Carpo.cooldownReduction` |
| Anthée (notable) : « Les lianes immobilisent X s de plus » | 1 s | `SKILLS.Déméter.Anthée.vineDuration` |
| Karpos (keystone) : « Lianes : chaque rayon de vie fait pousser X lianes sous des ennemis, qui les immobilisent … s (pas les super ennemis) » | 3 | `SKILLS.Déméter.Karpos.vineCount` |
| Triptolème (keystone) : « Le rayon de vie soigne X PV de plus, et +… de réduction de recharge » | 2 PV | `SKILLS.Déméter.Triptolème.bloomHeal` |
| Triptolème (keystone) : « Le rayon de vie soigne … PV de plus, et +X de réduction de recharge » | 30 | `SKILLS.Déméter.Triptolème.cooldownReduction` |
| Pan (keystone) : « +X de rayon du rayon de vie et +… lianes » | 60 | `SKILLS.Déméter.Pan.bloomRadius` |
| Pan (keystone) : « +… de rayon du rayon de vie et +X lianes » | 2 | `SKILLS.Déméter.Pan.vineCount` |
| Gaïa (grande keystone) : « GRANDE KEYSTONE : +X lianes, qui immobilisent … s de plus, et +… de réduction de recharge du rayon de vie (2 fois plus souvent) » | 3 | `SKILLS.Déméter.Gaïa.vineCount` |
| Gaïa (grande keystone) : « GRANDE KEYSTONE : +… lianes, qui immobilisent X s de plus, et +… de réduction de recharge du rayon de vie (2 fois plus souvent) » | 2 s | `SKILLS.Déméter.Gaïa.vineDuration` |
| Gaïa (grande keystone) : « GRANDE KEYSTONE : +… lianes, qui immobilisent … s de plus, et +X de réduction de recharge du rayon de vie (2 fois plus souvent) » | 100 | `SKILLS.Déméter.Gaïa.cooldownReduction` |

### Éole

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Aura (petite compétence) : « +X de portée » | 15 px | `SKILLS.Éole.Aura.range` |
| Héliade (petite compétence) : « +X% de vitesse des balles » | 10 % | `SKILLS.Éole.Héliade.bulletSpeed` |
| Anémoï (petite compétence) : « +X% de vitesse d'attaque » | 6 % | `SKILLS.Éole.Anémoï.attackSpeed` |
| Kaikias (au bout d'une voie) : « +X% de vitesse d'attaque » | 15 % | `SKILLS.Éole.Kaikias.attackSpeed` |
| Skiron (au bout d'une voie) : « +X% de vitesse des balles » | 20 % | `SKILLS.Éole.Skiron.bulletSpeed` |
| Zéphyr (départ) : « +X% de vitesse d'attaque » | 10 % | `SKILLS.Éole.Zéphyr.attackSpeed` |
| Éos (notable) : « +X de portée » | 30 px | `SKILLS.Éole.Éos.range` |
| Héméra (notable) : « +X% de vitesse d'attaque » | 20 % | `SKILLS.Éole.Héméra.attackSpeed` |
| Iris (notable) : « +X% de vitesse des balles » | 20 % | `SKILLS.Éole.Iris.bulletSpeed` |
| Borée (notable) : « +X% de vitesse d'attaque » | 15 % | `SKILLS.Éole.Borée.attackSpeed` |
| Notos (notable) : « +X dégât contre les plantes » | 1 | `SKILLS.Éole.Notos.damageVs` |
| Euros (notable) : « +X dégâts contre les plantes » | 2 | `SKILLS.Éole.Euros.damageVs` |
| Phosphoros (notable) : « +X% de vitesse des balles » | 30 % | `SKILLS.Éole.Phosphoros.bulletSpeed` |
| Hespéros (notable) : « +X% de vitesse d'attaque » | 10 % | `SKILLS.Éole.Hespéros.attackSpeed` |
| Séléné (keystone) : « Rafale : +X% de vitesse d'attaque, mais …% de dégâts en moins » | 100 % | `SKILLS.Éole.Séléné.attackSpeed` |
| Séléné (keystone) : « Rafale : +…% de vitesse d'attaque, mais X% de dégâts en moins » (négatif = en moins) | -30 % | `SKILLS.Éole.Séléné.damageMultiplier` |
| Phaéton (keystone) : « +X balle par tir » | 1 | `SKILLS.Éole.Phaéton.bulletCount` |
| Astraïos (keystone) : « Ouragan : +X% de vitesse d'attaque, mais balles …% plus petites » | 60 % | `SKILLS.Éole.Astraïos.attackSpeed` |
| Astraïos (keystone) : « Ouragan : +…% de vitesse d'attaque, mais balles X% plus petites » (négatif = en moins) | -40 % | `SKILLS.Éole.Astraïos.bulletSize` |
| Thyella (grande keystone) : « GRANDE KEYSTONE : +X% de vitesse d'attaque et +… balle par tir, mais …% de dégâts en moins » | 150 % | `SKILLS.Éole.Thyella.attackSpeed` |
| Thyella (grande keystone) : « GRANDE KEYSTONE : +…% de vitesse d'attaque et +X balle par tir, mais …% de dégâts en moins » | 1 | `SKILLS.Éole.Thyella.bulletCount` |
| Thyella (grande keystone) : « GRANDE KEYSTONE : +…% de vitesse d'attaque et +… balle par tir, mais X% de dégâts en moins » (négatif = en moins) | -30 % | `SKILLS.Éole.Thyella.damageMultiplier` |

### Apollon

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Pléiade (petite compétence) : « +X% d'or gagné » | 5 % | `SKILLS.Apollon.Pléiade.goldMultiplier` |
| Hyade (petite compétence) : « +X% d'XP gagnée » | 5 % | `SKILLS.Apollon.Hyade.xpMultiplier` |
| Titanide (petite compétence) : « +X dégât par balle » | 0,5 | `SKILLS.Apollon.Titanide.damage` |
| Amalthée (au bout d'une voie) : « +X% d'or gagné » | 25 % | `SKILLS.Apollon.Amalthée.goldMultiplier` |
| Phébé (au bout d'une voie) : « +X% de vitesse d'attaque » | 15 % | `SKILLS.Apollon.Phébé.attackSpeed` |
| Nyx (au bout d'une voie) : « +X dégâts par balle » | 2 | `SKILLS.Apollon.Nyx.damage` |
| Tyché (départ) : « +X% d'or gagné » | 10 % | `SKILLS.Apollon.Tyché.goldMultiplier` |
| Kairos (notable) : « +X% d'or gagné » | 15 % | `SKILLS.Apollon.Kairos.goldMultiplier` |
| Eutychia (notable) : « +X% d'or gagné » | 25 % | `SKILLS.Apollon.Eutychia.goldMultiplier` |
| Coéos (notable) : « +X% d'XP gagnée » | 10 % | `SKILLS.Apollon.Coéos.xpMultiplier` |
| Mnémosyne (notable) : « +X% d'XP gagnée » | 20 % | `SKILLS.Apollon.Mnémosyne.xpMultiplier` |
| Hypérion (notable) : « +X dégât par balle » | 1 | `SKILLS.Apollon.Hypérion.damage` |
| Astrée (notable) : « +X dégât contre les ennemis d'air » | 1 | `SKILLS.Apollon.Astrée.damageVs` |
| Agathodaïmon (notable) : « +X% d'or gagné » | 10 % | `SKILLS.Apollon.Agathodaïmon.goldMultiplier` |
| Théia (notable) : « +X dégât par balle » | 1 | `SKILLS.Apollon.Théia.damage` |
| Ploutos (keystone) : « +X% d'or gagné » | 50 % | `SKILLS.Apollon.Ploutos.goldMultiplier` |
| Astéria (keystone) : « +X balle par tir » | 1 | `SKILLS.Apollon.Astéria.bulletCount` |
| Érébos (keystone) : « +X dégâts par balle » | 3 | `SKILLS.Apollon.Érébos.damage` |
| Chaos (grande keystone) : « GRANDE KEYSTONE : +X% d'or gagné » | 100 % | `SKILLS.Apollon.Chaos.goldMultiplier` |

### Artémis

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Nymphe (petite compétence) : « +X de portée » | 10 px | `SKILLS.Artémis.Nymphe.range` |
| Oréade (petite compétence) : « +X dégât par balle » | 0,5 | `SKILLS.Artémis.Oréade.damage` |
| Pléione (petite compétence) : « +X% de vitesse des balles » | 8 % | `SKILLS.Artémis.Pléione.bulletSpeed` |
| Méléagre (au bout d'une voie) : « Les balles rebondissent sur X ennemi de plus » | 1 | `SKILLS.Artémis.Méléagre.bounce` |
| Endymion (au bout d'une voie) : « Flèche de lune : +X fois les dégâts d'une balle » | 1 | `SKILLS.Artémis.Endymion.moonArrow` |
| Léto (départ) : « Flèche de lune : toutes les … s, Artémis tire une grande flèche qui transperce tous les ennemis sur son passage (X fois les dégâts d'une balle) » | 3 | `SKILLS.Artémis.Léto.moonArrow` |
| Callisto (notable) : « +X% de vitesse d'attaque » | 10 % | `SKILLS.Artémis.Callisto.attackSpeed` |
| Britomartis (notable) : « +X dégât par balle » | 1 | `SKILLS.Artémis.Britomartis.damage` |
| Aréthuse (notable) : « Flèche de lune : +X fois les dégâts d'une balle » | 1 | `SKILLS.Artémis.Aréthuse.moonArrow` |
| Opis (notable) : « +X% de vitesse des balles » | 20 % | `SKILLS.Artémis.Opis.bulletSpeed` |
| Cyrène (notable) : « La flèche de lune : +X de réduction de recharge » | 15 | `SKILLS.Artémis.Cyrène.cooldownReduction` |
| Atalante (notable) : « +X% de vitesse d'attaque » | 15 % | `SKILLS.Artémis.Atalante.attackSpeed` |
| Procris (notable) : « +X dégât par balle » | 1 | `SKILLS.Artémis.Procris.damage` |
| Taygète (notable) : « +X de portée » | 30 px | `SKILLS.Artémis.Taygète.range` |
| Orion (keystone) : « Rebond : les balles d'Artémis rebondissent sur X autres ennemis proches » | 2 | `SKILLS.Artémis.Orion.bounce` |
| Hippolyte (keystone) : « Flèche de lune : +X fois les dégâts d'une balle, et +… de réduction de recharge » | 3 | `SKILLS.Artémis.Hippolyte.moonArrow` |
| Hippolyte (keystone) : « Flèche de lune : +… fois les dégâts d'une balle, et +X de réduction de recharge » | 30 | `SKILLS.Artémis.Hippolyte.cooldownReduction` |
| Actéon (keystone) : « +X rebond et +…% de vitesse d'attaque » | 1 | `SKILLS.Artémis.Actéon.bounce` |
| Actéon (keystone) : « +… rebond et +X% de vitesse d'attaque » | 25 % | `SKILLS.Artémis.Actéon.attackSpeed` |
| Agrotera (grande keystone) : « GRANDE KEYSTONE : +X de réduction de recharge de la flèche de lune (2 fois plus souvent), et +… fois les dégâts d'une balle » | 100 | `SKILLS.Artémis.Agrotera.cooldownReduction` |
| Agrotera (grande keystone) : « GRANDE KEYSTONE : +… de réduction de recharge de la flèche de lune (2 fois plus souvent), et +X fois les dégâts d'une balle » | 4 | `SKILLS.Artémis.Agrotera.moonArrow` |

### Athéna

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Nikè (petite compétence) : « +X PV max » | 1 PV | `SKILLS.Athéna.Nikè.maxHealth` |
| Aglaure (petite compétence) : « +X points d'esquive » | 2 | `SKILLS.Athéna.Aglaure.dodge` |
| Hersé (petite compétence) : « +X% d'XP gagnée » | 4 % | `SKILLS.Athéna.Hersé.xpMultiplier` |
| Pallas (au bout d'une voie) : « +X points d'esquive » | 8 | `SKILLS.Athéna.Pallas.dodge` |
| Bellérophon (au bout d'une voie) : « +X dégâts par balle » | 2 | `SKILLS.Athéna.Bellérophon.damage` |
| Métis (départ) : « +X% d'XP gagnée » | 5 % | `SKILLS.Athéna.Métis.xpMultiplier` |
| Érichthonios (notable) : « +X dégât par balle » | 1 | `SKILLS.Athéna.Érichthonios.damage` |
| Pandrosos (notable) : « +X PV max » | 2 PV | `SKILLS.Athéna.Pandrosos.maxHealth` |
| Arachné (notable) : « +X% de vitesse d'attaque » | 10 % | `SKILLS.Athéna.Arachné.attackSpeed` |
| Tritonis (notable) : « +X points d'esquive » | 5 | `SKILLS.Athéna.Tritonis.dodge` |
| Ergané (notable) : « +X dégât par balle » | 1 | `SKILLS.Athéna.Ergané.damage` |
| Zélos (notable) : « +X% de vitesse d'attaque » | 10 % | `SKILLS.Athéna.Zélos.attackSpeed` |
| Hygie (notable) : « +X PV régénérés par seconde » | 0,05 PV/s | `SKILLS.Athéna.Hygie.regen` |
| Aidôs (notable) : « +X% d'XP gagnée » | 10 % | `SKILLS.Athéna.Aidôs.xpMultiplier` |
| Égide (keystone) : « +X points d'esquive » | 8 | `SKILLS.Athéna.Égide.dodge` |
| Promachos (keystone) : « +X dégâts par balle » | 2 | `SKILLS.Athéna.Promachos.damage` |
| Glaucopis (keystone) : « +X de portée (les yeux de la chouette) » | 60 px | `SKILLS.Athéna.Glaucopis.range` |
| Parthénos (grande keystone) : « GRANDE KEYSTONE : +X% d'XP gagnée » | 100 % | `SKILLS.Athéna.Parthénos.xpMultiplier` |

### Zeus

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Astrapé (petite compétence) : « +X dégât par balle » | 0,5 | `SKILLS.Zeus.Astrapé.damage` |
| Brontè (petite compétence) : « +X% de vitesse d'attaque » | 5 % | `SKILLS.Zeus.Brontè.attackSpeed` |
| Kéraunos (petite compétence) : « Éclairs : +X% de dégâts » | 5 % | `SKILLS.Zeus.Kéraunos.arcDamage` |
| Salmonée (au bout d'une voie) : « +X éclair par balle » | 1 | `SKILLS.Zeus.Salmonée.chainArcs` |
| Dodone (au bout d'une voie) : « +X% de vitesse d'attaque » | 20 % | `SKILLS.Zeus.Dodone.attackSpeed` |
| Thémis (départ) : « Arc électrique : chaque balle de Zeus qui touche envoie un éclair vers un ennemi proche (…% des dégâts), qui devient conducteur » (pas écrit dans la description) | 1 | `SKILLS.Zeus.Thémis.chainArcs` |
| Thémis (départ) : « Arc électrique : chaque balle de Zeus qui touche envoie un éclair vers un ennemi proche (X% des dégâts), qui devient conducteur » | 40 % | `SKILLS.Zeus.Thémis.arcDamage` |
| Dikè (notable) : « +X dégât par balle » | 1 | `SKILLS.Zeus.Dikè.damage` |
| Eiréné (notable) : « +X éclair par balle » | 1 | `SKILLS.Zeus.Eiréné.chainArcs` |
| Eunomia (notable) : « +X de portée des éclairs » | 40 | `SKILLS.Zeus.Eunomia.arcRange` |
| Horkos (notable) : « Éclairs : +X% de dégâts » | 10 % | `SKILLS.Zeus.Horkos.arcDamage` |
| Ganymède (notable) : « +X% de vitesse d'attaque » | 10 % | `SKILLS.Zeus.Ganymède.attackSpeed` |
| Hébé (notable) : « +X éclair par balle » | 1 | `SKILLS.Zeus.Hébé.chainArcs` |
| Némésis (notable) : « +X dégât par balle » | 1 | `SKILLS.Zeus.Némésis.damage` |
| Io (notable) : « Éclairs : +X% de dégâts » | 15 % | `SKILLS.Zeus.Io.arcDamage` |
| Aétos (keystone) : « Foudre : un ennemi conducteur touché par un 2e éclair reçoit la foudre (X fois les dégâts de la balle), qui électrocute les ennemis autour : ils deviennent conducteurs à leur tour » | 3 | `SKILLS.Zeus.Aétos.boltDamage` |
| Ammon (keystone) : « +X balle par tir » | 1 | `SKILLS.Zeus.Ammon.bulletCount` |
| Olympios (keystone) : « +X éclairs par balle et +… de portée des éclairs » | 2 | `SKILLS.Zeus.Olympios.chainArcs` |
| Olympios (keystone) : « +… éclairs par balle et +X de portée des éclairs » | 40 | `SKILLS.Zeus.Olympios.arcRange` |
| Aithér (grande keystone) : « GRANDE KEYSTONE : la foudre fait +X fois les dégâts de la balle et électrocute …% plus loin » | 4 | `SKILLS.Zeus.Aithér.boltDamage` |
| Aithér (grande keystone) : « GRANDE KEYSTONE : la foudre fait +… fois les dégâts de la balle et électrocute X% plus loin » | 50 % | `SKILLS.Zeus.Aithér.boltRadius` |

### Arès

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Phobos (petite compétence) : « +X dégât par balle » | 0,5 | `SKILLS.Arès.Phobos.damage` |
| Deimos (petite compétence) : « Cri de guerre : +X s » | 0,3 s | `SKILLS.Arès.Deimos.warCryDuration` |
| Alala (petite compétence) : « +X PV regagné par ennemi tué » | 0,05 PV | `SKILLS.Arès.Alala.lifeOnKill` |
| Diomède (au bout d'une voie) : « +X PV regagné par ennemi tué » | 0,2 PV | `SKILLS.Arès.Diomède.lifeOnKill` |
| Ascalaphe (au bout d'une voie) : « Cri de guerre : +X s » | 1 s | `SKILLS.Arès.Ascalaphe.warCryDuration` |
| Ényo (départ) : « Cri de guerre : toutes les … s, toi et toutes les planètes faites +…% de dégâts, +…% de chance de critique et +…% de dégâts critiques pendant … s » (pas écrit dans la description) | 1 | `SKILLS.Arès.Ényo.warCry` |
| Éris (notable) : « +X dégât par balle » | 1 | `SKILLS.Arès.Éris.damage` |
| Kydoimos (notable) : « +X% de vitesse d'attaque » | 10 % | `SKILLS.Arès.Kydoimos.attackSpeed` |
| Makhai (notable) : « Cri de guerre : +X s » | 1 s | `SKILLS.Arès.Makhai.warCryDuration` |
| Polémos (notable) : « +X dégât par balle » | 1 | `SKILLS.Arès.Polémos.damage` |
| Penthésilée (notable) : « +X PV regagné par ennemi tué » | 0,2 PV | `SKILLS.Arès.Penthésilée.lifeOnKill` |
| Otréra (notable) : « Le cri de guerre : +X de réduction de recharge » | 15 | `SKILLS.Arès.Otréra.cooldownReduction` |
| Antiope (notable) : « +X% de vitesse d'attaque » | 10 % | `SKILLS.Arès.Antiope.attackSpeed` |
| Androktasiai (notable) : « Cri de guerre X% plus fort » | 50 % | `SKILLS.Arès.Androktasiai.warCry` |
| Kyknos (keystone) : « Soif de gloire : chaque ennemi tué par Arès lui donne +X dégât par balle, pour toujours » | 0,001 | `SKILLS.Arès.Kyknos.damagePerKill` |
| Œnomaos (keystone) : « Cri de guerre X fois plus fort » (100 % = 2 fois) | 100 % | `SKILLS.Arès.Œnomaos.warCry` |
| Phlégyas (keystone) : « Le cri de guerre : +X de réduction de recharge, et dure … s de plus » | 30 | `SKILLS.Arès.Phlégyas.cooldownReduction` |
| Phlégyas (keystone) : « Le cri de guerre : +… de réduction de recharge, et dure X s de plus » | 1 s | `SKILLS.Arès.Phlégyas.warCryDuration` |
| Kères (grande keystone) : « GRANDE KEYSTONE : chaque ennemi tué par Arès lui donne +X dégât de plus, pour toujours, et cri de guerre … fois plus fort » | 0,002 | `SKILLS.Arès.Kères.damagePerKill` |
| Kères (grande keystone) : « GRANDE KEYSTONE : chaque ennemi tué par Arès lui donne +… dégât de plus, pour toujours, et cri de guerre X fois plus fort » (100 % = 2 fois) | 100 % | `SKILLS.Arès.Kères.warCry` |

### Aphrodite

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Charis (petite compétence) : « +X PV max » | 1 PV | `SKILLS.Aphrodite.Charis.maxHealth` |
| Himéros (petite compétence) : « +X de rayon de charme » | 6 | `SKILLS.Aphrodite.Himéros.charmRadius` |
| Pothos (petite compétence) : « +X points d'esquive » | 2 | `SKILLS.Aphrodite.Pothos.dodge` |
| Harmonie (au bout d'une voie) : « +X de rayon de charme » | 20 | `SKILLS.Aphrodite.Harmonie.charmRadius` |
| Énée (au bout d'une voie) : « Charme : +X s » | 0,5 s | `SKILLS.Aphrodite.Énée.charmDuration` |
| Éros (départ) : « Rayon de charme : toutes les … s, Aphrodite charme les ennemis autour d'elle pendant … s : ils font demi-tour et blessent leurs alliés (pas les super ennemis) » (pas écrit dans la description) | 80 | `SKILLS.Aphrodite.Éros.charmRadius` |
| Éros (départ) : « Rayon de charme : toutes les … s, Aphrodite charme les ennemis autour d'elle pendant X s : ils font demi-tour et blessent leurs alliés (pas les super ennemis) » | 2 s | `SKILLS.Aphrodite.Éros.charmDuration` |
| Peitho (notable) : « Charme : +X s » | 0,5 s | `SKILLS.Aphrodite.Peitho.charmDuration` |
| Antéros (notable) : « +X points d'esquive » | 5 | `SKILLS.Aphrodite.Antéros.dodge` |
| Adonis (notable) : « +X de rayon de charme » | 20 | `SKILLS.Aphrodite.Adonis.charmRadius` |
| Psyché (notable) : « Le rayon de charme : +X de réduction de recharge » | 15 | `SKILLS.Aphrodite.Psyché.cooldownReduction` |
| Hymen (notable) : « +X PV regagné par ennemi tué » | 0,2 PV | `SKILLS.Aphrodite.Hymen.lifeOnKill` |
| Euphrosyne (notable) : « +X PV max » | 3 PV | `SKILLS.Aphrodite.Euphrosyne.maxHealth` |
| Hermaphrodite (notable) : « Charme : +X s » | 0,5 s | `SKILLS.Aphrodite.Hermaphrodite.charmDuration` |
| Rhodos (notable) : « Le rayon de charme : +X de réduction de recharge » | 15 | `SKILLS.Aphrodite.Rhodos.cooldownReduction` |
| Pandémos (keystone) : « Foule : +X de rayon de charme » | 50 | `SKILLS.Aphrodite.Pandémos.charmRadius` |
| Ourania (keystone) : « Les ennemis charmés blessent X fois plus leurs alliés » (100 % = 2 fois) | 100 % | `SKILLS.Aphrodite.Ourania.charmPower` |
| Cythérée (keystone) : « Le rayon de charme : +X de réduction de recharge » | 40 | `SKILLS.Aphrodite.Cythérée.cooldownReduction` |
| Phanès (grande keystone) : « GRANDE KEYSTONE : charme +X s, et +… de réduction de recharge du rayon de charme (2 fois plus souvent) » | 1,5 s | `SKILLS.Aphrodite.Phanès.charmDuration` |
| Phanès (grande keystone) : « GRANDE KEYSTONE : charme +… s, et +X de réduction de recharge du rayon de charme (2 fois plus souvent) » | 100 | `SKILLS.Aphrodite.Phanès.cooldownReduction` |

### Hermès

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Kéryx (petite compétence) : « +X% de vitesse des balles » | 8 % | `SKILLS.Hermès.Kéryx.bulletSpeed` |
| Hodios (petite compétence) : « +X% de vitesse d'attaque » | 4 % | `SKILLS.Hermès.Hodios.attackSpeed` |
| Agoraios (petite compétence) : « +X points d'esquive » | 2 | `SKILLS.Hermès.Agoraios.dodge` |
| Angelos (au bout d'une voie) : « +X% de vitesse d'attaque » | 15 % | `SKILLS.Hermès.Angelos.attackSpeed` |
| Dolios (au bout d'une voie) : « +X points d'esquive » | 5 | `SKILLS.Hermès.Dolios.dodge` |
| Kriophoros (au bout d'une voie) : « +X% de vitesse des balles » | 20 % | `SKILLS.Hermès.Kriophoros.bulletSpeed` |
| Maïa (départ) : « +X% de vitesse d'attaque » | 5 % | `SKILLS.Hermès.Maïa.attackSpeed` |
| Psychopompe (notable) : « +X% de vitesse des balles » | 20 % | `SKILLS.Hermès.Psychopompe.bulletSpeed` |
| Argos (notable) : « +X% de vitesse d'attaque » | 10 % | `SKILLS.Hermès.Argos.attackSpeed` |
| Chioné (notable) : « +X points d'esquive » | 5 | `SKILLS.Hermès.Chioné.dodge` |
| Autolycos (notable) : « +X% d'or gagné » | 10 % | `SKILLS.Hermès.Autolycos.goldMultiplier` |
| Myrtilos (notable) : « +X% de vitesse des balles » | 20 % | `SKILLS.Hermès.Myrtilos.bulletSpeed` |
| Daphnis (notable) : « +X% de vitesse d'attaque » | 10 % | `SKILLS.Hermès.Daphnis.attackSpeed` |
| Eudoros (notable) : « +X points d'esquive » | 5 | `SKILLS.Hermès.Eudoros.dodge` |
| Abdère (notable) : « +X% de vitesse des balles » | 15 % | `SKILLS.Hermès.Abdère.bulletSpeed` |
| Talaria (keystone) : « +X% de vitesse d'attaque » | 30 % | `SKILLS.Hermès.Talaria.attackSpeed` |
| Pétase (keystone) : « +X points d'esquive » | 10 | `SKILLS.Hermès.Pétase.dodge` |
| Caducée (keystone) : « +X balle par tir » | 1 | `SKILLS.Hermès.Caducée.bulletCount` |
| Aion (grande keystone) : « GRANDE KEYSTONE : +X% de vitesse d'attaque » | 50 % | `SKILLS.Hermès.Aion.attackSpeed` |

### Hestia

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Vestale (petite compétence) : « +X PV régénérés par seconde » | 0,02 PV/s | `SKILLS.Hestia.Vestale.regen` |
| Lare (petite compétence) : « +X PV max » | 1 PV | `SKILLS.Hestia.Lare.maxHealth` |
| Pénate (petite compétence) : « +X points d'esquive » | 2 | `SKILLS.Hestia.Pénate.dodge` |
| Prytanée (au bout d'une voie) : « +X PV régénérés par seconde » | 0,1 PV/s | `SKILLS.Hestia.Prytanée.regen` |
| Éléos (au bout d'une voie) : « +X points d'esquive » | 5 | `SKILLS.Hestia.Éléos.dodge` |
| Rhéa (départ) : « +X PV max » | 2 PV | `SKILLS.Hestia.Rhéa.maxHealth` |
| Tabiti (notable) : « +X PV régénérés par seconde » | 0,05 PV/s | `SKILLS.Hestia.Tabiti.regen` |
| Agathodaimon (notable) : « +X PV max » | 2 PV | `SKILLS.Hestia.Agathodaimon.maxHealth` |
| Philotès (notable) : « +X PV regagné par ennemi tué » | 0,2 PV | `SKILLS.Hestia.Philotès.lifeOnKill` |
| Eucléia (notable) : « +X points d'esquive » | 5 | `SKILLS.Hestia.Eucléia.dodge` |
| Homonoia (notable) : « +X PV régénérés par seconde » | 0,05 PV/s | `SKILLS.Hestia.Homonoia.regen` |
| Euthénia (notable) : « +X PV max » | 3 PV | `SKILLS.Hestia.Euthénia.maxHealth` |
| Elpis (notable) : « +X PV régénérés par seconde » | 0,1 PV/s | `SKILLS.Hestia.Elpis.regen` |
| Hestiade (notable) : « +X points d'esquive » | 5 | `SKILLS.Hestia.Hestiade.dodge` |
| Vesta (keystone) : « +X PV max » | 5 PV | `SKILLS.Hestia.Vesta.maxHealth` |
| Boulaia (keystone) : « +X PV régénérés par seconde » | 0,15 PV/s | `SKILLS.Hestia.Boulaia.regen` |
| Sôtéria (keystone) : « +X points d'esquive » | 10 | `SKILLS.Hestia.Sôtéria.dodge` |
| Ananké (grande keystone) : « GRANDE KEYSTONE : +X PV max » | 8 PV | `SKILLS.Hestia.Ananké.maxHealth` |

## Tutoriel

### La vague de la 1re partie

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Pendant la 1re partie du tutoriel, une énorme vague arrive à ce moment de la partie (le joueur meurt vite et découvre le shop) | 30 s | `TUTORIAL_WAVE_TIME` |
| Nombre d'ennemis de la vague, tout autour du joueur | 40 ennemis | `TUTORIAL_WAVE_ENEMIES` |
| Vie des ennemis de la vague, comparée à un ennemi normal | 3 × | `TUTORIAL_WAVE_HEALTH` |

## Temps

### Vitesses et sauts

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Vitesses du jeu (la 1re est la normale, la 2e est offerte par le tutoriel, les autres s'achètent dans le shop) | 1 ; 2 ; 4 × | `GAME_SPEED_OPTIONS` |
| Sauts dans le temps (un bouton par saut : le 1er est offert par le tutoriel, les autres s'achètent dans le shop) | 10 ; 30 ; 100 s | `TIME_SKIP_OPTIONS` |

### Recharge du saut

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Temps de recharge minimum après un saut | 4 s | `SKIP_COOLDOWN_MIN` |
| Recharge par seconde sautée (0.3 : un saut de 100 s → 30 s de recharge) | 0,3 s | `SKIP_COOLDOWN_PER_SECOND` |
| Temps de recharge maximum | 60 s | `SKIP_COOLDOWN_MAX` |

## Combos d'orbite

### Lien « Opposé »

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Héphaïstos en face : dégâts par balle en plus | 1 | `OPPOSITE_BONUSES.fire.damage` |
| Poséidon en face : bouclier ⚠️ (aussi écrit dans la description du bonus (« un bouclier qui bloque un coup »)) | 1 | `OPPOSITE_BONUSES.water.shield` |
| Poséidon en face : recharge du bouclier plus rapide | 50 % | `OPPOSITE_BONUSES.water.shieldRecharge` |
| Déméter en face : vie à chaque balle qui touche | 0,03 PV | `OPPOSITE_BONUSES.plant.lifeOnHit` |
| Éole en face : vitesse d'attaque en plus | 25 % | `OPPOSITE_BONUSES.air.attackSpeed` |
| Apollon en face : chance de critique en plus | 10 % | `OPPOSITE_BONUSES.light.critChance` |
| Artémis en face : portée en plus | 60 px | `OPPOSITE_BONUSES.moon.range` |
| Athéna en face : chance de déclencher un combo au hasard | 15 % | `OPPOSITE_BONUSES.aegis.comboProcChance` |
| Zeus en face : dégâts critiques en plus | 50 % | `OPPOSITE_BONUSES.thunder.critDamage` |
| Arès en face : vie à chaque ennemi tué | 0,5 PV | `OPPOSITE_BONUSES.war.lifeOnKill` |
| Aphrodite en face : vie max à chaque balle qui touche | 0,001 PV | `OPPOSITE_BONUSES.love.maxHealthOnHit` |
| Hermès en face : vitesse des balles en plus | 50 % | `OPPOSITE_BONUSES.swift.bulletSpeed` |
| Hestia en face : régénération en plus | 0,15 PV/s | `OPPOSITE_BONUSES.hearth.regen` |

### Explosions et zones

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Explosion : rayon | 70 px | `COMBO_EXPLOSION_RADIUS` |
| Explosion : dégâts sur chaque ennemi autour (× les dégâts de la balle) | 0,8 × | `COMBO_EXPLOSION_DAMAGE` |
| Braises / flaque au sol : durée | 3 s | `COMBO_ZONE_DURATION` |
| Braises / flaque au sol : rayon | 45 px | `COMBO_ZONE_RADIUS` |
| Graine explosive : disparaît après X secondes si personne ne marche dessus | 6 s | `COMBO_MINE_DURATION` |
| Graine explosive : dégâts (× les dégâts de la balle) | 2,5 × | `COMBO_MINE_DAMAGE` |
| Météore : dégâts (× les dégâts de la balle) | 3 × | `COMBO_METEOR_DAMAGE` |
| Éclats qui partent dans toutes les directions | 6 | `COMBO_NOVA_COUNT` |
| Dégâts d'un éclat (× les dégâts de la balle) | 0,6 × | `COMBO_NOVA_DAMAGE` |
| Tourbillon : rayon | 110 px | `COMBO_VORTEX_RADIUS` |
| Tourbillon : force d'attraction (100 % = colle tout le monde sur l'impact) | 60 % | `COMBO_VORTEX_PULL` |
| Trou noir : durée | 2 s | `COMBO_BLACKHOLE_DURATION` |
| Trou noir : rayon | 150 px | `COMBO_BLACKHOLE_RADIUS` |

### Brûlure, poison, saignement

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Brûlure : durée | 3 s | `COMBO_BURN_DURATION` |
| Brûlure : dégâts par seconde (× les dégâts de la balle) | 0,6 × | `COMBO_BURN_DPS` |
| Poison : durée | 4 s | `COMBO_POISON_DURATION` |
| Poison : dégâts par seconde (× les dégâts de la balle) | 0,5 × | `COMBO_POISON_DPS` |
| Poison : voisins contaminés quand un ennemi empoisonné meurt | 2 | `COMBO_POISON_SPREAD` |
| Saignement : durée | 4 s | `COMBO_BLEED_DURATION` |
| Saignement : dégâts par seconde ajoutés à chaque coup (× les dégâts de la balle) | 0,3 × | `COMBO_BLEED_DPS` |
| Saignement maximum (× les dégâts de la balle) | 3 × | `COMBO_BLEED_MAX` |

### Ralentir et bloquer

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Ralenti : durée | 2 s | `COMBO_SLOW_DURATION` |
| Ralenti : vitesse des ennemis ralentis | 45 % | `COMBO_SLOW_FACTOR` |
| Gel : durée (l'ennemi est immobile) | 1,2 s | `COMBO_FREEZE_DURATION` |
| Gel de zone : durée (plus court : il touche beaucoup d'ennemis) | 0,7 s | `COMBO_FREEZE_AREA_DURATION` |
| Racines : durée | 0,6 s | `COMBO_ROOT_DURATION` |
| Recul des ennemis touchés | 30 px | `COMBO_KNOCKBACK` |
| Confusion : l'ennemi repart en arrière pendant X secondes | 1,5 s | `COMBO_CONFUSE_DURATION` |
| Chance de renvoyer l'ennemi au bord de l'écran | 25 % | `COMBO_REWIND_CHANCE` |
| Charme : l'ennemi fait demi-tour pendant X secondes | 2,5 s | `COMBO_CHARM_DURATION` |
| Charme : dégâts par seconde de l'ennemi charmé sur les ennemis qu'il touche | 3 | `COMBO_CHARM_DPS` |

### Rebonds, éclats et foudre

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Rebond : distance max | 160 px | `COMBO_CHAIN_RANGE` |
| Rebond : dégâts (× les dégâts de la balle) | 0,7 × | `COMBO_CHAIN_DAMAGE` |
| Balle divisée : dégâts de chaque morceau (× les dégâts de la balle) | 0,5 × | `COMBO_SPLIT_DAMAGE` |
| Ennemis traversés par la balle | 1 | `COMBO_PIERCE_COUNT` |
| Écho : frappe une 2e fois après X secondes | 0,5 s | `COMBO_ECHO_DELAY` |
| Foudre : ennemis frappés au hasard sur tout l'écran | 2 | `COMBO_THUNDER_TARGETS` |
| Foudre : dégâts (× les dégâts de la balle) | 1,5 × | `COMBO_THUNDER_DAMAGE` |

### Critiques, soins et bouclier

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Chance de critique en plus | 20 % | `COMBO_CRIT_CHANCE` |
| Dégâts critiques en plus | 100 % | `COMBO_CRIT_BONUS_DAMAGE` |
| Soin à chaque coup | 0,08 PV | `COMBO_HEAL` |
| Recharge du bouclier gagnée à chaque coup | 0,6 s | `COMBO_SHIELD_CHARGE` |
| Achève les ennemis sous X % de leur vie (pas les super ennemis) | 20 % | `COMBO_EXECUTE_THRESHOLD` |
| Affaibli : durée | 3 s | `COMBO_WEAKEN_DURATION` |
| Affaibli : dégâts subis (1.5 = +50 %) | 1,5 × | `COMBO_WEAKEN_MULTIPLIER` |

## Caméra

### Dézoom selon la portée

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| La portée occupe au plus X % de la demi-largeur de l'écran | 95 % | `CAMERA_RANGE_SCREEN_RATIO` |
| Écran en hauteur (téléphone) : la caméra se base sur X % de la hauteur de l'écran quand c'est plus que sa largeur (la portée peut alors dépasser un peu sur les côtés, et le jeu dézoome moins) | 60 % | `CAMERA_PORTRAIT_HEIGHT_RATIO` |
| Au-delà de cette portée, la caméra ne dézoome plus (et les ennemis naissent plus près) | 1000 px | `CAMERA_MAX_RANGE` |

## Pack Premium

### Temps

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Vitesses du jeu en plus avec le Pack Premium (après celles du shop) | 8 ; 10 × | `PREMIUM_SPEEDS` |
| Sauts dans le temps en plus avec le Pack Premium (après ceux du shop) | 500 ; 999 s | `PREMIUM_SKIPS` |

