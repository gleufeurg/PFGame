# Références de direction artistique

Images de référence pour les formes des skill trees, et les choix de style validés.

| Dieu | Forme | Image |
|---|---|---|
| Héphaïstos (ancien Vulcain) | flamme | `vulcain-flamme.png` |
| Poséidon | vagues | `poseidon-vagues.png` |
| Déméter | fleur à 8 pétales en tourbillon | `demeter-fleur.png` |
| Éole | souffles de vent qui finissent en spirale | `eole-vent.png` |
| Apollon (ancien Hélios) | soleil avec un anneau au centre et des rayons ondulés | `helios-soleil.png` |
| Artémis | arc et flèche (pas d'image) | |
| Athéna | couronne de laurier (deux branches en arc) | `athena-laurier.png` |

## Style des skill trees

- Les compétences sont des étoiles à 4 branches, **fixes (pas d'animation)**.
- Elles ont une bordure et un remplissage selon l'état :
  - verrouillée : grisée ;
  - disponible : bordure de la couleur du dieu ;
  - débloquée : remplie, avec un cœur blanc.
- Le nom est écrit sous l'étoile.
- Pas d'aura ni de flou lumineux.
- Les liens entre compétences ne doivent jamais se croiser. Le jeu le vérifie et affiche un avertissement dans la console (F12) si c'est le cas.
- Les tuiles hexagonales ont été essayées, puis abandonnées.

## Style général

- Inspiration : Outhold et The Tower.
- Des aplats nets, sans texture.
- Polices : **Nunito** (titres, chiffres, textes du jeu) et **Rubik** (texte courant), sous licence libre OFL. Les fichiers sont dans le dossier `polices/` du dépôt (pas sur Google Fonts) : le jeu marche hors ligne. Si on ajoute une police, il faut aussi la déclarer avec un `@font-face` en haut de `index.html`.
- Des thèmes de couleur, qui teintent aussi les boutons et le texte.
