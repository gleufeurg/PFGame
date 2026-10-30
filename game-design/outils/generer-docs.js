// Régénère les documents de game design à partir des données du jeu (index.html) :
//   game-design/skills/*.md  (skill trees, combos, fusions)
//   game-design/prix.md      (prix du shop et des skills)
//   game-design/reglages.md  (tous les réglages de reglages.js, avec leur valeur)
// Utilisation (il faut Node.js et Playwright) :  node game-design/outils/generer-docs.js
const { chromium } = require('playwright');
const fs = require('fs'); const path = require('path');
const ROOT = path.join(__dirname, '..', '..');
const OUT = path.join(ROOT, 'game-design', 'skills');
(async () => { const b = await chromium.launch(); const p = await b.newPage();
await p.addInitScript(() => localStorage.setItem('language', 'fr')); // les docs sont en français (le jeu démarre en anglais par défaut)
await p.route(/^https?:/, r => r.abort()); // pas besoin d'internet : seules les données comptent
await p.goto('file://' + path.join(ROOT, 'index.html')); await p.waitForTimeout(400);
const data = await p.evaluate(()=>({
  trees: SKILL_TREES.map(t=>({ name:t.name, color:t.color, element:t.element, locked:t.isLocked,
    shape: SKILL_TREES_DATA.find(d=>d.name===t.name).shape,
    paths: t.paths.map(p=>({name:p.name, description:p.description})),
    nodes: t.nodes.map(n=>({id:n.id, role:n.role, label:n.label, name:n.name, description:n.description, cost:n.cost, path:n.path})) })),
  attributes: ATTRIBUTES, combos: COMBOS, fusions: FUSIONS, modes: LINK_MODES, opposite: OPPOSITE_BONUSES,
  shop: SHOP_ITEMS.map(i=>{ const level = i.level; const prices = []; // les prix des 12 premiers niveaux, calculés par le jeu (getShopItemCost)
    for (let k = 0; k < (Number.isFinite(i.maxLevel) ? i.maxLevel : 12); k++) { i.level = k; prices.push(getShopItemCost(i)); }
    i.level = level;
    return {name:i.name, description:getShopItemDescription(i), prices, costGrowth:i.costGrowth, maxLevel: Number.isFinite(i.maxLevel) ? i.maxLevel : null}; }), // null = amélioration infinie (Infinity ne passe pas en JSON)
  costs: { SKILL_COST_BASE, SKILL_COST_PER_STEP, NOTABLE_COST_MULTIPLIER, KEYSTONE_COST, GRAND_COST, SKILL_TIER_GROWTH },
  awakening: { base: AWAKENING_BASE_COST, growth: AWAKENING_COST_GROWTH, damage: AWAKENING_DAMAGE_PER_LEVEL },
  settings: JSON.parse(JSON.stringify(REGLAGES, (k, v) => v === Infinity ? 'Infinity' : v)) // Infinity ne passe pas en JSON
}));
await b.close();
fs.mkdirSync(OUT, {recursive:true});
const A = data.attributes;
const att = k => A[k].icon+' '+A[k].name;
const ROLE = {start:'Départ', minor:'Petite compétence', notable:'Notable', keystone:'Keystone', grand:'Grande keystone'};
const slug = n => n.normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase();
const comboRows = (table, filter) => Object.entries(table).filter(([k])=>filter(k.split('+'))).map(([k,c])=>`| ${k.split('+').map(att).join(' + ')} | **${c.name}** | ${c.description} |`);
const shapeNames = {fire:'flamme', waves:'vagues', flower:'fleur', wind:'souffles de vent', sun:'soleil', bow:'arc et flèche', laurel:'couronne de laurier', bolt:'éclair', sword:'épée', heart:'cœur', wing:'aile', hearth:'brasero', grapes:'grappe de raisin', classic:'3 branches'};
// per tree
const index = [];
data.trees.forEach((t, i)=>{
  const by = r => t.nodes.filter(n=>n.role===r);
  const minors = {}; by('minor').forEach(n=>{ const base=n.name.replace(/ [IVXL]+$/,''); minors[base]=minors[base]||{label:n.label, description:n.description, count:0, costs:[]}; minors[base].count++; minors[base].costs.push(n.cost); });
  // les voies : on ne peut en prendre qu'une, donc "tout prendre" = les compétences communes + la voie la plus chère
  const pathCost = k => t.nodes.filter(n=>n.path===k).reduce((s,n)=>s+n.cost,0);
  const commonCost = t.nodes.filter(n=>n.path===undefined||n.path===null).reduce((s,n)=>s+n.cost,0);
  const total = commonCost + Math.max(0, ...t.paths.map((p,k)=>pathCost(k)));
  let md = `# ${t.name} — ${att(t.element)}\n\n`;
  md += `| | |\n|---|---|\n| Attribut | ${att(t.element)} |\n| Couleur | \`${t.color}\` |\n| Forme de l'arbre | ${shapeNames[t.shape]||t.shape} (\`${t.shape}\`) |\n| Compétences | ${t.nodes.length} (${by('notable').length} notables, ${by('keystone').length} keystones, 1 grande keystone) |\n| Voies | ${t.paths.length} (on n'en prend qu'une) |\n| XP pour tout prendre (avec la voie la plus chère) | ${total} |\n| Disponible | à acheter dans le shop (« Nouvelle divinité » n°${data.trees.indexOf(t)+1}) |\n\n`;
  if (t.paths.length > 0) {
    md += `## ⑂ Les voies\n\nPrendre une compétence d'une voie **bloque les autres voies** de cet arbre. Pour changer de voie, il faut rembourser toutes les compétences de la sienne (l'XP est rendue).\n\n| Voie | Façon de jouer | Ses keystones et notables | Compétences | XP |\n|---|---|---|---|---|\n` + t.paths.map((p,k)=>{ const nodes = t.nodes.filter(n=>n.path===k); const big = nodes.filter(n=>n.role!=='minor').map(n=>`**${n.name}** (${n.description})`).join(' ; '); return `| **${p.name}** | ${p.description} | ${big} | ${nodes.length} | ${pathCost(k)} |`; }).join('\n') + '\n\n';
  }
  md += `## ⭐ Grande keystone\n\n| Nom | Effet | Coût |\n|---|---|---|\n` + by('grand').map(n=>`| **${n.name}** (${n.label}) | ${n.description.replace('GRANDE KEYSTONE : ','')} | ${n.cost} XP |`).join('\n') + '\n\n';
  md += `## 🔷 Keystones\n\n| Nom | Effet | Coût |\n|---|---|---|\n` + by('keystone').map(n=>`| **${n.name}** (${n.label}) | ${n.description} | ${n.cost} XP |`).join('\n') + '\n\n';
  md += `## 🔹 Notables\n\n| Nom | Effet | Coût |\n|---|---|---|\n` + by('notable').map(n=>`| **${n.name}** (${n.label}) | ${n.description} | ${n.cost} XP |`).join('\n') + '\n\n';
  md += `## Départ\n\n| Nom | Effet | Coût |\n|---|---|---|\n` + by('start').map(n=>`| **${n.name}** (${n.label}) | ${n.description} | ${n.cost} XP |`).join('\n') + '\n\n';
  md += `## Petites compétences\n\nElles reviennent plusieurs fois dans l'arbre, numérotées I, II, III…\n\n| Nom | Effet | Nombre | Coût |\n|---|---|---|---|\n` + Object.entries(minors).map(([name,m])=>`| **${name}** (${m.label}) | ${m.description} | ×${m.count} | ${Math.min(...m.costs)} à ${Math.max(...m.costs)} XP |`).join('\n') + '\n\n';
  const opp = data.opposite[t.element];
  md += `## ↔️ Lien « Opposé » vers ${t.name}\n\nQuand une autre planète, en face de ${t.name} sur la même orbite, choisit le lien « Opposé », elle reçoit **${opp.name}** : ${opp.description}. ${opp.centerOnly ? 'Seulement pour le joueur (le triangle du milieu).' : 'Pour le joueur ET la planète qui a choisi le lien.'}\n\n`;
  md += `## 🔗 Combos d'orbite\n\n### Quand ${t.name} emprunte un attribut (Gauche ou Droite)\n\n| Combo | Nom | Effet |\n|---|---|---|\n` + comboRows(data.combos, ks=>ks.includes(t.element)).join('\n') + '\n\n';
  md += `### Fusions « Les deux côtés » où ${t.name} intervient\n\nQu'il soit le dieu au milieu ou une des deux voisines, son attribut fait partie de ces fusions à 3 éléments :\n\n| Fusion | Nom | Effet |\n|---|---|---|\n` + comboRows(data.fusions, ks=>ks.includes(t.element)).join('\n') + '\n';
  const file = `${String(i+1).padStart(2,'0')}-${slug(t.name)}.md`;
  fs.writeFileSync(path.join(OUT, file), md);
  index.push({t, file, total, by});
});
// combos.md
let cm = `# Combos d'orbite\n\nChaque dieu a un **attribut**. Dans la fenêtre de son skill tree (en bas à gauche, « Liens d'orbite »), on choisit à quelle(s) planète(s) voisine(s) il se lie. Ses **tirs** gagnent alors un effet spécial.\n\nLes planètes tournent sur **3 orbites** (intérieure, milieu, extérieure) : une planète ne se lie qu'aux planètes de **son** orbite. Gauche, Droite, Les deux côtés et Opposé se comptent sur cette orbite ; seule sur son orbite, une planète n'a pas de lien. On change une planète d'orbite en la faisant glisser dans le jeu, ou avec les boutons « Orbite » de sa fenêtre de skills (voir [interface.md](../interface.md)).\n\n`;
cm += `| Option | Ce qu'elle fait | Force |\n|---|---|---|\n| **Aucun** | pas de combo | — |\n| **Gauche** | combo avec la planète d'avant sur son orbite | ×${data.modes.left.strength} |\n| **Droite** | combo avec la planète d'après sur son orbite | ×${data.modes.right.strength} |\n| **Les deux côtés** | le dieu et ses 2 voisines **fusionnent** en un attribut unique, qui donne un effet spécial (voir Fusions) | ×${data.modes.both.strength} |\n| **Opposé** | pas de combo : la planète reçoit une **stat** typique du dieu d'en face sur son orbite, et le joueur aussi (voir [statistiques.md](../statistiques.md)) | — |\n\n`;
cm += `## Les attributs\n\n| Dieu | Attribut |\n|---|---|\n` + data.trees.map(t=>`| ${t.name} | ${att(t.element)} |`).join('\n') + '\n\n';
cm += `## Combos (Gauche, Droite) : attribut du dieu + attribut emprunté\n\n| Combo | Nom | Effet |\n|---|---|---|\n` + comboRows(data.combos, ()=>true).join('\n') + '\n\n';
cm += `## Fusions (Les deux côtés) : attribut du dieu + attributs de ses 2 voisines\n\nL'ordre ne compte pas : 🔥 entre 🌪️ et 💧 donne la même fusion que 💧 entre 🔥 et 🌪️. Aucune fusion ne donne de statistique, seulement des effets.\n\n| Fusion | Nom | Effet |\n|---|---|---|\n` + comboRows(data.fusions, ()=>true).join('\n') + '\n';
fs.writeFileSync(path.join(OUT, '0-combos.md'), cm);
// README
let rd = `# Skills et combos — vue d'ensemble\n\nCe dossier est généré à partir des données du jeu (\`index.html\`) par \`game-design/outils/generer-docs.js\`. Il récapitule tous les skill trees, le shop et les combos d'orbite.\n\n## Les dieux\n\n| Dieu | Attribut | Forme | Compétences | Voies | XP pour tout (avec la voie la plus chère) | Grande keystone | Fichier |\n|---|---|---|---|---|---|---|---|\n`;
rd += index.map(({t,file,total,by})=>`| **${t.name}** | ${att(t.element)} | ${shapeNames[t.shape]||t.shape} | ${t.nodes.length} | ${t.paths.map(p=>p.name).join(', ')} | ${total} | ${by('grand')[0].name} : ${by('grand')[0].description.replace('GRANDE KEYSTONE : ','')} | [${file}](${file}) |`).join('\n') + '\n\n';
rd += `## Les combos\n\nVoir [0-combos.md](0-combos.md) : ${Object.keys(data.combos).length} combos et ${Object.keys(data.fusions).length} fusions.\n\n## Le shop (améliorations permanentes)\n\n| Amélioration | Effet | Prix de départ | Niveau max |\n|---|---|---|---|\n` + data.shop.map(s=>`| **${s.name}** | ${s.description} | ${s.prices[0]} or | ${s.maxLevel === null ? '∞ (infinie)' : s.maxLevel} |`).join('\n') + '\n';
fs.writeFileSync(path.join(OUT, 'README.md'), rd);

// prix.md : le shop et le coût des skills
const fr = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
const dec = n => String(n).replace('.', ',');
const INFINITE_SHOWN = 12; // pour une amélioration infinie, on montre les prix des 12 premiers niveaux
const shopRows = data.shop.map(s => { const c = s.prices.slice(0, s.maxLevel === null ? INFINITE_SHOWN : s.maxLevel); return {s, c, total: s.maxLevel === null ? null : c.reduce((a, b) => a + b, 0)}; }).sort((a, b) => (a.total === null) - (b.total === null) || (b.total || 0) - (a.total || 0));
const shopTotal = shopRows.reduce((a, r) => a + (r.total || 0), 0);
const ROLE_FR = {start:'Départ', minor:'Mineure', notable:'Notable', keystone:'Keystone', grand:'Grande keystone'};
const ROM = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX'];
const ORDER = {start:0, minor:1, notable:2, keystone:3, grand:4};
const C = data.costs;
let px = `# Prix des améliorations et des skills\n\nGénéré à partir du code du jeu par \`game-design/outils/generer-docs.js\`.\n\nLe shop se paie en **or**, gagné en tuant les ennemis et dépensé quand on meurt. Les skills se paient en **XP**, dans le skill tree de chaque dieu.\n\n`;
const xpAll = index.reduce((a, x) => a + x.total, 0);
const gods = shopRows.find(r => r.s.name === 'Nouvelle divinité');
px += `- Tout le shop au maximum (sans les améliorations infinies) coûte **${fr(shopTotal)} or**${gods ? `, dont ${fr(gods.total)} or pour les ${gods.s.maxLevel} dieux` : ''}.\n- Les améliorations **infinies** (∞) n'ont pas de dernier niveau : ${shopRows.filter(r => r.total === null).map(r => r.s.name).join(', ')}.\n- Tous les skills des ${index.length} dieux, en prenant à chaque fois la voie la plus chère (on ne prend qu'une voie par arbre), coûtent **${fr(xpAll)} XP**.\n\n`;
px += `## Le shop\n\nChaque niveau coûte plus cher que le précédent : prix = prix de départ × multiplicateur ^ niveau déjà acheté, arrondi. Les dieux arrivent dans l'ordre : ${data.trees.map(t => t.name).join(', ')}.\n\n| Amélioration | Effet par niveau | Multiplicateur | Prix par niveau (or) | Total (or) |\n| --- | --- | --- | --- | --- |\n`;
px += shopRows.map(({s, c, total}) => `| ${s.name} (${s.maxLevel === null ? '∞' : s.maxLevel + ' niv.'}) | ${s.description} | ×${dec(s.costGrowth)} | ${c.map(fr).join(', ')}${total === null ? '…' : ''} | ${total === null ? '∞' : fr(total)} |`).join('\n') + '\n\n';
px += `## Les skills\n\nUn skill coûte plus cher quand il est loin du départ : chaque lien à parcourir depuis l'étoile de départ est un « pas ». Ensuite, **chaque dieu a des skills ${dec(C.SKILL_TIER_GROWTH)} fois plus chers que le dieu d'avant** (dans l'ordre d'achat du shop) : le 1er ×1, le 2e ×${dec(C.SKILL_TIER_GROWTH)}, le 3e ×${dec(Math.round(C.SKILL_TIER_GROWTH ** 2 * 100) / 100)}… (\`SKILL_TIER_GROWTH\`). Les derniers dieux arrivent quand on gagne beaucoup d'XP : sans ça, tout leur arbre se remplissait d'un coup.\n\n| Type de skill | Coût de base (XP), à multiplier par celui du dieu |\n| --- | --- |\n| Départ | ${C.SKILL_COST_BASE} |\n| Mineure | ${C.SKILL_COST_BASE} + ${C.SKILL_COST_PER_STEP} × pas |\n| Notable | (${C.SKILL_COST_BASE} + ${C.SKILL_COST_PER_STEP} × pas) × ${dec(C.NOTABLE_COST_MULTIPLIER)}, arrondi |\n| Keystone | ${C.KEYSTONE_COST} + 2 × pas |\n| Grande keystone | ${C.GRAND_COST} |\n\n| Dieu (ordre d'achat) | Multiplicateur |\n| --- | --- |\n` + data.trees.map((t, k) => `| ${k + 1}. ${t.name} | ×${dec(Math.round(C.SKILL_TIER_GROWTH ** k * 100) / 100)} |`).join('\n') + '\n\n';
px += `| Dieu | Skills | Mineures | Notables | Keystones (+ grande) | XP pour tout prendre (avec la voie la plus chère) |\n| --- | --- | --- | --- | --- | --- |\n`;
px += [...index].sort((a, b) => b.total - a.total).map(({t, total, by}) => `| ${t.name} | ${t.nodes.length} | ${by('minor').length} | ${by('notable').length} | ${by('keystone').length} + ${by('grand').length} | ${fr(total)} |`).join('\n') + '\n\n';
// L'Éveil : une fois l'arbre complet, l'XP éveille le dieu (sans fin)
const W = data.awakening;
const awakeningCost = (rank, level) => Math.round(W.base * Math.pow(C.SKILL_TIER_GROWTH, rank) * Math.pow(W.growth, level));
px += `## L'Éveil\n\nQuand toutes les compétences possibles d'un dieu sont prises, son XP peut l'**éveiller**, sans fin : chaque niveau donne +${dec(Math.round(W.damage * 100))} % de dégâts à sa planète. Prix = ${W.base} XP × ${dec(C.SKILL_TIER_GROWTH)} ^ rang du dieu × ${dec(W.growth)} ^ niveaux d'Éveil déjà pris.\n\n| Dieu | Niveau 1 | Niveau 5 | Niveau 10 | Niveau 20 | Total jusqu'au niveau 10 |\n| --- | --- | --- | --- | --- | --- |\n`;
px += data.trees.map((t, rank) => `| ${t.name} | ${fr(awakeningCost(rank, 0))} | ${fr(awakeningCost(rank, 4))} | ${fr(awakeningCost(rank, 9))} | ${fr(awakeningCost(rank, 19))} | ${fr(Array.from({length: 10}, (_, k) => awakeningCost(rank, k)).reduce((a, b) => a + b, 0))} |`).join('\n') + '\n\n';
px += `## Le détail par dieu\n\nChaque tableau va du skill le moins cher au plus cher. Les dieux sont dans leur ordre d'achat dans le shop.\n\n`;
for (const {t, total} of index) {
  const groups = new Map();
  for (const n of t.nodes) {
    const m = (n.name || '').match(/^(.*) ([IVX]+)$/);
    const base = m ? m[1] : (n.name || 'Départ'); const num = m ? ROM.indexOf(m[2]) : -1;
    const key = [String(n.cost).padStart(4, '0'), ORDER[n.role], base, num >= 0 ? n.description : n.name].join('|');
    if (!groups.has(key)) groups.set(key, {n, base, nums: []});
    groups.get(key).nums.push(num);
  }
  px += `### ${t.name} (${t.nodes.length} skills · ${fr(total)} XP)\n\n| Coût (XP) | Skill | Type | Effet |\n| --- | --- | --- | --- |\n`;
  px += [...groups.keys()].sort().map(k => { const g = groups.get(k); g.nums.sort((a, b) => a - b);
    const name = g.nums[0] < 0 ? g.base : g.base + ' ' + g.nums.map(i => ROM[i]).join(', ');
    return `| ${g.n.cost} | ${name} | ${ROLE_FR[g.n.role]} | ${g.n.description}${g.nums.length > 1 ? ', chacun' : ''} |`; }).join('\n') + '\n\n';
}
fs.writeFileSync(path.join(ROOT, 'game-design', 'prix.md'), px);

// reglages.md : tous les réglages de reglages.js (catégorie > sous-catégorie > réglage), avec leur valeur
const settingValue = (r) => {
  const one = (v) => v === 'Infinity' ? '∞' : dec(r.unite === '%' ? Math.round(v * 100 * 1e9) / 1e9 : v);
  return (Array.isArray(r.valeur) ? r.valeur.map(one).join(' ; ') : one(r.valeur)) + (r.unite && r.valeur !== 'Infinity' ? ' ' + r.unite : '');
};
const S = data.settings;
const settingCount = Object.values(S).reduce((a, c) => a + Object.values(c).reduce((b, g) => b + Object.keys(g).length, 0), 0);
let rg = `# Les réglages du jeu\n\nGénéré à partir de \`reglages.js\` par \`game-design/outils/generer-docs.js\`.\n\n`;
rg += `Toutes les statistiques du jeu (${settingCount} réglages) sont dans le fichier \`reglages.js\`, à la racine du dépôt, rangées par catégories et sous-catégories. Pour les changer, le plus simple est l'**éditeur de réglages** : ouvre \`game-design/outils/editeur-reglages.html\` dans ton navigateur (double-clic), change les valeurs, « Tester dans le jeu », puis « Enregistrer » (voir [README.md](README.md)).\n\n`;
rg += `- Les pourcentages sont écrits en % ici et dans l'éditeur, mais en fraction dans \`reglages.js\` (10 % = 0.1).\n- Le **nom dans le code** est celui que \`index.html\` lit avec \`reglage("NOM")\`.\n- ⚠️ = ce nombre est aussi écrit dans un texte du jeu : si on le change, il faut aussi changer ce texte (dans \`index.html\` et \`langues/\`).\n- Les valeurs de **chaque compétence** des skill trees ne sont pas ici : elles sont écrites dans leur description (voir [skills/](skills/README.md)), dans \`SKILL_TREES_DATA\` (\`index.html\`).\n\n`;
rg += `## Sommaire\n\n` + Object.keys(S).map(c => `- [${c}](#${c.toLowerCase().replace(/[^\p{L}\p{N} -]/gu, '').replace(/ /g, '-')}) : ${Object.keys(S[c]).join(', ')}`).join('\n') + '\n\n';
for (const [category, groups] of Object.entries(S)) {
  rg += `## ${category}\n\n`;
  for (const [group, settings] of Object.entries(groups)) {
    rg += `### ${group}\n\n| Réglage | Valeur | Nom dans le code |\n| --- | --- | --- |\n`;
    rg += Object.entries(settings).map(([name, r]) => `| ${r.texte}${r.texteDuJeu ? ' ⚠️ (aussi écrit dans ' + r.texteDuJeu + ')' : ''} | ${settingValue(r)} | \`${name}\` |`).join('\n') + '\n\n';
  }
}
fs.writeFileSync(path.join(ROOT, 'game-design', 'reglages.md'), rg);
console.log('Documents régénérés : skills/, prix.md et reglages.md');
})();
