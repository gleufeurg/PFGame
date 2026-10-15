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

> **Plus tard (pas encore fait) :** des skills ou des pouvoirs qui permettront à une planète de profiter des stats d'une autre planète.

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
