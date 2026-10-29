# Problèmes connus

Les problèmes repérés pendant le développement qui ne sont **pas encore corrigés**, avec leur cause et comment les régler. Quand un problème est corrigé, on le retire de cette liste dans le même commit.

Chaque problème indique la ou les branches concernées : `portfolio`, `monetisation`, ou les deux.

## Affichage

### Sur téléphone, le jeu dézoome beaucoup (les deux branches)

- **Ce qu'on voit :** en portrait, l'écran est étroit (environ 390 px de large). Dès que la portée grandit, la caméra dézoome et les ennemis et planètes deviennent petits.
- **Pourquoi :** la caméra garde toute la portée visible dans la largeur de l'écran (`CAMERA_RANGE_SCREEN_RATIO`). C'est le comportement voulu, mais sur un écran étroit, il dézoome très vite.
- **Que faire (choix de game design) :** sur téléphone, accepter que la portée sorte un peu de l'écran sur les côtés (ratio plus grand), ou se baser sur la hauteur en portrait, ou permettre de zoomer à deux doigts dans le jeu.

### Le téléphone en paysage est à l'étroit (les deux branches)

- **Ce qu'on voit :** dans la version web en paysage, la fenêtre des skills ne montre qu'une partie de l'arbre et il faut faire défiler.
- **Pourquoi :** 390 px de hauteur, c'est très peu pour les onglets des dieux, le titre et l'arbre.
- **Que faire :** l'application Android est verrouillée en portrait, donc le problème ne touche que la version web. Si besoin : en paysage, cacher les onglets des dieux derrière un menu déroulant et mettre l'arbre à côté des liens d'orbite.

## Sauvegarde

### La sauvegarde n'est pas en ligne (les deux branches)

- **Ce qu'on voit :** la progression reste dans le navigateur (ou l'application) de l'appareil. Elle est perdue si le joueur vide ses données de navigation, joue en navigation privée, ou sur iPhone si Safari efface les données d'un site non visité depuis 7 jours. La partie en cours (ennemis, chrono) n'est jamais sauvegardée.
- **Déjà en place :** le bouton « Exporter ma sauvegarde » des paramètres donne un code à garder, à recoller avec « Importer » (voir [interface.md](interface.md)). Mais le joueur doit y penser lui-même.
- **Que faire :** une sauvegarde en ligne, automatique : Google Play Games (sauvegardes dans le cloud) dans l'application Android, ou un petit serveur avec un compte joueur pour le web.
## Monétisation (`monetisation`)

### Les achats peuvent être « piratés »

- **Pourquoi :** le Pack Premium et le Pack Soutien sont retenus dans `localStorage` (clés `premium` et `supporter`). N'importe qui peut écrire `localStorage.setItem("premium", "1")` dans la console (F12) et les avoir gratuitement.
- **Que faire :** dans l'application, utiliser les achats intégrés du Play Store / de l'App Store (par exemple avec RevenueCat ou un plugin Capacitor de paiement) : c'est le store qui dit si l'achat a été fait. Pour le web, il faut un serveur qui vérifie le paiement (voir [monetisation.md](monetisation.md)).

### Pubs et paiements encore en mode test

- **Pourquoi :** `ADS_TEST_MODE` et `PAYMENT_TEST_MODE` sont à `true`. Dans l'appli, les pubs AdMob sont branchées mais montrent les pubs d'exemple de Google ; sur le web, c'est une fausse pub. Les achats sont simulés partout.
- **Que faire :** pour les pubs, mettre les vrais ID AdMob (voir [monetisation.md](monetisation.md)) ; pour les achats, l'étape 3 de [mobile.md](mobile.md) (achats intégrés).
- **À vérifier sur le téléphone :** l'appli se compile et se lance sur un Samsung Galaxy A36. Le premier essai a montré qu'il manquait `capacitor.js` (corrigé) ; il reste à confirmer que les pubs de test s'affichent.

### Fenêtre de consentement (RGPD) seulement dans l'application

- **Déjà en place :** dans l'appli, le code demande le consentement à Google (UMP) avant les pubs AdMob, et un bouton des paramètres permet de changer d'avis.
- **À faire dans AdMob :** créer et publier le **message RGPD** (Confidentialité et messages → RGPD). Sans lui, aucune fenêtre ne s'affiche (vu sur le téléphone).
- **Déjà fait :** la page de **règles de confidentialité** (`confidentialite.html`, en français et en anglais), à donner dans AdMob et dans la Play Console.
- **Ce qui manque :** sur le site web, il n'y a pas de fenêtre de consentement (ce n'est pas grave tant que le site n'a que la fausse pub de test).
- **Que faire :** créer le message RGPD dans AdMob (étapes dans [monetisation.md](monetisation.md)) ; si un jour le site web affiche de vraies pubs, ajouter un outil de consentement certifié par Google.

### L'application n'a pas encore d'icône

- **Déjà fait :** le nom, « Geometry : Idle defense », et l'identifiant définitif, `fr.evangelinelefevre.geometryidledefense`.
- **Pourquoi c'est encore là :** l'icône et l'écran de démarrage sont ceux de Capacitor par défaut.
- **Que faire :** créer l'icône et l'écran de démarrage (l'outil `@capacitor/assets` les génère à partir d'une image).

## Jeu

### Les traductions n'ont pas été relues (les deux branches)

- **Pourquoi :** l'anglais, l'italien, l'allemand, le chinois et le japonais ont été traduits par IA. Les noms mythologiques et les petites étiquettes des compétences (3 à 5 lettres) sont les plus à risque.
- **Que faire :** avant la sortie, faire relire chaque fichier de `langues/` par quelqu'un dont c'est la langue (ou des joueurs testeurs), et vérifier que les textes longs (allemand surtout) tiennent sur petit écran.

### Les projets du portfolio restent en français (`portfolio`)

- **Pourquoi :** le titre et la description de chaque projet (dans les skill trees) sont écrits en HTML dans `SKILL_TREES_DATA` et ne passent pas par `t()`.
- **Que faire :** si on veut un portfolio multilingue, ajouter une version par langue de chaque projet (par exemple `project: { fr: {...}, en: {...} }`).

### Les codes de triche ne marchent pas sur téléphone (`monetisation`)

- **Pourquoi :** ils se tapent au clavier, et le jeu n'ouvre pas de clavier sur téléphone. En plus, ils sont volontairement coupés dans l'application et sur le site en ligne (`CHEATS_ENABLED`, voir [codes-triche.md](codes-triche.md)).
- **Que faire :** si on veut tester sur téléphone, ajouter un champ « code » caché dans les paramètres, affiché seulement quand `CHEATS_ENABLED` vaut `true`, et une façon de l'activer dans l'application de test (par exemple une constante à passer à `true` avant de lancer `npm run sync`).

### Les pouvoirs des dieux ne sont pas encore équilibrés (les deux branches)

- **Pourquoi :** les chiffres (dégâts, fréquence, rayons) ont été choisis à l'estime, et testés seulement en simulation. Arès gagne des dégâts pour toujours sans limite, et le cri de guerre presque permanent quand son arbre est rempli peut devenir trop fort ; la foudre de Zeus peut tout raser quand l'écran est plein.
- **Que faire :** jouer chaque dieu, puis régler les chiffres avec l'éditeur de réglages (catégories « Pouvoirs des dieux » et « Combos d'orbite » : `WAR_CRY_DAMAGE`, `CONDUCT_DURATION`...) et, pour chaque compétence, dans `SKILL_TREES_DATA` (`index.html`). Le rythme général (prix, apparition, vie des ennemis) a été rééquilibré avec le joueur robot (voir [rythme.md](rythme.md)), mais pas chaque pouvoir un par un.

### Anciennes sauvegardes : les prix ont changé (les deux branches)

- **Ce qu'on voit :** depuis le rééquilibrage, les compétences d'un dieu coûtent ×1,5 par dieu (×86 chez Hestia). Une compétence achetée avant le rééquilibrage, puis remboursée, rend son **nouveau** prix : un testeur peut donc gagner de l'XP en remboursant ses anciennes compétences.
- **Pourquoi :** le jeu ne retient pas ce que chaque compétence a coûté, seulement qu'elle est prise.
- **Que faire :** rien pour les joueurs (le jeu n'est pas encore sorti). Si besoin, effacer sa progression dans les paramètres pour repartir de zéro avec les nouveaux prix.

### Les projets du portfolio se découvrent lentement (`portfolio`)

- **Ce qu'on voit :** chaque projet est dans la fenêtre des skills d'un dieu, et la liste des dieux ne montre que les dieux achetés et le suivant. En 10 minutes de jeu, un visiteur (un recruteur) voit 3 projets ; il en faut 40 pour en voir 6, et des heures pour les 12.
- **Pourquoi :** c'est le rythme voulu pour le jeu (voir [rythme.md](rythme.md)), mais un recruteur n'a pas forcément le temps de jouer.
- **Que faire (choix à faire) :** sur `portfolio`, montrer tous les projets dans la liste des dieux (même ceux pas encore achetés, en aperçu), ou ajouter un bouton « Voir tous les projets ».

### Certains textes du jeu citent des réglages (les deux branches)

- **Ce qu'on voit :** dans l'éditeur de réglages, quelques nombres ont un ⚠️ : ils sont aussi écrits dans un texte du jeu. Si on les change, le texte ne suit pas. Exemples : « les ennemis touchés brûlent pendant 3 s » (combo Feu de forêt, `COMBO_BURN_DURATION`), les bonus du lien « Opposé » (`OPPOSITE_BONUSES`), « Toutes les 5 minutes » dans le tutoriel (l'heure des super ennemis), « x2 » et « 10 secondes » dans le tutoriel (`GAME_SPEED_OPTIONS`, `TIME_SKIP_OPTIONS`).
- **Pourquoi :** ces textes sont écrits à la main, et traduits dans les 6 langues. Les descriptions du shop, elles, se mettent à jour toutes seules (« +{value} PV max »).
- **De même :** la valeur de **chaque compétence** des skill trees n'est pas dans l'éditeur : elle est écrite dans sa description (« +0.5 dégât par balle »), dans `SKILL_TREES_DATA`. On la change à la main dans `index.html`, avec sa description et ses traductions.
- **Que faire :** après avoir changé un réglage ⚠️, changer aussi le texte dans `index.html` et dans `langues/` (ou demander à Claude). Plus tard, ces textes pourraient s'écrire avec `{value}`, comme ceux du shop.

### Performances avec énormément d'ennemis (les deux branches)

- **Ce qu'on sait :** avec 10 000 ennemis, une image prend environ 60 ms sur un ordinateur de test sans carte graphique (environ 16 images par seconde). Sur un vrai ordinateur, c'est bien plus rapide, mais **le jeu n'a pas encore été testé sur un vrai téléphone**.
- **Que faire :** tester sur un téléphone d'entrée de gamme. Si ça rame : limiter le nombre d'ennemis vivants sur téléphone (en regroupant les ennemis en trop en un ennemi plus fort), baisser encore `MAX_ENEMY_SHADOWS` et `MAX_PARTICLES`.
- **Avec les pouvoirs :** la foudre en chaîne de Zeus est la plus coûteuse. En simulation avec 400 ennemis serrés, un pas de jeu prend au pire 5 ms sur l'ordinateur de test. Si ça rame sur téléphone, baisser `MAX_BOLTS_PER_STEP` ou le nombre d'éclairs dessinés (200 au plus, dans `addLightningArc`).

## Dépôt GitHub et outils

### Le dépôt est plus lourd que nécessaire (`portfolio`)

- **Pourquoi :** un commit de `portfolio` (« Portée des dieux au survol… ») a ajouté par erreur `node_modules/`, `www/` et des fichiers Android. Ils ont été retirés au commit suivant, mais restent dans l'historique : le premier téléchargement du dépôt (clone) est plus long.
- **Que faire :** rien d'urgent. Pour vraiment les effacer de l'historique, il faudrait réécrire l'historique de `portfolio` (outil `git filter-repo`) puis forcer l'envoi, ce qui oblige à re-télécharger le dépôt partout.

### Avertissement de sécurité de npm (`monetisation`)

- **Ce qu'on voit :** `npm install` signale une faille « moderate » dans `uuid`.
- **Pourquoi :** elle est dans un outil utilisé par `@capacitor/cli` pour les projets iPhone. Cet outil sert seulement sur l'ordinateur, pendant la fabrication : il n'est pas dans l'application.
- **Que faire :** ne **pas** lancer `npm audit fix --force` (il installerait une version plus ancienne de Capacitor). Attendre une mise à jour de Capacitor, puis changer les versions dans `package.json`.

### L'iPhone demande un Mac (`monetisation`)

- **Pourquoi :** Apple n'autorise la fabrication d'applications iPhone qu'avec Xcode, qui ne marche que sur Mac.
- **Que faire :** emprunter ou louer un Mac (il existe des Mac en ligne, comme MacinCloud), ou utiliser un service qui fabrique l'appli à distance (Ionic Appflow, Codemagic).
