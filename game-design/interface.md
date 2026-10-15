# Interface et commandes

## Clavier

| Touche | Effet |
| --- | --- |
| S | ouvre la fenêtre des skills (le dernier arbre vu), ou la ferme |
| T | passe le plus grand saut de temps débloqué (rien tant qu'aucun n'est acheté) |
| R | rejoue (écran de game over) |
| Échap | ferme la fenêtre ouverte, sinon ouvre les paramètres |

Pendant qu'on tape un code de triche, S, T et R ne se déclenchent pas : taper « hestia » n'ouvre pas les skills sur le « s ».

## Le temps

Au début, on ne peut ni passer le temps ni accélérer. Le shop débloque tout :

| Amélioration | Niveau 1 | Niveau 2 | Niveau 3 |
| --- | --- | --- | --- |
| Accélérer le temps | vitesse x2 | vitesse x4 | — |
| Sauter dans le temps | saut de +10 s | saut de +30 s | saut de +100 s |

Les boutons pas encore achetés restent visibles avec un cadenas.

## La fenêtre des skills

- **Onglets des dieux :** en haut, un onglet par dieu pour passer d'un arbre à l'autre.
- **Dieux pas encore en orbite :** leur arbre s'affiche quand même, assombri et verrouillé, pour montrer au joueur ce qui l'attend. On peut le parcourir mais pas acheter.
- **Acheter :** clic sur une compétence disponible. Le lien depuis la compétence voisine se remplit, et l'étoile éclot.
- **Rembourser :** clic droit sur une compétence prise, ou bouton « Rembourser » dans sa fiche. Tout l'XP est rendu. C'est impossible si d'autres compétences prises ne seraient plus reliées au départ.
- **Liens d'orbite :** en bas à gauche, pour choisir à quelle planète voisine le dieu se lie (voir [skills/0-combos.md](skills/0-combos.md) et [statistiques.md](statistiques.md)).

## La caméra

Quand la portée du joueur dépasse l'écran, la caméra dézoome doucement, jusqu'à ce que la portée occupe environ 95 % de la demi-largeur de l'écran. Au-delà de 1000 px de portée, elle ne dézoome plus.

## La portée des dieux

Quand la souris survole une planète (ou pendant qu'on la touche au doigt), un cercle en pointillés de sa couleur, légèrement teinté, montre sa portée : la distance jusqu'à laquelle elle tire, mesurée depuis la planète. Le cercle rouge du joueur reste affiché autour du centre.

## Le panneau des statistiques

À droite, quand la fenêtre des skills ou le game over est ouvert. Ses sections :
- **Vie** et **Attaque (toi)** : les stats du triangle du milieu.
- **Une section par planète** : toutes ses stats de tir (dégâts, vitesse d'attaque, tirs par seconde, balles par tir, portée, vitesse des balles, chance et dégâts critiques, bonus contre un élément) et son lien d'orbite. Les stats rares (vie par touche, PV max par touche, effet de combo au hasard) ne s'affichent que si la planète en a. La planète du skill tree ouvert passe en premier.
- **Défense**, **Gains** et **Ennemis**.

Une stat qui vient de changer clignote : **en vert si elle augmente** (ou change sans nombre), **en rouge si elle baisse** (remboursement d'une compétence, lien d'orbite changé...). On compare le premier nombre de la valeur affichée (`isStatLower`).
