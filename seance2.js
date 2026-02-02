/**
 * Cette fonction calcule la somme des entiers contenus dans un tableau
 * @param {array} tableau_entiers - Le tableau contenant les entiers
 * @returns {Number | String} - Retourne la somme des éléments du tableau ou un message d'erreur si le tableau ne contient pas de nombres
 */
const sumWithoutReduce = (tableau_entiers) => {
  // Pour la semaine prochaine :
  // Faire le code pour calculer la somme des éléments du tableau
  // En utilisant la boucle que tu veux, mais pas la fonction reduce
};

function sum(tableau_entiers) {
  const initialValue = 0;
  const sum = tableau_entiers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return sum;
}

console.log(sum([3, 1, 4, 1])); // Doit afficher 9
console.log(sum([10, 20, 30])); // Doit afficher 60

console.log(sumWithoutReduce([3, 1, 4, 1])); // Doit afficher 9
console.log(sumWithoutReduce([10, 20, 30])); // Doit afficher 60
