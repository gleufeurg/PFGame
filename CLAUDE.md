# Consignes pour Claude

- Le dossier `game-design/` contient la documentation de game design (voir `game-design/README.md`). À chaque changement dans le jeu, mets à jour les documents concernés dans le même commit :
  - skills, shop, combos, prix : relance `node game-design/outils/generer-docs.js` ;
  - ennemis, statistiques, interface, codes de triche, direction artistique : modifie le fichier à la main.
- Réponds en français, et explique simplement : la développeuse débute en JavaScript (elle vient de C# et d'Unity).
- Deux branches : `portfolio` (le jeu-portfolio, sans pub) et `monetisation` (sans la partie portfolio, avec pubs et Pack Premium, voir `game-design/monetisation.md`). Un changement de gameplay demandé « sur les 2 branches » se fait d'abord sur `portfolio`, puis on fusionne `portfolio` dans `monetisation` (`git merge portfolio`).
