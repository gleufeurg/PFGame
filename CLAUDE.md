# Consignes pour Claude

- Le dossier `game-design/` contient la documentation de game design (voir `game-design/README.md`). À chaque changement dans le jeu, mets à jour les documents concernés dans le même commit :
  - skills, shop, combos, prix : relance `node game-design/outils/generer-docs.js` ;
  - ennemis, statistiques, formules (`questions/formules.md`, dès qu'un calcul change), interface, codes de triche, direction artistique : modifie le fichier à la main.
- Réponds en français, et explique simplement : la développeuse débute en JavaScript (elle vient de C# et d'Unity).
- Deux branches : `portfolio` (le jeu-portfolio, sans pub) et `monetisation` (sans la partie portfolio, avec pubs et Pack Premium, voir `game-design/monetisation.md`). Un changement de gameplay demandé « sur les 2 branches » se fait d'abord sur `portfolio`, puis on fusionne `portfolio` dans `monetisation` (`git merge portfolio`).
- Sur `monetisation`, l'application mobile (Capacitor, voir `game-design/mobile.md`) n'est qu'une copie de `index.html` : on code toujours dans `index.html`, jamais dans `www/` ni dans `android/app/src/main/assets/` (recopiés par `npm run sync`). Un changement d'interface doit marcher à la souris ET au doigt (`IS_TOUCH_DEVICE`), sur grand et petit écran, et toute nouvelle progression doit être ajoutée à la sauvegarde (`saveProgress` / `loadProgress`).
- Le jeu est traduit en 6 langues (voir `game-design/langues.md`) : tout nouveau texte affiché passe par `t("...")` et s'ajoute dans chaque fichier de `langues/` ; vérifie avec `node game-design/outils/verifier-traductions.js`. Le jeu démarre en anglais (`DEFAULT_LANGUAGE`) : les tests et `generer-docs.js` le passent en français avec `localStorage.setItem('language', 'fr')` avant de l'ouvrir.
- Les animations élaborées (effets de pouvoirs, décors...) se dessinent seulement en graphismes élevés (`isHighGraphics`, réglage « Graphismes » des paramètres), avec une version simple et légère sinon ; les règles du jeu restent les mêmes dans les deux modes.
- `game-design/problemes.md` liste les problèmes connus : ajoute ceux que tu repères, et retire ceux que tu corriges, dans le même commit.
