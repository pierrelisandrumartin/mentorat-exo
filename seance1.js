const sayHello1 = "Say Hello";

const sayHello = (nom) => {
  console.log("Hello " + nom + " ! Bienvenue :)");
};

sayHello("Laïla");
sayHello("Lucas");
sayHello("Pierre");
sayHello("Marie");

// Fonctions à faire pour la semaine prochaine (Séance 2)
// click droit plus code run pour voir un morceau de code

/**
 * Cette fonction dit si une personne est mineure ou majeure.
 * @param {number} age - L'âge de la personne.
 * @returns {boolean} - Retourne true si la personne est mineure (moins de 18 ans), false sinon.
 */
const isMinor = (age) => {
  if (age >= 17) {
    return false;
  } else {
    return true;
  }
};

if (isMinor(15) === true) {
  console.log("Je suis mineur!");
}

console.log(isMinor(15)); // true
console.log(isMinor(18)); // false
console.log(isMinor(20)); // false

/**
 * Cette fonction dit si une personne est mineure ou majeure.
 * @param {number} age - L'âge de la personne.
 * @param {string} country - Le pays de la personne ("France" ou "USA").
 * @returns {boolean} - Retourne true si la personne est mineure (moins de 18 ans), false sinon.
 */
const isMinorWorldwide = (age, country) => {
  let majorityAge;
  if (country == "France") {
    majorityAge = 18;
  }
  if (country == "USA") {
    majorityAge = 21;
  }
  if (age >= majorityAge) {
    return false;
  } else {
    return true;
  }
};

console.log("--- Tests isMinorWorldwide ---");

console.log(isMinorWorldwide(15, "France")); // true
console.log(isMinorWorldwide(18, "France")); // false
console.log(isMinorWorldwide(17, "USA")); // true
console.log(isMinorWorldwide(18, "USA")); // true
console.log(isMinorWorldwide(21, "USA")); // false

// Consulter la documentation sur les objets: https://www.w3schools.com/js/js_objects.asp
/**
 * Cette fonction dit si une personne est mineure ou majeure en fonction de ses propriétés
 * @param {Object} person - Un objet représentant une personne avec les propriétés "name", "age" et "country".
 * @return {boolean} - Retourne true si la personne est mineure, false sinon.
 */
const isPersonMinorWorldwide = (person) => {
  let Majority;
  if (person.country == "France") {
    Majority = 18;
  }
  if (person.country == "USA") {
    Majority = 21;
  }
  if (person.age >= Majority) {
    return  false;
  } else {
    return  true;
  }
};

console.log(
  isPersonMinorWorldwide({ name: "Alice", age: 17, country: "France" })
); // true
console.log(
  isPersonMinorWorldwide({ name: "Alice", age: 20, country: "France" })
); // false
console.log(isPersonMinorWorldwide({ name: "Alice", age: 20, country: "USA" })); // true

// https://www.codepassport.dev/js

// creer repo git
