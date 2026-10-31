# Problèmes connus

Ce fichier liste les problèmes du jeu **qui ne sont pas encore réglés**. Pour chacun :

- **Ce qu'on voit** : le problème, tel qu'un joueur (ou toi) le remarque ;
- **Pourquoi** : d'où il vient ;
- **Que faire** : comment le régler, et qui peut le faire.

Dès qu'un problème est réglé (ou n'existe plus), il est retiré de la liste.

## À faire avant de publier l'application

### Les pubs et les achats sont encore en mode test

- **Ce qu'on voit :** dans l'application, les pubs sont des pubs d'exemple de Google ; sur le site, c'est une fausse pub. Acheter le Pack Premium ou le Pack Soutien ne coûte rien (l'achat est simulé).
- **Pourquoi :** `ADS_TEST_MODE` et `PAYMENT_TEST_MODE` sont à `true` dans `index.html`, en attendant tes vrais identifiants.
- **Que faire (toi) :** créer tes blocs de pub dans AdMob et donner leurs ID (étapes dans [monetisation.md](monetisation.md)) ; pour les vrais paiements, l'étape 3 de [mobile.md](mobile.md) (achats du Play Store). Il reste aussi à vérifier sur ton Samsung que les pubs de test s'affichent bien.

### Les achats peuvent être obtenus gratuitement

- **Ce qu'on voit :** quelqu'un qui connaît un peu l'informatique peut avoir le Pack Premium sans payer, en tapant `localStorage.setItem("premium", "1")` dans la console du navigateur (F12).
- **Pourquoi :** le jeu retient les achats lui-même, dans le navigateur, sans vérifier auprès d'un magasin.
- **Que faire :** dans l'application, utiliser les achats du Play Store (c'est Google qui dit si l'achat est payé, par exemple avec RevenueCat). Sur le site, il faudrait un serveur qui vérifie les paiements.

### La fenêtre « RGPD » (consentement aux pubs) ne s'affiche pas encore

- **Ce qu'on voit :** à l'ouverture de l'application, aucune fenêtre ne demande au joueur s'il accepte les pubs personnalisées (obligatoire en Europe).
- **Pourquoi :** le code est prêt, mais la fenêtre se crée sur le site d'AdMob, et elle n'a pas encore été créée.
- **Que faire (toi) :** dans AdMob, menu « Confidentialité et messages » → « RGPD » : créer et publier le message (étapes dans [monetisation.md](monetisation.md)). La page de règles de confidentialité est déjà prête (`confidentialite.html`).

### Les traductions n'ont pas été relues

- **Ce qu'on voit :** rien de grave à première vue, mais des phrases peuvent sonner faux pour quelqu'un dont c'est la langue.
- **Pourquoi :** l'anglais, l'italien, l'allemand, le chinois et le japonais ont été traduits par une IA. Les noms mythologiques et les petites étiquettes des compétences (3 à 5 lettres) sont les plus à risque.
- **Que faire :** avant la sortie, faire relire au moins l'anglais (la langue proposée aux joueurs avec le français) par quelqu'un qui le parle bien, et vérifier que les textes longs tiennent sur un petit écran.

### L'application iPhone demande un Mac

- **Ce qu'on voit :** on ne peut pas fabriquer l'application iPhone depuis un PC Windows.
- **Pourquoi :** Apple n'autorise que son logiciel Xcode, qui ne marche que sur Mac.
- **Que faire :** emprunter ou louer un Mac (il en existe en ligne, comme MacinCloud), ou un service qui fabrique l'appli à distance (Codemagic, Ionic Appflow). Pas urgent : Android d'abord.

## Équilibrage du jeu

### Les derniers dieux sont trop chers pour être obtenus

- **Ce qu'on voit :** chaque dieu coûte 10 fois plus que le précédent (20, 200, 2 000, 20 000, 200 000 or…). Le joueur robot n'a que 4 dieux après 3 heures de jeu, et le 12ᵉ coûte 2 000 milliards d'or.
- **Pourquoi :** c'est le multiplicateur choisi (`SHOP_ITEMS.god.costGrowth` = 10). Les gains d'or ne montent pas aussi vite.
- **Que faire (choix de game design) :** si tu veux que les 12 dieux soient atteignables, baisser ce multiplicateur dans l'éditeur de réglages (Shop > Nouvelle divinité), puis relancer le robot : `node game-design/outils/joueur-robot.js 180`. Les mesures sont dans [rythme.md](rythme.md).

### Les pouvoirs des dieux ne sont pas encore équilibrés

- **Ce qu'on voit :** certains dieux peuvent être bien plus forts que d'autres. Par exemple, Arès gagne des dégâts sans limite, son cri de guerre devient presque permanent quand son arbre est rempli, et la foudre de Zeus peut tout raser quand l'écran est plein d'ennemis.
- **Pourquoi :** les chiffres (dégâts, fréquence, rayons) ont été choisis à l'estime et testés seulement par le robot, pas par de vrais joueurs.
- **Que faire :** jouer chaque dieu, puis changer les chiffres dans l'éditeur de réglages (catégories « Pouvoirs des dieux » et « Combos d'orbite »).

### Les valeurs des compétences ne sont pas dans l'éditeur de réglages

- **Ce qu'on voit :** l'éditeur de réglages ne permet pas de changer ce que donne chaque compétence des arbres (par exemple « +0.5 dégât par balle »), ni les réglages propres à chaque dieu.
- **Pourquoi :** ces valeurs sont écrites directement dans la description de chaque compétence (`SKILL_TREES_DATA`, dans `index.html`), et traduites dans les 6 langues.
- **Que faire :** pour l'instant, demander à Claude de changer une compétence. Plus tard, on pourrait mettre ces valeurs dans `reglages.js`, avec des descriptions qui se remplissent toutes seules (comme celles du shop et des combos).
- **De même :** 8 réglages ont encore un ⚠️ dans l'éditeur (l'heure de chaque super ennemi après Cerbère, et le bouclier de Poséidon) : le texte du jeu ne suit pas tout seul s'ils changent.

## À tester sur un vrai téléphone

### Le jeu peut ramer avec énormément d'ennemis

- **Ce qu'on voit :** sur un ordinateur de test sans carte graphique, avec 10 000 ennemis, le jeu tombe à environ 16 images par seconde.
- **Pourquoi :** chaque ennemi est calculé et dessiné à chaque image. Le jeu n'a pas encore été essayé sur un téléphone avec beaucoup d'ennemis (par exemple après un grand saut dans le temps).
- **Que faire (toi) :** jouer longtemps sur ton Samsung et dire si ça rame. Si oui : décocher « Graphismes nets » dans les paramètres ; et Claude peut limiter le nombre d'ennemis sur téléphone, ou baisser `MAX_ENEMY_SHADOWS`, `MAX_PARTICLES` et `MAX_BOLTS_PER_STEP`.

## Limites connues

### La sauvegarde reste sur l'appareil

- **Ce qu'on voit :** la progression est perdue si le joueur vide les données de son navigateur, joue en navigation privée, ou change de téléphone. Sur iPhone, Safari peut effacer les données d'un site pas ouvert depuis 7 jours.
- **Pourquoi :** la sauvegarde est gardée dans le navigateur (ou l'application), pas sur internet.
- **Déjà en place :** le bouton « Exporter ma sauvegarde » des paramètres donne un code à garder, à recoller avec « Importer ». Mais le joueur doit y penser.
- **Que faire (plus tard) :** une sauvegarde en ligne automatique, par exemple Google Play Games dans l'application Android.
