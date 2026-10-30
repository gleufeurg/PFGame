# Prix des améliorations et des skills

Généré à partir du code du jeu par `game-design/outils/generer-docs.js`.

Le shop se paie en **or**, gagné en tuant les ennemis et dépensé quand on meurt. Les skills se paient en **XP**, dans le skill tree de chaque dieu.

- Tout le shop au maximum (sans les améliorations infinies) coûte **2 222 222 227 590 or**, dont 2 222 222 222 220 or pour les 12 dieux.
- Les améliorations **infinies** (∞) n'ont pas de dernier niveau : Cadence de tir, Portée, Vie max, Dégâts, Régénération, Esquive, Dégâts critiques.
- Tous les skills des 12 dieux, en prenant à chaque fois la voie la plus chère (on ne prend qu'une voie par arbre), coûtent **245 381 XP**.

## Le shop

Chaque niveau coûte plus cher que le précédent : prix = prix de départ × multiplicateur ^ niveau déjà acheté, arrondi. Les dieux arrivent dans l'ordre : Héphaïstos, Poséidon, Déméter, Éole, Apollon, Artémis, Athéna, Zeus, Arès, Aphrodite, Hermès, Hestia.

| Amélioration | Effet par niveau | Multiplicateur | Prix par niveau (or) | Total (or) |
| --- | --- | --- | --- | --- |
| Nouvelle divinité (12 niv.) | Une nouvelle planète et son skill tree rejoignent l'orbite | ×10 | 20, 200, 2 000, 20 000, 200 000, 2 000 000, 20 000 000, 200 000 000, 2 000 000 000, 20 000 000 000, 200 000 000 000, 2 000 000 000 000 | 2 222 222 222 220 |
| Chance de critique (10 niv.) | +2% de chance de coup critique | ×1,6 | 20, 32, 51, 82, 131, 210, 336, 537, 859, 1 374 | 3 632 |
| Liens d'orbite (4 niv.) | Débloque les liens d'orbite : Droite, puis Gauche, puis Les deux côtés, puis Opposé | ×2,5 | 30, 75, 188, 469 | 762 |
| Balle supplémentaire (3 niv.) | +1 balle par tir | ×2,5 | 60, 150, 375 | 585 |
| Sauter dans le temps (2 niv.) | Débloque le saut de +30 s, puis +100 s | ×3 | 45, 135 | 180 |
| Vitesse des balles (6 niv.) | +15% de vitesse des balles | ×1,4 | 8, 11, 16, 22, 31, 43 | 131 |
| Accélérer le temps (1 niv.) | Débloque la vitesse x4 | ×4 | 80 | 80 |
| Cadence de tir (∞) | +10% de vitesse d'attaque | ×1,5 | 10, 15, 23, 34, 51, 76, 114, 171, 256, 384, 577, 865… | ∞ |
| Portée (∞) | +25 de portée | ×1,5 | 10, 15, 23, 34, 51, 76, 114, 171, 256, 384, 577, 865… | ∞ |
| Vie max (∞) | +2 PV max | ×1,5 | 8, 12, 18, 27, 41, 61, 91, 137, 205, 308, 461, 692… | ∞ |
| Dégâts (∞) | +1 dégât par balle | ×1,6 | 15, 24, 38, 61, 98, 157, 252, 403, 644, 1 031, 1 649, 2 639… | ∞ |
| Régénération (∞) | +0.05 PV par seconde | ×1,6 | 12, 19, 31, 49, 79, 126, 201, 322, 515, 825, 1 319, 2 111… | ∞ |
| Esquive (∞) | +5 points d'esquive | ×1,6 | 25, 40, 64, 102, 164, 262, 419, 671, 1 074, 1 718, 2 749, 4 398… | ∞ |
| Dégâts critiques (∞) | +20% de dégâts critiques | ×1,6 | 20, 32, 51, 82, 131, 210, 336, 537, 859, 1 374, 2 199, 3 518… | ∞ |

## Les skills

Un skill coûte plus cher quand il est loin du départ : chaque lien à parcourir depuis l'étoile de départ est un « pas ». Ensuite, **chaque dieu a des skills 1,5 fois plus chers que le dieu d'avant** (dans l'ordre d'achat du shop) : le 1er ×1, le 2e ×1,5, le 3e ×2,25… (`SKILL_TIER_GROWTH`). Les derniers dieux arrivent quand on gagne beaucoup d'XP : sans ça, tout leur arbre se remplissait d'un coup.

| Type de skill | Coût de base (XP), à multiplier par celui du dieu |
| --- | --- |
| Départ | 5 |
| Mineure | 5 + 4 × pas |
| Notable | (5 + 4 × pas) × 1,5, arrondi |
| Keystone | 60 + 2 × pas |
| Grande keystone | 150 |

| Dieu (ordre d'achat) | Multiplicateur |
| --- | --- |
| 1. Héphaïstos | ×1 |
| 2. Poséidon | ×1,5 |
| 3. Déméter | ×2,25 |
| 4. Éole | ×3,38 |
| 5. Apollon | ×5,06 |
| 6. Artémis | ×7,59 |
| 7. Athéna | ×11,39 |
| 8. Zeus | ×17,09 |
| 9. Arès | ×25,63 |
| 10. Aphrodite | ×38,44 |
| 11. Hermès | ×57,67 |
| 12. Hestia | ×86,5 |

| Dieu | Skills | Mineures | Notables | Keystones (+ grande) | XP pour tout prendre (avec la voie la plus chère) |
| --- | --- | --- | --- | --- | --- |
| Hestia | 31 | 16 | 10 | 3 + 1 | 91 424 |
| Hermès | 30 | 14 | 11 | 3 + 1 | 40 307 |
| Aphrodite | 43 | 28 | 10 | 3 + 1 | 37 407 |
| Arès | 31 | 16 | 10 | 3 + 1 | 21 887 |
| Zeus | 34 | 19 | 10 | 3 + 1 | 17 822 |
| Athéna | 55 | 40 | 10 | 3 + 1 | 14 047 |
| Apollon | 55 | 39 | 11 | 3 + 1 | 6 724 |
| Éole | 49 | 34 | 10 | 3 + 1 | 5 368 |
| Artémis | 26 | 12 | 9 | 3 + 1 | 4 858 |
| Poséidon | 46 | 28 | 13 | 3 + 1 | 2 222 |
| Déméter | 55 | 39 | 11 | 3 + 1 | 2 209 |
| Héphaïstos | 43 | 25 | 12 | 4 + 1 | 1 106 |

## L'Éveil

Quand toutes les compétences possibles d'un dieu sont prises, son XP peut l'**éveiller**, sans fin : chaque niveau donne +5 % de dégâts à sa planète. Prix = 100 XP × 1,5 ^ rang du dieu × 1,25 ^ niveaux d'Éveil déjà pris.

| Dieu | Niveau 1 | Niveau 5 | Niveau 10 | Niveau 20 | Total jusqu'au niveau 10 |
| --- | --- | --- | --- | --- | --- |
| Héphaïstos | 100 | 244 | 745 | 6 939 | 3 324 |
| Poséidon | 150 | 366 | 1 118 | 10 408 | 4 988 |
| Déméter | 225 | 549 | 1 676 | 15 613 | 7 481 |
| Éole | 338 | 824 | 2 515 | 23 419 | 11 223 |
| Apollon | 506 | 1 236 | 3 772 | 35 128 | 16 834 |
| Artémis | 759 | 1 854 | 5 658 | 52 692 | 25 251 |
| Athéna | 1 139 | 2 781 | 8 487 | 79 038 | 37 877 |
| Zeus | 1 709 | 4 171 | 12 730 | 118 558 | 56 816 |
| Arès | 2 563 | 6 257 | 19 095 | 177 836 | 85 225 |
| Aphrodite | 3 844 | 9 386 | 28 643 | 266 754 | 127 835 |
| Hermès | 5 767 | 14 078 | 42 964 | 400 132 | 191 753 |
| Hestia | 8 650 | 21 118 | 64 446 | 600 197 | 287 630 |

## Le détail par dieu

Chaque tableau va du skill le moins cher au plus cher. Les dieux sont dans leur ordre d'achat dans le shop.

### Héphaïstos (43 skills · 1 106 XP)

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
| 33 | Telchine II, V, VIII | Mineure | Balles 8% plus grosses, chacun |
| 37 | Cyclope VIII | Mineure | +10% de dégâts critiques |
| 37 | Pyrois | Mineure | La traînée de feu dure 0.6 s de plus |
| 38 | Argès | Notable | +2 dégâts par balle |
| 38 | Kédalion | Notable | +25% de dégâts critiques |
| 50 | Kratos | Notable | +1 dégât par balle |
| 50 | Phlégéthon | Notable | Traînée de feu : les balles d'Héphaïstos laissent derrière elles une traînée de feu ; les ennemis qui la touchent brûlent (40% des dégâts de la balle par seconde) |
| 50 | Stéropès | Notable | Balles 20% plus grosses |
| 56 | Lemnos | Notable | +15% de dégâts |
| 62 | Aethon | Notable | La traînée de feu brûle plus fort : +40% des dégâts de la balle par seconde |
| 62 | Cacus | Notable | La traînée de feu brûle plus fort : +40% des dégâts de la balle par seconde |
| 72 | Brontès | Keystone | Marteau : +100% de dégâts, mais 35% de vitesse d'attaque en moins |
| 72 | Cabires | Keystone | Enclume : balles 2 fois plus grosses, mais 30% plus lentes |
| 74 | Hécate | Keystone | Coulée de lave : les balles traversent TOUS les ennemis, jusqu'au bord de l'écran |
| 80 | Pyriphlégéthon | Keystone | Brasier : la traînée de feu est 2 fois plus large et dure 1 s de plus |
| 150 | Etna | Grande keystone | GRANDE KEYSTONE : +150% de dégâts et balles 50% plus grosses, mais 30% de vitesse d'attaque en moins |

### Poséidon (46 skills · 2 222 XP)

| Coût (XP) | Skill | Type | Effet |
| --- | --- | --- | --- |
| 8 | Thétis | Départ | Raz-de-marée : toutes les 10 s, une vague part de Poséidon jusqu'à sa portée, repousse les ennemis, les ralentit et les rend frêles : +35% de dégâts subis pendant 4 s |
| 14 | Océanide IV | Mineure | +0.02 PV régénérés par seconde |
| 20 | Naïade IV | Mineure | Ennemis frêles : +2% de dégâts subis |
| 32 | Néréide V | Mineure | +1 PV max |
| 38 | Océanide II | Mineure | +0.02 PV régénérés par seconde |
| 39 | Phorcys | Notable | Bouclier : bloque un coup, se recharge en 10 s |
| 44 | Néréide II | Mineure | +1 PV max |
| 50 | Naïade I, II | Mineure | Ennemis frêles : +2% de dégâts subis, chacun |
| 50 | Océanide V | Mineure | +0.02 PV régénérés par seconde |
| 56 | Naïade V | Mineure | Ennemis frêles : +2% de dégâts subis |
| 56 | Néréide III | Mineure | +1 PV max |
| 56 | Océanide I | Mineure | +0.02 PV régénérés par seconde |
| 57 | Glaucos | Notable | Ennemis frêles : +5% de dégâts subis |
| 66 | Galatée | Notable | +40 de portée (la vague va aussi plus loin) |
| 68 | Néréide I, VI | Mineure | +1 PV max, chacun |
| 68 | Océanide III | Mineure | +0.02 PV régénérés par seconde |
| 74 | Cymo | Mineure | +20 de portée |
| 74 | Naïade III | Mineure | Ennemis frêles : +2% de dégâts subis |
| 74 | Néréide IX | Mineure | +1 PV max |
| 74 | Océanide VI | Mineure | +0.02 PV régénérés par seconde |
| 80 | Naïade VI, VIII | Mineure | Ennemis frêles : +2% de dégâts subis, chacun |
| 86 | Néréide IV | Mineure | +1 PV max |
| 86 | Rhodé | Mineure | +30 de portée |
| 92 | Néréide VII | Mineure | +1 PV max |
| 93 | Doris | Notable | +0.05 PV régénérés par seconde |
| 93 | Leucothée | Notable | La vague : +15 de réduction de recharge |
| 108 | Céto | Keystone | Ennemis frêles : +15% de dégâts subis |
| 110 | Océanide VII | Mineure | +0.02 PV régénérés par seconde |
| 116 | Naïade VII | Mineure | Ennemis frêles : +2% de dégâts subis |
| 120 | Cymopolée | Notable | Ressac : +60 de portée (la vague va aussi plus loin) |
| 120 | Pontos | Notable | Ennemis frêles : +5% de dégâts subis |
| 120 | Protée | Notable | +10 points d'esquive |
| 122 | Néréide VIII | Mineure | +1 PV max |
| 123 | Amphitrite | Keystone | Bouclier des marées : chaque vague te rend invincible pendant 2 s |
| 128 | Océanide VIII | Mineure | +0.02 PV régénérés par seconde |
| 129 | Amymone | Notable | +40 de portée (la vague va aussi plus loin) |
| 129 | Palémon | Notable | +30 de recul de la vague |
| 134 | Océanide IX | Mineure | +0.02 PV régénérés par seconde |
| 138 | Benthésicymé | Notable | Houle : +80 de portée (la vague va aussi plus loin) |
| 138 | Triton | Keystone | La vague : +40 de réduction de recharge, et +80 de portée |
| 147 | Nérée | Notable | +3 PV max |
| 210 | Eurybia | Notable | La vague : +15 de réduction de recharge |
| 225 | Océanos | Grande keystone | GRANDE KEYSTONE : ennemis frêles +25% de dégâts subis, et bouclier des marées +1 s |

### Déméter (55 skills · 2 209 XP)

| Coût (XP) | Skill | Type | Effet |
| --- | --- | --- | --- |
| 11 | Perséphone | Départ | Rayon de vie : toutes les 9 s, Déméter te soigne de 1 PV et affaiblit les ennemis autour d'elle (+50% de dégâts subis pendant 3 s) |
| 20 | Dryade I, IV, VII, X | Mineure | +0.05 PV regagné par ennemi tué, chacun |
| 29 | Hamadryade I, II, IV, V, VII, VIII, X, XI | Mineure | +5% d'XP gagnée, chacun |
| 38 | Dryade II, V, VIII, XI | Mineure | +0.05 PV regagné par ennemi tué, chacun |
| 38 | Mélie I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII | Mineure | +8 de rayon du rayon de vie, chacun |
| 45 | Carpo | Notable | Le rayon de vie : +15 de réduction de recharge |
| 45 | Chloris | Notable | +0.05 PV régénérés par seconde |
| 45 | Iasion | Notable | +25 de rayon du rayon de vie |
| 45 | Thallo | Notable | +10% d'XP gagnée |
| 47 | Dryade III, VI, IX, XII | Mineure | +0.05 PV regagné par ennemi tué, chacun |
| 47 | Hamadryade III, VI, IX, XII | Mineure | +5% d'XP gagnée, chacun |
| 56 | Dryade XIII | Mineure | +0.05 PV regagné par ennemi tué |
| 56 | Hamadryade XIII | Mineure | +5% d'XP gagnée |
| 56 | Mélie XIII | Mineure | +8 de rayon du rayon de vie |
| 86 | Anthée | Notable | Les lianes immobilisent 1 s de plus |
| 86 | Aristée | Notable | +0.2 PV regagnés par ennemi tué |
| 86 | Auxo | Notable | Le rayon de vie soigne 0.5 PV de plus |
| 86 | Eubouleus | Notable | +1 liane à chaque rayon de vie |
| 99 | Despina | Notable | +1 liane à chaque rayon de vie |
| 99 | Dryope | Notable | +25 de rayon du rayon de vie |
| 99 | Métanire | Notable | Le rayon de vie soigne 0.5 PV de plus |
| 153 | Karpos | Keystone | Lianes : chaque rayon de vie fait pousser 3 lianes sous des ennemis, qui les immobilisent 2.5 s (pas les super ennemis) |
| 153 | Pan | Keystone | +60 de rayon du rayon de vie et +2 lianes |
| 153 | Triptolème | Keystone | Le rayon de vie soigne 2 PV de plus, et +30 de réduction de recharge |
| 338 | Gaïa | Grande keystone | GRANDE KEYSTONE : +3 lianes, qui immobilisent 2 s de plus, et +100 de réduction de recharge du rayon de vie (2 fois plus souvent) |

### Éole (49 skills · 5 368 XP)

| Coût (XP) | Skill | Type | Effet |
| --- | --- | --- | --- |
| 17 | Zéphyr | Départ | +10% de vitesse d'attaque |
| 30 | Aura I | Mineure | +15 de portée |
| 44 | Héliade I | Mineure | +10% de vitesse des balles |
| 71 | Anémoï I | Mineure | +6% de vitesse d'attaque |
| 71 | Héliade V | Mineure | +10% de vitesse des balles |
| 84 | Anémoï VIII | Mineure | +6% de vitesse d'attaque |
| 84 | Aura II, V, IX | Mineure | +15 de portée, chacun |
| 88 | Éos | Notable | +30 de portée |
| 98 | Anémoï V | Mineure | +6% de vitesse d'attaque |
| 98 | Aura XII | Mineure | +15 de portée |
| 108 | Euros | Notable | +2 dégâts contre les plantes |
| 111 | Anémoï XI | Mineure | +6% de vitesse d'attaque |
| 111 | Aura VI | Mineure | +15 de portée |
| 111 | Héliade II, IX | Mineure | +10% de vitesse des balles, chacun |
| 125 | Anémoï II, IX | Mineure | +6% de vitesse d'attaque, chacun |
| 125 | Héliade VI | Mineure | +10% de vitesse des balles |
| 128 | Borée | Notable | +15% de vitesse d'attaque |
| 138 | Anémoï VI | Mineure | +6% de vitesse d'attaque |
| 138 | Aura III, X | Mineure | +15 de portée, chacun |
| 149 | Héméra | Notable | +20% de vitesse d'attaque |
| 149 | Phosphoros | Notable | +30% de vitesse des balles |
| 152 | Aura VII | Mineure | +15 de portée |
| 152 | Héliade III | Mineure | +10% de vitesse des balles |
| 165 | Héliade X | Mineure | +10% de vitesse des balles |
| 169 | Skiron | Notable | +20% de vitesse des balles |
| 179 | Anémoï III, X | Mineure | +6% de vitesse d'attaque, chacun |
| 179 | Héliade VII | Mineure | +10% de vitesse des balles |
| 189 | Kaikias | Notable | +15% de vitesse d'attaque |
| 192 | Anémoï VII | Mineure | +6% de vitesse d'attaque |
| 192 | Aura IV, XI | Mineure | +15 de portée, chacun |
| 206 | Aura VIII | Mineure | +15 de portée |
| 206 | Héliade IV, XI | Mineure | +10% de vitesse des balles, chacun |
| 219 | Anémoï IV | Mineure | +6% de vitesse d'attaque |
| 219 | Héliade VIII | Mineure | +10% de vitesse des balles |
| 230 | Hespéros | Notable | +10% de vitesse d'attaque |
| 243 | Séléné | Keystone | Rafale : +100% de vitesse d'attaque, mais 30% de dégâts en moins |
| 250 | Iris | Notable | +20% de vitesse des balles |
| 250 | Notos | Notable | +1 dégât contre les plantes |
| 304 | Astraïos | Keystone | Ouragan : +60% de vitesse d'attaque, mais balles 40% plus petites |
| 311 | Phaéton | Keystone | +1 balle par tir |
| 506 | Thyella | Grande keystone | GRANDE KEYSTONE : +150% de vitesse d'attaque et +1 balle par tir, mais 30% de dégâts en moins |

### Apollon (55 skills · 6 724 XP)

| Coût (XP) | Skill | Type | Effet |
| --- | --- | --- | --- |
| 25 | Tyché | Départ | +10% d'or gagné |
| 46 | Pléiade I | Mineure | +5% d'or gagné |
| 46 | Titanide I | Mineure | +0.5 dégât par balle |
| 66 | Hyade I, II | Mineure | +5% d'XP gagnée, chacun |
| 66 | Pléiade II | Mineure | +5% d'or gagné |
| 86 | Hyade III, IX, XII | Mineure | +5% d'XP gagnée, chacun |
| 86 | Pléiade VI | Mineure | +5% d'or gagné |
| 86 | Titanide II | Mineure | +0.5 dégât par balle |
| 101 | Eutychia | Notable | +25% d'or gagné |
| 101 | Kairos | Notable | +15% d'or gagné |
| 106 | Hyade VI, X, XI | Mineure | +5% d'XP gagnée, chacun |
| 106 | Pléiade III, IV, V, VII | Mineure | +5% d'or gagné, chacun |
| 106 | Titanide III, VIII, IX, XII | Mineure | +0.5 dégât par balle, chacun |
| 127 | Hyade IV, V, VII | Mineure | +5% d'XP gagnée, chacun |
| 127 | Pléiade IX, X | Mineure | +5% d'or gagné, chacun |
| 127 | Titanide VI, VII, X, XI | Mineure | +0.5 dégât par balle, chacun |
| 147 | Pléiade VIII, XI, XII | Mineure | +5% d'or gagné, chacun |
| 147 | Titanide IV, V | Mineure | +0.5 dégât par balle, chacun |
| 167 | Hyade VIII | Mineure | +5% d'XP gagnée |
| 167 | Pléiade XIII | Mineure | +5% d'or gagné |
| 167 | Titanide XIII | Mineure | +0.5 dégât par balle |
| 192 | Coéos | Notable | +10% d'XP gagnée |
| 192 | Théia | Notable | +1 dégât par balle |
| 208 | Hyade XIII | Mineure | +5% d'XP gagnée |
| 223 | Astrée | Notable | +1 dégât contre les ennemis d'air |
| 223 | Hypérion | Notable | +1 dégât par balle |
| 253 | Agathodaïmon | Notable | +10% d'or gagné |
| 253 | Mnémosyne | Notable | +20% d'XP gagnée |
| 284 | Amalthée | Notable | +25% d'or gagné |
| 284 | Nyx | Notable | +2 dégâts par balle |
| 344 | Phébé | Notable | +15% de vitesse d'attaque |
| 365 | Ploutos | Keystone | +50% d'or gagné |
| 365 | Érébos | Keystone | +3 dégâts par balle |
| 385 | Astéria | Keystone | +1 balle par tir |
| 759 | Chaos | Grande keystone | GRANDE KEYSTONE : +100% d'or gagné |

### Artémis (26 skills · 4 858 XP)

| Coût (XP) | Skill | Type | Effet |
| --- | --- | --- | --- |
| 38 | Léto | Départ | Flèche de lune : toutes les 6 s, Artémis tire une grande flèche qui transperce tous les ennemis sur son passage (3 fois les dégâts d'une balle) |
| 68 | Nymphe IV | Mineure | +10 de portée |
| 68 | Pléione II, III | Mineure | +8% de vitesse des balles, chacun |
| 106 | Britomartis | Notable | +1 dégât par balle |
| 106 | Callisto | Notable | +10% de vitesse d'attaque |
| 129 | Nymphe I, III | Mineure | +10 de portée, chacun |
| 129 | Oréade II, IV | Mineure | +0.5 dégât par balle, chacun |
| 129 | Pléione IV | Mineure | +8% de vitesse des balles |
| 152 | Cyrène | Notable | La flèche de lune : +15 de réduction de recharge |
| 159 | Pléione I | Mineure | +8% de vitesse des balles |
| 190 | Nymphe II | Mineure | +10 de portée |
| 190 | Oréade I | Mineure | +0.5 dégât par balle |
| 220 | Oréade III | Mineure | +0.5 dégât par balle |
| 243 | Aréthuse | Notable | Flèche de lune : +1 fois les dégâts d'une balle |
| 243 | Endymion | Notable | Flèche de lune : +1 fois les dégâts d'une balle |
| 243 | Méléagre | Notable | Les balles rebondissent sur 1 ennemi de plus |
| 243 | Opis | Notable | +20% de vitesse des balles |
| 289 | Atalante | Notable | +15% de vitesse d'attaque |
| 425 | Procris | Notable | +1 dégât par balle |
| 486 | Hippolyte | Keystone | Flèche de lune : +3 fois les dégâts d'une balle, et +30 de réduction de recharge |
| 486 | Orion | Keystone | Rebond : les balles d'Artémis rebondissent sur 2 autres ennemis proches |
| 577 | Actéon | Keystone | +1 rebond et +25% de vitesse d'attaque |
| 1139 | Agrotera | Grande keystone | GRANDE KEYSTONE : +100 de réduction de recharge de la flèche de lune (2 fois plus souvent), et +4 fois les dégâts d'une balle |

### Athéna (55 skills · 14 047 XP)

| Coût (XP) | Skill | Type | Effet |
| --- | --- | --- | --- |
| 57 | Métis | Départ | +5% d'XP gagnée |
| 103 | Aglaure VII | Mineure | +2 points d'esquive |
| 103 | Nikè I | Mineure | +1 PV max |
| 148 | Aglaure I, VIII | Mineure | +2 points d'esquive, chacun |
| 148 | Hersé I, VII | Mineure | +4% d'XP gagnée, chacun |
| 148 | Nikè II, VIII | Mineure | +1 PV max, chacun |
| 194 | Aglaure II, IX | Mineure | +2 points d'esquive, chacun |
| 194 | Hersé II, VIII | Mineure | +4% d'XP gagnée, chacun |
| 194 | Nikè IX | Mineure | +1 PV max |
| 239 | Aglaure III | Mineure | +2 points d'esquive |
| 239 | Hersé III, IX | Mineure | +4% d'XP gagnée, chacun |
| 239 | Nikè III, X | Mineure | +1 PV max, chacun |
| 285 | Aglaure IV, X | Mineure | +2 points d'esquive, chacun |
| 285 | Hersé IV, X | Mineure | +4% d'XP gagnée, chacun |
| 285 | Nikè IV | Mineure | +1 PV max |
| 296 | Érichthonios | Notable | +1 dégât par balle |
| 330 | Aglaure XI | Mineure | +2 points d'esquive |
| 330 | Nikè V, XI | Mineure | +1 PV max, chacun |
| 365 | Ergané | Notable | +1 dégât par balle |
| 376 | Aglaure V | Mineure | +2 points d'esquive |
| 376 | Hersé V, XI | Mineure | +4% d'XP gagnée, chacun |
| 376 | Nikè VI, XII | Mineure | +1 PV max, chacun |
| 421 | Aglaure VI, XII | Mineure | +2 points d'esquive, chacun |
| 421 | Hersé VI, XII | Mineure | +4% d'XP gagnée, chacun |
| 421 | Nikè XIII | Mineure | +1 PV max |
| 433 | Zélos | Notable | +10% de vitesse d'attaque |
| 467 | Aglaure XIII | Mineure | +2 points d'esquive |
| 467 | Nikè VII | Mineure | +1 PV max |
| 501 | Pandrosos | Notable | +2 PV max |
| 513 | Hersé XIII | Mineure | +4% d'XP gagnée |
| 513 | Nikè XIV | Mineure | +1 PV max |
| 570 | Hygie | Notable | +0.05 PV régénérés par seconde |
| 638 | Arachné | Notable | +10% de vitesse d'attaque |
| 706 | Aidôs | Notable | +10% d'XP gagnée |
| 706 | Tritonis | Notable | +5 points d'esquive |
| 820 | Promachos | Keystone | +2 dégâts par balle |
| 820 | Égide | Keystone | +8 points d'esquive |
| 843 | Bellérophon | Notable | +2 dégâts par balle |
| 843 | Pallas | Notable | +8 points d'esquive |
| 888 | Glaucopis | Keystone | +60 de portée (les yeux de la chouette) |
| 1709 | Parthénos | Grande keystone | GRANDE KEYSTONE : +100% d'XP gagnée |

### Zeus (34 skills · 17 822 XP)

| Coût (XP) | Skill | Type | Effet |
| --- | --- | --- | --- |
| 85 | Thémis | Départ | Arc électrique : chaque balle de Zeus qui touche envoie un éclair vers un ennemi proche (40% des dégâts), qui devient conducteur |
| 154 | Astrapé IV | Mineure | +0.5 dégât par balle |
| 154 | Kéraunos III | Mineure | Éclairs : +5% de dégâts |
| 222 | Brontè IV | Mineure | +5% de vitesse d'attaque |
| 290 | Brontè III | Mineure | +5% de vitesse d'attaque |
| 342 | Ganymède | Notable | +10% de vitesse d'attaque |
| 359 | Kéraunos IV | Mineure | Éclairs : +5% de dégâts |
| 427 | Astrapé III | Mineure | +0.5 dégât par balle |
| 444 | Hébé | Notable | +1 éclair par balle |
| 495 | Astrapé V | Mineure | +0.5 dégât par balle |
| 495 | Kéraunos II | Mineure | Éclairs : +5% de dégâts |
| 547 | Horkos | Notable | Éclairs : +10% de dégâts |
| 564 | Brontè II | Mineure | +5% de vitesse d'attaque |
| 632 | Brontè V | Mineure | +5% de vitesse d'attaque |
| 632 | Kéraunos VI | Mineure | Éclairs : +5% de dégâts |
| 649 | Némésis | Notable | +1 dégât par balle |
| 701 | Astrapé II, VII | Mineure | +0.5 dégât par balle, chacun |
| 701 | Kéraunos V | Mineure | Éclairs : +5% de dégâts |
| 837 | Astrapé VI | Mineure | +0.5 dégât par balle |
| 837 | Kéraunos I | Mineure | Éclairs : +5% de dégâts |
| 906 | Brontè VI | Mineure | +5% de vitesse d'attaque |
| 974 | Brontè I | Mineure | +5% de vitesse d'attaque |
| 1059 | Salmonée | Notable | +1 éclair par balle |
| 1111 | Astrapé I | Mineure | +0.5 dégât par balle |
| 1162 | Dodone | Notable | +20% de vitesse d'attaque |
| 1162 | Eunomia | Notable | +40 de portée des éclairs |
| 1162 | Io | Notable | Éclairs : +15% de dégâts |
| 1264 | Olympios | Keystone | +2 éclairs par balle et +40 de portée des éclairs |
| 1299 | Ammon | Keystone | +1 balle par tir |
| 1367 | Eiréné | Notable | +1 éclair par balle |
| 1469 | Aétos | Keystone | Foudre : un ennemi conducteur touché par un 2e éclair reçoit la foudre (3 fois les dégâts de la balle), qui électrocute les ennemis autour : ils deviennent conducteurs à leur tour |
| 1572 | Dikè | Notable | +1 dégât par balle |
| 2563 | Aithér | Grande keystone | GRANDE KEYSTONE : la foudre fait +4 fois les dégâts de la balle et électrocute 50% plus loin |

### Arès (31 skills · 21 887 XP)

| Coût (XP) | Skill | Type | Effet |
| --- | --- | --- | --- |
| 128 | Ényo | Départ | Cri de guerre : toutes les 12 s, toi et toutes les planètes faites +15% de dégâts, +4% de chance de critique et +20% de dégâts critiques pendant 4 s |
| 359 | Androktasiai | Notable | Cri de guerre 50% plus fort |
| 359 | Antiope | Notable | +10% de vitesse d'attaque |
| 436 | Deimos V | Mineure | Cri de guerre : +0.3 s |
| 538 | Alala IV | Mineure | +0.05 PV regagné par ennemi tué |
| 641 | Deimos IV | Mineure | Cri de guerre : +0.3 s |
| 641 | Phobos V | Mineure | +0.5 dégât par balle |
| 743 | Deimos II | Mineure | Cri de guerre : +0.3 s |
| 743 | Phobos IV | Mineure | +0.5 dégât par balle |
| 948 | Alala III, V | Mineure | +0.05 PV regagné par ennemi tué, chacun |
| 948 | Phobos II, VI | Mineure | +0.5 dégât par balle, chacun |
| 1051 | Alala I | Mineure | +0.05 PV regagné par ennemi tué |
| 1051 | Deimos III | Mineure | Cri de guerre : +0.3 s |
| 1128 | Otréra | Notable | Le cri de guerre : +15 de réduction de recharge |
| 1128 | Penthésilée | Notable | +0.2 PV regagné par ennemi tué |
| 1256 | Deimos I | Mineure | Cri de guerre : +0.3 s |
| 1256 | Phobos III | Mineure | +0.5 dégât par balle |
| 1281 | Kydoimos | Notable | +10% de vitesse d'attaque |
| 1281 | Polémos | Notable | +1 dégât par balle |
| 1358 | Alala II | Mineure | +0.05 PV regagné par ennemi tué |
| 1358 | Phobos I | Mineure | +0.5 dégât par balle |
| 1589 | Ascalaphe | Notable | Cri de guerre : +1 s |
| 1589 | Diomède | Notable | +0.2 PV regagné par ennemi tué |
| 1640 | Phlégyas | Keystone | Le cri de guerre : +30 de réduction de recharge, et dure 1 s de plus |
| 1743 | Makhai | Notable | Cri de guerre : +1 s |
| 1743 | Éris | Notable | +1 dégât par balle |
| 1897 | Kyknos | Keystone | Soif de gloire : chaque ennemi tué par Arès lui donne +0.001 dégât par balle, pour toujours |
| 1897 | Œnomaos | Keystone | Cri de guerre 2 fois plus fort |
| 3844 | Kères | Grande keystone | GRANDE KEYSTONE : chaque ennemi tué par Arès lui donne +0.002 dégât de plus, pour toujours, et cri de guerre 2 fois plus fort |

### Aphrodite (43 skills · 37 407 XP)

| Coût (XP) | Skill | Type | Effet |
| --- | --- | --- | --- |
| 192 | Éros | Départ | Rayon de charme : toutes les 8 s, Aphrodite charme les ennemis autour d'elle pendant 2 s : ils font demi-tour et blessent leurs alliés (pas les super ennemis) |
| 346 | Charis I | Mineure | +1 PV max |
| 346 | Pothos VI | Mineure | +2 points d'esquive |
| 500 | Charis VII | Mineure | +1 PV max |
| 500 | Himéros I, VI, IX | Mineure | +6 de rayon de charme, chacun |
| 654 | Charis VI, IX | Mineure | +1 PV max, chacun |
| 654 | Himéros VII | Mineure | +6 de rayon de charme |
| 654 | Pothos I | Mineure | +2 points d'esquive |
| 807 | Charis VIII | Mineure | +1 PV max |
| 807 | Himéros VIII | Mineure | +6 de rayon de charme |
| 961 | Charis II, IV | Mineure | +1 PV max, chacun |
| 961 | Pothos III, V, VII, VIII | Mineure | +2 points d'esquive, chacun |
| 1000 | Hermaphrodite | Notable | Charme : +0.5 s |
| 1115 | Himéros II, V | Mineure | +6 de rayon de charme, chacun |
| 1230 | Adonis | Notable | +20 de rayon de charme |
| 1230 | Euphrosyne | Notable | +3 PV max |
| 1230 | Hymen | Notable | +0.2 PV regagné par ennemi tué |
| 1230 | Peitho | Notable | Charme : +0.5 s |
| 1230 | Rhodos | Notable | Le rayon de charme : +15 de réduction de recharge |
| 1269 | Charis V | Mineure | +1 PV max |
| 1269 | Himéros III, IV | Mineure | +6 de rayon de charme, chacun |
| 1269 | Pothos II | Mineure | +2 points d'esquive |
| 1422 | Charis III | Mineure | +1 PV max |
| 1422 | Pothos IV | Mineure | +2 points d'esquive |
| 1576 | Charis X | Mineure | +1 PV max |
| 1576 | Pothos IX | Mineure | +2 points d'esquive |
| 1692 | Antéros | Notable | +5 points d'esquive |
| 1692 | Psyché | Notable | Le rayon de charme : +15 de réduction de recharge |
| 2383 | Cythérée | Keystone | Le rayon de charme : +40 de réduction de recharge |
| 2614 | Harmonie | Notable | +20 de rayon de charme |
| 2614 | Énée | Notable | Charme : +0.5 s |
| 2922 | Ourania | Keystone | Les ennemis charmés blessent 2 fois plus leurs alliés |
| 2922 | Pandémos | Keystone | Foule : +50 de rayon de charme |
| 5767 | Phanès | Grande keystone | GRANDE KEYSTONE : charme +1.5 s, et +100 de réduction de recharge du rayon de charme (2 fois plus souvent) |

### Hermès (30 skills · 40 307 XP)

| Coût (XP) | Skill | Type | Effet |
| --- | --- | --- | --- |
| 288 | Maïa | Départ | +5% de vitesse d'attaque |
| 519 | Kéryx I | Mineure | +8% de vitesse des balles |
| 750 | Agoraios II | Mineure | +2 points d'esquive |
| 750 | Hodios II | Mineure | +4% de vitesse d'attaque |
| 807 | Autolycos | Notable | +10% d'or gagné |
| 980 | Hodios I | Mineure | +4% de vitesse d'attaque |
| 980 | Kéryx III | Mineure | +8% de vitesse des balles |
| 1153 | Psychopompe | Notable | +20% de vitesse des balles |
| 1442 | Agoraios I, III | Mineure | +2 points d'esquive, chacun |
| 1442 | Hodios III | Mineure | +4% de vitesse d'attaque |
| 1845 | Argos | Notable | +10% de vitesse d'attaque |
| 1845 | Daphnis | Notable | +10% de vitesse d'attaque |
| 1845 | Myrtilos | Notable | +20% de vitesse des balles |
| 1903 | Hodios IV | Mineure | +4% de vitesse d'attaque |
| 1903 | Kéryx II, IV | Mineure | +8% de vitesse des balles, chacun |
| 2134 | Agoraios IV | Mineure | +2 points d'esquive |
| 2191 | Angelos | Notable | +15% de vitesse d'attaque |
| 2364 | Kéryx V | Mineure | +8% de vitesse des balles |
| 2537 | Chioné | Notable | +5 points d'esquive |
| 2537 | Eudoros | Notable | +5 points d'esquive |
| 2595 | Hodios V | Mineure | +4% de vitesse d'attaque |
| 3229 | Abdère | Notable | +15% de vitesse des balles |
| 3229 | Dolios | Notable | +5 points d'esquive |
| 3806 | Talaria | Keystone | +30% de vitesse d'attaque |
| 4152 | Pétase | Keystone | +10 points d'esquive |
| 4267 | Kriophoros | Notable | +20% de vitesse des balles |
| 4498 | Caducée | Keystone | +1 balle par tir |
| 8650 | Aion | Grande keystone | GRANDE KEYSTONE : +50% de vitesse d'attaque |

### Hestia (31 skills · 91 424 XP)

| Coût (XP) | Skill | Type | Effet |
| --- | --- | --- | --- |
| 432 | Rhéa | Départ | +2 PV max |
| 778 | Lare V | Mineure | +1 PV max |
| 1124 | Pénate I | Mineure | +2 points d'esquive |
| 12975 | Ananké | Grande keystone | GRANDE KEYSTONE : +8 PV max |
| 1816 | Lare I | Mineure | +1 PV max |
| 1816 | Vestale II | Mineure | +0.02 PV régénérés par seconde |
| 2162 | Pénate IV | Mineure | +2 points d'esquive |
| 2162 | Vestale V | Mineure | +0.02 PV régénérés par seconde |
| 2249 | Agathodaimon | Notable | +2 PV max |
| 2249 | Philotès | Notable | +0.2 PV regagné par ennemi tué |
| 2508 | Lare II | Mineure | +1 PV max |
| 2508 | Vestale I | Mineure | +0.02 PV régénérés par seconde |
| 2854 | Pénate II, III, V | Mineure | +2 points d'esquive, chacun |
| 2854 | Vestale VI | Mineure | +0.02 PV régénérés par seconde |
| 3200 | Lare III | Mineure | +1 PV max |
| 3200 | Vestale III | Mineure | +0.02 PV régénérés par seconde |
| 3287 | Eucléia | Notable | +5 points d'esquive |
| 3287 | Tabiti | Notable | +0.05 PV régénérés par seconde |
| 3892 | Lare IV | Mineure | +1 PV max |
| 3892 | Vestale IV | Mineure | +0.02 PV régénérés par seconde |
| 4844 | Prytanée | Notable | +0.1 PV régénérés par seconde |
| 4844 | Éléos | Notable | +5 points d'esquive |
| 5363 | Elpis | Notable | +0.1 PV régénérés par seconde |
| 5363 | Homonoia | Notable | +0.05 PV régénérés par seconde |
| 6228 | Boulaia | Keystone | +0.15 PV régénérés par seconde |
| 6228 | Sôtéria | Keystone | +10 points d'esquive |
| 6401 | Euthénia | Notable | +3 PV max |
| 6401 | Hestiade | Notable | +5 points d'esquive |
| 6747 | Vesta | Keystone | +5 PV max |

