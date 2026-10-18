//Copie le jeu (index.html) dans le dossier www/, celui que Capacitor met dans l'application mobile.
//Lancé par "npm run build" (et donc aussi par "npm run sync").
//Si un jour le jeu utilise d'autres fichiers ou dossiers (images, sons...), ajoute-les à la liste FICHIERS.
const fs = require("fs");     // "fs" = file system : lire, écrire, copier des fichiers
const path = require("path"); // pour assembler les chemins de fichiers proprement (Windows utilise \ et pas /)

const RACINE = path.join(__dirname, "..");  // __dirname = le dossier de ce script (scripts/) ; ".." = le dossier au-dessus
const DOSSIER_WWW = path.join(RACINE, "www");
const FICHIERS = ["index.html", "polices"]; // un fichier, ou un dossier (copié avec tout ce qu'il contient)

fs.rmSync(DOSSIER_WWW, { recursive: true, force: true }); // on repart d'un dossier vide (recursive = avec tout ce qu'il contient)
fs.mkdirSync(DOSSIER_WWW);
for (const fichier of FICHIERS) {
    fs.cpSync(path.join(RACINE, fichier), path.join(DOSSIER_WWW, fichier), { recursive: true }); // cpSync copie un fichier ou un dossier entier
    console.log("Copié : " + fichier + " -> www/" + fichier);
}
