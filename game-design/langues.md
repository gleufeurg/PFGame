# Les langues du jeu

Le jeu existe en 6 langues : français (la langue d'origine), anglais, italien, allemand, chinois (simplifié) et japonais.

## Quelle langue au démarrage ?

1. Celle choisie par le joueur dans les **Paramètres** (liste « Langue »), retenue par le navigateur (clé `language` du `localStorage`).
2. Sinon, l'**anglais**, la langue par défaut (`DEFAULT_LANGUAGE`), même si le téléphone est réglé dans une autre langue.

Changer de langue sauvegarde la partie puis recharge la page.

## Comment ça marche dans le code

Le jeu est écrit en français. Chaque texte affiché passe par la fonction `t()` :

```js
t("Pas assez d'XP")                                   // -> "Not enough XP" en anglais
t("⚠️ {name} arrive !", { name: boss.name })          // -> "⚠️ Cerberus is coming!"
```

- `t()` cherche le texte français dans le dictionnaire de la langue choisie. S'il n'y est pas, le texte reste en français (le jeu ne plante jamais).
- Les morceaux qui changent (un nom, un nombre) s'écrivent `{entre accolades}` : chaque langue peut les placer où elle veut dans la phrase.
- Les dictionnaires sont dans le dossier `langues/` : un fichier par langue (`en.js`, `it.js`, `de.js`, `zh.js`, `ja.js`). Chaque ligne est `"texte français": "traduction"`.
- Les textes écrits dans la page HTML (titres, boutons, paramètres) sont traduits au démarrage par `translatePage()`.
- Les tableaux de données (skill trees, shop, combos, fusions, super ennemis, thèmes...) sont traduits une fois au démarrage.

### Les identifiants ne sont jamais traduits

La sauvegarde et les codes de triche utilisent le **nom français** de chaque dieu et de chaque amélioration du shop (`tree.id`, `item.id`, `planet.id`). Le nom affiché (`name`) est traduit. Une sauvegarde faite en français marche donc dans toutes les langues, et les codes de triche restent les mêmes (`hephaistos`, `ploutos`...).

## Ajouter ou changer un texte

1. Dans `index.html`, écrire le texte en français dans `t("...")` (ou dans un tableau de données déjà traduit au démarrage).
2. Ajouter la ligne `"le texte": "sa traduction"` dans **chacun** des 5 fichiers de `langues/`.
3. Vérifier qu'il ne manque rien :

```
node game-design/outils/verifier-traductions.js
```

Le script fait le tour des menus du jeu et liste, pour chaque langue, les textes sans traduction et les `{mots}` oubliés.

⚠️ Si on modifie un texte français, sa clé change : il faut aussi la changer dans les 5 fichiers (sinon ce texte s'affiche en français).

## Ajouter une langue

1. Créer `langues/xx.js` (copier `en.js` et traduire les valeurs), `xx` = le code de la langue (`es` pour l'espagnol...).
2. Dans `index.html` : ajouter `<script src="langues/xx.js"></script>` à côté des autres, et la langue dans `LANGUAGES` (écrite dans sa propre langue : `es: "Español"`).

## À savoir

- Les **textes des projets du portfolio** (le titre et la description de chaque projet, dans les skill trees) restent en français.
- Les **prix** des packs (`2,99 €`) ne sont pas traduits : sur les stores, c'est le Play Store / l'App Store qui affichera le prix dans la monnaie du joueur.
- Le chinois et le japonais utilisent la police du téléphone (Nunito et Rubik n'ont pas ces caractères).
- Les traductions ont été faites par IA : une relecture par quelqu'un dont c'est la langue est conseillée avant la sortie.
