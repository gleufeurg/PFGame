# Les couleurs autour d'un ennemi

> **La question :** « fais moi une liste des différentes couleurs que peut entourer un ennemi visuellement et leur signification (par exemple vert quand ils sont immobilisés par Demeter) »

Les effets eux-mêmes (durée, force) sont dans [ennemis.md](../ennemis.md), partie « Les effets que subissent les ennemis ».

Ce qui entoure un ennemi pour montrer ce qui lui arrive (couleurs du code, partie `drawEnemies`). Il peut avoir plusieurs anneaux à la fois (ex : frêle et ralenti après une vague de Poséidon). S'il est à la fois affaibli et empoisonné, seul le violet se voit.

| Ce qu'on voit | Couleur | Signification | Qui le donne |
| --- | --- | --- | --- |
| Anneau plein, moyen | rose (`#ff8fc7`) | **Charmé** : il fait demi-tour et blesse les autres ennemis (jamais un super ennemi) | Aphrodite (rayon de charme), combos avec l'Amour |
| Anneau en pointillés | violet (`#c77dff`) | **Affaibli** : il subit +50 % de dégâts | Déméter (rayon de vie), combo « Cri de guerre » |
| Anneau en pointillés | vert-jaune (`#9be22d`) | **Empoisonné** : il perd des PV ; à sa mort, le poison saute sur ses voisins | combos poison, flaque toxique |
| Anneau plein, épais | bleu glacé (`#9be8ff`) | **Gelé** ou **enraciné** : immobile | combos Gel, Racines, Blizzard… |
| Anneau fin, pâle | bleu très clair, transparent | **Ralenti** : 45 % de sa vitesse | vague de Poséidon, combos Vapeur, Écume… |
| Anneau plein, épais (graphismes simples) ; lianes enroulées avec des feuilles (graphismes élevés) | vert (`#55dd55`) | **Immobilisé par une liane** | Déméter |
| Anneau en petits pointillés, plus large | bleu (`#4da6ff`) | **Frêle** : il subit +35 % de dégâts ou plus | vague de Poséidon |
| 4 petites étincelles qui tournent | bleu électrique (`#5ce1e6`) | **Conducteur** : un 2e éclair fera tomber la foudre sur lui | éclairs de Zeus |

Une **planète grise avec des fissures** : elle a été pétrifiée par Méduse (elle ne tire plus et son lien d'orbite est annulé jusqu'à la mort de Méduse).

Les autres signes, sans anneau :
- **tout blanc un court instant** : il vient d'être touché ;
- **onde rouge** (`#ff2a2a`) : coup critique ;
- **petites particules** : flammes orange (il brûle), bulles vertes (empoisonné), gouttes rouges (il saigne) ;
- **lueur de sa couleur, nom et barre de vie** : un super ennemi ;
- **sa forme** : rond (tout droit), hexagone (spirale), triangle (zigzag), étoile (ondule).

À surveiller : le vert-jaune en pointillés (poison) et le vert plein (liane de Déméter) se ressemblent, surtout en graphismes simples.
