# Codes de triche

Pour tester le jeu plus vite. Tape les lettres au clavier, en partie ou dans un menu : un message confirme le code. Après une pause de plus d'1,5 s, on recommence un nouveau mot.

**Les codes ne marchent que sur ton ordinateur :** quand le jeu est ouvert depuis le fichier `index.html` (ou un serveur local, `localhost`). Sur le site en ligne (GitHub Pages) et dans l'application mobile, ils sont coupés, pour que les joueurs ne puissent pas tricher (`CHEATS_ENABLED`, fonction `areCheatsAllowed`). Pour les activer quand même sur le site : ouvrir la console du navigateur (F12), taper `localStorage.setItem("triche", "1")`, puis recharger la page (`localStorage.removeItem("triche")` pour les recouper).

| Code | Effet |
| --- | --- |
| nom d'un dieu, sans accent : `hephaistos`, `poseidon`, `demeter`, `eole`, `apollon`, `artemis`, `athena`, `zeus`, `ares`, `aphrodite`, `hermes`, `hestia` | ce dieu rejoint l'orbite et tout son skill tree est débloqué, avec sa 1re voie seulement (les voies sont exclusives : rembourser pour essayer les autres) |
| `ragnarok` | **tout le jeu débloqué** : shop au maximum (les améliorations infinies au niveau 20), tous les dieux avec leurs skill trees complets (1re voie de chaque arbre), tous les super ennemis vaincus (donc tous les paliers du menu de mort), et sur `monetisation` le Pack Premium et le Pack Soutien |
| `pantheon` | tous les dieux en orbite, avec tous leurs skill trees complets (1re voie de chaque arbre) |
| `olympe` | tous les dieux rejoignent l'orbite (skill trees vides) |
| `cresus` | tout le shop au maximum (donc aussi tous les dieux et toutes les options de temps) ; les améliorations infinies n'ont pas de maximum : elles passent au niveau 20 (`CHEAT_INFINITE_LEVEL`) |
| `ploutos` | +1000 or et +1000 XP (c'était l'ancien code `zeus`) |
| `midas` | or et XP ×10 par ennemi (retaper pour couper) |
| `achille` | invincible (retaper pour couper) |
| `thanatos` | le joueur meurt tout de suite : game over et shop, sans recommencer la partie (on garde l'or et l'XP gagnés) |
| `harmonia` | tous les dieux passent en lien d'orbite « Les deux côtés » (Harmonie, déesse de l'harmonie) |
| `penia` | retire le Pack Premium, pour retester les pubs (Penia, déesse de la pauvreté ; branche `monetisation` seulement) |

Ce ne sont pas des codes mais des raccourcis : la touche T passe le plus grand saut de temps débloqué, et les boutons orange « ⏩ » font la même chose.

Tous les codes sont dans `CHEAT_CODES` dans `index.html`.

## Tester des réglages (mode test)

L'éditeur de réglages (`game-design/outils/editeur-reglages.html`, voir [README.md](README.md)) a un bouton **« ▶ Tester dans le jeu »** : il ouvre le jeu avec les valeurs changées, écrites dans l'adresse (`index.html#test={"NOM": valeur, ...}`, lues par `readTestSettings`). Comme les codes, ce mode ne marche que sur ton ordinateur (fichier ou `localhost`), jamais sur le site. Pendant un test, **rien n'est sauvegardé** (ta progression ne change pas) et un bandeau « 🧪 Réglages de test » le rappelle en bas à gauche. Pour revenir au jeu normal : recharger `index.html` sans le `#test=...`.
