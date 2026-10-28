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
- **Les voies** (choix exclusifs) : une large lueur douce sous les liens de la voie (or `#ffcf5c`, violet `#b98cff`, turquoise `#4fd1a5` : 1re, 2e et 3e voie, quelle que soit la couleur du dieu), et son nom en lettres épaisses de la même couleur, avec un contour de la couleur du fond pour rester lisible. Une voie bloquée devient grise, son nom barré ; ses étoiles sont grises, ternes et leur petit nom barré ; ses liens sont en pointillés.
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
| Regard de Méduse (super ennemi) | un cercle rose **crénelé** (comme le haut d'un château) tourne autour de Méduse et autour de la planète visée, un rayon rose en pointillés file de l'une à l'autre, une onde de choc ; la planète tremble puis reste **grise avec des fissures** (`drawPlanetCracks`) | deux simples cercles roses ; la planète grise et ses fissures | une note grave qui descend et un craquement de pierre (`petrify`) ; à la mort de Méduse, la pierre éclate (`unpetrify`) |
| Ralenti de Cronos (super ennemi) | un grand cadran d'horloge violet grandit autour de Cronos ; un cadran aux aiguilles qui tournent entoure le joueur ; tout l'écran se teinte de violet, les bords plus sombres (`drawTimeDistortion`) | la teinte violette sans les bords sombres (les cadrans restent) | une note qui descend et un tic-tac qui ralentit (`timeSlow`) |
| Hydre de Lerne (super ennemi) | chaque tête tuée en fait apparaître 2, avec une onde de choc ; la dernière vague arrive de tous les côtés | pareil | un double « bip » qui monte (`hydraSplit`) ; l'alarme des super ennemis pour la dernière vague |
| Traînée de feu d'Héphaïstos | des flammes douces (dégradé jaune → orange → rouge, dessiné une fois puis recopié) qui s'additionnent en lumière (`lighter`), vacillent, rapetissent et montent un peu en s'éteignant (`drawFireTrails`) | une bande orange unie, faite de ronds qui rapetissent (un seul tracé) | — |
| Rayon de vie de Déméter | une floraison : un halo d'herbe lumineuse qui grandit, 22 pétales et feuilles qui s'envolent en tournant, un rayon de lumière verte jusqu'au joueur, des petites croix de soin qui montent autour de lui (`drawBloomEffects`) ; les ennemis immobilisés sont entourés de lianes enroulées avec des feuilles (`drawRootVines`) | une onde verte autour de Déméter et une autour du joueur ; un anneau vert autour des ennemis immobilisés | un petit carillon qui monte (do, mi, sol, do) et un léger bruissement de feuilles (`playBloomSound`) |

## Les orbites

Les 3 orbites des planètes (130, 200 et 270 px) sont de fins cercles très discrets, de la couleur `ORBIT_COLOR` (le thème ou le décor la choisit). Une orbite vide est en pointillés, pour montrer qu'on peut y mettre une planète. Celle du milieu tourne dans l'autre sens : les planètes se croisent, comme dans une maquette du système solaire. Pendant qu'on fait glisser une planète, les 3 cercles sont pleins et l'orbite où elle va prend sa couleur. Dans la fenêtre des skills, les planètes de chaque orbite sont de petits losanges de leur couleur, comme dans le jeu.

## Le tutoriel

Le reste de l'écran s'assombrit (un voile bleu nuit à 60 %), sauf un **projecteur** : un trou au bord arrondi, de la couleur d'accent du thème, autour de ce qu'on montre (rond autour d'une planète). En graphismes élevés, son bord palpite doucement entre la couleur d'accent et le blanc ; en graphismes simples, il reste fixe. Quand on passe à la bulle suivante, le projecteur glisse vers sa nouvelle cible. La bulle reprend le style des fenêtres du jeu (fond du thème, bord de la couleur d'accent, titre en Nunito épais), avec « Compris » comme bouton principal et « Passer le tutoriel » en simple lien souligné, discret, pour qu'on ne le touche pas sans le vouloir.

## L'Éveil

Le bouton « Éveil » se tient en bas à gauche de l'arbre, face aux boutons de zoom. Tant que l'arbre n'est pas complet, il est discret (gris, avec un cadenas). Ensuite il prend un or doux (`#ffd76a`) avec une étoile ✨, et devient plein, doré, avec une lueur, quand on a assez d'XP ; en graphismes élevés, cette lueur palpite lentement. Sa carte reprend celle des compétences (même place, même bouton orange), et l'achat fait monter « ✨ +5% Dégâts » au milieu de l'arbre, comme le gain d'une compétence.

## Les thèmes drapeaux

Les thèmes drapeaux (arc-en-ciel, trans, gay, lesbien, non binaire, asexuel) ont des bandes de couleur en fond, assombries pour que le jeu reste lisible. **Le drapeau flotte** : les bords des bandes ondulent comme un tissu dans le vent (deux vagues mélangées, de gauche à droite), et des plis plus clairs ou plus sombres suivent la pente du tissu (`drawWavyFlag`). Il n'y a pas de lumière en haut ni d'ombre en bas de l'écran sur ces thèmes : elles salissaient les couleurs.

## Les décors

Réglage **« Décor »** des paramètres, sous le thème (clé `scene` du `localStorage`). Un décor remplace le fond uni du thème. Le thème garde les couleurs de l'interface : boutons, fenêtres, texte. Le décor choisit aussi la couleur des ombres et de l'orbite, pour qu'elles aillent avec son sol (`SCENES` dans `index.html`, partie `DÉCORS`).

| Décor | Ce qu'on voit | Ce qui bouge |
| --- | --- | --- |
| Aucun | le fond uni du thème | — |
| Mer étoilée (**par défaut**, `DEFAULT_SCENE`) | une mer calme et sombre qui reflète le ciel de nuit : voie lactée, lune floue | les étoiles reflétées scintillent et ondulent ; le chemin de lune danse ; de longues rides glissent lentement ; **le joueur et les planètes se reflètent dans l'eau** (à l'envers, en transparence, en bandes qui ondulent) |
| Mer en plein jour | de l'eau turquoise, des zones plus profondes et des hauts-fonds, la lumière du soleil | des rangées de vaguelettes qui avancent doucement ; des éclats de soleil ; un reflet plus léger du joueur et des planètes |
| Neige | un sol enneigé un peu bleuté, avec des congères (claires au soleil, bleutées dans le creux) et des paillettes de glace | des flocons qui tombent en se balançant |
| Prairie (au crépuscule) | une herbe sombre et peu contrastée (brins discrets en 3 teintes), quelques fleurs fermées, minuscules et pâles | l'ombre de 3 nuages qui passe ; quelques lucioles très pâles qui flottent |

**Lisibilité :**
- la neige n'est pas toute blanche, pour que les ennemis d'air (blancs) et les textes restent lisibles ;
- la prairie est sombre et sans couleurs vives : la 1re version (vert vif, beaucoup de fleurs colorées) était **illisible** d'après les testeurs, les fleurs ressemblaient à des ennemis. Maintenant les ennemis de plante (vert vif) ressortent bien ;
- le chrono a une ombre portée, pour se lire sur les décors clairs.

**Technique :**
- Ce qui ne bouge pas est dessiné **une fois** dans un canvas caché (`drawStatic`), en vrais pixels pour rester net.
- Ce qui bouge est redessiné à chaque image (`drawAnimated`). En test, cela coûte 1 à 2 ms de plus par image.
- Les points « au hasard » (fleurs, flocons, étoiles) viennent de `createScenePoints` : ce sont toujours les mêmes, donc le décor ne change pas quand on le redessine (changement de taille d'écran, de thème).
- Les taches floues s'effacent vers leur propre couleur transparente, pas vers du noir transparent, sinon elles font une auréole grise (`fillSoftCircle`).
