# Les statistiques : qui profite de quoi

Tous les chiffres viennent du code du jeu (`index.html`), partie `PLAYER STATS`.

## La règle

| Source | Va au joueur (le triangle du milieu) | Va à une planète |
| --- | --- | --- |
| Shop | toutes les améliorations | rien |
| Skill tree d'un dieu, stats de tir | rien | la planète de ce dieu seulement |
| Skill tree d'un dieu, vie et défense | oui (seul le joueur peut être touché) | rien |
| Lien « Opposé » | la stat du dieu | la planète d'en face aussi, si elle peut s'en servir |

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

Il ne fait pas de combo. La planète envoie à travers le centre une stat typique de son dieu (`OPPOSITE_BONUSES`). Comme le lien traverse le milieu, la stat va au joueur ET à la planète d'en face. Les stats qui ne servent qu'au joueur (vie, bouclier, régénération) ne vont qu'à lui.

| Dieu qui crée le lien | Nom | Effet | Pour qui |
| --- | --- | --- | --- |
| Héphaïstos | Forge | +1 dégât par balle | joueur + planète d'en face |
| Poséidon | Marée protectrice | un bouclier qui bloque un coup, et se recharge 50 % plus vite | joueur |
| Déméter | Sève | +0,03 PV pour le joueur à chaque balle qui touche | joueur + planète d'en face |
| Éole | Vent arrière | +25 % de vitesse d'attaque | joueur + planète d'en face |
| Apollon | Clarté | +10 % de chance de coup critique | joueur + planète d'en face |
| Artémis | Œil de la chasseresse | +60 de portée | joueur + planète d'en face |
| Athéna | Stratégie | 15 % de chance, à chaque tir, de déclencher un effet de combo au hasard (son nom s'affiche à l'impact) | joueur + planète d'en face |
| Zeus | Colère de Zeus | +50 % de dégâts critiques | joueur + planète d'en face |
| Arès | Soif de sang | +0,5 PV à chaque ennemi tué (mieux que Déméter) | joueur |
| Aphrodite | Charme durable | +0,001 PV max à chaque balle qui touche (les virgules ne sont pas affichées mais comptent) | joueur + planète d'en face |
| Hermès | Messager | +50 % de vitesse des balles | joueur + planète d'en face |
| Hestia | Foyer | +0,15 PV régénérés par seconde | joueur |

La vie et les PV max gagnés par les touches vont toujours au joueur, même quand c'est la planète d'en face qui touche. Les PV max d'Aphrodite durent jusqu'à la fin de la partie.

Un fin trait en pointillés, de la couleur de la planète qui crée le lien, relie les planètes liées. Les pointillés avancent vers la planète visée, et le lien « Opposé » passe par le centre.
