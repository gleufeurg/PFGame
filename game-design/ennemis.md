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
- **Vie qui monte :** la vie ci-dessus est multipliée par un nombre qui grandit avec le temps (`getEnemyHealthScale`) : (1 + 0,3 × minutes + 0,03 × minutes²) × 1,05^minutes. Le « × 1,05 chaque minute » (`ENEMY_HEALTH_LATE_GROWTH`) compte peu au début mais fait monter vite la fin de partie : une partie finit toujours, et chaque amélioration fait tenir un peu plus longtemps. Avant le rééquilibrage, c'était 1 + 0,4 × minutes + 0,04 × minutes² : en fin de jeu, les parties pouvaient durer sans fin.

| Temps de jeu | Multiplicateur de vie | Plante (la plus solide) | Avant le rééquilibrage |
| --- | --- | --- | --- |
| 0:00 | ×1 | 2,2 à 3,4 PV | ×1 |
| 1:00 | ×1,4 | 3,1 à 4,7 PV | ×1,44 |
| 5:00 | ×4,1 | 9,1 à 14 PV | ×4 |
| 10:00 | ×11 | 25 à 39 PV | ×9 |
| 20:00 | ×50 | 111 à 171 PV | ×25 |
| 30:00 | ×160 | 352 à 544 PV | ×49 |
| 40:00 | ×429 | 945 à 1 460 PV | ×81 |

- **Taille :** rayon = 4 px + 4 px par PV « de départ » (sans le multiplicateur du temps, pour que les ennemis ne deviennent pas géants). Une plante fait 13 à 18 px de rayon, un air 6 à 8 px. L'ennemi rétrécit quand on l'abîme.
- **Récompenses :** chaque ennemi normal donne 1 or et 1 XP, avant les bonus des skills (« or gagné », « XP gagnée »).

## L'apparition

Le premier ennemi apparaît après 0,3 s, puis les ennemis arrivent de plus en plus vite, jusqu'à un plafond d'un toutes les 0,35 s atteint vers 8:06. Les testeurs s'ennuyaient au début de chaque partie : depuis le rééquilibrage, il y a 2 fois plus d'ennemis au départ (un toutes les 1,2 s au lieu de 2,4 s), puis la montée est plus douce, pour que le milieu de partie ne soit pas plus dur qu'avant. Chacun naît juste hors de l'écran, dans une direction au hasard, et marche droit vers le joueur (sauf les mouvements spéciaux).

**Avec la caméra :** quand la portée du joueur dépasse l'écran, la caméra dézoome pour que la portée occupe environ 95 % de la demi-largeur de l'écran (`CAMERA_RANGE_SCREEN_RATIO`), et pour que les 3 orbites des planètes restent à l'écran (voir [interface.md](interface.md)). Les ennemis naissent toujours hors de l'écran visible. Au-delà de 1000 px de portée (`CAMERA_MAX_RANGE`), la caméra ne dézoome plus, et les ennemis naissent n'importe où entre le bord de l'écran et 1000 px du centre.

| Temps de jeu | Écart entre deux ennemis | Ennemis par minute | Avant le rééquilibrage |
| --- | --- | --- | --- |
| 0:00 | 1,2 s | 50 | 25 |
| 0:30 | 1,04 s | 58 | 34 |
| 1:00 | 0,92 s | 65 | 43 |
| 2:00 | 0,75 s | 80 | 61 |
| 3:00 | 0,63 s | 95 | 79 |
| 5:00 | 0,48 s | 125 | 115 |
| 8:06 et après | 0,35 s | 171 | 171 (dès 8:08) |

Formule : écart = 1,2 ÷ (1 + 0,005 × secondes de jeu), jamais moins de 0,35 s (avant : 2,4 ÷ (1 + 0,012 × secondes)). Les réglages sont `ENEMY_SPAWN_INTERVAL_START`, `ENEMY_SPAWN_RAMP`, `ENEMY_SPAWN_INTERVAL_MIN` et `ENEMY_FIRST_SPAWN_DELAY`.

Pour un nouveau joueur (10 PV, 1 dégât, aucune amélioration), la 1re partie dure en moyenne **1:46** et rapporte **82 or** (avant : 2:11 pour 75 or), avec **19 ennemis** tués dans les 30 premières secondes (avant : 11). Mesuré sur 20 parties ; voir [rythme.md](rythme.md) pour le rythme de toute la progression.

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

Un monstre de la mythologie arrive **toutes les 5 minutes**, de 5:00 à 40:00, après une alerte (voir « Les arrivées spéciales » ci-dessous). Il va tout droit et sa forme est hérissée de pointes qui tournent. Comme pour les ennemis normaux, s'il touche le joueur il lui fait autant de dégâts que sa vie restante : un super ennemi intact tue donc le joueur. Il faut l'abattre avant qu'il arrive.

- **Ils sont 5 fois plus rapides** qu'avant (les testeurs les trouvaient trop lents).
- **Leur vie monte avec le temps**, comme celle des ennemis normaux : la vie du tableau (celle qu'ils auraient au tout début) est multipliée par l'échelle de vie au moment de leur arrivée (×4,1 à 5:00, ×11 à 10:00, ×429 à 40:00 ; voir [questions/formules.md](questions/formules.md)). Sinon, les derniers seraient bien plus faibles que les ennemis normaux de leur époque.
- **Cerbère et l'Hydre ont moins de vie** depuis le rééquilibrage (15 au lieu de 40, et 60 au lieu de 90) : le joueur robot mourait 2 ou 3 parties de suite contre eux, ce qui bloquait le début du jeu.

| Arrivée | Super ennemi | Élément | Vie (×échelle) | Vie à son heure | Vitesse (px/s) | Taille (rayon, px) | Pointes | Or | XP | Pouvoir |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 5:00 | Cerbère | feu | 15 | 62 | 60 | 34 | 3 | 15 | 15 | — |
| 10:00 | Hydre de Lerne | eau | 60 | 684 | 55 | 38 | 9 | 25 | 25 | se dédouble, puis dernière vague |
| 15:00 | Méduse | plante | 160 | 4 075 | 50 | 42 | 6 | 40 | 40 | pétrifie les planètes |
| 20:00 | Typhon | air | 260 | 13 107 | 50 | 46 | 4 | 60 | 60 | — |
| 25:00 | Chimère | feu | 400 | 36 912 | 45 | 50 | 5 | 90 | 90 | — |
| 30:00 | Charybde | eau | 600 | 95 940 | 45 | 54 | 8 | 130 | 130 | — |
| 35:00 | Python | plante | 850 | 226 185 | 40 | 58 | 7 | 180 | 180 | — |
| 40:00 | Cronos | air | 1 200 | 515 280 | 40 | 64 | 12 | 260 | 260 | ralentit ton temps |

- **Tant qu'il n'est pas vaincu**, un super ennemi revient à la même heure à chaque partie, pour un **duel** (voir ci-dessous).
- **Une fois vaincu** (message « X est vaincu »), il ne revient plus à heure fixe. Il peut en revanche remplacer un ennemi normal au hasard : 0,1 % de chances au début de la partie, +0,002 % par seconde, soit environ 0,7 % à 5 minutes (`BOSS_RANDOM_CHANCE_START`, `BOSS_RANDOM_CHANCE_PER_SECOND`). Il devient alors un ennemi (rare) comme les autres : **pas d'alerte ni de duel**, il arrive au milieu des ennemis normaux, qui continuent d'apparaître, et il n'arrête pas « Sauter dans le temps » (il peut même arriver pendant un saut). **Il garde son pouvoir** (Méduse pétrifie, l'Hydre se dédouble...).
- **Paliers :** chaque super ennemi vaincu débloque un bouton dans le menu de mort, pour recommencer juste après lui (voir [interface.md](interface.md)).
- **La liste des vaincus est sauvegardée** dans le navigateur, d'une partie à l'autre.
- **Son élément compte** pour les bonus des skills « +X dégâts contre les ennemis de feu », etc.

### Le duel (1re rencontre)

Quand un super ennemi jamais vaincu arrive, c'est un duel entre lui et le joueur (`startBossDuel`) :
- **le chrono s'arrête** pendant tout le combat : il affiche « ⚔️ 5:00 » en rouge et palpite. Le temps ne compte pas, donc la vie des ennemis n'augmente pas ;
- **aucun autre ennemi n'arrive** jusqu'à la fin du combat (pour l'Hydre : jusqu'à la mort de toutes ses têtes et de sa dernière vague) ;
- **le jeu repasse en vitesse x1** (les boutons x2, x4 sont grisés : « Pendant un duel, le jeu reste en vitesse x1 »). À la fin du duel, la vitesse choisie avant revient toute seule ;
- **pas de saut dans le temps** (« ⚔️ Impossible de sauter le temps pendant un duel »).

Le duel finit quand le super ennemi (et tout son groupe) est mort, ou s'il touche le joueur sans le tuer (bouclier, esquive...).

### Les pouvoirs uniques

Les super ennemis s'en servent seulement quand ils sont à l'écran. Les réglages sont en haut de la partie `SUPER ENNEMIS` de `index.html`.

| Super ennemi | Pouvoir | Détails |
| --- | --- | --- |
| **Hydre de Lerne** | **Se dédouble** | Quand elle meurt, 2 têtes apparaissent à sa place (un peu repoussées, de part et d'autre). Chaque tête tuée en donne 2 autres : 1 → 2 → 4 → 8 têtes (`HYDRA_MAX_GENERATION` = 3). Chaque nouvelle tête a 55 % de la vie de sa mère, 78 % de sa taille, 15 % de vitesse en plus et 40 % de son or et de son XP. Les petites têtes n'ont ni nom ni barre de vie (trop de texte à l'écran). Quand les 8 dernières têtes sont tuées : **la dernière vague**, 30 petites hydres (14 si l'Hydre revient comme ennemi rare) qui arrivent de tous les côtés, pas toutes en même temps, comme une vague de zombies. Chacune a 8 % de la vie de la 1re hydre. L'Hydre est vaincue quand la vague est finie. |
| **Méduse** | **Pétrifie une planète** | 2,5 s après son arrivée à l'écran, puis toutes les 6 s : son regard pétrifie une planète au hasard. Animation : un **cercle rose crénelé** (comme le haut d'un château) tourne autour de Méduse et autour de la planète, un rayon rose en pointillés file de l'une à l'autre, une onde de choc, et **la planète tremble** (son de pierre). La planète devient **grise, avec des fissures** : elle **ne tire plus**, n'a **plus de pouvoir**, et **son lien d'orbite est annulé** (elle ne prête plus son attribut non plus). Ça dure **jusqu'à la mort de Méduse** : la pierre éclate alors (éclats gris, onde de choc de sa couleur). Le panneau des stats affiche « État : 🗿 Pétrifiée par Méduse ». |
| **Cronos** | **Ralentit ton temps** | 3 s après son arrivée à l'écran, puis toutes les 10 s, pendant 4 s : toi, tes planètes, tes balles et tes pouvoirs passent à **35 %** de leur vitesse (`CRONOS_SLOW_FACTOR`), mais pas les ennemis. Animation : un grand cadran d'horloge violet grandit autour de Cronos, un cadran dont les aiguilles tournent apparaît autour du joueur, et l'écran se teinte de violet (bords plus sombres en graphismes élevés). Son : une note qui descend et un tic-tac qui ralentit. |

Les autres super ennemis (Cerbère, Typhon, Chimère, Charybde, Python) n'ont pas encore de pouvoir unique.

## Les arrivées spéciales : alerte, puis seul

Pour qu'on voie bien un super ennemi jamais vaincu ou le premier ennemi d'un nouveau mouvement, il n'arrive jamais au milieu de la foule :

1. **Alerte** : un bandeau en haut de l'écran (« ⚠️ Cerbère arrive dans 7 s », rouge ; « 🌀 Nouvel ennemi : Spirale dans 3 s », jaune) et une flèche qui palpite au bord de l'écran, du côté d'où il va venir. **Plus aucun ennemi n'apparaît** pendant l'alerte : le joueur a le temps de nettoyer l'écran.
2. **Il arrive seul** : les ennemis normaux attendent encore un peu, ou jusqu'à ce qu'il soit tué.
3. Si deux arrivées tombent en même temps (Cerbère et la Spirale à 1:00), la deuxième attend que la première soit finie, avec toute son alerte.

| Arrivée | Alerte | Seul pendant |
| --- | --- | --- |
| Super ennemi jamais vaincu (1re rencontre) | 8 s (`BOSS_WARNING_TIME`) | **jusqu'à sa mort** : c'est un duel (chrono arrêté, vitesse x1, voir plus haut) |
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
- **Images pré-dessinées, recopiées en vrais pixels :** chaque ennemi rond est une petite image dessinée une seule fois par couleur et par taille (`getRoundEnemySprite`), puis recopiée. Depuis l'optimisation demandée par les testeurs, ces images sont faites **à la taille exacte où elles s'affichent** (en vrais pixels de l'écran, avec le zoom de la caméra : `getDeviceRadius`, `getWorldToDevice`) et recopiées à une **position entière**, sans être agrandies ni réduites : c'est 3 à 4 fois plus rapide, et plus net. Pareil pour les ombres des ennemis ronds (`getShadowSprite`) et pour les **anneaux de statut** (charmé, affaibli, gelé...), qui sont maintenant aussi des petites images (`getRingSprite`, `STATUS_RING_STYLES`) au lieu d'être tracés au pinceau à chaque image.
- **Formes spéciales :** l'épaisseur d'un zigzag, d'une spirale ou d'une onde est remplie en une fois (`traceStretchedShape`) au lieu d'un remplissage par côté. (Mettre toutes les formes dans un seul énorme chemin a été essayé : c'est plus lent.)
- **Moins de détails quand il y en a trop :** au-delà de 1 500 ennemis (`MAX_ENEMY_SHADOWS`), les ennemis n'ont plus d'ombre (ni les ronds, ni les formes spéciales). Au-delà de 150 nombres de dégâts à l'écran (`MAX_DAMAGE_NUMBERS`), on n'en ajoute plus, sauf les critiques. Les ennemis hors de l'écran ne sont pas dessinés.
- **La foudre de Zeus en chaîne** est étalée sur plusieurs pas de jeu : au plus 6 coups de foudre (`MAX_BOLTS_PER_STEP`) et 150 ennemis électrocutés (`MAX_BOLT_HITS_PER_STEP`) par pas ; la suite attend le pas suivant.
- **Sur téléphone et tablette** (écran tactile, `IS_TOUCH_DEVICE`), les limites sont plus basses : plus d'ombre au-delà de 400 ennemis, 60 nombres de dégâts au maximum, 200 particules au lieu de 500 (`MAX_PARTICLES`).

Mesures faites sans carte graphique (le cas le plus lent), écran 1280 × 800 :

| Ennemis à l'écran | Avant | Après |
| --- | --- | --- |
| ~900 | 37 ms par image | 23 ms |
| ~2 400 | 47 ms | 28 ms |
| ~7 000 | 118 ms | 46 ms |

Avec une carte graphique, c'est nettement plus rapide.
