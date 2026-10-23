# Les formules du jeu

Tous les calculs du jeu, tels qu'ils sont écrits dans `index.html`. Les noms entre `accents graves` sont les constantes ou les stats du code : les changer change le jeu. Quand ce document et le code ne disent pas la même chose, c'est le code qui a raison, et il faut corriger ce document.

Notations :
- `max(a, b)` = le plus grand des deux, `min(a, b)` = le plus petit.
- `arrondi(x)` = l'entier le plus proche.
- `t` = le temps de jeu en secondes, `m = t ÷ 60` = le temps en minutes.

---

## 1. Les dégâts d'une balle sur un ennemi

### Étape 1 : les dégâts de la balle, au moment du tir

```
dégâts du tireur = dégâts de base + bonus
D_tir            = dégâts du tireur × max(0,1 ; multiplicateur de dégâts)
```

| Tireur | Dégâts de base | Bonus | Multiplicateur |
| --- | --- | --- | --- |
| Joueur | 1 | + 1 par niveau du shop « Dégâts » + lien « Opposé » (Forge : +1) | toujours 1 |
| Planète | 1 | + compétences de tir de son skill tree + lien « Opposé » + **Arès** : ennemis tués × `damagePerKill` | 1 + bonus du skill tree (`damageMultiplier`) : Héphaïstos le monte, Éole le baisse |

### Étape 2 : quand la balle touche (`hitEnemy`)

```
D = D_tir + bonus contre l'élément de l'ennemi        (« +2 dégâts contre les ennemis de feu »)
D = D × (1 + 0,15 × C)                                (cri de guerre d'Arès, seulement s'il est actif)

chance de critique = chance de critique du tireur
                   + 0,2 × P_crit                     (combo d'orbite « critique »)
                   + 0,04 × C                         (cri de guerre)
si critique :  D = D × (dégâts critiques du tireur
                        + 1 si la balle a le combo « critique »
                        + 0,2 × C)
```

- `C` = la puissance du cri de guerre (`warCry`), quand il est actif. Sinon `C = 0`.
- `P_crit` = la force du combo « critique » de la balle (1 par lien qui le donne, 0 sinon).
- Dégâts critiques de départ : 2, soit ×2 = 200 %.

### Étape 3 : ce que l'ennemi perd vraiment (`damageEnemy`)

```
perte = D
perte = perte × 1,5                    si l'ennemi est affaibli    (COMBO_WEAKEN_MULTIPLIER)
perte = perte × (1 + fragilité)        s'il est frêle               (vague de Poséidon, ex. 1,35)
vie de l'ennemi = vie − perte          il meurt quand sa vie ≤ 0
```

Ces deux bonus se multiplient, et ils comptent pour **tous** les dégâts : balles, combos, brûlures, foudre… Exemple : un ennemi à la fois affaibli et frêle à 35 % prend 1,5 × 1,35 = **2,025 fois** les dégâts.

### Exemple complet

Planète Héphaïstos : 9 dégâts, multiplicateur 3,65, critique ×2,5. Elle tire sur un ennemi de plante (+3 dégâts contre les plantes). Le cri de guerre est actif à 3,5, et l'ennemi est frêle à 50 %.

```
D_tir = 9 × 3,65                           = 32,85
D     = 32,85 + 3                           = 35,85
D     = 35,85 × (1 + 0,15 × 3,5)            = 54,67
critique : D = 54,67 × (2,5 + 0,2 × 3,5)    = 174,9
perte = 174,9 × 1,5                          = 262,4
```

---

## 2. Les effets des combos d'orbite

`P` = la force de l'effet : 1 par lien qui le donne. Toutes les options de lien ont une force de 1 (`LINK_MODES`). Les effets se calculent sur `D_tir`, **sans** critique ni bonus d'élément, sauf mention contraire.

| Effet | Formule |
| --- | --- |
| Explosion | rayon 70 × √P px ; chaque autre ennemi dans le rayon perd D_tir × 0,8 × P |
| Brûlure | perd D_tir × 0,6 × P par seconde pendant 3 s (on garde la plus forte) |
| Poison | perd D_tir × 0,5 × P par seconde pendant 4 s ; à sa mort, 2 voisins sont empoisonnés |
| Saignement | +D_tir × 0,3 × P par seconde à chaque coup, au plus D_tir × 3, pendant 4 s |
| Rebond / division | nouvelle balle de D_tir × 0,7 × P (rebond, 160 px max) ou D_tir × 0,5 × P (division) |
| Foudre (combo) | 2 × P ennemis au hasard perdent D_tir × 1,5 |
| Météore | un ennemi au hasard perd D_tir × 3 × P |
| Nova | 6 éclats de D_tir × 0,6 |
| Graine explosive | D_tir × 2,5 dans 70 px quand un ennemi marche dessus |
| Écho | D_tir une 2e fois, 0,5 s plus tard |
| Trou noir | D_tir × 1,5 par seconde, pendant 2 s |
| Braises / flaque toxique | brûlure ou poison de D_tir × 0,6 (ou × 0,5) par seconde, zone de 45 px pendant 3 s |
| Exécution | un ennemi normal sous 20 % de sa vie de départ meurt d'un coup |
| Ralenti | vitesse × 0,45 pendant 2 × P s |
| Gel / racines | vitesse 0 pendant 1,2 × P s (gel) ou 0,6 × P s (racines) |
| Recul | +30 × P px de distance (jamais plus loin que son point de départ) |
| Affaibli | ×1,5 de dégâts subis pendant 3 × P s |
| Charme (combo) | fait demi-tour pendant 2,5 × P s et blesse les ennemis qu'il touche de 3 par seconde |
| Soin | le joueur regagne 0,08 × P PV par coup |
| Recharge du bouclier | +0,6 × P s de recharge par coup |

---

## 3. Les pouvoirs des dieux

```
temps entre deux pouvoirs = temps de base ÷ (1 + abilityHaste)
```

| Pouvoir | Temps de base | Formules |
| --- | --- | --- |
| Rayon de charme (Aphrodite) | 8 s | rayon = `charmRadius` px autour d'elle ; charme `charmDuration` s (pas les super ennemis) ; un ennemi charmé blesse les autres de 3 × échelle de vie (§4) × (1 + `charmPower`) par seconde |
| Cri de guerre (Arès) | 12 s | dure 4 + `warCryDuration` s ; puissance C = `warCry` (voir §1) |
| Soif de gloire (Arès) | — | dégâts d'Arès = dégâts de son arbre + ennemis tués × `damagePerKill`, sans limite (gardé dans la sauvegarde) |
| Rayon de vie (Déméter) | 9 s | le joueur regagne `bloomHeal` PV ; rayon = max(60 ; `bloomRadius`) px ; affaiblit 3 s ; `vineCount` lianes immobilisent 2,5 + `vineDuration` s |
| Flèche de lune (Artémis) | 6 s | vise l'ennemi qui a le plus de vie à portée × 1,5 ; dégâts = D_tir × `moonArrow` ; 2,6 fois plus grosse, 1,8 fois plus rapide ; traverse tout |
| Rebond (Artémis) | — | après un coup, la balle repart vers l'ennemi le plus proche (180 px max), `bounce` fois |
| Raz-de-marée (Poséidon) | 10 s | part de la planète Poséidon ; rayon final = sa portée de tir au moment du lancer ; le front avance de 320 px/s ; chaque ennemi atteint est éloigné de Poséidon, devant le front, sur au plus 2 × `tideWave` px (× 0,3 pour un super ennemi), sans jamais être rapproché du joueur ; ralenti 1,5 s ; frêle `fragility` pendant 4 s ; invincible `tideShield` s |
| Éclairs (Zeus) | à chaque balle qui touche | `chainArcs` éclairs vers les ennemis les plus proches, à 120 + `arcRange` px ; chacun fait D × `arcDamage` (D de l'étape 2, avec le critique) ; l'ennemi devient conducteur pendant 6 s |
| Foudre (Zeus) | sur un conducteur touché par un 2e éclair | la cible perd D × `boltDamage` ; chaque ennemi à 90 × (1 + `boltRadius`) px perd D × 0,5 et devient conducteur (ou reçoit la foudre s'il l'était déjà) ; un même ennemi la reçoit au plus 1 fois par seconde ; au plus 6 coups de foudre par pas de jeu |
| Grosses balles (Héphaïstos, Éole) | — | rayon = 4 × max(0,4 ; `bulletSize`) px ; traverse `pierce` ennemis (999 = tous) |

---

## 4. Les ennemis

### Leur vie

```
échelle de vie(t) = 1 + 0,4 × m + 0,04 × m²
vie de départ     = un nombre au hasard entre min et max du type × échelle de vie(t)
```

Exemples : 1:00 → ×1,44 ; 5:00 → ×4 ; 10:00 → ×9 ; 20:00 → ×25.

| Type | Vie (min – max) | Vitesse | Or | XP |
| --- | --- | --- | --- | --- |
| Eau | 1,4 – 2,2 | 50 px/s | 1 | 1 |
| Feu | 0,8 – 1,2 | 90 px/s | 1 | 1 |
| Plante | 2,2 – 3,4 | 35 px/s | 1 | 1 |
| Air | 0,6 – 1 | 70 px/s | 1 | 1 |

### Leur taille

```
taille (rayon) = 4 + 4 × (vie restante ÷ échelle de vie au moment de son apparition)
super ennemi   = sa taille × (0,6 + 0,4 × vie restante ÷ vie de départ)
```

Un ennemi rétrécit en douceur quand on l'abîme. Un super ennemi ne descend jamais sous 60 % de sa taille.

### Leur vitesse

```
vitesse = vitesse du type × multiplicateur de statut
```

Les multiplicateurs de statut :
- normal : ×1 ;
- ralenti : ×0,45 ;
- gelé, enraciné ou pris dans une liane : ×0 ;
- charmé : ×(−0,8), il recule ;
- confus : ×(−0,6), il recule.

### L'apparition

```
écart entre deux ennemis = max(0,35 ; 2,4 ÷ (1 + 0,012 × t))   secondes
chance qu'un ennemi soit un super ennemi déjà vaincu = 0,001 + 0,00002 × t
```

Un ennemi sur 10 a un mouvement spécial, choisi parmi ceux déjà débloqués. Les alertes et les arrivées seules sont détaillées dans [ennemis.md](ennemis.md).

### Leurs dégâts sur le joueur

```
dégâts au contact = la vie qu'il lui reste (0,4 PV restant = 0,4 dégât)
```

---

## 5. Le joueur

### Ses PV

```
PV max = 10 + 2 × niveau du shop « Vie max » + compétences + lien « Opposé » + PV max gagnés pendant la partie
```

Il regagne des PV de plusieurs façons, sans jamais dépasser ses PV max :
- **chaque seconde** : régénération ;
- **à chaque ennemi tué** : vie par ennemi tué ;
- **à chaque balle qui touche** : vie par touche ;
- **à chaque rayon de vie** de Déméter : soin du rayon ;
- **combo « soin »** : 0,08 PV par coup.

### Quand un ennemi le touche (`damagePlayer`), dans cet ordre

1. Code de triche « achille » : aucun dégât.
2. Bouclier des marées actif (Poséidon) : aucun dégât.
3. Esquive : il a « chance d'esquive » de chances de ne rien prendre.
4. Bouclier prêt : il bloque le coup, puis se recharge en 10 ÷ recharge du bouclier secondes.
5. Sinon : PV = PV − dégâts au contact. **Il meurt si PV < 1** : la vie affichée est arrondie en dessous, donc 0,9 PV s'affiche 0.

### Les tirs

```
joueur  : un tir toutes les 0,35 ÷ vitesse d'attaque secondes
planète : un tir toutes les 1 ÷ max(0,15 ; vitesse d'attaque) secondes
vitesse d'une balle = 400 × max(0,2 ; vitesse des balles) px/s
balles par tir      = arrondi(balles par tir), côte à côte, à 10 px d'écart
```

- Chacun vise l'ennemi le plus proche de lui, dans sa portée : 300 px pour le joueur, 250 px pour une planète (depuis la planète).
- **La caméra** : `zoom = min(1 ; (largeur de l'écran ÷ 2 × 0,95) ÷ min(portée du joueur ; 1000))`.

### Les récompenses

```
or gagné = or de l'ennemi × multiplicateur d'or × triche midas (10, sinon 1)
XP gagnée = XP de l'ennemi × multiplicateur d'XP × triche midas
```

Les multiplicateurs commencent à 1 et augmentent avec les compétences, par exemple +50 % donne 1,5.

---

## 6. Les prix

```
prix du shop    = arrondi(prix de départ × multiplicateur ^ niveau déjà acheté)
```

Le prix d'un skill dépend de son type et de son nombre de **pas** : le nombre de liens entre l'étoile de départ et lui.

| Type de skill | Prix |
| --- | --- |
| Départ | 5 XP |
| Mineure | 5 + 4 × pas |
| Notable | arrondi((5 + 4 × pas) × 1,5) |
| Keystone | 60 + 2 × pas |
| Grande keystone | 150 |

Le détail des prix, dieu par dieu, est dans [prix.md](prix.md). Rembourser un skill rend tout son XP.
