function majoritePairsImpairs(arr) {
  const counts = {};

  for (const val of arr) {
    if (counts[val] == undefined) {
      counts[val] = 1;
    } else {
      ++counts[val];
    }
//    counts[val] = (counts[val] || 0) + 1;
  }
  let maxCount = 1;
  let maxKey = 0;
  for (const [key, count] of Object.entries(counts)) {
    if (count > maxCount) {
      maxCount = count;
      maxKey = key;
    }
  }
  if (maxCount > 1) {
    return String(maxKey);
  }
  const count = {
    pairs: 0,
    impairs: 0,
  };
  arr.forEach((element) => {
    if (element % 2 === 0) {
      count.pairs++;
    } else {
      count.impairs++;
    }
  });

  if (count.pairs > count.impairs) return "Majorité pairs";
  if (count.impairs > count.pairs) return "Majorité impairs";
  return "Pas de majorité";

}

console.log(majoritePairsImpairs([3, 1, 4, 1, 3]));
console.log(majoritePairsImpairs([33, 44, 55, 66, 77])); // "Doit afficher 'Majorité impairs'
console.log(majoritePairsImpairs([1, 2, 3, 4])); // Doit afficher 'Pas de majorité'
console.log(majoritePairsImpairs([12,15,16,17]));

