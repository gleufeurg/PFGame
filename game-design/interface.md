# Interface et commandes

## Clavier

| Touche | Effet |
| --- | --- |
| S | ouvre la fenêtre des skills (le dernier arbre vu), ou la ferme (comme le bouton ✦ à gauche de la roue crantée) |
| T | passe le plus grand saut de temps débloqué (rien tant qu'aucun n'est acheté) |
| R | rejoue (écran de game over) |
| Échap | ferme la fenêtre ouverte, sinon ouvre les paramètres |
| Entrée, Espace ou Échap | pendant une bulle du tutoriel : « Compris » (les autres touches ne font rien tant qu'elle est affichée) |

Pendant qu'on tape un code de triche, S, T et R ne se déclenchent pas : taper « hestia » n'ouvre pas les skills sur le « s ».

## Au doigt (téléphone et tablette)

Le jeu repère un écran tactile avec `IS_TOUCH_DEVICE` (la question CSS `pointer: coarse`).

| Geste | Effet |
| --- | --- |
| Toucher une planète | ouvre son arbre de compétences |
| Glisser une planète | change sa place sur son orbite, ou la fait passer sur une autre orbite (voir « Les 3 orbites ») |
| Bouton « ✦ Skills » (en bas à droite) | remplace la touche S (point turquoise : une compétence peut être prise) |
| Bouton du temps (à côté du chrono) | vitesses et sauts de temps, comme à l'ordinateur |
| Roue crantée | paramètres (remplace Échap) |
| 1er toucher sur une compétence | la choisit : sa carte s'affiche en grand, avec le bouton « Débloquer » (l'étoile est entourée) |
| Bouton « Débloquer », ou 2e toucher sur la même compétence | l'achète |
| Appui long (0,55 s) sur une compétence prise | la rembourse (petite vibration) |
| Deux doigts dans l'arbre | zoomer (pincer) ; un doigt pour le déplacer |
| Bulle du tutoriel | bouton « Compris » ; pour « Ta première planète », toucher la planète éclairée |

Les zones de toucher autour des planètes sont plus grandes qu'à la souris (20 px au lieu de 8). Le zoom du navigateur (double toucher, pincer la page) est coupé.

## Petits écrans

- **Téléphone en portrait** (moins de 600 px de large) : les fenêtres prennent tout l'écran et défilent ; dans la fenêtre des skills, l'arbre passe en premier, les liens d'orbite et les bonus en dessous ; le shop passe sur 2 colonnes ; la roue crantée se cache pendant que l'arbre est ouvert (il a son bouton « Reprendre »).
- **Téléphone en paysage** (moins de 500 px de haut) : mêmes idées, l'arbre prend 75 % de la hauteur. L'application Android est verrouillée en portrait.
- **Statistiques repliables** : sur petit écran, le panneau des stats est replié au départ (juste son titre en bas) ; on touche « Statistiques ▴ » pour l'ouvrir ou le fermer.
- **Encoche et barre du téléphone** : les boutons du bord de l'écran s'en écartent (`env(safe-area-inset-...)` en CSS).
- Quand on tourne l'écran ou qu'on change la taille de la fenêtre, le jeu se redimensionne (`resizeCanvas`).
- **Barre du haut sur téléphone :** le chrono et le bouton du temps restent tout en haut, entre l'or/XP et la roue crantée. Le menu du temps s'ouvre en dessous, sur toute la largeur de l'écran, et ses boutons passent à la ligne si besoin.
- **En arrière-plan** (autre appli, écran éteint, onglet caché) : tout le son s'arrête (`setAudioPausedInBackground`) et la progression est sauvegardée ; le son reprend au retour. La partie, elle, continue (voir « La partie continue en arrière-plan »).

## La netteté (écrans fins)

Sur un écran « fin » (téléphone, écran Retina, Windows réglé à 125 % ou 150 %), il y a plusieurs vrais pixels par pixel CSS (`window.devicePixelRatio`). Le canvas est créé avec ces vrais pixels, limité à 2 par pixel CSS (`MAX_PIXEL_RATIO`), pour que le jeu reste net sans trop ralentir. Les calculs du jeu, eux, restent en pixels CSS (`screenSize`).

Option **« Graphismes nets »** dans les paramètres (cochée par défaut, retenue dans `localStorage`, clé `sharpGraphics`) : la décocher dessine avec 1 pixel par pixel CSS, plus flou mais jusqu'à 4 fois moins de pixels à dessiner, pour les téléphones lents.

## La sauvegarde

La progression est gardée dans le navigateur (`localStorage`, clé `progress`) : or, XP, niveaux du shop, dieux en orbite, compétences prises, liens d'orbite, ordre des planètes, orbite de chaque planète (`planetOrbits`) et bulles du tutoriel déjà vues (`tutorial`). Dans l'application mobile, c'est pareil (elle a son propre stockage, effacé seulement si on désinstalle le jeu).

- **Quand :** à chaque changement de progression (achat, compétence, lien, planète déplacée), à chaque mort, toutes les 5 secondes, et quand on quitte ou cache le jeu (passer à une autre appli sur téléphone).
- **Ce qui n'est pas gardé :** la partie en cours (ennemis, chrono, vie) : en revenant, on recommence une partie, avec toute sa progression.
- **Exporter / importer :** bouton « Exporter ma sauvegarde » dans les paramètres : un code (texte commençant par `PFG1:`) à copier et garder. « Importer » le recolle, sur n'importe quel appareil ou navigateur, et remplace la progression actuelle (avec confirmation). Le code contient la progression, les records et les super ennemis vaincus, mais pas les achats ni les réglages. Un code abîmé (mal copié) est refusé.
- **Effacer :** bouton « Effacer ma progression » dans les paramètres (avec confirmation). Efface aussi les records et les super ennemis vaincus, mais garde les réglages (son, thème) et le Pack Premium (c'est un achat).
- À côté, d'autres clés existaient déjà : `theme`, `soundSettings`, `records`, `defeatedBosses`, `premium`.

## Langue

Liste « Langue » dans les paramètres : français, anglais, italien, allemand, chinois, japonais. Au premier lancement, le jeu est en anglais (la langue par défaut). Changer de langue sauvegarde puis recharge le jeu. Détails : [langues.md](langues.md).

## Graphismes : simples ou élevés

Liste « Graphismes » dans les paramètres, retenue par le navigateur (clé `graphicsQuality`) :

- **Élevés** (par défaut) : les plus belles animations, par exemple la vraie vague de Poséidon.
- **Simples** : des effets plus légers, pour un appareil lent, par exemple deux anneaux pour la vague.

Le jeu lui-même (dégâts, poussée, règles) est **exactement le même** dans les deux modes : seul le dessin change. C'est différent de « Graphismes nets », qui règle la finesse des pixels sur les écrans fins.

**Règle :** les nouvelles animations élaborées se dessinent seulement en graphismes élevés (`isHighGraphics`), avec une version simple pour l'autre mode.

## Balles à tête chercheuse

Case à cocher dans les paramètres, cochée par défaut, retenue par le navigateur (clé `homingBullets`).

- **Cochée :** une balle suit l'ennemi visé tant qu'il est vivant.
- **Décochée :** les tirs normaux (du joueur et des planètes) partent tout droit vers l'endroit où était l'ennemi au moment du tir, et ne tournent plus. Un ennemi qui se déplace sur le côté peut donc être raté.
- **Les balles spéciales suivent toujours leur cible**, même décochée : rebonds d'Artémis, et rebonds, éclats et divisions des combos d'orbite.

## Musique

La musique est générée en direct par le navigateur (pas de fichier audio) : des accords en nappes, une basse, et de petites notes qui scintillent avec de l'écho. 5 morceaux calmes et un peu mélancoliques (`MUSIC_TRACKS`, partie `MUSIC` de `index.html`) :

| Morceau | Tempo | Couleur |
| --- | --- | --- |
| Orbite | 66 | do majeur, lumineux (le morceau d'origine) |
| Marée basse | 58 | la mineur, doux et rêveur |
| Neige lente | 52 | ré mineur, lent, avec un long écho ; finit chaque tour sur un accord en suspens |
| Lanternes | 62 | mi mineur, petites notes en arpège (comme une harpe) |
| Dernière étoile | 56 | fa dièse mineur, son plus chaud et très filtré, en arpège |

Liste « Morceau » dans les paramètres : « Tous, à la suite » (par défaut : chaque morceau tourne environ 2 minutes, puis le suivant arrive en fondu) ou un seul morceau en boucle. Le choix est retenu (clé `musicTrack`).

## Décor

Liste « Décor » dans les paramètres, sous le thème : aucun (le fond du thème), mer étoilée, mer en plein jour, neige ou prairie. **La mer étoilée est le décor de départ** (`DEFAULT_SCENE`), car c'est celui que les joueurs préfèrent. Retenue par le navigateur (clé `scene`). Détails dans [direction-artistique/README.md](direction-artistique/README.md).

## La partie continue en arrière-plan

C'est un jeu « idle » : **la partie continue quand le jeu n'est pas affiché** (autre onglet, fenêtre réduite, autre appli). Option **« La partie continue quand le jeu n'est pas affiché »** dans les paramètres (cochée par défaut, clé `backgroundPlay`) : décochée, la partie s'arrête dès que le jeu est caché.

Comment ça marche (partie `START & UPDATE`, « ARRIÈRE-PLAN ») :
- quand la page est cachée, le navigateur n'appelle plus `gameUpdate` (la boucle d'images). Un petit **Web Worker** (un programme qui tourne à côté de la page, que le navigateur ne ralentit pas) réveille le jeu toutes les 250 ms (`BACKGROUND_TICK_MS`), et le jeu avance du temps écoulé, **sans rien dessiner** (`simulateTime`), en tenant compte de la vitesse du jeu. Les planètes continuent de tourner sur leurs orbites (`updatePlanetPositions` à chaque pas : d'habitude, c'est le dessin qui les place) ;
- si le navigateur a quand même **gelé** la page (téléphone, économie d'énergie), le temps perdu est **rattrapé au retour**, petit à petit (30 ms de calcul par image, pour que le jeu ne se bloque pas), au plus 10 minutes (`MAX_CATCH_UP`). Un message dit « ⏩ Le jeu rattrape le temps passé : encore 1:23 » ;
- au retour (après au moins 5 s), un message résume : « 🌙 Pendant ton absence (3:12) : +154 or, +98 XP » ;
- pas de son pendant ce temps (`playSound` ne joue rien quand la page est cachée : sinon tous les sons partiraient d'un coup au retour) ;
- si le joueur meurt pendant son absence, il retrouve le menu de mort ; si un menu est ouvert avec « pause dans les menus », la partie reste en pause.

## Pause dans les menus

Option **« Mettre le jeu en pause dans les menus »** dans les paramètres (cochée par défaut, clé `pauseInMenus`) : cochée, le jeu s'arrête quand la fenêtre des skills ou les paramètres sont ouverts ; décochée, il continue. Si le joueur meurt pendant qu'il regarde ses skills, la fenêtre se ferme et le shop s'affiche.

## Le tutoriel

Des bulles expliquent le jeu **au bon moment**, une à la fois (partie `TUTORIEL` du code, liste `TUTORIAL_STEPS`). Pendant une bulle, le jeu est en pause et l'écran est assombri, sauf un **projecteur** autour de ce qu'elle montre (son bord palpite en graphismes élevés). La bulle se met à côté de ce qu'elle montre : dessous, au-dessus, à droite ou à gauche, à la place qui le cache le moins, sans sortir de l'écran. Sur un écran bas (téléphone en paysage), elle est plus large et moins haute.

| Bulle | Quand elle arrive | Ce qu'elle montre et explique |
| --- | --- | --- |
| Bienvenue ! | au lancement du jeu (après 0,7 s) | au milieu : le triangle tire tout seul ; un ennemi qui touche fait perdre autant de vie qu'il lui en reste |
| Or et XP | après 5 ennemis tués | l'or et l'XP (en haut à gauche) : l'or pour le shop, l'XP pour les compétences |
| Les ennemis | après 10 s de partie | au milieu : les 4 éléments (couleur, vitesse, solidité), la vie qui monte avec le temps, le contour jaune des mouvements spéciaux |
| Le shop | à la 1re mort | le bouton « Nouvelle divinité » : l'or reste, le shop rend plus fort |
| Ta première planète | au début de la partie qui suit l'achat du 1er dieu | la planète. **Il faut cliquer (ou toucher) la planète** pour continuer (pas de bouton « Compris », Entrée ne fait rien) : ça ouvre son arbre |
| Les compétences | à la 1re ouverture de l'arbre d'un dieu en orbite | l'arbre : choisir une étoile, « Débloquer », commencer par l'étoile qui brille, les voies |
| Tes statistiques | juste après | le panneau des stats, qui clignote quand une stat change. Sur petit écran, le panneau s'ouvre en entier et la bulle dit qu'on appuie sur son titre pour le replier |
| Les liens d'orbite | à la 1re ouverture d'un arbre quand le 1er lien est acheté | la zone « Liens d'orbite » : emprunter l'attribut d'une voisine de son orbite |
| Les orbites | au début de la partie qui suit l'achat du 2e dieu | la 2e planète : la faire glisser pour changer sa place ou son orbite |
| Le temps | au début de la partie qui suit le 1er achat de temps (vitesse ou saut) | le bouton du temps : x2, x4, le saut (touche T à l'ordinateur) et son temps de recharge |
| Un super ennemi ! | au 1er duel (5:00) | au milieu : le chrono s'arrête, vitesse x1, beaucoup de vie, certains ont un pouvoir |

- **« Compris »** passe à la bulle suivante. Si plusieurs bulles arrivent en même temps (ex : « Les orbites » et « Le temps »), elles s'affichent l'une après l'autre.
- **« Passer le tutoriel »** (lien discret en bas de chaque bulle) : plus aucune bulle. Un message rappelle qu'on peut le recommencer dans les paramètres.
- **Paramètres** : la case « Tutoriel » (décochée = passé, la recocher le remet en marche) et le bouton **« Recommencer »**, qui ferme les paramètres et repart de « Bienvenue ! ».
- **Souris ou doigt** : à la souris les bulles disent « Clique », au doigt « Touche » (`textTouch`, ex : la planète, l'arbre) ; la touche T n'est citée qu'à l'ordinateur. Sur petit écran, `textSmall` ajoute des précisions (le panneau des stats).
- **Sauvegarde** : les bulles déjà vues et « Passer » sont gardés (`tutorial` dans la sauvegarde). Une sauvegarde d'avant le tutoriel compte comme « tout vu » : le joueur connaît déjà le jeu (il peut le revoir avec « Recommencer »). « Effacer ma progression » le fait recommencer.
- **Ajouter une bulle** : une ligne dans `TUTORIAL_STEPS` (titre, texte, cible : un sélecteur CSS comme `"#hud"`, `"planet"` ou `"planet2"`), ses traductions dans `langues/`, et un `triggerTutorial("nom")` à l'endroit du code où elle doit arriver.

## Le temps

Pendant un **duel** contre un super ennemi (sa 1re rencontre), le chrono s'arrête et s'affiche « ⚔️ 5:00 » en rouge, qui palpite ; le jeu repasse en vitesse x1 (x2 et x4 grisés) et le saut dans le temps est impossible. La vitesse d'avant revient toute seule à la fin du duel (voir [ennemis.md](ennemis.md)).

Au début, on ne peut ni passer le temps ni accélérer. Le shop débloque tout :

| Amélioration | Niveau 1 | Niveau 2 | Niveau 3 |
| --- | --- | --- | --- |
| Accélérer le temps | vitesse x2 | vitesse x4 | — |
| Sauter dans le temps | saut de +10 s | saut de +30 s | saut de +100 s |

Les boutons pas encore achetés restent visibles, en gris et sans icône. De même, un dieu pas encore en orbite a son titre en gris dans la fenêtre des skills.

**Temps de recharge du saut** (comme les sorts de League of Legends) : après un saut, il faut attendre avant le suivant, sinon les sauts s'enchaînent, les ennemis s'empilent et le jeu rame. Pendant la recharge, un voile sombre recouvre les boutons de saut **et** le bouton du menu du temps (même fermé) ; il « tourne » comme une aiguille : la partie claire grandit dans le sens des aiguilles d'une montre. Les secondes restantes s'affichent au milieu (« ⏳ 12 » sur le bouton du menu, pour ne pas confondre avec la vitesse). Quand c'est prêt, les boutons brillent un instant, avec un petit « ding » (`skipReady`). Un saut tenté pendant la recharge (bouton ou touche T) affiche « ⏳ Saut dans le temps en recharge : encore 12 s ». La recharge compte en temps de jeu (elle s'arrête quand le jeu est en pause) et repart de zéro à chaque partie. Formule dans [questions/formules.md](questions/formules.md).

## Le menu de mort : le résumé de la partie

En haut du menu de mort, sous « GAME OVER », 3 grandes cartes résument la partie qui vient de finir (`showRunSummary`) :
- **Or gagné** (carte dorée qui brille) et **XP gagnée** : les nombres comptent de 0 jusqu'à leur valeur en un peu plus d'une seconde, puis « sautent » une fois (avec le son d'achat s'il y a de l'or) ;
- **Temps de survie**.

Juste en dessous, **l'or disponible** (le total à dépenser dans le shop), en gros avec une pièce. L'or et l'XP de la partie sont comptés dans `runGold` et `runXp` (remis à 0 à chaque nouvelle partie).

## Le shop : les améliorations infinies

Cinq améliorations du joueur (le triangle du milieu) sont **infinies** : Dégâts, Cadence de tir, Vie max, Régénération et Dégâts critiques (`maxLevel: Infinity` dans `SHOP_ITEMS`). Le shop affiche « (niv. 12/∞) » : on peut toujours les acheter, chaque niveau coûtant 1,5 ou 1,6 fois plus que le précédent. Avant, elles s'arrêtaient au niveau 8 ou 10, et les testeurs n'avaient plus rien à acheter après une heure de jeu. Les autres (Portée, Vitesse des balles, Balle supplémentaire, Chance de critique, les dieux, le temps et les liens) gardent un niveau maximum : une portée, une vitesse ou une chance sans limite casseraient le jeu (la chance de critique ne peut pas dépasser 100 %). Le détail des prix est dans [prix.md](prix.md), le rythme dans [rythme.md](rythme.md).

## Le menu de mort : les paliers

Sous « Rejouer », une section **Paliers** montre un bouton par super ennemi déjà vaincu, de sa couleur : « Après Cerbère (1:02) », « Après Hydre de Lerne (2:02) »… Il relance une partie qui commence directement 2 s après l'heure de ce super ennemi (`CHECKPOINT_OFFSET`). C'est un simple point de départ : rien n'apparaît pendant le temps sauté, donc il ne rapporte ni or ni XP (contrairement à « Sauter dans le temps », qui fait arriver tous les ennemis d'un coup). Les mouvements déjà débloqués à ce moment-là sont là directement, sans alerte. La section est cachée tant qu'aucun super ennemi n'est vaincu. « Rejouer » (ou la touche R) recommence toujours à 0:00.

## L'alerte des ennemis spéciaux

Avant un super ennemi ou le premier ennemi d'un nouveau mouvement : un bandeau sous le message temporaire (rouge pour un super ennemi, jaune pour un nouvel ennemi) avec un compte à rebours, et une flèche qui palpite au bord de l'écran, du côté d'où il va arriver. Détails dans [ennemis.md](ennemis.md).

## La fenêtre des skills

- **Ouvrir :** clic sur une planète, touche **S**, ou le **bouton ✦** (à gauche de la roue crantée sur ordinateur, « ✦ Skills » en bas à droite au doigt). Un **point turquoise** sur ce bouton signale qu'au moins une compétence peut être débloquée avec l'XP qu'on a (`updateSkillsBadge`, 2 fois par seconde).
- **Passer d'un dieu à l'autre :** la **liste des dieux**, en haut de la colonne de gauche (`renderGodList`) : chaque dieu avec son losange de couleur, ses compétences prises (ex : 12/39) et un point turquoise s'il a une compétence à prendre ; le prochain dieu à acheter a un cadenas. Aussi : flèches **‹ ›** de chaque côté du nom du dieu, **glisser le doigt** (ou la souris) vers la gauche ou la droite sur la fenêtre (en dehors de l'arbre, où glisser sert à le déplacer), ou **flèches ← →** du clavier. On parcourt les dieux en orbite, plus le prochain dieu à acheter (en aperçu). Les autres dieux ne sont pas affichés, pour ne pas surcharger la fenêtre.
- **Prochain dieu (pas encore en orbite) :** son arbre s'affiche quand même, assombri et verrouillé, pour montrer au joueur ce qui l'attend. On peut le parcourir mais pas acheter.
- **La carte d'une compétence** s'affiche **en grand, par-dessus l'arbre** : en haut, ou en bas si la compétence est dans le haut de la fenêtre (pour ne pas la cacher). Elle montre le nom et le rôle, puis **ce que la compétence donne, en gros** (une ligne par stat, ex : « +0.5 Dégâts par balle », en rouge si c'est une baisse ; `describeEffect`), la description, le coût et le bouton d'achat. À la souris, survoler une étoile montre un aperçu de sa carte.
- **Acheter (sans achat par erreur) :** le 1er clic (ou toucher) **choisit** la compétence : sa carte reste affichée, avec le bouton **« Débloquer · 25 XP »**. On l'achète avec ce bouton, ou en cliquant une 2e fois sur la même étoile. Le × de la carte, ou un clic sur le fond de l'arbre, enlève le choix. À l'achat, le lien depuis la compétence voisine se remplit, l'étoile éclot, et **les gains apparaissent en grand au milieu de l'arbre**, puis montent et s'effacent (`showGainPopup`).
- **Rembourser :** clic droit sur une compétence prise (au doigt : appui long), ou bouton « Rembourser » dans sa fiche. Tout l'XP est rendu. C'est impossible si d'autres compétences prises ne seraient plus reliées au départ.
- **Les voies (choix exclusifs) :** chaque arbre a 2 ou 3 **voies**, des branches rivales avec chacune sa façon de jouer (ex. chez Héphaïstos : « Voie du marteau » ou « Voie de la lave »). Une voie est dessinée avec une large **lueur de couleur** sous ses liens (or pour la 1re, violet pour la 2e, turquoise pour la 3e) et son **nom** écrit à côté. Prendre une compétence d'une voie **bloque les autres voies** de cet arbre : leurs étoiles deviennent grises, leurs noms sont barrés, leurs liens en pointillés, et le nom de la voie choisie prend un « ✔ ». La carte d'une compétence de voie montre la voie et sa façon de jouer, puis, avant le choix, ce qu'elle va bloquer (« La prendre bloque : Voie de la lave »), ou, si elle est bloquée, quelle voie a été choisie et comment changer : **rembourser toutes les compétences de sa voie** (l'XP est rendue). L'aide en haut de l'arbre le rappelle tant qu'aucune voie n'est choisie (`getChosenPath`, `paths` dans `SKILL_TREES_DATA`). Une ancienne sauvegarde qui avait des compétences dans plusieurs voies garde celle où le plus d'XP a été mis ; l'XP des autres est rendue (`resolvePathConflicts`). Le détail des voies, dieu par dieu, est dans [skills/](skills/README.md).
- **Orbite :** en bas à gauche, au-dessus des liens : un bouton par orbite (Intérieure, Milieu, Extérieure) pour y envoyer la planète (elle arrive à la fin de cette orbite). À droite de chaque orbite, les autres planètes qui y tournent, en **petits losanges de leur couleur** (leurs noms au survol), ou « seule ici » / « vide ». Voir « Les 3 orbites ».
- **Liens d'orbite :** juste en dessous, pour choisir à quelle planète voisine **de son orbite** le dieu se lie. Seule sur son orbite, la planète n'a personne à qui se lier (« Seule sur son orbite : pas de voisine à qui se lier »). Au début, seul « Aucun » est disponible : l'amélioration **« Liens d'orbite »** du shop (4 niveaux : 30, 75, 188 puis 469 or) débloque Droite, puis Gauche, puis Les deux côtés, puis Opposé (`LINK_UNLOCK_ORDER`). Les liens pas encore achetés sont gris, avec « Dans le shop ». Une ancienne sauvegarde garde les liens que le joueur utilisait déjà (voir [skills/0-combos.md](skills/0-combos.md) et [statistiques.md](statistiques.md)).

## Les 3 orbites

Les planètes tournent sur **3 orbites** autour du joueur (`ORBITS`, partie `PLAYER & PLANETS` de `index.html`). Avant, il n'y avait qu'une orbite de 100 px, qui grandissait jusqu'à 130 px avec 12 planètes.

| Orbite | Rayon | Rotation |
| --- | --- | --- |
| Intérieure | 130 px | 0,25 radian par seconde (un tour en 25 s) |
| Milieu | 200 px | 0,17 rad/s, **dans l'autre sens** (un tour en 37 s) |
| Extérieure | 270 px | 0,12 rad/s (un tour en 52 s) |

- **Les liens se font sur la même orbite :** Gauche, Droite, Les deux côtés et Opposé se comptent parmi les planètes de **son** orbite (`getLinkedPlanets`). Seule sur son orbite, une planète n'a pas de lien. Ranger les planètes sur les orbites, c'est donc choisir ses combos.
- **Ce que ça change au combat :** une planète tire depuis sa place (250 px de portée, depuis la planète). Sur l'orbite extérieure, elle touche les ennemis plus tôt de son côté, mais protège moins le joueur du côté opposé ; sur l'orbite intérieure, elle couvre mieux tout autour du joueur.
- **Place sur l'orbite :** les planètes d'une orbite sont espacées régulièrement. Une nouvelle planète (achetée dans le shop) arrive sur l'orbite **intérieure**, à la fin.
- **Changer une planète d'orbite :**
  - dans le jeu, **la faire glisser** (souris ou doigt) : elle suit le pointeur, passe sur l'orbite la plus proche de lui (il faut en être nettement plus près, de 12 px, pour qu'elle n'hésite pas entre deux : `ORBIT_SWITCH_MARGIN`), et prend la case la plus proche de l'angle du pointeur ; les autres planètes se poussent. Pendant le glisser, les 3 orbites sont tracées en entier et celle où la planète va **s'éclaire de sa couleur**. Au lâcher, elle glisse en douceur jusqu'à son orbite ;
  - dans la fenêtre des skills, les boutons « Orbite » (voir plus haut).
- **Dessin :** 3 cercles très discrets (couleur `ORBIT_COLOR` du thème ou du décor) ; une orbite vide est en pointillés.
- **Toucher la bonne planète :** si deux planètes de deux orbites sont presque l'une sur l'autre (au doigt, leurs zones de toucher sont plus grandes), c'est la plus proche du doigt qui est prise (`findPlanetAt`).
- **Ancienne sauvegarde :** sans orbites enregistrées, toutes les planètes vont sur l'orbite intérieure, dans le même ordre : les liens restent les mêmes.

## La caméra

Quand la portée du joueur dépasse l'écran, la caméra dézoome doucement, jusqu'à ce que la portée occupe environ 95 % de la demi-largeur de l'écran. Au-delà de 1000 px de portée, elle ne dézoome plus.

Les 3 orbites restent aussi toujours à l'écran, en largeur **et** en hauteur, à 16 px du bord (`CAMERA_ORBIT_MARGIN`). Sur ordinateur et en portrait, ça ne change presque rien (la portée demande déjà ce zoom) ; sur un écran bas (téléphone en paysage, dans la version web), la caméra dézoome pour montrer toutes les planètes.

## La portée des dieux

Quand la souris survole une planète (ou pendant qu'on la touche au doigt), un cercle en pointillés de sa couleur, légèrement teinté, montre sa portée : la distance jusqu'à laquelle elle tire, mesurée depuis la planète. Le cercle rouge du joueur reste affiché autour du centre.

## Le panneau des statistiques

À droite, quand la fenêtre des skills ou le game over est ouvert (en bas sur écran étroit, repliable sur petit écran). Ses sections :
- **Vie** et **Attaque (toi)** : les stats du triangle du milieu.
- **Une section par planète** : toutes ses stats de tir (dégâts, vitesse d'attaque, tirs par seconde, balles par tir, portée, vitesse des balles, chance et dégâts critiques, bonus contre un élément) et son lien d'orbite. Les stats rares (vie par touche, PV max par touche, effet de combo au hasard) ne s'affichent que si la planète en a. Les **pouvoirs** du dieu (taille des balles, rayon de charme, éclairs...) s'affichent aussi, avec « toutes les X s » pour ceux qui reviennent régulièrement, et le nombre d'ennemis tués pour la soif de gloire d'Arès. La planète du skill tree ouvert passe en premier.
- **Défense**, **Gains** et **Ennemis**. L'esquive affichée est celle qui compte vraiment : au plus 75 % (`DODGE_MAX`), avec « (maximum) » quand les compétences en donnent plus.

Une stat qui vient de changer clignote : **en vert si elle augmente** (ou change sans nombre), **en rouge si elle baisse** (remboursement d'une compétence, lien d'orbite changé...). On compare le premier nombre de la valeur affichée (`isStatLower`). Pour les stats où un nombre plus bas est mieux (la recharge du bouclier), la couleur est inversée (`LOWER_IS_BETTER_STATS`).
