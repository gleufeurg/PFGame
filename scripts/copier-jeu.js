//Copie le jeu (index.html) dans le dossier www/, celui que Capacitor met dans l'application mobile.
//Lancé par "npm run build" (et donc aussi par "npm run sync").
//Si un jour le jeu utilise d'autres fichiers ou dossiers (images, sons...), ajoute-les à la liste FICHIERS.
const fs = require("fs");     // "fs" = file system : lire, écrire, copier des fichiers
const path = require("path"); // pour assembler les chemins de fichiers proprement (Windows utilise \ et pas /)

const RACINE = path.join(__dirname, "..");  // __dirname = le dossier de ce script (scripts/) ; ".." = le dossier au-dessus
const DOSSIER_WWW = path.join(RACINE, "www");
const FICHIERS = ["index.html", "polices", "langues"]; // un fichier, ou un dossier (copié avec tout ce qu'il contient)

fs.rmSync(DOSSIER_WWW, { recursive: true, force: true }); // on repart d'un dossier vide (recursive = avec tout ce qu'il contient)
fs.mkdirSync(DOSSIER_WWW);
for (const fichier of FICHIERS) {
    fs.cpSync(path.join(RACINE, fichier), path.join(DOSSIER_WWW, fichier), { recursive: true }); // cpSync copie un fichier ou un dossier entier
    console.log("Copié : " + fichier + " -> www/" + fichier);
}

//CAPACITOR : dans l'application, le jeu a besoin de la bibliothèque "@capacitor/core" (le fichier capacitor.js).
//C'est elle qui ajoute window.Capacitor.registerPlugin, la fonction qui donne accès aux plugins (AdMob...).
//On la copie dans www/ et on ajoute dans la COPIE de index.html la balise qui la charge, juste avant le script du jeu.
//Le vrai index.html (celui du site web) n'est pas modifié.
const CAPACITOR_JS = path.join(RACINE, "node_modules", "@capacitor", "core", "dist", "capacitor.js");
fs.copyFileSync(CAPACITOR_JS, path.join(DOSSIER_WWW, "capacitor.js"));
const indexWww = path.join(DOSSIER_WWW, "index.html");
const page = fs.readFileSync(indexWww, "utf8");
const balise = "<script src=\"capacitor.js\"></script>\n    <script>";
if (!page.includes("<script>")) {
    throw new Error("Balise <script> introuvable dans index.html : impossible d'ajouter capacitor.js");
}
fs.writeFileSync(indexWww, page.replace("<script>", balise)); // replace sans /g = seulement la 1re balise <script>
console.log("Ajouté : capacitor.js (bibliothèque Capacitor) dans www/index.html");
