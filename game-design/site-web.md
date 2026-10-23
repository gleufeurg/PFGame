# Le site web (GitHub Pages)

Le jeu est en ligne sur **https://gleufeurg.github.io/PFGame/**.

## Ce qui est publié

Seulement les fichiers du jeu :

| Publié | Pas publié (reste dans le dépôt GitHub) |
| --- | --- |
| `index.html`, `langues/`, `polices/`, `confidentialite.html` (la page de confidentialité demandée par AdMob et la Play Console) | `CLAUDE.md` (les consignes pour Claude), `game-design/` (cette documentation), `README.md`, et tout le reste |

Le site montre la branche **`monetisation`** (c'était déjà le cas avant). C'est le fichier `.github/workflows/publier-site.yml` qui s'en occupe : à chaque push sur `monetisation` (donc à chaque fusion de `portfolio` dans `monetisation`), GitHub prépare un dossier avec seulement ces fichiers, puis le met en ligne. On le suit dans l'onglet **Actions** du dépôt (« Publier le site ») : une coche verte = le site est à jour, une croix rouge = la publication a échoué (le site garde alors son ancienne version).

**⚠️ Un nouveau fichier ou dossier dont le jeu a besoin** (images, sons...) doit être ajouté :
- dans la liste de `.github/workflows/publier-site.yml` (étape « Préparer le dossier du site ») pour le site ;
- dans `FICHIERS` de `scripts/copier-jeu.js` pour l'application (branche `monetisation`).

L'application mobile (branche `monetisation`, voir `game-design/mobile.md` sur cette branche) ne contenait déjà que le jeu.

## Réglage à faire une seule fois sur GitHub

1. Sur la page du dépôt : **Settings** → **Pages**.
2. Dans **Build and deployment** → **Source**, choisir **GitHub Actions** (au lieu de « Deploy from a branch »).
3. Onglet **Actions** → « Publier le site » → **Run workflow** (choisir la branche `monetisation`).

Si la publication échoue avec un message du genre « Branch "monetisation" is not allowed to deploy to github-pages » : **Settings** → **Environments** → **github-pages** → **Deployment branches and tags** → ajouter `monetisation`.

Tant que la source n'est pas passée sur « GitHub Actions », le site continue d'être publié comme avant (toute la branche `monetisation`, avec `CLAUDE.md` et `game-design/`).

## Vérifier

Après la publication, ces adresses doivent afficher une erreur 404 :
- https://gleufeurg.github.io/PFGame/CLAUDE.md
- https://gleufeurg.github.io/PFGame/game-design/README.md

Et le jeu et https://gleufeurg.github.io/PFGame/confidentialite.html doivent marcher.

**À savoir :** si le dépôt est public, ces fichiers restent visibles sur la page GitHub du dépôt (github.com/gleufeurg/PFGame). Ils ne sont simplement plus sur le site du jeu.
