# Interface et commandes

## Clavier

| Touche | Effet |
| --- | --- |
| S | ouvre la fenêtre des skills (le dernier arbre vu), ou la ferme |
| T | passe le plus grand saut de temps débloqué |
| R | rejoue (écran de game over) |
| Échap | ferme la fenêtre ouverte, sinon ouvre les paramètres |

Pendant qu'on tape un code de triche, S, T et R ne se déclenchent pas : taper « hestia » n'ouvre pas les skills sur le « s ».

## Le temps

Au début, on ne peut passer que 10 s à la fois et on ne peut pas accélérer. Le shop débloque le reste :

| Amélioration | Niveau 1 | Niveau 2 |
| --- | --- | --- |
| Accélérer le temps | vitesse x2 | vitesse x4 |
| Sauter dans le temps | saut de +30 s | saut de +100 s |

Les boutons pas encore achetés restent visibles avec un cadenas.

## La fenêtre des skills

- **Onglets des dieux :** en haut, un onglet par dieu pour passer d'un arbre à l'autre.
- **Dieux pas encore en orbite :** leur arbre s'affiche quand même, assombri et verrouillé, pour montrer au joueur ce qui l'attend. On peut le parcourir mais pas acheter.
- **Acheter :** clic sur une compétence disponible. Le lien depuis la compétence voisine se remplit, et l'étoile éclot.
- **Rembourser :** clic droit sur une compétence prise, ou bouton « Rembourser » dans sa fiche. Tout l'XP est rendu. C'est impossible si d'autres compétences prises ne seraient plus reliées au départ.
- **Liens d'orbite :** en bas à gauche, pour choisir à quelle planète voisine le dieu se lie (voir [skills/0-combos.md](skills/0-combos.md) et [statistiques.md](statistiques.md)).

## La caméra

Quand la portée du joueur dépasse l'écran, la caméra dézoome doucement, jusqu'à ce que la portée occupe environ 95 % de la demi-largeur de l'écran. Au-delà de 1000 px de portée, elle ne dézoome plus.
