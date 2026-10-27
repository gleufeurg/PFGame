# Faire tester le jeu

> **La question :** « on va faire tester le jeu, dis les étapes »

Il y a deux façons de faire tester le jeu, et on peut faire les deux en même temps :

| | Test rapide (site web) | Test fermé (Play Store) |
| --- | --- | --- |
| Pour qui | tout le monde (ordinateur, Android, iPhone) | testeurs avec un téléphone Android et un compte Google |
| Ce qu'on teste | le gameplay, l'équilibrage, les bugs | la vraie application : installation, pubs, tactile, sauvegarde |
| Obligatoire ? | non | **oui pour publier** : un compte personnel récent doit faire tester l'appli par **au moins 12 testeurs pendant 14 jours d'affilée** |

## 1. Le test rapide : le site web

1. Envoyer le lien **https://gleufeurg.github.io/PFGame/** aux testeurs, avec les consignes de la partie 4.
2. Le site est mis à jour tout seul à chaque fusion dans `monetisation` : les testeurs ont toujours la dernière version (leur dire de recharger la page).

## 2. Le test fermé sur le Play Store

### Avant de commencer
- **Compte Google Play Console** : https://play.google.com/console (25 $ une fois), avec la vérification d'identité (pièce d'identité, parfois quelques jours d'attente).
- **Une icône** pour l'appli (voir [problemes.md](../problemes.md) : c'est encore celle de Capacitor). Pour la fiche du store : icône 512 × 512 px, image de présentation 1024 × 500 px, au moins 2 captures d'écran du téléphone.
- **Pubs et Pack Premium** : on peut garder le mode test (`ADS_TEST_MODE`, `PAYMENT_TEST_MODE`) pendant le test fermé. Les pubs d'exemple de Google sont même conseillées tant que l'appli n'est pas publiée.

### Fabriquer le fichier de l'appli (AAB)
1. GitHub Desktop : branche `monetisation`, **Pull**.
2. Ouvrir le projet `android` dans Android Studio, attendre la fin du « Gradle sync ».
3. **Build → Generate Signed App Bundle or APK** → **Android App Bundle** → **Create new...** (la 1re fois) pour créer la **clé de signature** (fichier `.jks`).
   - ⚠️ Ranger ce fichier et ses mots de passe **hors du dossier du jeu** (jamais dans GitHub), et en faire une copie de sauvegarde (clé USB, cloud perso). Sans elle, plus de mise à jour possible de l'appli (sauf demande à Google).
4. Choisir **release** → **Create**. Le fichier `app-release.aab` est créé dans `android/app/release/`.
5. **Chaque nouvelle version envoyée** doit avoir un `versionCode` plus grand dans `android/app/build.gradle` (1, puis 2, 3...) : demander à Claude de l'augmenter.

### Créer l'appli dans la Play Console
1. **Créer une application** : nom « Geometry : Idle defense », langue par défaut, **Jeu**, **Gratuit**.
2. Remplir le **tableau de bord** (« Configurer votre application ») :
   - **Règles de confidentialité** : `https://gleufeurg.github.io/PFGame/confidentialite.html` ;
   - **Annonces** : oui, l'appli contient des annonces ;
   - **Accès à l'application** : tout est accessible sans compte ;
   - **Classification du contenu** : le questionnaire (jeu, violence légère et abstraite : des formes géométriques) ;
   - **Public cible** : **13 ans et plus** (en dessous, les règles pour enfants s'appliquent aux pubs AdMob) ;
   - **Sécurité des données** : l'appli ne collecte rien elle-même ; AdMob collecte l'identifiant publicitaire et des données de l'appareil (« Identifiants de l'appareil », « Diagnostics », partagés pour la publicité) ;
   - **Fiche du store** : description courte et longue, icône, image de présentation, captures.

### Lancer le test fermé
1. **Tester → Tests fermés** → **Créer un canal** (ou utiliser « Alpha »).
2. **Testeurs** : créer une **liste d'adresses e-mail** (les adresses Gmail des testeurs). Prévoir **15 à 20 testeurs** : certains oublient de s'inscrire ou se désinscrivent, et il en faut 12 jusqu'au bout.
3. **Pays** : choisir les pays des testeurs (au moins la France).
4. **Créer une version** → envoyer `app-release.aab` → notes de version (« Première version de test ») → **Envoyer pour examen**. Google vérifie l'appli (de quelques heures à quelques jours).
5. Une fois validée, copier le **lien d'inscription** (« Rejoindre sur le Web ») et l'envoyer aux testeurs.

### Ce que les testeurs doivent faire
1. Ouvrir le lien **avec le compte Google donné** (celui de la liste), cliquer sur **Devenir testeur**.
2. Installer l'appli depuis le Play Store (le lien est sur la même page).
3. **Garder l'appli installée et rester inscrit 14 jours**, en l'ouvrant de temps en temps.

### Après les 14 jours
Dans le tableau de bord, **Demander l'accès à la production** : un questionnaire sur le test (combien de testeurs, ce qu'ils ont trouvé, ce qui a été corrigé). D'où l'intérêt de noter les retours et les corrections pendant le test.

## 3. Pendant le test : mettre à jour l'appli

Après des corrections : **Pull**, augmenter `versionCode`, refaire **Generate Signed App Bundle** (avec la même clé), puis dans **Tests fermés → Créer une version**, envoyer le nouveau `.aab`. Les testeurs reçoivent la mise à jour par le Play Store. Les 14 jours ne repartent pas de zéro.

## 4. Les consignes à donner aux testeurs

À copier dans le message :

> Merci de tester **Geometry : Idle defense** ! Joue comme tu en as envie, plusieurs fois sur plusieurs jours. Ce qui m'aide le plus :
> - les **bugs** : ce qui s'est passé, ce que tu faisais juste avant, et ton téléphone (ou navigateur) ; une capture d'écran si possible ;
> - ce qui est **pas clair** : un menu, un texte, une compétence que tu n'as pas comprise ;
> - le **rythme** : à quel moment c'est trop facile, trop dur, trop lent ou ennuyeux ; jusqu'où tu es allé (le temps de ta meilleure partie, les super ennemis vaincus) ;
> - ce que tu as **aimé** ou **pas aimé**.
>
> Envoie tes retours à : evangelinelefevre002@gmail.com

Les retours peuvent aussi arriver dans la Play Console (**Notes et avis → Commentaires des testeurs**).

## 5. Ranger les retours

Noter chaque retour (date, testeur, téléphone, problème), puis :
- les bugs confirmés vont dans [problemes.md](../problemes.md) ;
- les demandes de changement se donnent à Claude, une par une ou par petits groupes.
