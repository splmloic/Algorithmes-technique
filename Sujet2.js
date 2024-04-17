//Nous allons te donner une liste contenant la hauteur (en étages) d'immeubles appartenant à une rue, d'est en ouest.
//Un agent immobilier voudrait que tu écrives un algorithme qui retourne combien de bâtiments de cette rue ont au moins un appartement avec une vue sur le soleil couchant (à l'ouest), afin de bien évaluer la valeur des bâtiments de la rue.

//Par exemple, avec la liste [3, 7, 8, 3, 6, 1], la fonction devrait retourner 3, puisque l'étage le plus haut des immeubles ayant comme taille 8, 6, et 1 ont tous une vue à l'ouest.
// Ou autre exemple la liste [1, 4, 5, 8] devrait te retourner 1 puisque seul le dernier bâtiment a au moins un appartement avec une vue à l'ouest.
const list = [3, 7, 8, 3, 6, 1]; // expected result = 3

//Exercice 2
// Résous le sujet 2 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.
function exo2(list) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    let westWiew = true;
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] >= list[i]) {
        westWiew = false;
        break;
      }
    }
    if (westWiew) {
      count++;
    }
  }
  return count;
}
const result2 = exo2(list);
console.log(`L'exercice 2 renvoie ` + result2 + " en suivant la logique O(n²)");
//Exercice 4
//Résous le sujet 2 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).
function exo4(list) {
  let count = 1;
  let maxhigh = list[list.length - 1];
  for (i = list.length - 2; i >= 0; i--) {
    if (list[i] > maxhigh) {
      maxhigh = list[i];
      count++;
    }
  }
  return count;
}
const result4 = exo4(list);
console.log(`L'exercice 4 renvoie ` + result4 + " en suivant la logique O(n)");

//Exercice 6
//Résous le sujet 2 en ne faisant qu'un seul passage sur ta liste.
//Si tu réussis cet exercice, sache qu'il a été posé en entretien par Mailchimp. Tu peux postuler à Mailchimp. La classe, non ?
function exo6(list) {
  let count = 1;
  let maxhigh = list[0];
  for (i = 1; i < list.length; i++) {
    if (list[i] > maxhigh) {
      maxhigh = list[i];
      count++;
    }
  }
  return count;
}
const result6 = exo6(list);
console.log(`L'exercice 6 renvoie ` + result4 + " en passant une seule fois");
