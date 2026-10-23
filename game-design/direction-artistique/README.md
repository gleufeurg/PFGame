# Références de direction artistique

Images de référence pour les formes des skill trees, et les choix de style validés.

| Dieu | Forme | Image |
|---|---|---|
| Héphaïstos (ancien Vulcain) | flamme | `vulcain-flamme.png` |
| Poséidon | vagues | `poseidon-vagues.png` |
| Déméter | fleur à 8 pétales en tourbillon | `demeter-fleur.png` |
| Éole | souffles de vent qui finissent en spirale | `eole-vent.png` |
| Apollon (ancien Hélios) | soleil avec un anneau au centre et des rayons ondulés | `helios-soleil.png` |
| Artémis | arc et flèche (pas d'image) | |
| Athéna | couronne de laurier (deux branches en arc) | `athena-laurier.png` |

## Style des skill trees

- Les compétences sont des étoiles à 4 branches, **fixes (pas d'animation)**.
- Elles ont une bordure et un remplissage selon l'état :
  - verrouillée : grisée ;
  - disponible : bordure de la couleur du dieu ;
  - débloquée : remplie, avec un cœur blanc.
- Le nom est écrit sous l'étoile.
- Pas d'aura ni de flou lumineux.
- Les liens entre compétences ne doivent jamais se croiser. Le jeu le vérifie et affiche un avertissement dans la console (F12) si c'est le cas.
- Les tuiles hexagonales ont été essayées, puis abandonnées.

## Style général

- Inspiration : Outhold et The Tower.
- Des aplats nets, sans texture.
- Polices : **Nunito** (titres, chiffres, textes du jeu) et **Rubik** (texte courant), sous licence libre OFL. Les fichiers sont dans le dossier `polices/` du dépôt (pas sur Google Fonts) : le jeu marche hors ligne. Si on ajoute une police, il faut aussi la déclarer avec un `@font-face` en haut de `index.html`.
- Des thèmes de couleur, qui teintent aussi les boutons et le texte.

## Les animations des pouvoirs (graphismes élevés / simples)

Réglage « Graphismes » des paramètres (`isHighGraphics`). En graphismes simples, chaque pouvoir garde un effet léger, les ondes de choc d'origine.

| Pouvoir | Graphismes élevés | Graphismes simples | Son |
| --- | --- | --- | --- |
| Vague de Poséidon | une nappe d'eau bleue derrière le front, une crête d'écume blanche qui ondule, des éclaboussures (`drawTideWaves`) | deux anneaux bleus qui grandissent au rythme de la vague | une vague qui gonfle, déferle et se retire (`playWaveSound`) |
| Rayon de vie de Déméter | une floraison : un halo d'herbe lumineuse qui grandit, 22 pétales et feuilles qui s'envolent en tournant, un rayon de lumière verte jusqu'au joueur, des petites croix de soin qui montent autour de lui (`drawBloomEffects`) ; les ennemis immobilisés sont entourés de lianes enroulées avec des feuilles (`drawRootVines`) | une onde verte autour de Déméter et une autour du joueur ; un anneau vert autour des ennemis immobilisés | un petit carillon qui monte (do, mi, sol, do) et un léger bruissement de feuilles (`playBloomSound`) |

## Les thèmes drapeaux

Les thèmes drapeaux (arc-en-ciel, trans, gay, lesbien, non binaire, asexuel) ont des bandes de couleur en fond, assombries pour que le jeu reste lisible. **Le drapeau flotte** : les bords des bandes ondulent comme un tissu dans le vent (deux vagues mélangées, de gauche à droite), et des plis plus clairs ou plus sombres suivent la pente du tissu (`drawWavyFlag`). Il n'y a pas de lumière en haut ni d'ombre en bas de l'écran sur ces thèmes : elles salissaient les couleurs.

## Les décors

Réglage **« Décor »** des paramètres, sous le thème (clé `scene` du `localStorage`). Un décor remplace le fond uni du thème. Le thème garde les couleurs de l'interface : boutons, fenêtres, texte. Le décor choisit aussi la couleur des ombres et de l'orbite, pour qu'elles aillent avec son sol (`SCENES` dans `index.html`, partie `DÉCORS`).

| Décor | Ce qu'on voit | Ce qui bouge |
| --- | --- | --- |
| Aucun | le fond uni du thème (par défaut) | — |
| Mer étoilée | une mer calme et sombre qui reflète le ciel de nuit : voie lactée, lune floue | les étoiles reflétées scintillent et ondulent ; le chemin de lune danse ; de longues rides glissent lentement ; **le joueur et les planètes se reflètent dans l'eau** (à l'envers, en transparence, en bandes qui ondulent) |
| Mer en plein jour | de l'eau turquoise, des zones plus profondes et des hauts-fonds, la lumière du soleil | des rangées de vaguelettes qui avancent doucement ; des éclats de soleil ; un reflet plus léger du joueur et des planètes |
| Neige | un sol enneigé un peu bleuté, avec des congères (claires au soleil, bleutées dans le creux) et des paillettes de glace | des flocons qui tombent en se balançant |
| Prairie | de l'herbe (brins en 3 teintes), des zones plus sèches ou plus foncées, des fleurs blanches, jaunes, roses et lilas | l'ombre de 3 nuages qui passe ; du pollen et des pétales portés par le vent |

**Lisibilité :**
- la neige n'est pas toute blanche, pour que les ennemis d'air (blancs) et les textes restent lisibles ;
- la prairie est assez sombre, pour que les ennemis de plante (vert vif) ressortent ;
- le chrono a une ombre portée, pour se lire sur les décors clairs.

**Technique :**
- Ce qui ne bouge pas est dessiné **une fois** dans un canvas caché (`drawStatic`), en vrais pixels pour rester net.
- Ce qui bouge est redessiné à chaque image (`drawAnimated`). En test, cela coûte 1 à 2 ms de plus par image.
- Les points « au hasard » (fleurs, flocons, étoiles) viennent de `createScenePoints` : ce sont toujours les mêmes, donc le décor ne change pas quand on le redessine (changement de taille d'écran, de thème).
- Les taches floues s'effacent vers leur propre couleur transparente, pas vers du noir transparent, sinon elles font une auréole grise (`fillSoftCircle`).
