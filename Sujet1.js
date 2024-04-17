// Sujet 1
// Avec une liste de nombres entiers relatifs et un nombre k, crée une méthode retournant un booléen qui affiche si deux nombres de cette liste ont k comme résultat de leur somme.
// Par exemple, si je te donne la liste [10, 15, 3, 7] et k = 17, la fonction devra sortir true car 10 + 7 = 17. Si je te donne la liste [1, 8, 10, 21] et k = 19,
// la fonction devra sortir false car il n'y a pas deux nombres ayant 19 comme résultat de leur addition.
const list = [10, 15, 3, 7];
const k = 13;
//Exercice 1
//Résous le sujet 1 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.

function exo1(list, k) {
  for (i = 0; i < list.length; i++) {
    for (j = 0; j < list.length; j++) {
      if (list[i] + list[j] === k) {
        return true;
      }
    }
  }
  return false;
}

const result1 = exo1(list, k);
console.log(`L'exercice 1 renvoie ` + result1 + " en suivant la logique O(n²)");

//Exercice 3
// Résous le sujet 1 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).
function exo3(list, k) {
  let seenSet = new Set();
  for (i = 0; i < list.length; i++) {
    let reste = k - list[i];
    if (seenSet.has(reste)) {
      return true;
    }
    seenSet.add(list[i]);
  }
  return false;
}
const result3 = exo3(list, k);
console.log(`L'exercice 3 renvoie ` + result3 + " en suivant la logique 0(n)");
//Exercice 5
// Résous le sujet 1 en ne faisant qu'un seul passage sur ta liste.
// Si tu réussis cet exercice, sache qu'il a été posé en entretien par Google. Tu peux postuler à Google. La classe, non ?
function exo5(list, k) {
  let listminusk = [];
  list.forEach((num) => listminusk.push(k - num));
  return listminusk.includes(k);
}

const result5 = exo3(list, k);
console.log(`L'exercice 3 renvoie ` + result5 + " en passant 1 seule fois");
