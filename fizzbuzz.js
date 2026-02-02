let fizzbuzz = (number) => {
  if (number % 5 == 0 && number % 3 == 0) {
    return "FizzBuzz";
  }
  if (number % 3 == 0) {
    return "Fizz";
  }
  if (number % 5 == 0) {
    return "Buzz";
  }

  return number;
};

console.log(fizzbuzz(1)); // 1
console.log(fizzbuzz(2)); // 2
console.log(fizzbuzz(3)); // Retourne "Fizz"
console.log(fizzbuzz(4)); // 4
console.log(fizzbuzz(5)); // Retourne "Buzz"
console.log(fizzbuzz(6)); // Retourne "Fizz"
console.log(fizzbuzz(7)); // 7
console.log(fizzbuzz(8)); // 8
console.log(fizzbuzz(9)); // Retourne "Fizz"
console.log(fizzbuzz(10)); // Retourne "Buzz"
console.log(fizzbuzz(15)); // Retourne "Fizz"
console.log(fizzbuzz(30)); // Retourne "Fizz"

function fizzBuzz(number) {
  let result = "";

  if (number % 3 == 0 || String(number).includes("3")) {
    result += "Fizz";
  }

  if (number % 5 == 0 || String(number).includes("5")) {
    result += "Buzz";
  }

  return result.length > 0 ? result : number;
}

// Exemples d'utilisation
console.log(fizzBuzz(1)); // 1
console.log(fizzBuzz(2)); // 2
console.log(fizzBuzz(3)); // Fizz
console.log(fizzBuzz(4)); // 4
console.log(fizzBuzz(5)); // Buzz
console.log(fizzBuzz(6)); // Fizz
console.log(fizzBuzz(10)); // Buzz
console.log(fizzBuzz(11)); // 11
console.log(fizzBuzz(12)); // Fizz
console.log(fizzBuzz(13)); // Fizz
console.log(fizzBuzz(15)); // FizzBuzz
console.log(fizzBuzz(51)); // FizzBuzz
console.log(fizzBuzz(52)); // Buzz

function compute() {
    for (let num = 1; num <= 100; num++) {
        let result = '';

        if (num % 3 === 0 || String(num).includes('3')) {
            result += 'Fizz';
        }

        if (num % 5 === 0 || String(num).includes('5')) {
            result += 'Buzz';
        }

        if (result.length === 0) {
            result = num;
        }

        console.log(result);
    }
}
compute();