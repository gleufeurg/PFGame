# Game design

Ce dossier rassemble tout ce qui sert à concevoir le jeu. Il n'est pas chargé par le jeu : il n'existe que dans le dépôt GitHub.

**Règle :** à chaque changement dans le jeu, les documents concernés sont mis à jour dans le même commit.

| Document | Contenu | Comment il est tenu à jour |
| --- | --- | --- |
| [reglages.md](reglages.md) | **toutes les statistiques du jeu** (vie, vitesse, taille, prix... 299 réglages) rangées par catégories, avec leur valeur actuelle ; elles se changent avec l'éditeur de réglages | généré par `outils/generer-docs.js` (à partir de `reglages.js`) |
| [prix.md](prix.md) | prix du shop (or) et coût des skills (XP), dieu par dieu | généré par `outils/generer-docs.js` |
| [rythme.md](rythme.md) | le rythme de progression (quand on obtient chaque dieu), mesuré avec le joueur robot, avant et après le rééquilibrage | écrit à la main (chiffres de `outils/joueur-robot.js`) |
| [skills/](skills/README.md) | les 12 skill trees et leurs voies (choix exclusifs), les 66 combos et les 220 fusions d'orbite | généré par `outils/generer-docs.js` |
| [questions/](questions/README.md) | les réponses aux questions posées sur le jeu : toutes les formules ([formules.md](questions/formules.md)), les couleurs autour des ennemis… | écrit à la main |
| [statistiques.md](statistiques.md) | qui profite de quoi (joueur ou planète), stats de départ, balles en mur, lien « Opposé » | écrit à la main |
| [ennemis.md](ennemis.md) | ennemis normaux, vie qui monte, apparition, mouvements spéciaux, super ennemis, effets subis, performances | écrit à la main |
| [interface.md](interface.md) | touches, commandes au doigt, petits écrans, sauvegarde, le tutoriel (ses bulles et quand elles arrivent), améliorations du temps, fenêtre des skills (onglets, remboursement), caméra | écrit à la main |
| [site-web.md](site-web.md) | le site du jeu (GitHub Pages) : seuls les fichiers du jeu sont publiés, pas `CLAUDE.md` ni `game-design/` ; le réglage à faire une fois sur GitHub | écrit à la main |
| [langues.md](langues.md) | les 6 langues du jeu (français et anglais proposés, les 4 autres cachées) : comment ça marche, ajouter un texte ou une langue, vérifier les traductions | écrit à la main |
| [codes-triche.md](codes-triche.md) | les codes pour tester plus vite | écrit à la main |
| [problemes.md](problemes.md) | les problèmes connus pas encore corrigés : pourquoi, et comment les régler | écrit à la main |
| [direction-artistique/](direction-artistique/README.md) | les choix de style et les images de référence des formes | écrit à la main |
| [mythologie/](mythologie/README.md) | l'arbre généalogique des dieux grecs | page autonome |

## Modifier les statistiques : l'éditeur de réglages

Toutes les statistiques du jeu (la vie et la vitesse des ennemis, leur taille, l'apparition, les super ennemis, le shop, le prix des compétences, les pouvoirs des dieux, les combos...) sont dans **un seul fichier** : `reglages.js`, à la racine du dépôt, rangées par catégories et sous-catégories. Le jeu les lit au démarrage (`reglage("NOM")` dans `index.html`).

**Pour les changer :** double-clic sur `game-design/outils/editeur-reglages.html` (il s'ouvre dans le navigateur, sans internet).

1. Choisis une catégorie à gauche, ou cherche un mot (ex : « vitesse », « Cerbère », « prix »). Change les valeurs : elles deviennent orange.
2. **« ▶ Tester dans le jeu »** ouvre le jeu avec ces valeurs, sans rien sauvegarder (un bandeau 🧪 le rappelle).
3. **« 💾 Enregistrer »** réécrit `reglages.js` : choisis celui à la racine du dossier du jeu. (Si le navigateur ne sait pas enregistrer directement, le fichier est téléchargé : mets-le à la place de l'ancien.)
4. Dans GitHub Desktop : Commit, puis Push. Puis relance `node game-design/outils/generer-docs.js` (ou demande à Claude) pour mettre à jour les documents.

On peut aussi changer une `valeur` directement dans `reglages.js`. Les pourcentages y sont écrits en fraction (10 % = 0.1). Les valeurs de chaque compétence des skill trees, elles, restent dans `index.html` (`SKILL_TREES_DATA`), à côté de leur description qui les cite. La liste complète des réglages et de leurs valeurs : [reglages.md](reglages.md).

## Régénérer les documents automatiques

Il faut [Node.js](https://nodejs.org/) et Playwright (`npm install playwright`), puis, depuis la racine du dépôt :

```
node game-design/outils/generer-docs.js
```

Le script ouvre `index.html` dans un navigateur invisible, lit les données du jeu (skill trees, shop, combos, réglages) et réécrit `prix.md`, `skills/` et `reglages.md`.

## Mesurer le rythme du jeu : le joueur robot

```
node game-design/outils/joueur-robot.js 120
```

Un robot joue des parties à la suite pendant 120 minutes « réelles » (le nombre est au choix), achète dans le shop et les skill trees, et affiche une ligne par partie puis le moment où il a obtenu chaque dieu. À relancer après un changement de prix, de vie des ennemis ou d'apparition, pour voir si le jeu va trop vite ou trop lentement (voir [rythme.md](rythme.md)).
