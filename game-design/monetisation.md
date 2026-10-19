# Monétisation (branche `monetisation`)

Cette branche est la version « jeu » : sans la partie portfolio (les présentations de projets), avec des pubs et un achat. La branche `portfolio` reste sans pub.

## Ce que voit le joueur

| Moment | Pub | Détail |
| --- | --- | --- |
| Après chaque mort | pub « entre deux écrans » | elle s'affiche avant le shop ; on ne peut pas la fermer avant la fin |
| Bouton « 💖 Ressusciter (pub) » | pub récompensée | 1 fois par partie : toute la vie revient, les ennemis sont repoussés au bord de l'écran, la partie continue |
| Bouton « 💰 Doubler les récompenses de ce round (pub) » | pub récompensée | 1 fois par mort : on regagne l'or et l'XP gagnés depuis le début du round (la partie, ou la dernière résurrection) |

Une pub récompensée fermée avant la fin ne donne rien.

## Le Pack Premium (2,99 €)

Un achat unique, proposé sous le shop et dans les paramètres :
- plus aucune pub (la résurrection et le doublement se font sans pub) ;
- vitesses du jeu x8 et x10 ;
- sauts dans le temps de +500 s et +999 s.

Les boutons qu'il débloque restent visibles avec un 💎 tant qu'il n'est pas acheté. Le code de triche `penia` le retire, pour retester les pubs.

## Le Pack Soutien (4,99 €)

Un achat qui sert seulement à soutenir la créatrice, proposé sous le Pack Premium (shop et paramètres). Il ne donne aucun avantage de jeu :
- le thème exclusif **« ✨ Olympe doré »** (voir [direction-artistique](direction-artistique/README.md)) ; tant qu'il n'est pas acheté, ce thème apparaît grisé avec un 🔒 dans la liste des thèmes, pour donner envie ;
- un merci personnalisé à la fin des crédits.

Le prix se change dans `SUPPORT_PRICE`. Comme le Pack Premium, il est retenu par le navigateur (clé `supporter`), et « Effacer ma progression » ne l'efface pas.

## Ce qui est en place, et ce qui manque

Le code est prêt, mais **aucune vraie pub ni aucun vrai paiement n'est branché** : il faut des comptes chez des services externes.

### Les pubs dans l'application mobile (AdMob)

- **En place :** le plugin `@capacitor-community/admob` (partie `ADMOB` de `index.html`). Dans l'appli, les 3 pubs (après la mort, ressusciter, doubler) sont des pubs AdMob. Une pub qui ne peut pas se charger (pas de réseau, aucune pub disponible) ne bloque jamais le jeu : après une mort, on va directement au shop ; pour une pub récompensée, un message demande de réessayer.
- **Consentement RGPD :** au premier lancement en Europe, la fenêtre de consentement de Google s'affiche (`requestConsentInfo`, `showConsentForm`). Le bouton « Mes choix de confidentialité (pubs) » des paramètres permet de changer d'avis : il n'apparaît que dans l'appli, quand Google le demande.
- **iPhone :** la question d'Apple « Autoriser le suivi ? » est posée après le consentement.
- **Pendant une pub :** la musique du jeu se coupe, et reprend après.
- **Aujourd'hui (`ADS_TEST_MODE = true`) :** l'appli montre les pubs d'exemple officielles de Google, sans risque.
- **Pour passer aux vraies pubs :**
  1. Dans AdMob : créer l'appli Android, puis 3 blocs d'annonces : un **Interstitiel** (après la mort) et deux **Avec récompense** (un pour ressusciter, un pour doubler).
  2. Dans `index.html`, partie `ADMOB` : recopier les 3 ID de blocs (avec un `/`) dans `ADMOB_AD_IDS.real.android`.
  3. Dans `android/app/src/main/AndroidManifest.xml` : remplacer l'ID d'application de test par le tien (avec un `~`), dans la ligne `com.google.android.gms.ads.APPLICATION_ID`.
  4. Passer `ADS_TEST_MODE` à `false`, puis `npm run sync`.
  5. ⚠️ Ne jamais cliquer sur ses propres vraies pubs : Google peut fermer le compte. Pour tester une version avec les vrais ID, ajouter son téléphone comme « appareil de test » dans AdMob (Paramètres → Appareils de test).
  6. Plus tard, AdMob demandera un fichier `app-ads.txt` sur le site indiqué dans la fiche du Play Store.

**Les ID AdMob du jeu (Android)**

| Quoi | ID | Où il est dans le code |
| --- | --- | --- |
| Application | `ca-app-pub-4961484052300810~2811879981` | `android/app/src/main/AndroidManifest.xml` |
| Bloc Interstitiel (pub après la mort) | `ca-app-pub-4961484052300810/2223802607` | `ADMOB_AD_IDS.real.android.interstitial` dans `index.html` |
| Bloc Avec récompense « ressusciter » | pas encore créé | `ADMOB_AD_IDS.real.android.rewardedRevive` |
| Bloc Avec récompense « doubler les récompenses » | pas encore créé | `ADMOB_AD_IDS.real.android.rewardedDouble` |

Ressusciter et doubler sont deux choix séparés : chacun lance sa propre pub. Un joueur qui veut les deux regarde 2 pubs.

Ces ID ne sont pas secrets : ils sont lisibles dans toute appli publiée.

### Les pubs sur le site web

- **Aujourd'hui :** une fausse pub de 5 s (`ADS_TEST_MODE = true`), pour tester tout le parcours.
- **Le code sait déjà utiliser** l'API « H5 Games Ads » de Google (la fonction `adBreak`), faite pour les jeux web.
- **Pour l'activer :**
  1. Avoir un compte Google AdSense et faire valider le site du jeu (il doit être en ligne, sur un nom de domaine).
  2. Ajouter dans la page le script AdSense des jeux, avec ton identifiant d'éditeur.
  3. Passer `ADS_TEST_MODE` à `false`.
- **Autre solution :** publier le jeu sur un portail de jeux (CrazyGames, Poki, GameDistribution). Ils fournissent leur propre outil de pub et partagent les revenus. Il faudrait alors adapter `showInterstitialAd` et `showRewardedAd` à leur outil.
- **Obligatoire en Europe :** une fenêtre de consentement aux cookies (RGPD) avant d'afficher des pubs personnalisées. Google impose un outil de consentement certifié.

### Les paiements

- **Aujourd'hui :** l'achat est simulé (`PAYMENT_TEST_MODE = true`), et retenu par le navigateur (`localStorage`).
- **Le problème :** sans serveur, n'importe qui peut s'offrir le Pack Premium en modifiant ce `localStorage` avec les outils du navigateur.
- **Solutions possibles, de la plus simple à la plus solide :**
  1. **itch.io** : on vend le jeu (ou une version premium) directement sur itch.io, qui gère le paiement.
  2. **Stripe** (lien de paiement) + un petit serveur qui vérifie le paiement et renvoie un code d'activation à taper dans le jeu.
  3. **Sur téléphone** : les achats intégrés de Google Play ou de l'App Store, si le jeu devient une application.
- **Il faut aussi :** un statut d'auto-entrepreneur pour déclarer les revenus, des conditions générales de vente, et le prix affiché TTC.

## Où regarder dans le code

`index.html`, parties `PUBLICITÉS` et `PACK PREMIUM` : `showInterstitialAd`, `showRewardedAd`, `revivePlayer`, `renderDeathChoices`, `PACKS` (les deux packs), `renderPremiumBoxes`, `openPurchase`, `unlockPremium`, `removePremium`, `unlockSupport`.
