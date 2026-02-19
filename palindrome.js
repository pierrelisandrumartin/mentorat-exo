/**
 * Checks if a given string is a palindrome.
 *
 * @param {string} mot - The string to check.
 * @returns {boolean} - Returns true if the string is a palindrome, false otherwise.
 */

function isPalindrome(str) {
  if (
    str.includes("!") ||
    str.includes(" ") ||
    str.includes("?") ||
    str.includes(",")
  ) {
    return reverseString(str);
  } else {
    return checkUppercaseSpacesString(str);
  }
}

function reverseString(str) {
  let processed = str
    .toLowerCase()
    .trim()
    .replace(/[^a-zA-Z0-9]/g, "");

  let reverse = processed.split("").reverse().join("");

  if (reverse === processed) {
    return true;
  } else {
    return false;
  }
}

console.log("Anna : ", isPalindrome("anna"));
console.log("Walter : ", isPalindrome("walter"));
console.log("Aba : ", isPalindrome("aba"));

console.log("AMAPACP - true : ", isPalindrome("A man a plan a canal Panama"));
console.log(isPalindrome("Was it a car or a cat I saw?"));
console.log(isPalindrome("No lemon, no melon"));
console.log(isPalindrome("Hello, World!"));

console.log("Able was I, I saw Elba> ", isPalindrome("Able was I, I saw Elba"));
console.log("Racecar! > ", isPalindrome("Racecar!"));
console.log("Step on no pets! >> ", isPalindrome("Step on no pets!"));
console.log("aBba! > ", isPalindrome("aBba!"));

function checkUppercaseSpacesString(str) {
  let processed = str.toLowerCase().trim();

  let reverse = processed.split("").reverse().join("");

  return reverse === processed;
}
console.log("abcdDCBA > ", isPalindrome("abcdDCBA"));
console.log("ABBA> ", isPalindrome("ABBA"));
console.log("aBBa > ", isPalindrome("aBBa"));

// console.log(reverseString("abcdefghhgfedcba"));
// console.log(reverseString("abcdefghijk"));
// console.log(reverseString("aaabbbcccbbbaaa"));

// console.log(reverseString("abcba "));
// console.log(reverseString("0"));

function reverseNumber(num) {
  let Strnum = num.toString();
  let processed = Strnum.split().reverse().join();

  return Strnum === processed;
}

// console.log("12344321 >>> ", isPalindrome(12344321));
