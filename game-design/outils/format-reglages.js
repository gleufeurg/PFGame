//Écrit le texte du fichier reglages.js à partir des réglages.
//Utilisé par l'éditeur (editeur-reglages.html) quand on enregistre : le fichier garde toujours la même forme,
//une ligne par réglage, rangés par catégorie puis par sous-catégorie.

const SETTINGS_FILE_HEADER = [
    "//RÉGLAGES DU JEU : toutes les statistiques du jeu (vie, vitesse, taille, prix...), rangées par catégories et sous-catégories.",
    "//",
    "//LE PLUS SIMPLE : ouvre game-design/outils/editeur-reglages.html dans ton navigateur (double-clic sur le fichier).",
    "//À LA MAIN : change une « valeur » ci-dessous, enregistre, puis recharge le jeu (F5).",
    "//  - les pourcentages (unite: \"%\") sont écrits en fraction : 0.1 = 10 %, 1 = 100 %, 2 = 200 % ;",
    "//  - Infinity = sans limite (un niveau maximum infini dans le shop) ;",
    "//  - texteDuJeu = ce nombre est aussi écrit dans un texte du jeu : si tu le changes, change aussi ce texte.",
    "//Le nom entre guillemets est le nom dans le code : index.html lit la valeur avec reglage(\"NOM\").",
    "//Ce fichier est réécrit par l'éditeur : si tu le modifies à la main, garde la même forme."
];

//Un nombre, Infinity ou une liste de nombres, écrit comme en JavaScript
function formatSettingValue(value) {
    if (Array.isArray(value)) {
        return "[" + value.map(formatSettingValue).join(", ") + "]";
    }
    if (value === Infinity) {
        return "Infinity";
    }
    return String(value);
}

//Tout le fichier : l'en-tête, puis const REGLAGES = { "Catégorie": { "Sous-catégorie": { "NOM": { valeur, unite, texte... } } } }
function formatSettingsFile(settings) {
    const lines = SETTINGS_FILE_HEADER.slice(); //slice() = une copie
    lines.push("const REGLAGES = {");
    const categories = Object.keys(settings);
    categories.forEach(function (category, categoryIndex) {
        lines.push("    " + JSON.stringify(category) + ": {"); //JSON.stringify met les guillemets (et protège ceux du texte)
        const groups = Object.keys(settings[category]);
        groups.forEach(function (group, groupIndex) {
            lines.push("        " + JSON.stringify(group) + ": {");
            const names = Object.keys(settings[category][group]);
            names.forEach(function (name, nameIndex) {
                const setting = settings[category][group][name];
                let fields = "valeur: " + formatSettingValue(setting.valeur) + ", unite: " + JSON.stringify(setting.unite) + ", texte: " + JSON.stringify(setting.texte);
                if (setting.texteDuJeu) {
                    fields += ", texteDuJeu: " + JSON.stringify(setting.texteDuJeu);
                }
                if (setting.infini) {
                    fields += ", infini: true";
                }
                if (setting.min !== undefined) {
                    fields += ", min: " + setting.min;
                }
                lines.push("            " + JSON.stringify(name) + ": { " + fields + " }" + (nameIndex < names.length - 1 ? "," : ""));
            });
            lines.push("        }" + (groupIndex < groups.length - 1 ? "," : ""));
        });
        lines.push("    }" + (categoryIndex < categories.length - 1 ? "," : ""));
    });
    lines.push("};");
    return lines.join("\n") + "\n";
}

//Dans Node.js (les outils), le fichier s'utilise avec require(...)
if (typeof module !== "undefined") {
    module.exports = { formatSettingsFile: formatSettingsFile };
}
