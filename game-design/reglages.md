# Les réglages du jeu

Généré à partir de `reglages.js` par `game-design/outils/generer-docs.js`.

Toutes les statistiques du jeu (309 réglages) sont dans le fichier `reglages.js`, à la racine du dépôt, rangées par catégories et sous-catégories. Pour les changer, le plus simple est l'**éditeur de réglages** : ouvre `game-design/outils/editeur-reglages.html` dans ton navigateur (double-clic), change les valeurs, « Tester dans le jeu », puis « Enregistrer » (voir [README.md](README.md)).

- Les pourcentages sont écrits en % ici et dans l'éditeur, mais en fraction dans `reglages.js` (10 % = 0.1).
- Le **nom dans le code** est celui que `index.html` lit avec `reglage("NOM")`.
- ⚠️ = ce nombre est aussi écrit dans un texte du jeu : si on le change, il faut aussi changer ce texte (dans `index.html` et `langues/`).
- Les valeurs de **chaque compétence** des skill trees ne sont pas ici : elles sont écrites dans leur description (voir [skills/](skills/README.md)), dans `SKILL_TREES_DATA` (`index.html`).

## Sommaire

- [Joueur](#joueur) : Stats de départ, Défense, Corps
- [Tirs](#tirs) : Joueur, Planètes, Balles
- [Planètes](#planètes) : Stats de départ, Orbites
- [Pouvoirs des dieux](#pouvoirs-des-dieux) : Rythme des pouvoirs, Héphaïstos : traînée de feu, Poséidon : la vague, Déméter : le rayon de vie, Artémis, Zeus, Arès : le cri de guerre, Contre les super ennemis
- [Ennemis](#ennemis) : Feu (rouge), Eau (bleu), Plante (vert), Air (blanc), Vie qui monte avec le temps, Taille, Apparition, Mouvements spéciaux
- [Super ennemis](#super-ennemis) : Tous les super ennemis, Cerbère, Hydre de Lerne, Méduse, Typhon, Chimère, Charybde, Python, Cronos
- [Shop](#shop) : Cadence de tir, Portée, Balle supplémentaire, Vie max, Dégâts, Régénération, Esquive, Chance de critique, Dégâts critiques, Vitesse des balles, Accélérer le temps, Sauter dans le temps, Liens d'orbite, Nouvelle divinité
- [Compétences](#compétences) : Prix en XP, Éveil des dieux
- [Tutoriel](#tutoriel) : La vague de la 1re partie
- [Temps](#temps) : Vitesses et sauts, Recharge du saut
- [Combos d'orbite](#combos-dorbite) : Lien « Opposé », Explosions et zones, Brûlure, poison, saignement, Ralentir et bloquer, Rebonds, éclats et foudre, Critiques, soins et bouclier
- [Caméra](#caméra) : Dézoom selon la portée

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
| Arrive à X secondes de jeu ⚠️ (aussi écrit dans le tutoriel (« Toutes les 5 minutes »)) | 300 s | `BOSSES.cerbere.time` |
| Vie (× la vie qui monte avec le temps, à son arrivée) | 15 PV | `BOSSES.cerbere.health` |
| Taille | 34 px | `BOSSES.cerbere.size` |
| Vitesse | 60 px/s | `BOSSES.cerbere.speed` |
| Or gagné en le tuant | 15 or | `BOSSES.cerbere.gold` |
| XP gagnée en le tuant | 15 XP | `BOSSES.cerbere.xp` |

### Hydre de Lerne

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Arrive à X secondes de jeu ⚠️ (aussi écrit dans le tutoriel (« Toutes les 5 minutes »)) | 600 s | `BOSSES.hydre.time` |
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
| Arrive à X secondes de jeu ⚠️ (aussi écrit dans le tutoriel (« Toutes les 5 minutes »)) | 900 s | `BOSSES.meduse.time` |
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
| Arrive à X secondes de jeu ⚠️ (aussi écrit dans le tutoriel (« Toutes les 5 minutes »)) | 1200 s | `BOSSES.typhon.time` |
| Vie (× la vie qui monte avec le temps, à son arrivée) | 260 PV | `BOSSES.typhon.health` |
| Taille | 46 px | `BOSSES.typhon.size` |
| Vitesse | 50 px/s | `BOSSES.typhon.speed` |
| Or gagné en le tuant | 60 or | `BOSSES.typhon.gold` |
| XP gagnée en le tuant | 60 XP | `BOSSES.typhon.xp` |

### Chimère

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Arrive à X secondes de jeu ⚠️ (aussi écrit dans le tutoriel (« Toutes les 5 minutes »)) | 1500 s | `BOSSES.chimere.time` |
| Vie (× la vie qui monte avec le temps, à son arrivée) | 400 PV | `BOSSES.chimere.health` |
| Taille | 50 px | `BOSSES.chimere.size` |
| Vitesse | 45 px/s | `BOSSES.chimere.speed` |
| Or gagné en la tuant | 90 or | `BOSSES.chimere.gold` |
| XP gagnée en la tuant | 90 XP | `BOSSES.chimere.xp` |

### Charybde

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Arrive à X secondes de jeu ⚠️ (aussi écrit dans le tutoriel (« Toutes les 5 minutes »)) | 1800 s | `BOSSES.charybde.time` |
| Vie (× la vie qui monte avec le temps, à son arrivée) | 600 PV | `BOSSES.charybde.health` |
| Taille | 54 px | `BOSSES.charybde.size` |
| Vitesse | 45 px/s | `BOSSES.charybde.speed` |
| Or gagné en la tuant | 130 or | `BOSSES.charybde.gold` |
| XP gagnée en la tuant | 130 XP | `BOSSES.charybde.xp` |

### Python

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Arrive à X secondes de jeu ⚠️ (aussi écrit dans le tutoriel (« Toutes les 5 minutes »)) | 2100 s | `BOSSES.python.time` |
| Vie (× la vie qui monte avec le temps, à son arrivée) | 850 PV | `BOSSES.python.health` |
| Taille | 58 px | `BOSSES.python.size` |
| Vitesse | 40 px/s | `BOSSES.python.speed` |
| Or gagné en le tuant | 180 or | `BOSSES.python.gold` |
| XP gagnée en le tuant | 180 XP | `BOSSES.python.xp` |

### Cronos

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Arrive à X secondes de jeu ⚠️ (aussi écrit dans le tutoriel (« Toutes les 5 minutes »)) | 2400 s | `BOSSES.cronos.time` |
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
| Prix du 1er dieu (acheté à la fin de la 1re partie, pendant le tutoriel) | 20 or | `SHOP_ITEMS.god.firstCost` |
| Prix du 2e dieu | 1000 or | `SHOP_ITEMS.god.baseCost` |
| À partir du 2e, chaque dieu coûte X fois plus cher que le précédent | 2,5 × | `SHOP_ITEMS.god.costGrowth` |

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
| Vitesses du jeu (la 1re est la normale, la 2e est offerte par le tutoriel, les autres s'achètent dans le shop) ⚠️ (aussi écrit dans le shop (« x4 ») et le tutoriel (« x2 », « x4 »)) | 1 ; 2 ; 4 × | `GAME_SPEED_OPTIONS` |
| Sauts dans le temps (un bouton par saut : le 1er est offert par le tutoriel, les autres s'achètent dans le shop ; la touche T fait le plus grand) ⚠️ (aussi écrit dans le shop (« +30 s, puis +100 s ») et le tutoriel (« 10 secondes »)) | 10 ; 30 ; 100 s | `TIME_SKIP_OPTIONS` |

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
| Héphaïstos en face : dégâts par balle en plus ⚠️ (aussi écrit dans la description de ce bonus (OPPOSITE_BONUSES dans index.html, et langues/)) | 1 | `OPPOSITE_BONUSES.fire.damage` |
| Poséidon en face : bouclier ⚠️ (aussi écrit dans la description de ce bonus (OPPOSITE_BONUSES dans index.html, et langues/)) | 1 | `OPPOSITE_BONUSES.water.shield` |
| Poséidon en face : recharge du bouclier plus rapide ⚠️ (aussi écrit dans la description de ce bonus (OPPOSITE_BONUSES dans index.html, et langues/)) | 50 % | `OPPOSITE_BONUSES.water.shieldRecharge` |
| Déméter en face : vie à chaque balle qui touche ⚠️ (aussi écrit dans la description de ce bonus (OPPOSITE_BONUSES dans index.html, et langues/)) | 0,03 PV | `OPPOSITE_BONUSES.plant.lifeOnHit` |
| Éole en face : vitesse d'attaque en plus ⚠️ (aussi écrit dans la description de ce bonus (OPPOSITE_BONUSES dans index.html, et langues/)) | 25 % | `OPPOSITE_BONUSES.air.attackSpeed` |
| Apollon en face : chance de critique en plus ⚠️ (aussi écrit dans la description de ce bonus (OPPOSITE_BONUSES dans index.html, et langues/)) | 10 % | `OPPOSITE_BONUSES.light.critChance` |
| Artémis en face : portée en plus ⚠️ (aussi écrit dans la description de ce bonus (OPPOSITE_BONUSES dans index.html, et langues/)) | 60 px | `OPPOSITE_BONUSES.moon.range` |
| Athéna en face : chance de déclencher un combo au hasard ⚠️ (aussi écrit dans la description de ce bonus (OPPOSITE_BONUSES dans index.html, et langues/)) | 15 % | `OPPOSITE_BONUSES.aegis.comboProcChance` |
| Zeus en face : dégâts critiques en plus ⚠️ (aussi écrit dans la description de ce bonus (OPPOSITE_BONUSES dans index.html, et langues/)) | 50 % | `OPPOSITE_BONUSES.thunder.critDamage` |
| Arès en face : vie à chaque ennemi tué ⚠️ (aussi écrit dans la description de ce bonus (OPPOSITE_BONUSES dans index.html, et langues/)) | 0,5 PV | `OPPOSITE_BONUSES.war.lifeOnKill` |
| Aphrodite en face : vie max à chaque balle qui touche ⚠️ (aussi écrit dans la description de ce bonus (OPPOSITE_BONUSES dans index.html, et langues/)) | 0,001 PV | `OPPOSITE_BONUSES.love.maxHealthOnHit` |
| Hermès en face : vitesse des balles en plus ⚠️ (aussi écrit dans la description de ce bonus (OPPOSITE_BONUSES dans index.html, et langues/)) | 50 % | `OPPOSITE_BONUSES.swift.bulletSpeed` |
| Hestia en face : régénération en plus ⚠️ (aussi écrit dans la description de ce bonus (OPPOSITE_BONUSES dans index.html, et langues/)) | 0,15 PV/s | `OPPOSITE_BONUSES.hearth.regen` |

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
| Éclats qui partent dans toutes les directions ⚠️ (aussi écrit dans les descriptions des combos et des fusions (index.html et langues/)) | 6 | `COMBO_NOVA_COUNT` |
| Dégâts d'un éclat (× les dégâts de la balle) | 0,6 × | `COMBO_NOVA_DAMAGE` |
| Tourbillon : rayon | 110 px | `COMBO_VORTEX_RADIUS` |
| Tourbillon : force d'attraction (100 % = colle tout le monde sur l'impact) | 60 % | `COMBO_VORTEX_PULL` |
| Trou noir : durée | 2 s | `COMBO_BLACKHOLE_DURATION` |
| Trou noir : rayon | 150 px | `COMBO_BLACKHOLE_RADIUS` |

### Brûlure, poison, saignement

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Brûlure : durée ⚠️ (aussi écrit dans les descriptions des combos et des fusions (index.html et langues/)) | 3 s | `COMBO_BURN_DURATION` |
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
| Foudre : ennemis frappés au hasard sur tout l'écran ⚠️ (aussi écrit dans les descriptions des combos et des fusions (index.html et langues/)) | 2 | `COMBO_THUNDER_TARGETS` |
| Foudre : dégâts (× les dégâts de la balle) | 1,5 × | `COMBO_THUNDER_DAMAGE` |

### Critiques, soins et bouclier

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| Chance de critique en plus | 20 % | `COMBO_CRIT_CHANCE` |
| Dégâts critiques en plus ⚠️ (aussi écrit dans les descriptions des combos et des fusions (index.html et langues/)) | 100 % | `COMBO_CRIT_BONUS_DAMAGE` |
| Soin à chaque coup | 0,08 PV | `COMBO_HEAL` |
| Recharge du bouclier gagnée à chaque coup | 0,6 s | `COMBO_SHIELD_CHARGE` |
| Achève les ennemis sous X % de leur vie (pas les super ennemis) | 20 % | `COMBO_EXECUTE_THRESHOLD` |
| Affaibli : durée ⚠️ (aussi écrit dans les descriptions des combos et des fusions (index.html et langues/)) | 3 s | `COMBO_WEAKEN_DURATION` |
| Affaibli : dégâts subis (1.5 = +50 %) ⚠️ (aussi écrit dans les descriptions des combos et des fusions (index.html et langues/)) | 1,5 × | `COMBO_WEAKEN_MULTIPLIER` |

## Caméra

### Dézoom selon la portée

| Réglage | Valeur | Nom dans le code |
| --- | --- | --- |
| La portée occupe au plus X % de la demi-largeur de l'écran | 95 % | `CAMERA_RANGE_SCREEN_RATIO` |
| Au-delà de cette portée, la caméra ne dézoome plus (et les ennemis naissent plus près) | 1000 px | `CAMERA_MAX_RANGE` |

