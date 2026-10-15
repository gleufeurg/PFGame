# Problèmes connus

Les problèmes repérés pendant le développement qui ne sont **pas encore corrigés**, avec leur cause et comment les régler. Quand un problème est corrigé, on le retire de cette liste dans le même commit.

Chaque problème indique la ou les branches concernées : `portfolio`, `monetisation`, ou les deux.

## Affichage

### Le jeu peut paraître flou sur les écrans fins (les deux branches)

- **Ce qu'on voit :** sur un téléphone, un écran « Retina » de Mac, ou un PC réglé à 125 % / 150 % dans Windows, tout ce qui est dessiné dans le jeu est un peu flou. Ça se voit surtout sur les **textes du canvas** (nombres de dégâts, nom des planètes, vie du joueur) et sur les bords des formes. Les menus (HTML) restent nets.
- **Pourquoi :** un écran fin a plusieurs vrais pixels pour un pixel « CSS » (souvent 2 ou 3, c'est `window.devicePixelRatio`). Le canvas est créé à la taille CSS de l'écran (`canvas.width = window.innerWidth`), donc avec 2 à 3 fois moins de pixels que l'écran : le navigateur l'agrandit, comme une image basse résolution étirée.
- **Que faire :** créer le canvas à la vraie résolution, puis tout dessiner à l'échelle :
  ```js
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2); //limité à 2 pour ne pas trop ralentir
  canvas.width = window.innerWidth * pixelRatio;
  canvas.height = window.innerHeight * pixelRatio;
  canvas.style.width = window.innerWidth + "px";   //la taille AFFICHÉE ne change pas
  canvas.style.height = window.innerHeight + "px";
  ```
  Ensuite, multiplier par `pixelRatio` la transformation de dessin (`setTransform` dans `drawCanvas` et `applyWorldTransform`), le fond (`backgroundCanvas`, `shadowCanvas`) et la conversion souris → monde (`screenToWorld`), et utiliser `window.innerWidth` au lieu de `canvas.width` partout où on parle de la taille de l'écran.
- **Le prix à payer :** 2 fois plus de pixels en largeur et en hauteur, c'est 4 fois plus de pixels à dessiner. Avec 10 000 ennemis, ça peut ralentir. Bonne idée : une option « Haute qualité » dans les paramètres, et un `pixelRatio` à 1 automatiquement quand il y a beaucoup d'ennemis.

### Les polices viennent d'internet (les deux branches)

- **Ce qu'on voit :** sans connexion (dans l'application mobile par exemple), le jeu s'affiche avec une police de secours. Avec une connexion lente, le texte change de police au bout d'un moment. Les textes du canvas peuvent être dessinés avec la police de secours si Nunito n'est pas encore chargée.
- **Pourquoi :** Nunito et Rubik sont chargées depuis Google Fonts (`<link href="https://fonts.googleapis.com/...">` en haut de `index.html`).
- **Autre souci :** en Europe, charger des polices depuis les serveurs de Google envoie l'adresse IP du joueur à Google. Un tribunal allemand a jugé ça contraire au RGPD en 2022.
- **Que faire :** télécharger les fichiers `.woff2` des polices (par exemple sur google-webfonts-helper), les mettre dans un dossier `polices/` du dépôt, et remplacer le `<link>` par des règles `@font-face` qui pointent vers ces fichiers. Sur `monetisation`, ajouter ce dossier à la liste `FICHIERS` de `scripts/copier-jeu.js`. Pour le canvas, attendre `document.fonts.ready` avant de lancer le jeu.

### Le jeu ne suit pas la taille de la fenêtre (`portfolio` seulement)

- **Ce qu'on voit :** si on agrandit, réduit ou tourne l'écran après le chargement, le jeu n'est plus centré et le fond est coupé.
- **Pourquoi :** la taille du canvas n'est lue qu'une fois, au démarrage.
- **Que faire :** c'est corrigé sur `monetisation` (fonction `resizeCanvas`, appelée sur l'événement `resize`). Il suffit de la reprendre sur `portfolio`.

### Sur téléphone, le jeu dézoome beaucoup (`monetisation`)

- **Ce qu'on voit :** en portrait, l'écran est étroit (environ 390 px de large). Dès que la portée grandit, la caméra dézoome et les ennemis et planètes deviennent petits.
- **Pourquoi :** la caméra garde toute la portée visible dans la largeur de l'écran (`CAMERA_RANGE_SCREEN_RATIO`). C'est le comportement voulu, mais sur un écran étroit, il dézoome très vite.
- **Que faire (choix de game design) :** sur téléphone, accepter que la portée sorte un peu de l'écran sur les côtés (ratio plus grand), ou se baser sur la hauteur en portrait, ou permettre de zoomer à deux doigts dans le jeu.

### Le téléphone en paysage est à l'étroit (`monetisation`)

- **Ce qu'on voit :** dans la version web en paysage, la fenêtre des skills ne montre qu'une partie de l'arbre et il faut faire défiler.
- **Pourquoi :** 390 px de hauteur, c'est très peu pour les onglets des dieux, le titre et l'arbre.
- **Que faire :** l'application Android est verrouillée en portrait, donc le problème ne touche que la version web. Si besoin : en paysage, cacher les onglets des dieux derrière un menu déroulant et mettre l'arbre à côté des liens d'orbite.

## Sauvegarde

### Pas de sauvegarde de la progression (`portfolio` seulement)

- **Pourquoi :** la sauvegarde (`saveProgress` / `loadProgress`) a été ajoutée seulement sur `monetisation`, pour l'application mobile.
- **Que faire :** la reprendre sur `portfolio` si on veut que les visiteurs du portfolio gardent leur partie.

### La sauvegarde peut disparaître (`monetisation`)

- **Ce qu'on voit :** dans un navigateur, la progression peut être perdue.
- **Pourquoi :** `localStorage` est effacé si le joueur vide les données de navigation, en navigation privée, ou par Safari sur iPhone après 7 jours sans visite. La partie en cours (ennemis, chrono) n'est jamais sauvegardée. Dans l'application mobile, le stockage est bien plus stable (il ne part qu'avec la désinstallation).
- **Que faire :** pour la version web, ajouter un export / import de sauvegarde (un texte à copier-coller) dans les paramètres. Plus tard, une sauvegarde en ligne (Google Play Games, ou un petit serveur).

## Monétisation (`monetisation`)

### Les achats peuvent être « piratés »

- **Pourquoi :** le Pack Premium et le Pack Soutien sont retenus dans `localStorage` (clés `premium` et `supporter`). N'importe qui peut écrire `localStorage.setItem("premium", "1")` dans la console (F12) et les avoir gratuitement.
- **Que faire :** dans l'application, utiliser les achats intégrés du Play Store / de l'App Store (par exemple avec RevenueCat ou un plugin Capacitor de paiement) : c'est le store qui dit si l'achat a été fait. Pour le web, il faut un serveur qui vérifie le paiement (voir [monetisation.md](monetisation.md)).

### Pubs et paiements encore en mode test

- **Pourquoi :** `ADS_TEST_MODE` et `PAYMENT_TEST_MODE` sont à `true` : fausses pubs, achats simulés.
- **Que faire :** étapes 2 et 3 de [mobile.md](mobile.md) (AdMob, achats intégrés).

### Pas de fenêtre de consentement (RGPD)

- **Pourquoi :** en Europe, il faut demander l'accord du joueur avant d'afficher des pubs personnalisées.
- **Que faire :** avec AdMob, utiliser l'outil de consentement de Google (UMP, « User Messaging Platform ») ; sur le web, un outil de consentement certifié par Google. Il faudra aussi une page de **règles de confidentialité** (obligatoire sur les stores).

### L'application n'a pas encore d'identité

- **Pourquoi :** le nom (« PFGame ») et l'identifiant (`fr.evangelinelefevre.pfgame`) sont provisoires, et l'icône et l'écran de démarrage sont ceux de Capacitor par défaut.
- **Que faire :** choisir le nom et l'identifiant avant la première publication (l'identifiant ne pourra plus changer, voir [mobile.md](mobile.md)), puis créer l'icône et l'écran de démarrage (l'outil `@capacitor/assets` les génère à partir d'une image).

## Jeu

### Les codes de triche sont dans la version publique (les deux branches)

- **Pourquoi :** `CHEAT_CODES` est toujours actif : n'importe quel joueur qui connaît un code peut tout débloquer. Sur `monetisation`, `penia` peut aussi retirer le Pack Premium.
- **Que faire :** avant de publier, ajouter une constante `CHEATS_ENABLED = false` et ne lire les codes que si elle vaut `true`. Pour tester, il suffit de la remettre à `true`.

### Les codes de triche ne marchent pas sur téléphone (`monetisation`)

- **Pourquoi :** ils se tapent au clavier, et le jeu n'ouvre pas de clavier sur téléphone.
- **Que faire :** si on veut tester sur téléphone, ajouter un champ « code » caché (par exemple : toucher 5 fois la version du jeu dans les paramètres), visible seulement quand `CHEATS_ENABLED` vaut `true`.

### Une stat qui baisse s'affiche toujours en rouge (les deux branches)

- **Pourquoi :** `isStatLower` compare juste les nombres : si un nombre baisse, c'est rouge. Mais pour certaines stats, baisser est une bonne nouvelle (par exemple dans la section « Ennemis »).
- **Que faire :** marquer ces stats comme « plus bas = mieux » dans `getStatsCategories`, et inverser la couleur pour elles.

### Le contact contient encore un texte provisoire (les deux branches)

- **Ce qu'on voit :** dans l'écran de game over, la ligne « LinkedIn / Portfolio : ... ».
- **Que faire :** mettre les vrais liens, ou retirer la ligne.

### Performances avec énormément d'ennemis (les deux branches)

- **Ce qu'on sait :** avec 10 000 ennemis, une image prend environ 60 ms sur un ordinateur de test sans carte graphique (environ 16 images par seconde). Sur un vrai ordinateur, c'est bien plus rapide, mais **le jeu n'a pas encore été testé sur un vrai téléphone**.
- **Que faire :** tester sur un téléphone d'entrée de gamme. Si ça rame : limiter le nombre d'ennemis vivants sur téléphone (en regroupant les ennemis en trop en un ennemi plus fort), baisser encore `MAX_ENEMY_SHADOWS` et `MAX_PARTICLES`.

## Dépôt GitHub et outils

### Le dépôt est plus lourd que nécessaire (`portfolio`)

- **Pourquoi :** un commit de `portfolio` (« Portée des dieux au survol… ») a ajouté par erreur `node_modules/`, `www/` et des fichiers Android. Ils ont été retirés au commit suivant, mais restent dans l'historique : le premier téléchargement du dépôt (clone) est plus long.
- **Que faire :** rien d'urgent. Pour vraiment les effacer de l'historique, il faudrait réécrire l'historique de `portfolio` (outil `git filter-repo`) puis forcer l'envoi, ce qui oblige à re-télécharger le dépôt partout.

### Changer de branche peut faire commiter des fichiers par erreur (`portfolio`)

- **Pourquoi :** sur `monetisation`, `.gitignore` ignore `node_modules/` et `www/`, et `android/.gitignore` ignore les fichiers générés de l'appli. Quand on passe sur `portfolio`, ces fichiers restent dans le dossier, mais `portfolio` ne les ignore pas : GitHub Desktop les propose dans « Changes ».
- **Que faire :** ajouter `node_modules/`, `www/` et `android/` au `.gitignore` de `portfolio`. En attendant, décocher ces fichiers dans GitHub Desktop avant de commiter.

### Avertissement de sécurité de npm (`monetisation`)

- **Ce qu'on voit :** `npm install` signale une faille « moderate » dans `uuid`.
- **Pourquoi :** elle est dans un outil utilisé par `@capacitor/cli` pour les projets iPhone. Cet outil sert seulement sur l'ordinateur, pendant la fabrication : il n'est pas dans l'application.
- **Que faire :** ne **pas** lancer `npm audit fix --force` (il installerait une version plus ancienne de Capacitor). Attendre une mise à jour de Capacitor, puis changer les versions dans `package.json`.

### L'iPhone demande un Mac (`monetisation`)

- **Pourquoi :** Apple n'autorise la fabrication d'applications iPhone qu'avec Xcode, qui ne marche que sur Mac.
- **Que faire :** emprunter ou louer un Mac (il existe des Mac en ligne, comme MacinCloud), ou utiliser un service qui fabrique l'appli à distance (Ionic Appflow, Codemagic).
