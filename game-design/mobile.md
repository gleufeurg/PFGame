# L'application mobile (branche `monetisation`)

Le jeu reste **un seul fichier `index.html`**. Pour en faire une application Android (et plus tard iPhone), on utilise [Capacitor](https://capacitorjs.com/) : il emballe la page web dans une vraie application, qui l'affiche en plein écran. On continue donc de coder le jeu exactement comme avant.

## Les fichiers de l'application

| Fichier / dossier | À quoi il sert | Dans GitHub ? |
| --- | --- | --- |
| `package.json` | la liste des outils (Capacitor 8.6.0) et les commandes `npm run ...` | oui |
| `package-lock.json` | les versions exactes installées (créé par `npm install`, ne pas modifier à la main) | oui |
| `capacitor.config.json` | le nom de l'appli (`appName`) et son identifiant (`appId`) | oui |
| `scripts/copier-jeu.js` | copie `index.html`, `reglages.js` (les statistiques du jeu) et les dossiers `polices/` et `langues/` dans `www/`, et y ajoute `capacitor.js` (la bibliothèque `@capacitor/core`, qui donne accès aux plugins comme AdMob) | oui |
| `android/` | le projet Android, ouvert par Android Studio | oui |
| `www/` | la copie du jeu mise dans l'appli (recréée à chaque fois) | non |
| `node_modules/` | les outils téléchargés par `npm install` | non |

⚠️ **L'identifiant `fr.evangelinelefevre.geometryidledefense`** (`appId`) est le « nom unique » de l'appli sur le Play Store et l'App Store. Il ne pourra **plus jamais changer après la première publication**. Le nom affiché sous l'icône (`appName`, « Geometry : Idle defense ») peut, lui, changer quand on veut. Pour changer l'un ou l'autre : modifier `capacitor.config.json` **et** `android/app/src/main/res/values/strings.xml` (et `applicationId` dans `android/app/build.gradle` pour l'identifiant).

L'application Android est **verrouillée en portrait** (`android:screenOrientation="portrait"` dans `android/app/src/main/AndroidManifest.xml`).

## Tester sur ton téléphone Android (sur Windows)

### Une seule fois : installer les outils

1. **Node.js** : télécharger la version « LTS » sur [nodejs.org](https://nodejs.org/) et l'installer (tout par défaut). Pour vérifier : ouvrir un terminal et taper `node -v`, ça doit afficher un numéro de version.
2. **Android Studio** : le télécharger sur [developer.android.com/studio](https://developer.android.com/studio) et l'installer. Au premier lancement, choisir l'installation **Standard** : il télécharge tout seul le SDK Android (les outils pour fabriquer une appli) et Java.
3. **Préparer le téléphone** :
   - Paramètres → À propos du téléphone → toucher **7 fois** « Numéro de build » (ou « Numéro de version ») : le téléphone dit « Vous êtes développeur ».
   - Paramètres → Système → **Options pour les développeurs** → activer **Débogage USB**.
   - Brancher le téléphone en USB à l'ordinateur et accepter la fenêtre « Autoriser le débogage USB ? ».

### Une seule fois par ordinateur : installer Capacitor

1. Dans GitHub Desktop, passer sur la branche `monetisation` et faire **Pull**.
2. Menu **Repository → Open in Command Prompt** (ou PowerShell) : un terminal s'ouvre directement dans le dossier du jeu.
3. Taper :
   ```
   npm install
   ```
   Ça télécharge Capacitor dans `node_modules/` (une minute environ).

### À chaque fois : lancer le jeu sur le téléphone

1. Dans le terminal (dossier du jeu) :
   ```
   npm run android
   ```
   Cette commande copie `index.html` (et les polices) dans l'appli (`www/` puis `android/`) et ouvre le projet dans Android Studio.
2. Dans Android Studio, attendre la fin de la barre de chargement en bas (« Gradle sync », la première fois c'est long).
   Si Android Studio ne s'ouvre pas tout seul (« Unable to launch Android Studio ») : l'ouvrir à la main, **Open**, et choisir le dossier `android` qui est dans le dossier du jeu (pas le dossier du jeu entier). Il reste ensuite dans la liste des projets récents.
3. En haut, choisir ton téléphone dans la liste des appareils, puis cliquer sur le **triangle vert ▶ (Run)**. L'appli s'installe et s'ouvre sur le téléphone. Elle reste installée ensuite, comme une vraie appli.

Pas de téléphone sous la main ? Dans Android Studio, **Device Manager** permet de créer un téléphone virtuel (émulateur).

### Après une modification du jeu

Le jeu dans l'appli est une **copie** de `index.html`, de `reglages.js`, des traductions et des polices. Cette copie est **automatique** : à chaque ▶ Run (ou à chaque compilation), Android Studio lance d'abord la tâche `copierLeJeu` (fichier `android/app/copier-jeu.gradle`), qui fait `npm install`, `npm run build` puis `npx cap copy android` (la copie du jeu, sans toucher aux plugins).

Donc, après une modification (la tienne ou un push de Claude) : **Pull** dans GitHub Desktop, puis **▶ Run** dans Android Studio. C'est tout.

- Si Android Studio dit que `npm` est introuvable : redémarrer le PC (après l'installation de Node.js), puis relancer Android Studio.
- On peut toujours faire la copie à la main avec `npm run sync`. C'est **obligatoire une fois** quand un nouveau plugin Capacitor est ajouté (la tâche automatique ne met pas à jour la liste des plugins), à faire avant le ▶.
- Si une compilation échoue avec un fichier introuvable dans un dossier `build` : **Build → Clean Project**, puis ▶.
- Ne jamais modifier les fichiers de `www/` ou de `android/app/src/main/assets/` : ils sont écrasés à chaque copie.

Astuce : pour tester vite les commandes tactiles sans téléphone, ouvrir `index.html` dans Chrome, F12, puis l'icône téléphone/tablette en haut à gauche des outils (« Toggle device toolbar ») et recharger la page.

## Ce qui a été adapté pour le téléphone

Voir [interface.md](interface.md) : commandes au doigt, petits écrans, sauvegarde. Et [ennemis.md](ennemis.md) pour les limites d'effets plus basses sur téléphone.

## Limites actuelles

- Les polices sont dans l'appli (dossier `polices/`) : le jeu marche entièrement hors ligne.
- Le jeu est dessiné à la vraie résolution de l'écran (2 vrais pixels par pixel CSS au maximum). Sur un téléphone lent, décocher « Graphismes nets » dans les paramètres.
- Les autres problèmes connus sont dans [problemes.md](problemes.md).
- **Pubs et Pack Premium** : toujours en mode test (`ADS_TEST_MODE`, `PAYMENT_TEST_MODE`), voir [monetisation.md](monetisation.md).

## La suite (pour publier)

1. **Étape 1 (fait)** : tactile, petits écrans, sauvegarde, projet Capacitor Android.
2. **Étape 2 (fait, en mode test)** : pubs **AdMob** dans l'appli, avec la fenêtre de consentement RGPD (plugin `@capacitor-community/admob`). Il reste à mettre tes vrais ID AdMob : voir [monetisation.md](monetisation.md). Pour l'iPhone, il faudra aussi ajouter l'ID d'application AdMob (`GADApplicationIdentifier`), les `SKAdNetworkItems` et la phrase `NSUserTrackingUsageDescription` dans `ios/App/App/Info.plist` (voir le README du plugin).
3. **Étape 3** : vrais achats « intégrés » (Google Play Billing et achats Apple) pour le Pack Premium. Les stores prennent 15 % (programme pour petits développeurs) et obligent à passer par leur système de paiement pour un achat dans un jeu.
4. **Étape 4 : publier.**
   - **Play Store** : compte Google Play Console (25 $ une fois). Un compte personnel récent doit d'abord faire un test fermé avec **au moins 12 testeurs pendant 14 jours** avant de pouvoir publier. L'icône est prête (`game-design/icone-512.png`, dessinée par `game-design/outils/generer-icone.js`, qui fait aussi l'icône et l'écran de démarrage de l'appli). Il faut aussi des captures d'écran, une description et une page de **règles de confidentialité** (obligatoire avec des pubs).
   - **App Store (iPhone)** : il faut **un Mac** avec Xcode (`npx cap add ios`, puis `npm run ios`) et un compte Apple Developer (99 $ par an).

## Publier sur le Play Store (une fois le compte Google Play Console payé)

### 1. Le compte
- Sur [play.google.com/console](https://play.google.com/console), finir la **vérification d'identité** (pièce d'identité, numéro de téléphone) : Google la demande avant toute publication. Ça peut prendre quelques jours.

### 2. Créer l'application dans la Play Console
- **Créer une application** : nom « Geometry : Idle defense », langue par défaut français, **Jeu**, **Gratuit**, puis accepter les règles.
- La Play Console affiche ensuite une liste de tâches « Configurer votre application ». Les réponses pour ce jeu :

| Tâche | Réponse |
| --- | --- |
| Règles de confidentialité | `https://gleufeurg.github.io/PFGame/confidentialite.html` |
| Accès à l'application | toutes les fonctionnalités sont disponibles sans restriction (pas de compte) |
| Annonces | **Oui**, l'application contient des annonces |
| Classification du contenu | questionnaire : catégorie Jeu ; violence de type « dessin animé / formes abstraites » (on tire sur des formes) ; pas de sang, de jeux d'argent ni de discussion entre joueurs |
| Public cible | **13 ans et plus** (en dessous, Google impose des règles de pub pour enfants) |
| Sécurité des données | l'appli ne collecte rien elle-même, mais **AdMob** collecte l'identifiant publicitaire de l'appareil, des données d'utilisation et de diagnostic (pour les pubs et les statistiques) ; données chiffrées pendant le transfert ; pas de suppression possible (pas de compte) |
| Application gouvernementale, financière, santé | non |

### 3. La fiche du Play Store
- **Icône** : `game-design/icone-512.png`.
- **Image de présentation** (1024 x 500) et **au moins 2 captures d'écran** de téléphone : à faire (Claude peut les générer à partir du jeu).
- **Description courte** (80 caractères max) et **description complète**, en français et en anglais.

### 4. Fabriquer la version à publier (fichier `.aab`)
1. Avant chaque version publiée, dans `index.html` : `ADS_TEST_MODE = false` (vraies pubs) et `FORCE_CHEATS = false` ; et `PAYMENT_TEST_MODE` ne doit **jamais** rester à `true` dans une version publiée (les packs seraient gratuits : voir l'étape 3 de « La suite » ci-dessus).
2. Dans `android/app/build.gradle` : augmenter `versionCode` de 1 à **chaque** envoi (1, 2, 3...) et changer `versionName` (« 1.0 », « 1.1 »...). Le Play Store refuse deux envois avec le même `versionCode`.
3. `npm run sync`, puis dans Android Studio : **Build → Generate Signed App Bundle / APK** → **Android App Bundle** → **Create new...** (la 1re fois) pour créer la **clé de signature** (un fichier `.jks`, avec un mot de passe).
   - ⚠️ **Range le fichier `.jks` HORS du dossier du jeu** (par exemple dans Documents), garde une copie (clé USB, cloud perso) et note le mot de passe. Sans elle, impossible de publier une mise à jour. Les fichiers `.jks` sont de toute façon ignorés par GitHub (`.gitignore`).
   - Choisir **release**, puis **Create** : le fichier `app-release.aab` est dans `android/app/release/`.
4. La 1re fois, la Play Console propose la **signature d'application par Google Play** : accepter (Google garde sa propre clé, la tienne sert à prouver que l'envoi vient de toi).

### 5. Les tests, puis la publication
1. **Test interne** (Tests → Test interne) : envoyer le `.aab`, ajouter ton adresse comme testeuse, puis installer l'appli depuis le lien du Play Store sur ton téléphone. C'est immédiat (pas de vérification de Google) : ça sert à vérifier que tout marche.
2. **Test fermé** (obligatoire pour un compte personnel récent) : au moins **12 testeurs**, inscrits et qui gardent l'appli **pendant 14 jours d'affilée**. Leurs adresses Gmail se mettent dans une liste de testeurs ; ils reçoivent un lien pour installer l'appli.
3. Après les 14 jours : **Demander l'accès à la production** (quelques questions sur le test), puis envoyer la version en **Production**. Google vérifie l'appli (de quelques heures à quelques jours).
4. Une fois publiée : dans **AdMob**, relier l'appli à sa fiche du Play Store (Applications → Paramètres de l'application → ajouter le lien du store), et publier le **message RGPD** (voir [monetisation.md](monetisation.md)) si ce n'est pas déjà fait.
