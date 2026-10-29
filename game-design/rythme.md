# Le rythme de progression

À quel moment le joueur obtient-il chaque dieu ? Combien de temps dure une partie ? Ce document répond avec des mesures, avant et après le rééquilibrage demandé par les testeurs.

## Ce que disaient les testeurs

> « Scaling trop inégal : on s'ennuie au début car trop lent, et on arrive à la fin trop rapidement. »
> « Mettre en stats infinies certains achats du perso principal. »

## Comment on mesure : le joueur robot

`node game-design/outils/joueur-robot.js 300` fait jouer un robot pendant 300 minutes « réelles » (le nombre est au choix) :

- il joue jusqu'à sa mort, à la vitesse la plus rapide qu'il a (x2, offerte par le tutoriel, puis x4 quand il l'a achetée), sauf pendant les duels (x1) ;
- à chaque mort, il achète le prochain dieu dès qu'il peut. Si ce dieu coûte moins d'une partie et demie de gains, il économise pour lui. Sinon, il garde la moitié de son or et achète les améliorations les moins chères ;
- il prend les compétences les moins chères, tous dieux confondus, et le meilleur lien d'orbite acheté ;
- il ne saute pas dans le temps et ne change pas les orbites. Il compte 15 s par mort, le temps de faire ses achats.

Un vrai joueur fait d'autres choix (il achète des dégâts plutôt que la moins chère des améliorations, il utilise les sauts...). Les chiffres donnent donc **un ordre d'idée**, pas une vérité. Mais c'est le même robot avant et après : la comparaison est juste. Le temps compté est celui d'un joueur qui joue sans s'arrêter ; avec les pauses, ce serait plus long.

## Avant le rééquilibrage

- **Un début lent.** 1 ennemi toutes les 2,4 s au départ : on attend. Il faut 15 minutes pour avoir 4 dieux, puis 19 minutes de plus pour le 5ᵉ. Le robot meurt plusieurs parties de suite contre Cerbère (5:00) puis contre l'Hydre (10:00).
- **Puis tout explose.** Une fois ces deux super ennemis passés, les parties s'allongent d'un coup et l'or gagné aussi : 3 000 or, puis 7 000, puis 13 000, puis 89 000 en une partie. Le dernier dieu arrive à 1 h 52, et tout le reste en même temps : le shop au maximum, les 445 compétences prises.
- **Un bug : l'esquive n'avait pas de plafond.** Toutes les compétences d'esquive réunies donnaient 126 % : le joueur n'était plus jamais touché. Les dernières parties du robot duraient 60 minutes (la limite du robot) ; une vraie partie n'aurait jamais fini.

## Ce qui a changé, et pourquoi

| Réglage | Avant | Après | Pourquoi |
| --- | --- | --- | --- |
| Écart entre deux ennemis au départ (`ENEMY_SPAWN_INTERVAL_START`) | 2,4 s | 1,2 s | 2 fois plus d'action au début de chaque partie |
| Montée de l'apparition (`ENEMY_SPAWN_RAMP`) | 0,012 | 0,005 | plus douce : le plafond (0,35 s) arrive toujours vers 8 min, et le milieu de partie n'est pas plus dur qu'avant |
| Vie qui monte (`getEnemyHealthScale`) | 1 + 0,4 m + 0,04 m² | (1 + 0,3 m + 0,03 m²) × 1,05^m | pareil au début ; plus dur à la fin (×160 à 30:00 au lieu de ×49), pour qu'une partie finisse toujours |
| Esquive maximum (`DODGE_MAX`) | aucun | 75 % | le bug ci-dessus |
| Vie de Cerbère / de l'Hydre (`BOSSES`) | 40 / 90 | 15 / 60 | ils bloquaient le début du jeu plusieurs parties de suite |
| Prix des dieux | 50 or, puis ×1,8 | 20 or, puis ×2,5 | les 4 premiers dieux arrivent plus vite ; le 12ᵉ coûte 477 000 or au lieu de 32 000 |
| Accélérer le temps | 40 puis 120 or | 20 puis 80 or (depuis, x2 est offerte par le tutoriel : seul x4 s'achète, 80 or) | jouer en x2 dès les premières parties |
| Améliorations du joueur | toutes avec un maximum | Dégâts, Cadence de tir, Vie max, Régénération et Dégâts critiques **infinies** | il reste toujours quelque chose à acheter |
| Prix des compétences (`SKILL_TIER_GROWTH`) | pareil pour tous les dieux | ×1,5 à chaque dieu (×86 pour Hestia, la 12ᵉ) | les derniers dieux arrivent quand on gagne beaucoup d'XP : leur arbre se remplissait d'un coup |

Les formules sont dans [questions/formules.md](questions/formules.md), les prix dans [prix.md](prix.md), l'apparition et la vie des ennemis dans [ennemis.md](ennemis.md).

## Les mesures

Ces mesures ont été faites avant l'ajout des **voies** dans les skill trees (on ne peut plus tout prendre dans un arbre) ; à refaire avec `outils/joueur-robot.js` si besoin.

Minutes de jeu réelles pour obtenir chaque dieu (le robot) :

| Dieu | Avant | Après |
| --- | --- | --- |
| 1ᵉʳ | 2 min | 2 min |
| 2ᵉ | 6 min | 2 min (dès la 1ʳᵉ mort) |
| 3ᵉ | 10 min | 6 min |
| 4ᵉ | 16 min | 12 min |
| 5ᵉ | 28 min | 22 min |
| 6ᵉ | 39 min | 31 min |
| 7ᵉ | 45 min | 38 min |
| 8ᵉ | 48 min | 50 min |
| 9ᵉ | 52 min | 1 h 01 |
| 10ᵉ | 1 h 04 | 1 h 36 |
| 11ᵉ | 1 h 04 | 2 h 50 |
| 12ᵉ | 1 h 20 | pas encore à 5 h de jeu |

Et pour un **nouveau joueur** (aucune amélioration), la 1ʳᵉ partie, en moyenne sur 20 parties :

| | Avant | Après |
| --- | --- | --- |
| Durée | 2:11 | 1:46 |
| Or gagné | 75 | 82 |
| Ennemis tués dans les 30 premières secondes | 11 | 19 |
| Dieux achetés à la 1ʳᵉ mort | 1 | 2 le plus souvent (20 + 50 or) |

**Avant**, à partir de 1 h 20, tout était acheté et les parties duraient 60 minutes sans que le robot meure (le bug de l'esquive). **Après**, les dernières parties durent 25 à 39 minutes de jeu (6 à 10 minutes réelles en x4) et rapportent 28 000 à 62 000 or : il faut 5 à 10 parties pour chacun des derniers dieux, et l'or en trop part dans les améliorations infinies (à 5 h, le robot avait acheté environ 50 niveaux de plus que l'ancien maximum de ces 5 améliorations).

La courbe est plus régulière : les 4 premiers dieux arrivent plus vite (l'action du début, les premiers dieux moins chers), le milieu ressemble à avant, et la fin s'étale sur des heures au lieu de s'arrêter d'un coup.

## Depuis : esquive en points et Éveil des dieux

Après la 2e série de retours : l'esquive se calcule en points (chance = x / (x + 1), x = points ÷ 100, plus de plafond à 75 %), une amélioration « Esquive » infinie est au shop, la Portée est infinie, et l'**Éveil** donne enfin une dépense sans fin à l'XP (voir [interface.md](interface.md)). Le robot (3 heures, `joueur-robot.js 180`, qui met l'XP en trop dans l'Éveil le moins cher) :

| Dieu | 1ᵉʳ | 2ᵉ | 3ᵉ | 4ᵉ | 5ᵉ | 6ᵉ | 7ᵉ | 8ᵉ | 9ᵉ | 10ᵉ | 11ᵉ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Minutes réelles | 2 | 2 | 6 | 10 | 20 | 33 | 39 | 52 | 67 | 99 | 178 |

Le rythme des dieux ne change presque pas. Le 1er niveau d'Éveil arrive vers 50 minutes ; à 3 heures, le robot en a 127 au total (répartis sur ses dieux complets). L'XP de fin de partie (20 000 à 35 000 par partie) a maintenant toujours quelque chose à acheter.

## Ce qui reste à surveiller

- **L'Hydre de Lerne (10:00)** reste le plus gros mur : le robot meurt 2 ou 3 parties de suite contre elle. Si les joueurs bloquent trop, baisser sa vie (`BOSSES`) ou ses têtes (`HYDRA_HEALTH_SHARE`, `HYDRA_WAVE_COUNT`).
- **L'Éveil** : à surveiller avec de vrais joueurs (son prix monte de x1,25 par niveau ; à régler dans l'éditeur de réglages, Compétences > Éveil des dieux).
- **Le robot n'est pas un vrai joueur** : à refaire tester par des amis, en notant à quel moment ils obtiennent chaque dieu.
