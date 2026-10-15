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

Les boutons qu'il débloque restent visibles avec un 💎 tant qu'il n'est pas acheté.

## Ce qui est en place, et ce qui manque

Le code est prêt, mais **aucune vraie pub ni aucun vrai paiement n'est branché** : il faut des comptes chez des services externes.

### Les pubs

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

`index.html`, parties `PUBLICITÉS` et `PACK PREMIUM` : `showInterstitialAd`, `showRewardedAd`, `revivePlayer`, `renderDeathChoices`, `renderPremiumBoxes`, `unlockPremium`.
