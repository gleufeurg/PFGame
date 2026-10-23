# Prix des améliorations et des skills

Généré à partir du code du jeu par `game-design/outils/generer-docs.js`.

Le shop se paie en **or**, gagné en tuant les ennemis et dépensé quand on meurt. Les skills se paient en **XP**, dans le skill tree de chaque dieu.

- Tout le shop au maximum coûte **86 673 or**, dont 72 240 or pour les 12 dieux.
- Tous les skills des 12 dieux coûtent **16 508 XP**.

## Le shop

Chaque niveau coûte plus cher que le précédent : prix = prix de départ × multiplicateur ^ niveau déjà acheté, arrondi. Les dieux arrivent dans l'ordre : Héphaïstos, Poséidon, Déméter, Éole, Apollon, Artémis, Athéna, Zeus, Arès, Aphrodite, Hermès, Hestia.

| Amélioration | Effet par niveau | Multiplicateur | Prix par niveau (or) | Total (or) |
| --- | --- | --- | --- | --- |
| Nouvelle divinité (12 niv.) | Une nouvelle planète et son skill tree rejoignent l'orbite | ×1,8 | 50, 90, 162, 292, 525, 945, 1 701, 3 061, 5 510, 9 918, 17 852, 32 134 | 72 240 |
| Chance de critique (10 niv.) | +2% de chance de coup critique | ×1,6 | 20, 32, 51, 82, 131, 210, 336, 537, 859, 1 374 | 3 632 |
| Dégâts critiques (10 niv.) | +20% de dégâts critiques | ×1,6 | 20, 32, 51, 82, 131, 210, 336, 537, 859, 1 374 | 3 632 |
| Dégâts (10 niv.) | +1 dégât par balle | ×1,6 | 15, 24, 38, 61, 98, 157, 252, 403, 644, 1 031 | 2 723 |
| Cadence de tir (10 niv.) | +10% de vitesse d'attaque | ×1,5 | 10, 15, 23, 34, 51, 76, 114, 171, 256, 384 | 1 134 |
| Vie max (10 niv.) | +2 PV max | ×1,5 | 8, 12, 18, 27, 41, 61, 91, 137, 205, 308 | 908 |
| Régénération (8 niv.) | +0.05 PV par seconde | ×1,6 | 12, 19, 31, 49, 79, 126, 201, 322 | 839 |
| Balle supplémentaire (3 niv.) | +1 balle par tir | ×2,5 | 60, 150, 375 | 585 |
| Portée (8 niv.) | +25 de portée | ×1,5 | 10, 15, 23, 34, 51, 76, 114, 171 | 494 |
| Sauter dans le temps (3 niv.) | Débloque le saut de +10 s, puis +30 s, puis +100 s | ×3 | 15, 45, 135 | 195 |
| Accélérer le temps (2 niv.) | Débloque la vitesse x2, puis x4 | ×3 | 40, 120 | 160 |
| Vitesse des balles (6 niv.) | +15% de vitesse des balles | ×1,4 | 8, 11, 16, 22, 31, 43 | 131 |

## Les skills

Un skill coûte plus cher quand il est loin du départ : chaque lien à parcourir depuis l'étoile de départ est un « pas ».

| Type de skill | Coût (XP) |
| --- | --- |
| Départ | 5 |
| Mineure | 5 + 4 × pas |
| Notable | (5 + 4 × pas) × 1,5, arrondi |
| Keystone | 60 + 2 × pas |
| Grande keystone | 150 |

| Dieu | Skills | Mineures | Notables | Keystones (+ grande) | XP pour tout prendre |
| --- | --- | --- | --- | --- | --- |
| Poséidon | 40 | 25 | 10 | 3 + 1 | 2 202 |
| Éole | 45 | 32 | 8 | 3 + 1 | 2 117 |
| Athéna | 51 | 38 | 8 | 3 + 1 | 1 677 |
| Apollon | 49 | 36 | 8 | 3 + 1 | 1 455 |
| Zeus | 30 | 17 | 8 | 3 + 1 | 1 392 |
| Aphrodite | 39 | 26 | 8 | 3 + 1 | 1 237 |
| Arès | 27 | 14 | 8 | 3 + 1 | 1 225 |
| Hestia | 27 | 14 | 8 | 3 + 1 | 1 179 |
| Déméter | 49 | 36 | 8 | 3 + 1 | 1 171 |
| Héphaïstos | 35 | 22 | 8 | 3 + 1 | 1 099 |
| Hermès | 27 | 14 | 8 | 3 + 1 | 1 011 |
| Artémis | 22 | 10 | 7 | 3 + 1 | 743 |

## Le détail par dieu

Chaque tableau va du skill le moins cher au plus cher. Les dieux sont dans leur ordre d'achat dans le shop.

### Héphaïstos (35 skills · 1 099 XP)

| Coût (XP) | Skill | Type | Effet |
| --- | --- | --- | --- |
| 5 | Hestia | Départ | +1 dégât par balle |
| 9 | Cyclope III, V | Mineure | +10% de dégâts critiques, chacun |
| 9 | Dactyle I, IV | Mineure | +0.5 dégât par balle, chacun |
| 13 | Dactyle VI | Mineure | +0.5 dégât par balle |
| 13 | Telchine IV | Mineure | Balles 8% plus grosses |
| 17 | Telchine I, III | Mineure | Balles 8% plus grosses, chacun |
| 20 | Aglaé | Notable | Les balles traversent 1 ennemi de plus |
| 20 | Prométhée | Notable | +3% de chance de coup critique |
| 21 | Cyclope I, IV | Mineure | +10% de dégâts critiques, chacun |
| 21 | Dactyle III, VIII | Mineure | +0.5 dégât par balle, chacun |
| 21 | Telchine VI | Mineure | Balles 8% plus grosses |
| 25 | Cyclope VI, VII | Mineure | +10% de dégâts critiques, chacun |
| 25 | Dactyle V | Mineure | +0.5 dégât par balle |
| 26 | Bia | Notable | Les balles traversent 1 ennemi de plus |
| 26 | Talos | Notable | +15% de dégâts |
| 29 | Cyclope II | Mineure | +10% de dégâts critiques |
| 29 | Dactyle II, VII | Mineure | +0.5 dégât par balle, chacun |
| 29 | Telchine VII | Mineure | Balles 8% plus grosses |
| 33 | Telchine II, V | Mineure | Balles 8% plus grosses, chacun |
| 38 | Argès | Notable | +2 dégâts par balle |
| 38 | Kédalion | Notable | +25% de dégâts critiques |
| 50 | Kratos | Notable | +1 dégât par balle |
| 50 | Stéropès | Notable | Balles 20% plus grosses |
| 72 | Brontès | Keystone | Marteau : +100% de dégâts, mais 35% de vitesse d'attaque en moins |
| 72 | Cabires | Keystone | Enclume : balles 2 fois plus grosses, mais 30% plus lentes |
| 74 | Hécate | Keystone | Coulée de lave : les balles traversent TOUS les ennemis, jusqu'au bord de l'écran |
| 150 | Etna | Grande keystone | GRANDE KEYSTONE : +150% de dégâts et balles 50% plus grosses, mais 30% de vitesse d'attaque en moins |

### Poséidon (40 skills · 2 202 XP)

| Coût (XP) | Skill | Type | Effet |
| --- | --- | --- | --- |
| 5 | Thétis | Départ | Raz-de-marée : toutes les 10 s, une vague part de Poséidon jusqu'à sa portée, repousse les ennemis, les ralentit et les rend frêles : +35% de dégâts subis pendant 4 s |
| 9 | Océanide IV | Mineure | +0.02 PV régénérés par seconde |
| 13 | Naïade IV | Mineure | Ennemis frêles : +2% de dégâts subis |
| 21 | Néréide V | Mineure | +1 PV max |
| 25 | Océanide II | Mineure | +0.02 PV régénérés par seconde |
| 26 | Phorcys | Notable | Bouclier : bloque un coup, se recharge en 10 s |
| 29 | Néréide II | Mineure | +1 PV max |
| 33 | Naïade I, II | Mineure | Ennemis frêles : +2% de dégâts subis, chacun |
| 33 | Océanide V | Mineure | +0.02 PV régénérés par seconde |
| 37 | Naïade V | Mineure | Ennemis frêles : +2% de dégâts subis |
| 37 | Néréide III | Mineure | +1 PV max |
| 37 | Océanide I | Mineure | +0.02 PV régénérés par seconde |
| 38 | Glaucos | Notable | Ennemis frêles : +5% de dégâts subis |
| 44 | Galatée | Notable | +40 de portée (la vague va aussi plus loin) |
| 45 | Néréide I, VI | Mineure | +1 PV max, chacun |
| 45 | Océanide III | Mineure | +0.02 PV régénérés par seconde |
| 49 | Cymo | Mineure | +20 de portée |
| 49 | Naïade III | Mineure | Ennemis frêles : +2% de dégâts subis |
| 49 | Océanide VI | Mineure | +0.02 PV régénérés par seconde |
| 53 | Naïade VI | Mineure | Ennemis frêles : +2% de dégâts subis |
| 57 | Néréide IV | Mineure | +1 PV max |
| 57 | Rhodé | Mineure | +30 de portée |
| 61 | Néréide VII | Mineure | +1 PV max |
| 62 | Doris | Notable | +0.05 PV régénérés par seconde |
| 62 | Leucothée | Notable | La vague revient 15% plus souvent |
| 72 | Céto | Keystone | Ennemis frêles : +15% de dégâts subis |
| 73 | Océanide VII | Mineure | +0.02 PV régénérés par seconde |
| 77 | Naïade VII | Mineure | Ennemis frêles : +2% de dégâts subis |
| 80 | Cymopolée | Notable | Ressac : +60 de portée (la vague va aussi plus loin) |
| 80 | Protée | Notable | +10% de chance d'esquiver un coup |
| 81 | Néréide VIII | Mineure | +1 PV max |
| 82 | Amphitrite | Keystone | Bouclier des marées : chaque vague te rend invincible pendant 2 s |
| 85 | Océanide VIII | Mineure | +0.02 PV régénérés par seconde |
| 86 | Palémon | Notable | +30 de recul de la vague |
| 92 | Benthésicymé | Notable | Houle : +80 de portée (la vague va aussi plus loin) |
| 92 | Triton | Keystone | La vague revient 40% plus souvent, et +80 de portée |
| 98 | Nérée | Notable | +3 PV max |
| 150 | Océanos | Grande keystone | GRANDE KEYSTONE : ennemis frêles +25% de dégâts subis, et bouclier des marées +1 s |

### Déméter (49 skills · 1 171 XP)

| Coût (XP) | Skill | Type | Effet |
| --- | --- | --- | --- |
| 5 | Perséphone | Départ | Rayon de vie : toutes les 9 s, Déméter te soigne de 1 PV et affaiblit les ennemis autour d'elle (+50% de dégâts subis pendant 3 s) |
| 9 | Dryade I, IV, VII, X | Mineure | +0.05 PV regagné par ennemi tué, chacun |
| 13 | Hamadryade I, II, IV, V, VII, VIII, X, XI | Mineure | +5% d'XP gagnée, chacun |
| 17 | Dryade II, V, VIII, XI | Mineure | +0.05 PV regagné par ennemi tué, chacun |
| 17 | Mélie I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII | Mineure | +8 de rayon du rayon de vie, chacun |
| 20 | Carpo | Notable | Le rayon de vie revient 15% plus souvent |
| 20 | Chloris | Notable | +0.05 PV régénérés par seconde |
| 20 | Iasion | Notable | +25 de rayon du rayon de vie |
| 20 | Thallo | Notable | +10% d'XP gagnée |
| 21 | Dryade III, VI, IX, XII | Mineure | +0.05 PV regagné par ennemi tué, chacun |
| 21 | Hamadryade III, VI, IX, XII | Mineure | +5% d'XP gagnée, chacun |
| 38 | Anthée | Notable | Les lianes immobilisent 1 s de plus |
| 38 | Aristée | Notable | +0.2 PV regagnés par ennemi tué |
| 38 | Auxo | Notable | Le rayon de vie soigne 0.5 PV de plus |
| 38 | Eubouleus | Notable | +1 liane à chaque rayon de vie |
| 68 | Karpos | Keystone | Lianes : chaque rayon de vie fait pousser 3 lianes sous des ennemis, qui les immobilisent 2.5 s (pas les super ennemis) |
| 68 | Pan | Keystone | +60 de rayon du rayon de vie et +2 lianes |
| 68 | Triptolème | Keystone | Le rayon de vie soigne 2 PV de plus et revient 30% plus souvent |
| 150 | Gaïa | Grande keystone | GRANDE KEYSTONE : +3 lianes, qui immobilisent 2 s de plus, et le rayon de vie revient 2 fois plus souvent |

### Éole (45 skills · 2 117 XP)

| Coût (XP) | Skill | Type | Effet |
| --- | --- | --- | --- |
| 5 | Zéphyr | Départ | +10% de vitesse d'attaque |
| 9 | Aura I | Mineure | +15 de portée |
| 13 | Héliade I | Mineure | +10% de vitesse des balles |
| 21 | Anémoï I | Mineure | +6% de vitesse d'attaque |
| 21 | Héliade V | Mineure | +10% de vitesse des balles |
| 25 | Anémoï VIII | Mineure | +6% de vitesse d'attaque |
| 25 | Aura II, V, IX | Mineure | +15 de portée, chacun |
| 26 | Éos | Notable | +30 de portée |
| 29 | Anémoï V | Mineure | +6% de vitesse d'attaque |
| 32 | Euros | Notable | +2 dégâts contre les plantes |
| 33 | Aura VI | Mineure | +15 de portée |
| 33 | Héliade II, IX | Mineure | +10% de vitesse des balles, chacun |
| 37 | Anémoï II, IX | Mineure | +6% de vitesse d'attaque, chacun |
| 37 | Héliade VI | Mineure | +10% de vitesse des balles |
| 38 | Borée | Notable | +15% de vitesse d'attaque |
| 41 | Anémoï VI | Mineure | +6% de vitesse d'attaque |
| 41 | Aura III, X | Mineure | +15 de portée, chacun |
| 44 | Héméra | Notable | +20% de vitesse d'attaque |
| 44 | Phosphoros | Notable | +30% de vitesse des balles |
| 45 | Aura VII | Mineure | +15 de portée |
| 45 | Héliade III | Mineure | +10% de vitesse des balles |
| 49 | Héliade X | Mineure | +10% de vitesse des balles |
| 53 | Anémoï III, X | Mineure | +6% de vitesse d'attaque, chacun |
| 53 | Héliade VII | Mineure | +10% de vitesse des balles |
| 57 | Anémoï VII | Mineure | +6% de vitesse d'attaque |
| 57 | Aura IV, XI | Mineure | +15 de portée, chacun |
| 61 | Aura VIII | Mineure | +15 de portée |
| 61 | Héliade IV, XI | Mineure | +10% de vitesse des balles, chacun |
| 65 | Anémoï IV | Mineure | +6% de vitesse d'attaque |
| 65 | Héliade VIII | Mineure | +10% de vitesse des balles |
| 68 | Hespéros | Notable | +10% de vitesse d'attaque |
| 72 | Séléné | Keystone | Rafale : +100% de vitesse d'attaque, mais 30% de dégâts en moins |
| 74 | Iris | Notable | +20% de vitesse des balles |
| 74 | Notos | Notable | +1 dégât contre les plantes |
| 90 | Astraïos | Keystone | Ouragan : +60% de vitesse d'attaque, mais balles 40% plus petites |
| 92 | Phaéton | Keystone | +1 balle par tir |
| 150 | Thyella | Grande keystone | GRANDE KEYSTONE : +150% de vitesse d'attaque et +1 balle par tir, mais 30% de dégâts en moins |

### Apollon (49 skills · 1 455 XP)

| Coût (XP) | Skill | Type | Effet |
| --- | --- | --- | --- |
| 5 | Tyché | Départ | +10% d'or gagné |
| 9 | Pléiade I | Mineure | +5% d'or gagné |
| 9 | Titanide I | Mineure | +0.5 dégât par balle |
| 13 | Hyade I, II | Mineure | +5% d'XP gagnée, chacun |
| 13 | Pléiade II | Mineure | +5% d'or gagné |
| 17 | Hyade III, IX, XII | Mineure | +5% d'XP gagnée, chacun |
| 17 | Pléiade VI | Mineure | +5% d'or gagné |
| 17 | Titanide II | Mineure | +0.5 dégât par balle |
| 20 | Eutychia | Notable | +25% d'or gagné |
| 20 | Kairos | Notable | +15% d'or gagné |
| 21 | Hyade VI, X, XI | Mineure | +5% d'XP gagnée, chacun |
| 21 | Pléiade III, IV, V, VII | Mineure | +5% d'or gagné, chacun |
| 21 | Titanide III, VIII, IX, XII | Mineure | +0.5 dégât par balle, chacun |
| 25 | Hyade IV, V, VII | Mineure | +5% d'XP gagnée, chacun |
| 25 | Pléiade IX, X | Mineure | +5% d'or gagné, chacun |
| 25 | Titanide VI, VII, X, XI | Mineure | +0.5 dégât par balle, chacun |
| 29 | Pléiade VIII, XI, XII | Mineure | +5% d'or gagné, chacun |
| 29 | Titanide IV, V | Mineure | +0.5 dégât par balle, chacun |
| 33 | Hyade VIII | Mineure | +5% d'XP gagnée |
| 38 | Coéos | Notable | +10% d'XP gagnée |
| 38 | Théia | Notable | +1 dégât par balle |
| 44 | Astrée | Notable | +1 dégât contre les ennemis d'air |
| 44 | Hypérion | Notable | +1 dégât par balle |
| 50 | Agathodaïmon | Notable | +10% d'or gagné |
| 50 | Mnémosyne | Notable | +20% d'XP gagnée |
| 72 | Ploutos | Keystone | +50% d'or gagné |
| 72 | Érébos | Keystone | +3 dégâts par balle |
| 76 | Astéria | Keystone | +1 balle par tir |
| 150 | Chaos | Grande keystone | GRANDE KEYSTONE : +100% d'or gagné |

### Artémis (22 skills · 743 XP)

| Coût (XP) | Skill | Type | Effet |
| --- | --- | --- | --- |
| 5 | Léto | Départ | Flèche de lune : toutes les 6 s, Artémis tire une grande flèche qui transperce tous les ennemis sur son passage (3 fois les dégâts d'une balle) |
| 9 | Nymphe IV | Mineure | +10 de portée |
| 9 | Pléione II, III | Mineure | +8% de vitesse des balles, chacun |
| 14 | Britomartis | Notable | +1 dégât par balle |
| 14 | Callisto | Notable | +10% de vitesse d'attaque |
| 17 | Nymphe I, III | Mineure | +10 de portée, chacun |
| 17 | Oréade II | Mineure | +0.5 dégât par balle |
| 20 | Cyrène | Notable | La flèche de lune revient 15% plus souvent |
| 21 | Pléione I | Mineure | +8% de vitesse des balles |
| 25 | Nymphe II | Mineure | +10 de portée |
| 25 | Oréade I | Mineure | +0.5 dégât par balle |
| 29 | Oréade III | Mineure | +0.5 dégât par balle |
| 32 | Aréthuse | Notable | Flèche de lune : +1 fois les dégâts d'une balle |
| 32 | Opis | Notable | +20% de vitesse des balles |
| 38 | Atalante | Notable | +15% de vitesse d'attaque |
| 56 | Procris | Notable | +1 dégât par balle |
| 64 | Hippolyte | Keystone | Flèche de lune : +3 fois les dégâts d'une balle, et elle revient 30% plus souvent |
| 64 | Orion | Keystone | Rebond : les balles d'Artémis rebondissent sur 2 autres ennemis proches |
| 76 | Actéon | Keystone | +1 rebond et +25% de vitesse d'attaque |
| 150 | Agrotera | Grande keystone | GRANDE KEYSTONE : la flèche de lune revient 2 fois plus souvent et fait +4 fois les dégâts d'une balle |

### Athéna (51 skills · 1 677 XP)

| Coût (XP) | Skill | Type | Effet |
| --- | --- | --- | --- |
| 5 | Métis | Départ | +5% d'XP gagnée |
| 9 | Aglaure VII | Mineure | +2% de chance d'esquiver un coup |
| 9 | Nikè I | Mineure | +1 PV max |
| 13 | Aglaure I, VIII | Mineure | +2% de chance d'esquiver un coup, chacun |
| 13 | Hersé I, VII | Mineure | +4% d'XP gagnée, chacun |
| 13 | Nikè II, VIII | Mineure | +1 PV max, chacun |
| 17 | Aglaure II, IX | Mineure | +2% de chance d'esquiver un coup, chacun |
| 17 | Hersé II, VIII | Mineure | +4% d'XP gagnée, chacun |
| 17 | Nikè IX | Mineure | +1 PV max |
| 21 | Aglaure III | Mineure | +2% de chance d'esquiver un coup |
| 21 | Hersé III, IX | Mineure | +4% d'XP gagnée, chacun |
| 21 | Nikè III, X | Mineure | +1 PV max, chacun |
| 25 | Aglaure IV, X | Mineure | +2% de chance d'esquiver un coup, chacun |
| 25 | Hersé IV, X | Mineure | +4% d'XP gagnée, chacun |
| 25 | Nikè IV | Mineure | +1 PV max |
| 26 | Érichthonios | Notable | +1 dégât par balle |
| 29 | Aglaure XI | Mineure | +2% de chance d'esquiver un coup |
| 29 | Nikè V, XI | Mineure | +1 PV max, chacun |
| 32 | Ergané | Notable | +1 dégât par balle |
| 33 | Aglaure V | Mineure | +2% de chance d'esquiver un coup |
| 33 | Hersé V, XI | Mineure | +4% d'XP gagnée, chacun |
| 33 | Nikè VI, XII | Mineure | +1 PV max, chacun |
| 37 | Aglaure VI, XII | Mineure | +2% de chance d'esquiver un coup, chacun |
| 37 | Hersé VI, XII | Mineure | +4% d'XP gagnée, chacun |
| 37 | Nikè XIII | Mineure | +1 PV max |
| 38 | Zélos | Notable | +10% de vitesse d'attaque |
| 41 | Aglaure XIII | Mineure | +2% de chance d'esquiver un coup |
| 41 | Nikè VII | Mineure | +1 PV max |
| 44 | Pandrosos | Notable | +2 PV max |
| 50 | Hygie | Notable | +0.05 PV régénérés par seconde |
| 56 | Arachné | Notable | +10% de vitesse d'attaque |
| 62 | Aidôs | Notable | +10% d'XP gagnée |
| 62 | Tritonis | Notable | +5% de chance d'esquiver un coup |
| 72 | Promachos | Keystone | +2 dégâts par balle |
| 72 | Égide | Keystone | +8% de chance d'esquiver un coup |
| 78 | Glaucopis | Keystone | +60 de portée (les yeux de la chouette) |
| 150 | Parthénos | Grande keystone | GRANDE KEYSTONE : +100% d'XP gagnée |

### Zeus (30 skills · 1 392 XP)

| Coût (XP) | Skill | Type | Effet |
| --- | --- | --- | --- |
| 5 | Thémis | Départ | Arc électrique : chaque balle de Zeus qui touche envoie un éclair vers un ennemi proche (40% des dégâts), qui devient conducteur |
| 9 | Astrapé IV | Mineure | +0.5 dégât par balle |
| 9 | Kéraunos III | Mineure | Éclairs : +5% de dégâts |
| 13 | Brontè IV | Mineure | +5% de vitesse d'attaque |
| 17 | Brontè III | Mineure | +5% de vitesse d'attaque |
| 20 | Ganymède | Notable | +10% de vitesse d'attaque |
| 21 | Kéraunos IV | Mineure | Éclairs : +5% de dégâts |
| 25 | Astrapé III | Mineure | +0.5 dégât par balle |
| 26 | Hébé | Notable | +1 éclair par balle |
| 29 | Astrapé V | Mineure | +0.5 dégât par balle |
| 29 | Kéraunos II | Mineure | Éclairs : +5% de dégâts |
| 32 | Horkos | Notable | Éclairs : +10% de dégâts |
| 33 | Brontè II | Mineure | +5% de vitesse d'attaque |
| 37 | Brontè V | Mineure | +5% de vitesse d'attaque |
| 38 | Némésis | Notable | +1 dégât par balle |
| 41 | Astrapé II | Mineure | +0.5 dégât par balle |
| 41 | Kéraunos V | Mineure | Éclairs : +5% de dégâts |
| 49 | Astrapé VI | Mineure | +0.5 dégât par balle |
| 49 | Kéraunos I | Mineure | Éclairs : +5% de dégâts |
| 53 | Brontè VI | Mineure | +5% de vitesse d'attaque |
| 57 | Brontè I | Mineure | +5% de vitesse d'attaque |
| 65 | Astrapé I | Mineure | +0.5 dégât par balle |
| 68 | Eunomia | Notable | +40 de portée des éclairs |
| 68 | Io | Notable | Éclairs : +15% de dégâts |
| 74 | Olympios | Keystone | +2 éclairs par balle et +40 de portée des éclairs |
| 76 | Ammon | Keystone | +1 balle par tir |
| 80 | Eiréné | Notable | +1 éclair par balle |
| 86 | Aétos | Keystone | Foudre : un ennemi conducteur touché par un 2e éclair reçoit la foudre (3 fois les dégâts de la balle), qui électrocute les ennemis autour : ils deviennent conducteurs à leur tour |
| 92 | Dikè | Notable | +1 dégât par balle |
| 150 | Aithér | Grande keystone | GRANDE KEYSTONE : la foudre fait +4 fois les dégâts de la balle et électrocute 50% plus loin |

### Arès (27 skills · 1 225 XP)

| Coût (XP) | Skill | Type | Effet |
| --- | --- | --- | --- |
| 5 | Ényo | Départ | Cri de guerre : toutes les 12 s, toi et toutes les planètes faites +15% de dégâts, +4% de chance de critique et +20% de dégâts critiques pendant 4 s |
| 14 | Androktasiai | Notable | Cri de guerre 50% plus fort |
| 14 | Antiope | Notable | +10% de vitesse d'attaque |
| 17 | Deimos V | Mineure | Cri de guerre : +0.3 s |
| 21 | Alala IV | Mineure | +0.05 PV regagné par ennemi tué |
| 25 | Deimos IV | Mineure | Cri de guerre : +0.3 s |
| 25 | Phobos V | Mineure | +0.5 dégât par balle |
| 29 | Deimos II | Mineure | Cri de guerre : +0.3 s |
| 29 | Phobos IV | Mineure | +0.5 dégât par balle |
| 37 | Alala III | Mineure | +0.05 PV regagné par ennemi tué |
| 37 | Phobos II | Mineure | +0.5 dégât par balle |
| 41 | Alala I | Mineure | +0.05 PV regagné par ennemi tué |
| 41 | Deimos III | Mineure | Cri de guerre : +0.3 s |
| 44 | Otréra | Notable | Le cri de guerre revient 15% plus souvent |
| 44 | Penthésilée | Notable | +0.2 PV regagné par ennemi tué |
| 49 | Deimos I | Mineure | Cri de guerre : +0.3 s |
| 49 | Phobos III | Mineure | +0.5 dégât par balle |
| 50 | Kydoimos | Notable | +10% de vitesse d'attaque |
| 50 | Polémos | Notable | +1 dégât par balle |
| 53 | Alala II | Mineure | +0.05 PV regagné par ennemi tué |
| 53 | Phobos I | Mineure | +0.5 dégât par balle |
| 64 | Phlégyas | Keystone | Le cri de guerre revient 30% plus souvent et dure 1 s de plus |
| 68 | Makhai | Notable | Cri de guerre : +1 s |
| 68 | Éris | Notable | +1 dégât par balle |
| 74 | Kyknos | Keystone | Soif de gloire : chaque ennemi tué par Arès lui donne +0.001 dégât par balle, pour toujours |
| 74 | Œnomaos | Keystone | Cri de guerre 2 fois plus fort |
| 150 | Kères | Grande keystone | GRANDE KEYSTONE : chaque ennemi tué par Arès lui donne +0.002 dégât de plus, pour toujours, et cri de guerre 2 fois plus fort |

### Aphrodite (39 skills · 1 237 XP)

| Coût (XP) | Skill | Type | Effet |
| --- | --- | --- | --- |
| 5 | Éros | Départ | Rayon de charme : toutes les 8 s, Aphrodite charme les ennemis autour d'elle pendant 2 s : ils font demi-tour et blessent leurs alliés (pas les super ennemis) |
| 9 | Charis I | Mineure | +1 PV max |
| 9 | Pothos VI | Mineure | +2% de chance d'esquiver un coup |
| 13 | Charis VII | Mineure | +1 PV max |
| 13 | Himéros I, VI, IX | Mineure | +6 de rayon de charme, chacun |
| 17 | Charis VI, IX | Mineure | +1 PV max, chacun |
| 17 | Himéros VII | Mineure | +6 de rayon de charme |
| 17 | Pothos I | Mineure | +2% de chance d'esquiver un coup |
| 21 | Charis VIII | Mineure | +1 PV max |
| 21 | Himéros VIII | Mineure | +6 de rayon de charme |
| 25 | Charis II, IV | Mineure | +1 PV max, chacun |
| 25 | Pothos III, V, VII, VIII | Mineure | +2% de chance d'esquiver un coup, chacun |
| 26 | Hermaphrodite | Notable | Charme : +0.5 s |
| 29 | Himéros II, V | Mineure | +6 de rayon de charme, chacun |
| 32 | Adonis | Notable | +20 de rayon de charme |
| 32 | Euphrosyne | Notable | +3 PV max |
| 32 | Hymen | Notable | +0.2 PV regagné par ennemi tué |
| 32 | Peitho | Notable | Charme : +0.5 s |
| 32 | Rhodos | Notable | Le rayon de charme revient 15% plus souvent |
| 33 | Charis V | Mineure | +1 PV max |
| 33 | Himéros III, IV | Mineure | +6 de rayon de charme, chacun |
| 33 | Pothos II | Mineure | +2% de chance d'esquiver un coup |
| 37 | Charis III | Mineure | +1 PV max |
| 37 | Pothos IV | Mineure | +2% de chance d'esquiver un coup |
| 44 | Antéros | Notable | +5% de chance d'esquiver un coup |
| 44 | Psyché | Notable | Le rayon de charme revient 15% plus souvent |
| 62 | Cythérée | Keystone | Le rayon de charme revient 40% plus souvent |
| 76 | Ourania | Keystone | Les ennemis charmés blessent 2 fois plus leurs alliés |
| 76 | Pandémos | Keystone | Foule : +50 de rayon de charme |
| 150 | Phanès | Grande keystone | GRANDE KEYSTONE : charme +1.5 s, et le rayon de charme revient 2 fois plus souvent |

### Hermès (27 skills · 1 011 XP)

| Coût (XP) | Skill | Type | Effet |
| --- | --- | --- | --- |
| 5 | Maïa | Départ | +5% de vitesse d'attaque |
| 9 | Kéryx I | Mineure | +8% de vitesse des balles |
| 13 | Agoraios II | Mineure | +2% de chance d'esquiver un coup |
| 13 | Hodios II | Mineure | +4% de vitesse d'attaque |
| 14 | Autolycos | Notable | +10% d'or gagné |
| 17 | Hodios I | Mineure | +4% de vitesse d'attaque |
| 17 | Kéryx III | Mineure | +8% de vitesse des balles |
| 20 | Psychopompe | Notable | +20% de vitesse des balles |
| 25 | Agoraios I, III | Mineure | +2% de chance d'esquiver un coup, chacun |
| 25 | Hodios III | Mineure | +4% de vitesse d'attaque |
| 32 | Argos | Notable | +10% de vitesse d'attaque |
| 32 | Daphnis | Notable | +10% de vitesse d'attaque |
| 32 | Myrtilos | Notable | +20% de vitesse des balles |
| 33 | Hodios IV | Mineure | +4% de vitesse d'attaque |
| 33 | Kéryx II, IV | Mineure | +8% de vitesse des balles, chacun |
| 37 | Agoraios IV | Mineure | +2% de chance d'esquiver un coup |
| 41 | Kéryx V | Mineure | +8% de vitesse des balles |
| 44 | Chioné | Notable | +5% de chance d'esquiver un coup |
| 44 | Eudoros | Notable | +5% de chance d'esquiver un coup |
| 45 | Hodios V | Mineure | +4% de vitesse d'attaque |
| 56 | Abdère | Notable | +15% de vitesse des balles |
| 66 | Talaria | Keystone | +30% de vitesse d'attaque |
| 72 | Pétase | Keystone | +10% de chance d'esquiver un coup |
| 78 | Caducée | Keystone | +1 balle par tir |
| 150 | Aion | Grande keystone | GRANDE KEYSTONE : +50% de vitesse d'attaque |

### Hestia (27 skills · 1 179 XP)

| Coût (XP) | Skill | Type | Effet |
| --- | --- | --- | --- |
| 5 | Rhéa | Départ | +2 PV max |
| 9 | Lare V | Mineure | +1 PV max |
| 13 | Pénate I | Mineure | +2% de chance d'esquiver un coup |
| 21 | Lare I | Mineure | +1 PV max |
| 21 | Vestale II | Mineure | +0.02 PV régénérés par seconde |
| 25 | Pénate IV | Mineure | +2% de chance d'esquiver un coup |
| 25 | Vestale V | Mineure | +0.02 PV régénérés par seconde |
| 26 | Agathodaimon | Notable | +2 PV max |
| 26 | Philotès | Notable | +0.2 PV regagné par ennemi tué |
| 29 | Lare II | Mineure | +1 PV max |
| 29 | Vestale I | Mineure | +0.02 PV régénérés par seconde |
| 33 | Pénate II, III | Mineure | +2% de chance d'esquiver un coup, chacun |
| 37 | Lare III | Mineure | +1 PV max |
| 37 | Vestale III | Mineure | +0.02 PV régénérés par seconde |
| 38 | Eucléia | Notable | +5% de chance d'esquiver un coup |
| 38 | Tabiti | Notable | +0.05 PV régénérés par seconde |
| 45 | Lare IV | Mineure | +1 PV max |
| 45 | Vestale IV | Mineure | +0.02 PV régénérés par seconde |
| 62 | Elpis | Notable | +0.1 PV régénérés par seconde |
| 62 | Homonoia | Notable | +0.05 PV régénérés par seconde |
| 72 | Boulaia | Keystone | +0.15 PV régénérés par seconde |
| 72 | Sôtéria | Keystone | +10% de chance d'esquiver un coup |
| 74 | Euthénia | Notable | +3 PV max |
| 74 | Hestiade | Notable | +5% de chance d'esquiver un coup |
| 78 | Vesta | Keystone | +5 PV max |
| 150 | Ananké | Grande keystone | GRANDE KEYSTONE : +8 PV max |

