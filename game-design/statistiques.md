# Les statistiques : qui profite de quoi

Tous les chiffres viennent du code du jeu (`index.html`), partie `PLAYER STATS`.

## La règle

| Source | Va au joueur (le triangle du milieu) | Va à une planète |
| --- | --- | --- |
| Shop | toutes les améliorations | rien |
| Skill tree d'un dieu, stats de tir | rien | la planète de ce dieu seulement |
| Skill tree d'un dieu, vie et défense | oui (seul le joueur peut être touché) | rien |
| Lien « Opposé » | la stat du dieu d'en face | la planète qui a choisi le lien aussi, si elle peut s'en servir |

Exemple : les +30 de portée d'Aglaé (Héphaïstos) n'agrandissent que la portée de la planète Héphaïstos. Ni les autres planètes ni le joueur n'en profitent.

- **Stats de tir** (`SHOOTER_STATS`) : dégâts, dégâts contre un élément, vitesse d'attaque, portée, vitesse des balles, balles par tir, chance et dégâts critiques, vie par touche, PV max par touche, effet de combo au hasard.
- **Stats du joueur seulement** : PV max, régénération, esquive, bouclier, recharge du bouclier, vie par ennemi tué, or gagné, XP gagnée.

> **Déjà fait :** le cri de guerre d'Arès donne des dégâts et des critiques à toutes les planètes (voir « Les pouvoirs des dieux »).
> **Plus tard (pas encore fait) :** d'autres pouvoirs qui permettront à une planète de profiter des stats d'une autre planète.

## Les stats de départ

| Stat | Joueur | Chaque planète |
| --- | --- | --- |
| PV max | 10 | — |
| Dégâts par balle | 1 | 1 |
| Vitesse d'attaque | 1 tir toutes les 0,35 s | 1 tir par seconde |
| Portée | 300 px | 250 px (depuis la planète) |
| Balles par tir | 1 | 1 |
| Chance de critique | 0 % | 0 % |
| Dégâts critiques | 200 % | 200 % |

## Les pouvoirs des dieux

Chaque dieu a sa façon de se battre, que son skill tree construit petit à petit : la compétence de **départ** donne déjà une version faible du pouvoir, et les keystones et la grande keystone le rendent énorme. Ce sont des stats de planète en plus (`PLANET_POWER_STATS`), qui ne vont qu'à la planète de ce dieu. Le détail de chaque arbre est dans [skills/](skills/README.md).

| Dieu | Arbre rempli | Comment ça marche |
| --- | --- | --- |
| Héphaïstos | tire lentement une énorme balle lente, qui fait de très gros dégâts et traverse tous les ennemis jusqu'au bord de l'écran | stats `bulletSize` (taille), `damageMultiplier` (multiplicateur de dégâts), `pierce` (999 = tous) ; sa vitesse d'attaque et la vitesse de ses balles baissent |
| Éole | tire extrêmement vite, de petites balles faibles | grosse vitesse d'attaque, `damageMultiplier` et `bulletSize` en baisse |
| Aphrodite | une onde rose autour d'elle charme les ennemis (pas les super ennemis) : ils font demi-tour et blessent leurs alliés | toutes les 8 s ; `charmRadius`, `charmDuration`, `charmPower` |
| Arès | cri de guerre : le joueur et toutes les planètes font plus de dégâts et de critiques pendant quelques secondes ; et chaque ennemi qu'il tue lui donne des dégâts **pour toujours** | toutes les 12 s ; par point de cri : +15 % de dégâts, +4 % de critique, +20 % de dégâts critiques. Soif de gloire : +0,001 à +0,003 dégât par ennemi tué, sans limite, gardé dans la sauvegarde (`killStacks`) |
| Déméter | un rayon de vie te soigne, affaiblit les ennemis autour d'elle (+50 % de dégâts subis pendant 3 s), et fait pousser des lianes sous quelques ennemis, qui les immobilisent | toutes les 9 s ; `bloomHeal`, `bloomRadius`, `vineCount`, `vineDuration` |
| Artémis | ses balles rebondissent sur d'autres ennemis ; régulièrement, une grande flèche de lune transperce tous les ennemis sur son passage | toutes les 6 s, vers l'ennemi le plus solide à portée ; `moonArrow` (× les dégâts d'une balle), `bounce` |
| Poséidon | une vague part du joueur, repousse les ennemis, les ralentit et les rend frêles (+35 % de dégâts subis, et plus) ; elle donne un bouclier des marées (invincible 2 à 3 s) | toutes les 10 s. La vague **avance** depuis le joueur (320 px/s, `TIDE_WAVE_SPEED`) : quand son front atteint un ennemi, il est ralenti et devient frêle, puis la vague l'emporte devant elle (avec un son de vague qui gonfle, déferle et se retire, `playWaveSound`), sur au plus 2 × `tideWave` px (× 0,3 pour un super ennemi), avant de passer par-dessus lui. Stats : `tideWave`, `waveRadius`, `fragility`, `tideShield`. La vague grandit aussi avec la **portée de tir de Poséidon** : `waveRangeScale` (branche « écume », qui part de Doris, sur la crête en haut à gauche de son arbre, et redescend en courbe comme la face d'une vague vue de profil : Ressac et Houle, +50 % de sa portée chacune, et +20 et +30 de portée) |
| Zeus | chaque balle envoie des éclairs vers les ennemis proches, qui deviennent conducteurs ; un conducteur touché par un 2e éclair reçoit la foudre, qui électrocute les ennemis autour (réaction en chaîne) | `chainArcs`, `arcDamage`, `arcRange`, `boltDamage`, `boltRadius`. La foudre en chaîne est étalée sur plusieurs images (6 par pas de jeu au plus) pour ne pas faire ramer |

« Revient plus souvent » (`abilityHaste`) : le temps entre deux pouvoirs est divisé par (1 + bonus). +100 % = 2 fois plus souvent.

Apollon, Athéna, Hermès et Hestia n'ont pas encore de pouvoir : leurs arbres donnent seulement des stats.

## Balles par tir : un « mur »

Les balles en plus partent côte à côte, à 10 px d'écart (`BULLET_WALL_SPACING`), dans la même direction : avec 4 balles par tir, on tire un mur de 4 balles. Les balles du milieu suivent la cible, celles des bords filent tout droit en parallèle.

## Le lien « Opposé »

Il ne fait pas de combo. La planète qui choisit le lien (dans sa propre fenêtre de skills) reçoit une stat typique du dieu d'en face (`OPPOSITE_BONUSES`). Comme le lien traverse le milieu, le joueur la reçoit aussi. Les stats qui ne servent qu'au joueur (vie, bouclier, régénération) ne vont qu'à lui.

Exemple : Éole est en face d'Aphrodite. Si Éole choisit « Opposé », Éole et le joueur reçoivent le bonus d'Aphrodite. Aphrodite, elle, ne reçoit rien, puisque ce n'est pas elle qui a choisi.

| Dieu d'en face (celui qu'on vise) | Nom | Effet | Pour qui |
| --- | --- | --- | --- |
| Héphaïstos | Forge | +1 dégât par balle | joueur + planète qui a choisi le lien |
| Poséidon | Marée protectrice | un bouclier qui bloque un coup, et se recharge 50 % plus vite | joueur |
| Déméter | Sève | +0,03 PV pour le joueur à chaque balle qui touche | joueur + planète qui a choisi le lien |
| Éole | Vent arrière | +25 % de vitesse d'attaque | joueur + planète qui a choisi le lien |
| Apollon | Clarté | +10 % de chance de coup critique | joueur + planète qui a choisi le lien |
| Artémis | Œil de la chasseresse | +60 de portée | joueur + planète qui a choisi le lien |
| Athéna | Stratégie | 15 % de chance, à chaque tir, de déclencher un effet de combo au hasard (son nom s'affiche à l'impact) | joueur + planète qui a choisi le lien |
| Zeus | Colère de Zeus | +50 % de dégâts critiques | joueur + planète qui a choisi le lien |
| Arès | Soif de sang | +0,5 PV à chaque ennemi tué (mieux que Déméter) | joueur |
| Aphrodite | Charme durable | +0,001 PV max à chaque balle qui touche (les virgules ne sont pas affichées mais comptent) | joueur + planète qui a choisi le lien |
| Hermès | Messager | +50 % de vitesse des balles | joueur + planète qui a choisi le lien |
| Hestia | Foyer | +0,15 PV régénérés par seconde | joueur |

La vie et les PV max gagnés par les touches vont toujours au joueur, même quand c'est la planète qui a choisi le lien qui touche. Les PV max d'Aphrodite durent jusqu'à la fin de la partie.

Un fin trait en pointillés, de la couleur de la planète qui choisit le lien, relie les planètes liées. Les pointillés avancent depuis la planète visée vers celle qui a choisi le lien (c'est elle qui reçoit), et le lien « Opposé » passe par le centre.
