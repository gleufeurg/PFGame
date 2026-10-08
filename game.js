// ============================================================
// PFGame : boucle de jeu minimale
// Les commentaires font le lien avec ce que tu connais de Unity.
// ============================================================

// --- Récupération du canvas (≈ GetComponent / référence à la caméra) ---
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d"); // l'outil qui sert à dessiner
const infoText = document.getElementById("info");

// --- Entrées clavier (≈ Input.GetKey) ---
// On garde en mémoire les touches actuellement enfoncées.
const keys = {};
window.addEventListener("keydown", (e) => { keys[e.key.toLowerCase()] = true; });
window.addEventListener("keyup", (e) => { keys[e.key.toLowerCase()] = false; });

function isPressed(...names) {
  return names.some((name) => keys[name]);
}

// --- Le joueur (≈ un GameObject avec ses champs publics) ---
const player = {
  x: 400,
  y: 250,
  size: 30,
  speed: 250, // pixels par seconde
  color: "#8ecae6",
};

// --- Les objets à ramasser : ici les morceaux de ton CV ---
// Modifie ces textes avec tes propres infos !
const collectibles = [
  { x: 100, y: 80,  label: "C#",     text: "C# : plusieurs projets réalisés sous Unity." },
  { x: 650, y: 100, label: "UE",     text: "Unreal Engine : prototypes en Blueprint." },
  { x: 150, y: 400, label: "JS",     text: "JavaScript : ce jeu, justement !" },
  { x: 680, y: 400, label: "Contact", text: "Contact : ton.email@exemple.com" },
];
const COLLECTIBLE_RADIUS = 18;

// ============================================================
// update(dt) ≈ Update() dans Unity. dt ≈ Time.deltaTime (en secondes)
// ============================================================
function update(dt) {
  // Direction de déplacement
  let dx = 0;
  let dy = 0;
  if (isPressed("arrowleft", "q", "a")) dx -= 1;
  if (isPressed("arrowright", "d")) dx += 1;
  if (isPressed("arrowup", "z", "w")) dy -= 1;
  if (isPressed("arrowdown", "s")) dy += 1;

  // Normalisation pour ne pas aller plus vite en diagonale (≈ Vector2.normalized)
  const length = Math.hypot(dx, dy);
  if (length > 0) {
    dx /= length;
    dy /= length;
  }

  player.x += dx * player.speed * dt;
  player.y += dy * player.speed * dt;

  // On garde le joueur dans l'écran (≈ Mathf.Clamp)
  const half = player.size / 2;
  player.x = Math.max(half, Math.min(canvas.width - half, player.x));
  player.y = Math.max(half, Math.min(canvas.height - half, player.y));

  // Collisions joueur / objets (≈ OnTriggerEnter, mais fait à la main)
  for (const item of collectibles) {
    if (item.collected) continue;
    const distance = Math.hypot(player.x - item.x, player.y - item.y);
    if (distance < half + COLLECTIBLE_RADIUS) {
      item.collected = true;
      infoText.textContent = item.text;
    }
  }
}

// ============================================================
// draw() : en Unity c'est le moteur qui affiche la scène,
// ici on redessine tout nous-mêmes à chaque image.
// ============================================================
function draw() {
  // On efface l'image précédente
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Objets à ramasser
  for (const item of collectibles) {
    if (item.collected) continue;
    ctx.fillStyle = "#ffb703";
    ctx.beginPath();
    ctx.arc(item.x, item.y, COLLECTIBLE_RADIUS, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#eee";
    ctx.font = "14px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(item.label, item.x, item.y - COLLECTIBLE_RADIUS - 6);
  }

  // Joueur (un simple carré pour l'instant)
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x - player.size / 2, player.y - player.size / 2, player.size, player.size);

  // Score
  const collectedCount = collectibles.filter((item) => item.collected).length;
  ctx.fillStyle = "#eee";
  ctx.font = "16px sans-serif";
  ctx.textAlign = "left";
  ctx.fillText(`Objets : ${collectedCount} / ${collectibles.length}`, 10, 24);
}

// ============================================================
// Boucle de jeu : requestAnimationFrame appelle notre fonction
// à chaque rafraîchissement de l'écran (~60 fois par seconde).
// ============================================================
let lastTime = performance.now();

function gameLoop(now) {
  const dt = (now - lastTime) / 1000; // ms -> secondes
  lastTime = now;

  update(dt);
  draw();

  requestAnimationFrame(gameLoop);
}

// ≈ Start() : on lance la boucle
requestAnimationFrame(gameLoop);
