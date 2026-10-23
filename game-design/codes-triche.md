# Codes de triche

Pour tester le jeu plus vite. Tape les lettres au clavier, en partie ou dans un menu : un message confirme le code. Après une pause de plus d'1,5 s, on recommence un nouveau mot.

**Les codes ne marchent que sur ton ordinateur :** quand le jeu est ouvert depuis le fichier `index.html` (ou un serveur local, `localhost`). Sur le site en ligne (GitHub Pages) et dans l'application mobile, ils sont coupés, pour que les joueurs ne puissent pas tricher (`CHEATS_ENABLED`, fonction `areCheatsAllowed`). Pour les activer quand même sur le site : ouvrir la console du navigateur (F12), taper `localStorage.setItem("triche", "1")`, puis recharger la page (`localStorage.removeItem("triche")` pour les recouper).

| Code | Effet |
| --- | --- |
| nom d'un dieu, sans accent : `hephaistos`, `poseidon`, `demeter`, `eole`, `apollon`, `artemis`, `athena`, `zeus`, `ares`, `aphrodite`, `hermes`, `hestia` | ce dieu rejoint l'orbite et tout son skill tree est débloqué |
| `ragnarok` | **tout le jeu débloqué** : shop au maximum, tous les dieux avec leurs skill trees complets, tous les super ennemis vaincus (donc tous les paliers du menu de mort) |
| `pantheon` | tous les dieux en orbite, avec tous leurs skill trees complets |
| `olympe` | tous les dieux rejoignent l'orbite (skill trees vides) |
| `cresus` | tout le shop au maximum (donc aussi tous les dieux et toutes les options de temps) |
| `ploutos` | +1000 or et +1000 XP (c'était l'ancien code `zeus`) |
| `midas` | or et XP ×10 par ennemi (retaper pour couper) |
| `achille` | invincible (retaper pour couper) |
| `thanatos` | le joueur meurt tout de suite : game over et shop, sans recommencer la partie (on garde l'or et l'XP gagnés) |
| `harmonia` | tous les dieux passent en lien d'orbite « Les deux côtés » (Harmonie, déesse de l'harmonie) |

Ce ne sont pas des codes mais des raccourcis : la touche T passe le plus grand saut de temps débloqué, et les boutons orange « ⏩ » font la même chose.

Tous les codes sont dans `CHEAT_CODES` dans `index.html`.
