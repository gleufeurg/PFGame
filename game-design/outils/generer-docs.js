// Régénère les documents de game design à partir des données du jeu (index.html) :
//   game-design/skills/*.md  (skill trees, combos, fusions)
//   game-design/prix.md      (prix du shop et des skills)
// Utilisation (il faut Node.js et Playwright) :  node game-design/outils/generer-docs.js
const { chromium } = require('playwright');
const fs = require('fs'); const path = require('path');
const ROOT = path.join(__dirname, '..', '..');
const OUT = path.join(ROOT, 'game-design', 'skills');
(async () => { const b = await chromium.launch(); const p = await b.newPage();
await p.route(/^https?:/, r => r.abort()); // pas besoin d'internet : seules les données comptent
await p.goto('file://' + path.join(ROOT, 'index.html')); await p.waitForTimeout(400);
const data = await p.evaluate(()=>({
  trees: SKILL_TREES.map(t=>({ name:t.name, color:t.color, element:t.element, locked:t.isLocked,
    shape: SKILL_TREES_DATA.find(d=>d.name===t.name).shape,
    nodes: t.nodes.map(n=>({id:n.id, role:n.role, label:n.label, name:n.name, description:n.description, cost:n.cost})) })),
  attributes: ATTRIBUTES, combos: COMBOS, fusions: FUSIONS, modes: LINK_MODES, opposite: OPPOSITE_BONUSES,
  shop: SHOP_ITEMS.map(i=>({name:i.name, description:i.description, baseCost:i.baseCost, costGrowth:i.costGrowth, maxLevel:i.maxLevel})),
  costs: { SKILL_COST_BASE, SKILL_COST_PER_STEP, NOTABLE_COST_MULTIPLIER, KEYSTONE_COST, GRAND_COST }
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
  const total = t.nodes.reduce((s,n)=>s+n.cost,0);
  let md = `# ${t.name} — ${att(t.element)}\n\n`;
  md += `| | |\n|---|---|\n| Attribut | ${att(t.element)} |\n| Couleur | \`${t.color}\` |\n| Forme de l'arbre | ${shapeNames[t.shape]||t.shape} (\`${t.shape}\`) |\n| Compétences | ${t.nodes.length} (${by('notable').length} notables, ${by('keystone').length} keystones, 1 grande keystone) |\n| XP pour tout débloquer | ${total} |\n| Disponible | à acheter dans le shop (« Nouvelle divinité » n°${data.trees.indexOf(t)+1}) |\n\n`;
  md += `## ⭐ Grande keystone\n\n| Nom | Effet | Coût |\n|---|---|---|\n` + by('grand').map(n=>`| **${n.name}** (${n.label}) | ${n.description.replace('GRANDE KEYSTONE : ','')} | ${n.cost} XP |`).join('\n') + '\n\n';
  md += `## 🔷 Keystones\n\n| Nom | Effet | Coût |\n|---|---|---|\n` + by('keystone').map(n=>`| **${n.name}** (${n.label}) | ${n.description} | ${n.cost} XP |`).join('\n') + '\n\n';
  md += `## 🔹 Notables\n\n| Nom | Effet | Coût |\n|---|---|---|\n` + by('notable').map(n=>`| **${n.name}** (${n.label}) | ${n.description} | ${n.cost} XP |`).join('\n') + '\n\n';
  md += `## Départ\n\n| Nom | Effet | Coût |\n|---|---|---|\n` + by('start').map(n=>`| **${n.name}** (${n.label}) | ${n.description} | ${n.cost} XP |`).join('\n') + '\n\n';
  md += `## Petites compétences\n\nElles reviennent plusieurs fois dans l'arbre, numérotées I, II, III…\n\n| Nom | Effet | Nombre | Coût |\n|---|---|---|---|\n` + Object.entries(minors).map(([name,m])=>`| **${name}** (${m.label}) | ${m.description} | ×${m.count} | ${Math.min(...m.costs)} à ${Math.max(...m.costs)} XP |`).join('\n') + '\n\n';
  const opp = data.opposite[t.element];
  md += `## ↔️ Lien « Opposé »\n\n**${opp.name}** : ${opp.description}. ${opp.centerOnly ? 'Seulement pour le joueur (le triangle du milieu).' : 'Pour le joueur ET la planète d\'en face.'}\n\n`;
  md += `## 🔗 Combos d'orbite\n\n### Quand ${t.name} emprunte un attribut (Gauche ou Droite)\n\n| Combo | Nom | Effet |\n|---|---|---|\n` + comboRows(data.combos, ks=>ks.includes(t.element)).join('\n') + '\n\n';
  md += `### Fusions « Les deux côtés » où ${t.name} intervient\n\nQu'il soit le dieu au milieu ou une des deux voisines, son attribut fait partie de ces fusions à 3 éléments :\n\n| Fusion | Nom | Effet |\n|---|---|---|\n` + comboRows(data.fusions, ks=>ks.includes(t.element)).join('\n') + '\n';
  const file = `${String(i+1).padStart(2,'0')}-${slug(t.name)}.md`;
  fs.writeFileSync(path.join(OUT, file), md);
  index.push({t, file, total, by});
});
// combos.md
let cm = `# Combos d'orbite\n\nChaque dieu a un **attribut**. Dans la fenêtre de son skill tree (en bas à gauche, « Liens d'orbite »), on choisit à quelle(s) planète(s) voisine(s) il se lie. Ses **tirs** gagnent alors un effet spécial.\n\n`;
cm += `| Option | Ce qu'elle fait | Force |\n|---|---|---|\n| **Aucun** | pas de combo | — |\n| **Gauche** | combo avec la planète d'avant dans l'orbite | ×${data.modes.left.strength} |\n| **Droite** | combo avec la planète d'après | ×${data.modes.right.strength} |\n| **Les deux côtés** | le dieu et ses 2 voisines **fusionnent** en un attribut unique, qui donne un effet spécial (voir Fusions) | ×${data.modes.both.strength} |\n| **Opposé** | pas de combo : une **stat** typique du dieu, pour le joueur et la planète d'en face (voir [statistiques.md](../statistiques.md)) | — |\n\n`;
cm += `## Les attributs\n\n| Dieu | Attribut |\n|---|---|\n` + data.trees.map(t=>`| ${t.name} | ${att(t.element)} |`).join('\n') + '\n\n';
cm += `## Combos (Gauche, Droite) : attribut du dieu + attribut emprunté\n\n| Combo | Nom | Effet |\n|---|---|---|\n` + comboRows(data.combos, ()=>true).join('\n') + '\n\n';
cm += `## Fusions (Les deux côtés) : attribut du dieu + attributs de ses 2 voisines\n\nL'ordre ne compte pas : 🔥 entre 🌪️ et 💧 donne la même fusion que 💧 entre 🔥 et 🌪️. Aucune fusion ne donne de statistique, seulement des effets.\n\n| Fusion | Nom | Effet |\n|---|---|---|\n` + comboRows(data.fusions, ()=>true).join('\n') + '\n';
fs.writeFileSync(path.join(OUT, '0-combos.md'), cm);
// README
let rd = `# Skills et combos — vue d'ensemble\n\nCe dossier est généré à partir des données du jeu (\`index.html\`) par \`game-design/outils/generer-docs.js\`. Il récapitule tous les skill trees, le shop et les combos d'orbite.\n\n## Les dieux\n\n| Dieu | Attribut | Forme | Compétences | XP pour tout | Grande keystone | Fichier |\n|---|---|---|---|---|---|---|\n`;
rd += index.map(({t,file,total,by})=>`| **${t.name}** | ${att(t.element)} | ${shapeNames[t.shape]||t.shape} | ${t.nodes.length} | ${total} | ${by('grand')[0].name} : ${by('grand')[0].description.replace('GRANDE KEYSTONE : ','')} | [${file}](${file}) |`).join('\n') + '\n\n';
rd += `## Les combos\n\nVoir [0-combos.md](0-combos.md) : ${Object.keys(data.combos).length} combos et ${Object.keys(data.fusions).length} fusions.\n\n## Le shop (améliorations permanentes)\n\n| Amélioration | Effet | Prix de départ | Niveau max |\n|---|---|---|---|\n` + data.shop.map(s=>`| **${s.name}** | ${s.description} | ${s.baseCost} or | ${s.maxLevel} |`).join('\n') + '\n';
fs.writeFileSync(path.join(OUT, 'README.md'), rd);

// prix.md : le shop et le coût des skills
const fr = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
const dec = n => String(n).replace('.', ',');
const shopRows = data.shop.map(s => { const c = Array.from({length: s.maxLevel}, (_, k) => Math.round(s.baseCost * Math.pow(s.costGrowth, k))); return {s, c, total: c.reduce((a, b) => a + b, 0)}; }).sort((a, b) => b.total - a.total);
const shopTotal = shopRows.reduce((a, r) => a + r.total, 0);
const ROLE_FR = {start:'Départ', minor:'Mineure', notable:'Notable', keystone:'Keystone', grand:'Grande keystone'};
const ROM = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX'];
const ORDER = {start:0, minor:1, notable:2, keystone:3, grand:4};
const C = data.costs;
let px = `# Prix des améliorations et des skills\n\nGénéré à partir du code du jeu par \`game-design/outils/generer-docs.js\`.\n\nLe shop se paie en **or**, gagné en tuant les ennemis et dépensé quand on meurt. Les skills se paient en **XP**, dans le skill tree de chaque dieu.\n\n`;
const xpAll = index.reduce((a, x) => a + x.total, 0);
const gods = shopRows.find(r => r.s.name === 'Nouvelle divinité');
px += `- Tout le shop au maximum coûte **${fr(shopTotal)} or**${gods ? `, dont ${fr(gods.total)} or pour les ${gods.s.maxLevel} dieux` : ''}.\n- Tous les skills des ${index.length} dieux coûtent **${fr(xpAll)} XP**.\n\n`;
px += `## Le shop\n\nChaque niveau coûte plus cher que le précédent : prix = prix de départ × multiplicateur ^ niveau déjà acheté, arrondi. Les dieux arrivent dans l'ordre : ${data.trees.map(t => t.name).join(', ')}.\n\n| Amélioration | Effet par niveau | Multiplicateur | Prix par niveau (or) | Total (or) |\n| --- | --- | --- | --- | --- |\n`;
px += shopRows.map(({s, c, total}) => `| ${s.name} (${s.maxLevel} niv.) | ${s.description} | ×${dec(s.costGrowth)} | ${c.map(fr).join(', ')} | ${fr(total)} |`).join('\n') + '\n\n';
px += `## Les skills\n\nUn skill coûte plus cher quand il est loin du départ : chaque lien à parcourir depuis l'étoile de départ est un « pas ».\n\n| Type de skill | Coût (XP) |\n| --- | --- |\n| Départ | ${C.SKILL_COST_BASE} |\n| Mineure | ${C.SKILL_COST_BASE} + ${C.SKILL_COST_PER_STEP} × pas |\n| Notable | (${C.SKILL_COST_BASE} + ${C.SKILL_COST_PER_STEP} × pas) × ${dec(C.NOTABLE_COST_MULTIPLIER)}, arrondi |\n| Keystone | ${C.KEYSTONE_COST} + 2 × pas |\n| Grande keystone | ${C.GRAND_COST} |\n\n`;
px += `| Dieu | Skills | Mineures | Notables | Keystones (+ grande) | XP pour tout prendre |\n| --- | --- | --- | --- | --- | --- |\n`;
px += [...index].sort((a, b) => b.total - a.total).map(({t, total, by}) => `| ${t.name} | ${t.nodes.length} | ${by('minor').length} | ${by('notable').length} | ${by('keystone').length} + ${by('grand').length} | ${fr(total)} |`).join('\n') + '\n\n';
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
console.log('Documents régénérés : skills/ et prix.md');
})();
