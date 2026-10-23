# Les ennemis

Tous les chiffres viennent du code du jeu (`index.html`), partie `ENEMIES`.

## Les ennemis normaux

Il y a 4 ennemis normaux, un par élément, et chacun a 25 % de chances d'apparaître. Plus un ennemi est solide, plus il est lent. Pour comparer : le joueur commence avec 10 PV et ses balles font 1 dégât.

| Ennemi | Couleur | Vie au début (PV) | Vitesse (px/s) | Or | XP |
| --- | --- | --- | --- | --- | --- |
| Feu | `#ff5533` | 0,8 à 1,2 | 90 | 1 | 1 |
| Air | `#e0f7ff` | 0,6 à 1 | 70 | 1 | 1 |
| Eau | `#4da6ff` | 1,4 à 2,2 | 50 | 1 | 1 |
| Plante | `#55dd55` | 2,2 à 3,4 | 35 | 1 | 1 |

- **Dégâts :** un ennemi qui touche le joueur lui fait autant de dégâts que sa vie restante (1 PV restant = 1 dégât), puis disparaît. Les virgules comptent (0,4 PV restant = 0,4 dégât), même si la vie du joueur est affichée sans virgule. Un ennemi abîmé fait donc moins mal.
- **Vie qui monte :** la vie ci-dessus est multipliée par un nombre qui grandit avec le temps (`getEnemyHealthScale`) : 1 + 0,4 × minutes + 0,04 × minutes².

| Temps de jeu | Multiplicateur de vie | Plante (la plus solide) |
| --- | --- | --- |
| 0:00 | ×1 | 2,2 à 3,4 PV |
| 1:00 | ×1,44 | 3,2 à 4,9 PV |
| 5:00 | ×4 | 8,8 à 13,6 PV |
| 10:00 | ×9 | 20 à 31 PV |
| 20:00 | ×25 | 55 à 85 PV |

- **Taille :** rayon = 4 px + 4 px par PV « de départ » (sans le multiplicateur du temps, pour que les ennemis ne deviennent pas géants). Une plante fait 13 à 18 px de rayon, un air 6 à 8 px. L'ennemi rétrécit quand on l'abîme.
- **Récompenses :** chaque ennemi normal donne 1 or et 1 XP, avant les bonus des skills (« or gagné », « XP gagnée »).

## L'apparition

Le premier ennemi apparaît après 0,3 s, puis les ennemis arrivent de plus en plus vite, jusqu'à un plafond d'un toutes les 0,35 s atteint vers 8 min. Chacun naît juste hors de l'écran, dans une direction au hasard, et marche droit vers le joueur (sauf les mouvements spéciaux).

**Avec la caméra :** quand la portée du joueur dépasse l'écran, la caméra dézoome pour que la portée occupe environ 95 % de la demi-largeur de l'écran (`CAMERA_RANGE_SCREEN_RATIO`). Les ennemis naissent toujours hors de l'écran visible. Au-delà de 1000 px de portée (`CAMERA_MAX_RANGE`), la caméra ne dézoome plus, et les ennemis naissent n'importe où entre le bord de l'écran et 1000 px du centre.

| Temps de jeu | Écart entre deux ennemis | Ennemis par minute |
| --- | --- | --- |
| 0:00 | 2,4 s | 25 |
| 0:30 | 1,76 s | 34 |
| 1:00 | 1,4 s | 43 |
| 2:00 | 0,98 s | 61 |
| 3:00 | 0,76 s | 79 |
| 5:00 | 0,52 s | 115 |
| 8:00 et après | 0,35 s | 171 |

Formule : écart = 2,4 ÷ (1 + 0,012 × secondes de jeu), jamais moins de 0,35 s. Les réglages sont `ENEMY_SPAWN_INTERVAL_START`, `ENEMY_SPAWN_RAMP`, `ENEMY_SPAWN_INTERVAL_MIN` et `ENEMY_FIRST_SPAWN_DELAY`.

## Les mouvements spéciaux

Aucun mouvement spécial avant 1:00. Chacun se débloque à son heure : un premier ennemi avec ce mouvement arrive **seul**, après une petite alerte, pour montrer au joueur ce qui l'attend (voir « Les arrivées spéciales » plus bas, `MOVEMENT_UNLOCKS`, `MOVEMENT_VARIATION_TIME`).

| Temps de jeu | Ce qui change |
| --- | --- |
| 1:00 | Spirale |
| 5:00 | Zigzag |
| 10:00 | Onduleux |
| 12:30 | les mouvements varient : vitesse, charges (arrêts puis départs brusques), forme de la spirale, sens de rotation |

10 % des ennemis normaux ont un mouvement spécial (`SPECIAL_MOVEMENT_CHANCE`), choisi au hasard parmi les mouvements déjà débloqués ; les 90 % autres vont tout droit. Leur forme change selon le mouvement, avec un contour jaune (`#ffe14d`), pour les reconnaître d'un coup d'œil. Avant 12:30, tous les ennemis d'un même mouvement bougent de la même façon ; ensuite, chacun tire ses propres réglages à son apparition. Les écarts diminuent en approchant du joueur, pour que l'ennemi finisse par le toucher.

| Mouvement | Forme | Ce qu'il fait | Réglages avant 12:30 | Réglages tirés au hasard (à partir de 12:30) |
| --- | --- | --- | --- | --- |
| Tout droit | rond | fonce vers le joueur | aucun | aucun |
| Spirale | hexagone qui tourne | tourne autour du joueur en se rapprochant | sens horaire, vitesse de rotation 0,4, cercle parfait | sens horaire ou anti-horaire ; vitesse de rotation 0,24 à 0,6 ; forme plus ou moins ovale (0 à 60 %), étirée dans une direction au hasard |
| Zigzag | triangle, pointe dans la direction où il va | traits en diagonale | largeur 40 px, trait de 0,6 s, tous pareils, sans arrêt | largeur 16 à 68 px ; durée d'un trait 0,25 à 1,1 s ; irrégularité 0 à 60 % ; 40 % de chances de s'arrêter à chaque virage (30 à 55 % du trait) puis de repartir d'un coup |
| Onduleux | étoile à 5 branches qui tourne | avance en vagues sur le côté | largeur 40 px, fréquence 3 | largeur 20 à 64 px ; vagues plus ou moins serrées (×0,5 à ×1,6) ; point de départ de la vague |

Les réglages communs sont `ENEMY_WAVE_AMPLITUDE` (40 px), `ENEMY_WAVE_FREQUENCY` (3), `ENEMY_SPIRAL_SPEED` (0,4), `ZIGZAG_STOP_AND_GO_CHANCE` (0,4) et `SPIRAL_OVAL_MAX` (0,6).

## Les super ennemis

Un monstre de la mythologie arrive chaque minute, de 1:00 à 8:00, **seul**, après une alerte (voir « Les arrivées spéciales » ci-dessous). Il va tout droit, lentement, et sa forme est hérissée de pointes qui tournent. Comme pour les ennemis normaux, s'il touche le joueur il lui fait autant de dégâts que sa vie restante : un super ennemi intact tue donc le joueur. Il faut l'abattre avant qu'il arrive. Leur vie ne monte pas avec le temps.

| Arrivée | Super ennemi | Élément | Vie (PV) | Vitesse (px/s) | Taille (rayon, px) | Pointes | Dégâts s'il touche (intact) | Or | XP |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1:00 | Cerbère | feu | 40 | 12 | 34 | 3 | 40 | 15 | 15 |
| 2:00 | Hydre de Lerne | eau | 90 | 11 | 38 | 9 | 90 | 25 | 25 |
| 3:00 | Méduse | plante | 160 | 10 | 42 | 6 | 160 | 40 | 40 |
| 4:00 | Typhon | air | 260 | 10 | 46 | 4 | 260 | 60 | 60 |
| 5:00 | Chimère | feu | 400 | 9 | 50 | 5 | 400 | 90 | 90 |
| 6:00 | Charybde | eau | 600 | 9 | 54 | 8 | 600 | 130 | 130 |
| 7:00 | Python | plante | 850 | 8 | 58 | 7 | 850 | 180 | 180 |
| 8:00 | Cronos | air | 1 200 | 8 | 64 | 12 | 1 200 | 260 | 260 |

- **Tant qu'il n'est pas vaincu**, un super ennemi revient à la même heure à chaque partie.
- **Une fois vaincu** (message « X est vaincu »), il ne revient plus à heure fixe. Il peut en revanche remplacer un ennemi normal au hasard : 0,1 % de chances au début de la partie, +0,002 % par seconde, soit environ 0,7 % à 5 minutes (`BOSS_RANDOM_CHANCE_START`, `BOSS_RANDOM_CHANCE_PER_SECOND`). Il devient alors un ennemi (rare) comme les autres : **pas d'alerte**, il arrive au milieu des ennemis normaux, qui continuent d'apparaître, et il n'arrête pas « Sauter dans le temps » (il peut même arriver pendant un saut).
- **Paliers :** chaque super ennemi vaincu débloque un bouton dans le menu de mort, pour recommencer juste après lui (voir [interface.md](interface.md)).
- **La liste des vaincus est sauvegardée** dans le navigateur, d'une partie à l'autre.
- **Son élément compte** pour les bonus des skills « +X dégâts contre les ennemis de feu », etc.

## Les arrivées spéciales : alerte, puis seul

Pour qu'on voie bien un super ennemi jamais vaincu ou le premier ennemi d'un nouveau mouvement, il n'arrive jamais au milieu de la foule :

1. **Alerte** : un bandeau en haut de l'écran (« ⚠️ Cerbère arrive dans 7 s », rouge ; « 🌀 Nouvel ennemi : Spirale dans 3 s », jaune) et une flèche qui palpite au bord de l'écran, du côté d'où il va venir. **Plus aucun ennemi n'apparaît** pendant l'alerte : le joueur a le temps de nettoyer l'écran.
2. **Il arrive seul** : les ennemis normaux attendent encore un peu, ou jusqu'à ce qu'il soit tué.
3. Si deux arrivées tombent en même temps (Cerbère et la Spirale à 1:00), la deuxième attend que la première soit finie, avec toute son alerte.

| Arrivée | Alerte | Seul pendant |
| --- | --- | --- |
| Super ennemi jamais vaincu (1re rencontre) | 8 s (`BOSS_WARNING_TIME`) | **jusqu'à sa mort** : aucun autre ennemi n'apparaît, le joueur se concentre sur le combat |
| Premier ennemi d'un nouveau mouvement | 3 s (`MOVEMENT_WARNING_TIME`) | 5 s ou jusqu'à sa mort (`MOVEMENT_SOLO_TIME`) |

Un super ennemi **déjà vaincu** n'a plus d'arrivée spéciale (voir plus haut).

**Sauter dans le temps** : impossible pendant une alerte (message), et un saut s'arrête juste avant la prochaine alerte prévue. Une fois tous les super ennemis vaincus et tous les mouvements découverts dans la partie, plus rien ne bloque le saut.

## Les effets que subissent les ennemis

Les combos et fusions d'orbite des planètes ajoutent des effets aux balles (le détail des combos est dans [skills/0-combos.md](skills/0-combos.md)). Les dégâts sont exprimés en « × dégâts de la balle » ; un combo plus puissant multiplie ces valeurs.

| Effet | Ce qu'il fait à l'ennemi | Valeurs de base | Super ennemis |
| --- | --- | --- | --- |
| Brûlure | perd des PV chaque seconde | 0,6 × par seconde pendant 3 s ; traînée de feu d'Héphaïstos : `fireTrail` × par seconde pendant 1 s après l'avoir touchée | oui |
| Poison | perd des PV chaque seconde ; à sa mort, contamine ses voisins | 0,5 × par seconde pendant 4 s ; 2 voisins | oui |
| Saignement | perd des PV chaque seconde ; chaque coup en rajoute | +0,3 × par seconde par coup, 3 × maximum, 4 s | oui |
| Ralenti | avance moins vite | 45 % de sa vitesse pendant 2 s | oui |
| Gel | immobile, son mouvement spécial s'arrête aussi | 1,2 s (0,7 s en gel de zone) | oui |
| Enraciné | immobile | 0,6 s | oui |
| Recul | repoussé vers l'extérieur, jamais plus loin que son point de départ | 30 px | oui |
| Affaibli | subit plus de dégâts | ×1,5 pendant 3 s | oui |
| Attiré | aspiré vers un point (vortex, trou noir) | vortex 110 px de rayon ; trou noir 150 px pendant 2 s | oui |
| Confus | repart en arrière | 1,5 s | non |
| Renvoyé | retourne au bord de l'écran | 25 % de chances par coup | non |
| Charmé | fait demi-tour et blesse les ennemis qu'il touche | combo : 2,5 s, 3 dégâts par seconde ; rayon d'Aphrodite : selon son arbre, dégâts × la montée de vie des ennemis | non |
| Immobilisé (liane de Déméter) | immobile, anneau vert | 2,5 s + bonus de l'arbre | non |
| Frêle (vague de Poséidon) | subit plus de dégâts, anneau bleu en pointillés | +35 % (et plus avec l'arbre) pendant 4 s ; s'ajoute à « affaibli » | oui |
| Conducteur (éclair de Zeus) | un 2e éclair fait tomber la foudre sur lui ; petites étincelles bleues | 6 s | oui |
| Exécuté | tué d'un coup | sous 20 % de sa vie | non |

Les autres effets sont des dégâts en plus, sans état : explosion (0,8 × dans 70 px), rebond sur un autre ennemi (0,7 ×, 160 px max), balle qui se divise (0,5 ×), critique (combo : +20 % de chances et +100 % de dégâts critiques, voir plus bas), balle qui traverse un ennemi, météore (3 ×), foudre sur 2 ennemis au hasard (1,5 ×), éclats de nova (6 × 0,6), écho (2e coup 0,5 s plus tard), braises et flaque toxique au sol (45 px, 3 s) et graine explosive (2,5 ×, dure 6 s).

Quand un super ennemi est touché, il rétrécit jusqu'à 60 % de sa taille au plus, au lieu de fondre comme un ennemi normal.

## Les signes visuels autour d'un ennemi

Les couleurs des anneaux et les autres signes sont expliqués dans [questions/couleurs-ennemis.md](questions/couleurs-ennemis.md).

## Les nombres de dégâts et les coups critiques

Chaque coup affiche ses dégâts au-dessus de l'ennemi, puis le nombre monte et s'efface en 0,8 s (`DAMAGE_NUMBER_DURATION`). Sa couleur dit quelle attaque a touché (`DAMAGE_COLORS`) :

| Attaque | Couleur |
| --- | --- |
| balle du joueur | blanc `#ffffff` |
| balle d'une planète | la couleur de l'attribut du dieu (Déméter vert, Poséidon bleu…) |
| foudre (Zeus, combo foudre) | jaune `#ffe14d` |
| lumière (Apollon) | blanc doré `#fff4c2` |
| explosion, météore, brûlure, braises | orange feu `#ff7a45` |
| poison, flaque toxique, graine | vert plante `#55dd55` |
| saignement | rouge `#d93a3a` |
| ennemi charmé | rose `#ff8fc7` |

Les dégâts continus (brûlure, poison, saignement, charme, trou noir) sont additionnés et affichés toutes les 0,5 s (`DOT_NUMBER_INTERVAL`), sinon il y aurait un nombre minuscule à chaque image.

**Coup critique :** le nombre est plus gros (20 px au lieu de 13), avec un contour rouge et un « ! ». Il apparaît presque deux fois plus grand puis se rétracte en 0,25 s en tremblant, et une onde rouge part de l'ennemi.

| Stat | Au départ | Comment l'augmenter |
| --- | --- | --- |
| Chance de critique | 0 % | shop « Chance de critique » (+2 % par niveau, 10 niveaux) ; Héphaïstos : Cyclope (+1 % ×7), Prométhée (+3 %) ; combos d'orbite « critique » (+20 %) |
| Dégâts critiques | 200 % | shop « Dégâts critiques » (+20 % par niveau, 10 niveaux) ; Héphaïstos : Kédalion (+25 %), Brontès (+60 %) ; combos d'orbite « critique » (+100 %) |

## Beaucoup d'ennemis à l'écran

Le jeu est prévu pour tenir environ 10 000 ennemis :

- **Grille :** le terrain est découpé en cases de 64 px (`ENEMY_GRID_CELL`). Une balle ou une explosion ne regarde que les ennemis des cases autour d'elle, pas les 10 000.
- **Ménage groupé :** un ennemi mort passe à `alive = false` et n'est retiré de la liste qu'une fois par pas de jeu (`removeDeadEnemies`).
- **Images pré-dessinées :** chaque ennemi rond est une petite image dessinée une seule fois par couleur et par taille, puis recopiée (`getRoundEnemySprite`).
- **Moins de détails quand il y en a trop :** au-delà de 1 500 ennemis (`MAX_ENEMY_SHADOWS`), les ennemis ronds n'ont plus d'ombre. Au-delà de 150 nombres de dégâts à l'écran (`MAX_DAMAGE_NUMBERS`), on n'en ajoute plus, sauf les critiques. Les ennemis hors de l'écran ne sont pas dessinés.
- **Sur téléphone et tablette** (écran tactile, `IS_TOUCH_DEVICE`), les limites sont plus basses : plus d'ombre au-delà de 400 ennemis, 60 nombres de dégâts au maximum, 200 particules au lieu de 500 (`MAX_PARTICLES`).

Mesure faite sans carte graphique (le cas le plus lent) : 10 000 ennemis prennent environ 60 ms par image, contre 870 ms avant. Avec une carte graphique, c'est nettement plus rapide.
