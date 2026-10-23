# Game design

Ce dossier rassemble tout ce qui sert à concevoir le jeu. Il n'est pas chargé par le jeu : il n'existe que dans le dépôt GitHub.

**Règle :** à chaque changement dans le jeu, les documents concernés sont mis à jour dans le même commit.

| Document | Contenu | Comment il est tenu à jour |
| --- | --- | --- |
| [prix.md](prix.md) | prix du shop (or) et coût des skills (XP), dieu par dieu | généré par `outils/generer-docs.js` |
| [skills/](skills/README.md) | les 12 skill trees, les 66 combos et les 220 fusions d'orbite | généré par `outils/generer-docs.js` |
| [questions/](questions/README.md) | les réponses aux questions posées sur le jeu : toutes les formules ([formules.md](questions/formules.md)), les couleurs autour des ennemis… | écrit à la main |
| [statistiques.md](statistiques.md) | qui profite de quoi (joueur ou planète), stats de départ, balles en mur, lien « Opposé » | écrit à la main |
| [ennemis.md](ennemis.md) | ennemis normaux, vie qui monte, apparition, mouvements spéciaux, super ennemis, effets subis, performances | écrit à la main |
| [interface.md](interface.md) | touches, commandes au doigt, petits écrans, sauvegarde, améliorations du temps, fenêtre des skills (onglets, remboursement), caméra | écrit à la main |
| [site-web.md](site-web.md) | le site du jeu (GitHub Pages) : seuls les fichiers du jeu sont publiés, pas `CLAUDE.md` ni `game-design/` ; le réglage à faire une fois sur GitHub | écrit à la main |
| [langues.md](langues.md) | les 6 langues du jeu (français et anglais proposés, les 4 autres cachées) : comment ça marche, ajouter un texte ou une langue, vérifier les traductions | écrit à la main |
| [codes-triche.md](codes-triche.md) | les codes pour tester plus vite | écrit à la main |
| [problemes.md](problemes.md) | les problèmes connus pas encore corrigés : pourquoi, et comment les régler | écrit à la main |
| [direction-artistique/](direction-artistique/README.md) | les choix de style et les images de référence des formes | écrit à la main |
| [mythologie/](mythologie/README.md) | l'arbre généalogique des dieux grecs | page autonome |

## Régénérer les documents automatiques

Il faut [Node.js](https://nodejs.org/) et Playwright (`npm install playwright`), puis, depuis la racine du dépôt :

```
node game-design/outils/generer-docs.js
```

Le script ouvre `index.html` dans un navigateur invisible, lit les données du jeu (skill trees, shop, combos) et réécrit `prix.md` et `skills/`.
