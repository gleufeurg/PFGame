# Interface et commandes

## Clavier

| Touche | Effet |
| --- | --- |
| S | ouvre la fenêtre des skills (le dernier arbre vu), ou la ferme |
| T | passe le plus grand saut de temps débloqué (rien tant qu'aucun n'est acheté) |
| R | rejoue (écran de game over) |
| Échap | ferme la fenêtre ouverte, sinon ouvre les paramètres |

Pendant qu'on tape un code de triche, S, T et R ne se déclenchent pas : taper « hestia » n'ouvre pas les skills sur le « s ».

## Au doigt (téléphone et tablette)

Le jeu repère un écran tactile avec `IS_TOUCH_DEVICE` (la question CSS `pointer: coarse`).

| Geste | Effet |
| --- | --- |
| Toucher une planète | ouvre son arbre de compétences |
| Glisser une planète | change sa place dans l'orbite |
| Bouton « ✦ Skills » (en bas à droite) | remplace la touche S |
| Bouton du temps (à côté du chrono) | vitesses et sauts de temps, comme à l'ordinateur |
| Roue crantée | paramètres (remplace Échap) |
| 1er toucher sur une compétence | montre sa fiche (l'étoile est entourée) |
| 2e toucher sur la même compétence | l'achète |
| Appui long (0,55 s) sur une compétence prise | la rembourse (petite vibration) |
| Deux doigts dans l'arbre | zoomer (pincer) ; un doigt pour le déplacer |

Les zones de toucher autour des planètes sont plus grandes qu'à la souris (20 px au lieu de 8). Le zoom du navigateur (double toucher, pincer la page) est coupé.

## Petits écrans

- **Téléphone en portrait** (moins de 600 px de large) : les fenêtres prennent tout l'écran et défilent ; dans la fenêtre des skills, l'arbre passe en premier, les liens d'orbite et les bonus en dessous ; le shop passe sur 2 colonnes ; la roue crantée se cache pendant que l'arbre est ouvert (il a son bouton « Reprendre »).
- **Téléphone en paysage** (moins de 500 px de haut) : mêmes idées, l'arbre prend 75 % de la hauteur. L'application Android est verrouillée en portrait.
- **Statistiques repliables** : sur petit écran, le panneau des stats est replié au départ (juste son titre en bas) ; on touche « Statistiques ▴ » pour l'ouvrir ou le fermer.
- **Encoche et barre du téléphone** : les boutons du bord de l'écran s'en écartent (`env(safe-area-inset-...)` en CSS).
- Quand on tourne l'écran ou qu'on change la taille de la fenêtre, le jeu se redimensionne (`resizeCanvas`).
- **Barre du haut sur téléphone :** le chrono et le bouton du temps restent tout en haut, entre l'or/XP et la roue crantée. Le menu du temps s'ouvre en dessous, sur toute la largeur de l'écran, et ses boutons passent à la ligne si besoin.
- **En arrière-plan** (autre appli, écran éteint, onglet caché) : tout le son s'arrête (`setAudioPausedInBackground`) et la progression est sauvegardée ; le son reprend au retour.

## La netteté (écrans fins)

Sur un écran « fin » (téléphone, écran Retina, Windows réglé à 125 % ou 150 %), il y a plusieurs vrais pixels par pixel CSS (`window.devicePixelRatio`). Le canvas est créé avec ces vrais pixels, limité à 2 par pixel CSS (`MAX_PIXEL_RATIO`), pour que le jeu reste net sans trop ralentir. Les calculs du jeu, eux, restent en pixels CSS (`screenSize`).

Option **« Graphismes nets »** dans les paramètres (cochée par défaut, retenue dans `localStorage`, clé `sharpGraphics`) : la décocher dessine avec 1 pixel par pixel CSS, plus flou mais jusqu'à 4 fois moins de pixels à dessiner, pour les téléphones lents.

## La sauvegarde

La progression est gardée dans le navigateur (`localStorage`, clé `progress`) : or, XP, niveaux du shop, dieux en orbite, compétences prises, liens d'orbite et ordre des planètes. Dans l'application mobile, c'est pareil (elle a son propre stockage, effacé seulement si on désinstalle le jeu).

- **Quand :** à chaque changement de progression (achat, compétence, lien, planète déplacée), à chaque mort, toutes les 5 secondes, et quand on quitte ou cache le jeu (passer à une autre appli sur téléphone).
- **Ce qui n'est pas gardé :** la partie en cours (ennemis, chrono, vie) : en revenant, on recommence une partie, avec toute sa progression.
- **Exporter / importer :** bouton « Exporter ma sauvegarde » dans les paramètres : un code (texte commençant par `PFG1:`) à copier et garder. « Importer » le recolle, sur n'importe quel appareil ou navigateur, et remplace la progression actuelle (avec confirmation). Le code contient la progression, les records et les super ennemis vaincus, mais pas les achats ni les réglages. Un code abîmé (mal copié) est refusé.
- **Effacer :** bouton « Effacer ma progression » dans les paramètres (avec confirmation). Efface aussi les records et les super ennemis vaincus, mais garde les réglages (son, thème) et le Pack Premium (c'est un achat).
- À côté, d'autres clés existaient déjà : `theme`, `soundSettings`, `records`, `defeatedBosses`, `premium`.

## Pause dans les menus

Option **« Mettre le jeu en pause dans les menus »** dans les paramètres (cochée par défaut, clé `pauseInMenus`) : cochée, le jeu s'arrête quand la fenêtre des skills ou les paramètres sont ouverts ; décochée, il continue. Si le joueur meurt pendant qu'il regarde ses skills, la fenêtre se ferme et le shop s'affiche.

## Aide à l'écran

L'ancienne phrase d'aide en bas de l'écran (« Clique sur une planète… ») a été retirée : elle reviendra seulement dans le tutoriel, au moment d'acheter la première planète.

## Le temps

Au début, on ne peut ni passer le temps ni accélérer. Le shop débloque tout :

| Amélioration | Niveau 1 | Niveau 2 | Niveau 3 |
| --- | --- | --- | --- |
| Accélérer le temps | vitesse x2 | vitesse x4 | — |
| Sauter dans le temps | saut de +10 s | saut de +30 s | saut de +100 s |

Les boutons pas encore achetés restent visibles avec un cadenas.

## La fenêtre des skills

- **Passer d'un dieu à l'autre :** flèches **‹ ›** de chaque côté du nom du dieu, **glisser le doigt** (ou la souris) vers la gauche ou la droite sur la fenêtre (en dehors de l'arbre, où glisser sert à le déplacer), ou **flèches ← →** du clavier. On parcourt les dieux en orbite, plus le prochain dieu à acheter (en aperçu). Les autres dieux ne sont pas affichés, pour ne pas surcharger la fenêtre.
- **Prochain dieu (pas encore en orbite) :** son arbre s'affiche quand même, assombri et verrouillé, pour montrer au joueur ce qui l'attend. On peut le parcourir mais pas acheter.
- **Acheter :** clic sur une compétence disponible (au doigt : deux touchers, voir plus haut). Le lien depuis la compétence voisine se remplit, et l'étoile éclot.
- **Rembourser :** clic droit sur une compétence prise (au doigt : appui long), ou bouton « Rembourser » dans sa fiche. Tout l'XP est rendu. C'est impossible si d'autres compétences prises ne seraient plus reliées au départ.
- **Liens d'orbite :** en bas à gauche, pour choisir à quelle planète voisine le dieu se lie (voir [skills/0-combos.md](skills/0-combos.md) et [statistiques.md](statistiques.md)).

## La caméra

Quand la portée du joueur dépasse l'écran, la caméra dézoome doucement, jusqu'à ce que la portée occupe environ 95 % de la demi-largeur de l'écran. Au-delà de 1000 px de portée, elle ne dézoome plus.

## La portée des dieux

Quand la souris survole une planète (ou pendant qu'on la touche au doigt), un cercle en pointillés de sa couleur, légèrement teinté, montre sa portée : la distance jusqu'à laquelle elle tire, mesurée depuis la planète. Le cercle rouge du joueur reste affiché autour du centre.

## Le panneau des statistiques

À droite, quand la fenêtre des skills ou le game over est ouvert (en bas sur écran étroit, repliable sur petit écran). Ses sections :
- **Vie** et **Attaque (toi)** : les stats du triangle du milieu.
- **Une section par planète** : toutes ses stats de tir (dégâts, vitesse d'attaque, tirs par seconde, balles par tir, portée, vitesse des balles, chance et dégâts critiques, bonus contre un élément) et son lien d'orbite. Les stats rares (vie par touche, PV max par touche, effet de combo au hasard) ne s'affichent que si la planète en a. La planète du skill tree ouvert passe en premier.
- **Défense**, **Gains** et **Ennemis**.

Une stat qui vient de changer clignote : **en vert si elle augmente** (ou change sans nombre), **en rouge si elle baisse** (remboursement d'une compétence, lien d'orbite changé...). On compare le premier nombre de la valeur affichée (`isStatLower`). Pour les stats où un nombre plus bas est mieux (la recharge du bouclier), la couleur est inversée (`LOWER_IS_BETTER_STATS`).
