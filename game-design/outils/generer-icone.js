// Dessine l'icône du jeu (le triangle du joueur, une orbite et 3 planètes, sur la mer étoilée)
// et l'enregistre à toutes les tailles dont l'application Android a besoin, plus :
//   - icone.png (à la racine) : l'icône du site, dans l'onglet du navigateur ;
//   - game-design/icone-512.png : l'icône à donner au Play Store (512 x 512).
// Lancer depuis le dossier PFGame : node game-design/outils/generer-icone.js
// Pour changer le dessin : modifie la fonction drawIcon plus bas, puis relance.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const RES = path.join(ROOT, 'android', 'app', 'src', 'main', 'res');
const BACKGROUND = '#0b1736'; // le fond (aussi la couleur de fond de l'icône adaptative Android)

// Les fichiers à créer : [chemin, largeur, hauteur, type]
// type : "full" = icône carrée avec fond, "round" = ronde avec fond, "foreground" = sans fond (Android ajoute le fond),
//        "splash" = écran de démarrage (fond + icône au milieu)
const FILES = [];
const DENSITIES = { mdpi: 1, hdpi: 1.5, xhdpi: 2, xxhdpi: 3, xxxhdpi: 4 };
for (const [name, scale] of Object.entries(DENSITIES)) {
    FILES.push([`mipmap-${name}/ic_launcher.png`, 48 * scale, 48 * scale, 'full']);
    FILES.push([`mipmap-${name}/ic_launcher_round.png`, 48 * scale, 48 * scale, 'round']);
    FILES.push([`mipmap-${name}/ic_launcher_foreground.png`, 108 * scale, 108 * scale, 'foreground']);
}
const SPLASHES = { mdpi: [480, 320], hdpi: [800, 480], xhdpi: [1280, 720], xxhdpi: [1600, 960], xxxhdpi: [1920, 1280] };
for (const [name, [w, h]] of Object.entries(SPLASHES)) {
    FILES.push([`drawable-land-${name}/splash.png`, w, h, 'splash']);
    FILES.push([`drawable-port-${name}/splash.png`, h, w, 'splash']);
}
FILES.push(['drawable/splash.png', 480, 320, 'splash']);

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setContent('<canvas id="c"></canvas>');
    const draw = async (width, height, type) => {
        const base64 = await page.evaluate(({ width, height, type, BACKGROUND }) => {
            const canvas = document.getElementById('c');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');

            //L'icône dans un carré de "size" pixels, centré en (cx, cy)
            function drawIcon(cx, cy, size, withBackground) {
                const s = size / 100; // on dessine sur une grille de 100 x 100
                if (withBackground) {
                    const sky = ctx.createRadialGradient(cx, cy - 10 * s, 5 * s, cx, cy, 75 * s);
                    sky.addColorStop(0, '#1a2f66');
                    sky.addColorStop(1, BACKGROUND);
                    ctx.fillStyle = sky;
                    ctx.fillRect(cx - 50 * s, cy - 50 * s, 100 * s, 100 * s);
                    //quelques étoiles (toujours aux mêmes places)
                    ctx.fillStyle = 'rgba(223, 233, 255, 0.8)';
                    for (const [x, y, r] of [[-38, -30, 0.9], [30, -40, 0.7], [40, 22, 0.8], [-30, 38, 0.6], [-42, 8, 0.5], [12, 42, 0.6], [22, -22, 0.5], [-18, -42, 0.6]]) {
                        ctx.beginPath();
                        ctx.arc(cx + x * s, cy + y * s, r * s, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
                //l'orbite, en pointillés
                ctx.strokeStyle = 'rgba(200, 220, 255, 0.45)';
                ctx.lineWidth = 1.6 * s;
                ctx.setLineDash([4 * s, 3 * s]);
                ctx.beginPath();
                ctx.arc(cx, cy, 30 * s, 0, Math.PI * 2);
                ctx.stroke();
                ctx.setLineDash([]);
                //3 planètes sur l'orbite : feu, eau, plante (les couleurs des ennemis du jeu)
                for (const [angle, color] of [[-1.15, '#ff5533'], [0.95, '#4da6ff'], [2.75, '#55dd55']]) {
                    const x = cx + Math.cos(angle) * 30 * s;
                    const y = cy + Math.sin(angle) * 30 * s;
                    const glow = ctx.createRadialGradient(x, y, 0, x, y, 11 * s);
                    glow.addColorStop(0, color + 'aa');
                    glow.addColorStop(1, color + '00');
                    ctx.fillStyle = glow;
                    ctx.fillRect(x - 11 * s, y - 11 * s, 22 * s, 22 * s);
                    const ball = ctx.createRadialGradient(x - 2 * s, y - 2 * s, 0.5 * s, x, y, 6.5 * s);
                    ball.addColorStop(0, '#ffffff');
                    ball.addColorStop(0.35, color);
                    ball.addColorStop(1, color);
                    ctx.fillStyle = ball;
                    ctx.beginPath();
                    ctx.arc(x, y, 6 * s, 0, Math.PI * 2);
                    ctx.fill();
                }
                //le triangle du joueur, au milieu : une face claire et une face sombre (son relief)
                const top = [cx, cy - 17 * s];
                const left = [cx - 15 * s, cy + 11 * s];
                const right = [cx + 15 * s, cy + 11 * s];
                const middle = [cx + 1 * s, cy + 3 * s];
                const halo = ctx.createRadialGradient(cx, cy, 0, cx, cy, 26 * s);
                halo.addColorStop(0, 'rgba(255, 160, 60, 0.45)');
                halo.addColorStop(1, 'rgba(255, 160, 60, 0)');
                ctx.fillStyle = halo;
                ctx.fillRect(cx - 26 * s, cy - 26 * s, 52 * s, 52 * s);
                const face = (points, color) => {
                    ctx.fillStyle = color;
                    ctx.beginPath();
                    ctx.moveTo(points[0][0], points[0][1]);
                    for (const point of points.slice(1)) {
                        ctx.lineTo(point[0], point[1]);
                    }
                    ctx.closePath();
                    ctx.fill();
                };
                face([top, left, middle], '#ffb347');
                face([top, middle, right], '#ff8a1f');
                face([left, right, middle], '#c75a12');
            }

            ctx.clearRect(0, 0, width, height);
            if (type === 'splash') {
                ctx.fillStyle = BACKGROUND;
                ctx.fillRect(0, 0, width, height);
                drawIcon(width / 2, height / 2, Math.min(width, height) * 0.45, false);
            } else if (type === 'round') {
                ctx.save();
                ctx.beginPath();
                ctx.arc(width / 2, height / 2, width / 2, 0, Math.PI * 2);
                ctx.clip(); //tout ce qui suit reste dans le rond
                drawIcon(width / 2, height / 2, width, true);
                ctx.restore();
            } else if (type === 'foreground') {
                drawIcon(width / 2, height / 2, width * 0.62, false); //Android découpe l'icône : le dessin reste dans les 2/3 du milieu
            } else {
                drawIcon(width / 2, height / 2, width, true);
            }
            return canvas.toDataURL('image/png').split(',')[1];
        }, { width, height, type, BACKGROUND });
        return Buffer.from(base64, 'base64');
    };

    for (const [file, width, height, type] of FILES) {
        fs.writeFileSync(path.join(RES, file), await draw(width, height, type));
    }
    fs.writeFileSync(path.join(RES, 'values', 'ic_launcher_background.xml'),
        `<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">${BACKGROUND.toUpperCase()}</color>\n</resources>\n`);
    fs.writeFileSync(path.join(ROOT, 'icone.png'), await draw(64, 64, 'full'));
    fs.writeFileSync(path.join(ROOT, 'game-design', 'icone-512.png'), await draw(512, 512, 'full'));
    console.log(`${FILES.length + 2} images créées (application Android, icone.png pour le site, game-design/icone-512.png pour le Play Store)`);
    await browser.close();
})();
