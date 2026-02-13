/**
 * Checks if a given string is a palindrome.
 *
 * @param {string} mot - The string to check.
 * @returns {boolean} - Returns true if the string is a palindrome, false otherwise.
 */

function reverseString(str) {
  let processed = str
    .toLowerCase()
    .trim()
    .replace(/[^a-zA-Z0-9]/g,'')

  let reverse = processed
  .split("")
  .reverse()
  .join("");

  if (reverse === processed) {
    return "true";
  } else return "false";
}

console.log(reverseString("anna"));
console.log(reverseString("walter"));
console.log(reverseString("aba"));
console.log(reverseString("abc"));
console.log(reverseString("12321"));
console.log(reverseString("12345"));

console.log(reverseString("A man a plan a canal Panama"));
console.log(reverseString("Was it a car or a cat I saw?"));
console.log(reverseString("No lemon, no melon"));
console.log(reverseString("Hello, World!"));

console.log(reverseString("Madam, in Eden, I'm Adam"));
console.log(reverseString("Eva, can I see bees in a cave?" ));
console.log(reverseString("Palindrome? Not really!"));

console.log(reverseString("a1b2b1a"));
console.log(reverseString("1a2b3b2a1"));
console.log(reverseString("1a2b3b2a1" ));
console.log(reverseString("123abcba321"));

function reverseString(str) {
  let processed = str
    .toLowerCase()
    .trim()

  let reverse = processed
  .split("")
  .reverse()
  .join("");

  if (reverse === processed) {
    return "true";
  } else return "false";
}
console.log(reverseString("abcdDCBA"));
console.log(reverseString("ABBA"));
console.log(reverseString("aBBa"));
console.log(reverseString("aBba!"));

function reverseString(str) {
  let processed = str
    .toLowerCase()
    .trim()
    .replace(/[^a-zA-Z0-9]/g, "");

  let reverse = processed.split("").reverse().join("");

  if (reverse === processed) {
    return "true";
  } else return "false";
}

console.log(reverseString("Able was I, I saw Elba"));
console.log(reverseString("Racecar!"));
console.log(reverseString("Step on no pets!"));

console.log(reverseString("abcdefghhgfedcba"));
console.log(reverseString("abcdefghijk"));
console.log(reverseString("aaabbbcccbbbaaa"));

console.log(reverseString("abcba "));
console.log(reverseString("0"));



function reverseNumber(num) {
  let Strnum = num.toString();
  let processed = Strnum.split().reverse().join();

  if (Strnum === processed) {
    return "true";
  } else return "false";
}

console.log(reverseNumber(12344321));
