const bears = [
  {
    name: "Winnie",
    hunger: 10,
  },
  {
    name: "Baloo",
    hunger: 6,
  },
  {
    name: "Yogi",
    hunger: 9,
  },
  {
    name: "Paddington",
    hunger: 2,
  },
  {
    name: "Chicago",
    hunger: 9,
  }
];

const averageHunger = (bears) => {
  let sum = 0;
  bears.forEach(function (bear) {
    sum = sum + bear.hunger;
  });

  // Moyenne = (Somme des éléments) / (Nombre d'éléments)
  const moyenne = sum / bears.length;
  return moyenne;
};
const hungryBears = (bears) => {
// return averageHunger (bears) 
for (let i = 0; i < bears.length; i++){
if (bears[i].hunger > averageHunger(bears)){
console.log(bears[i].name);

}
  
}
}


console.log(averageHunger(bears)); // Etape 1 - On affiche la moyenne (Devrait afficher 7.2)
(hungryBears(bears)); // Etape 2 - On affiche les ours dont le niveau de faim est supérieur à la moyenne (Devrait afficher Winnie, Yogi, Chicago)
