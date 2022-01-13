"use strict";
/** 
 Filter unique array members
 importance: 5
 Let arr be an array.
 
 Create a function unique(arr) that should return an array with unique items of arr.
 
 For instance:
 
 * */
function unique(arr) {
  return Array.from(new Set(arr));
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values)); // Hare, Krishna, :-O

/**
 * 
 P.S. Here strings are used, but can be values of any type.
 P.P.S. Use Set to store unique values.
 */

/**
 * Filter anagrams
importance: 4
Anagrams are words that have the same number of same letters, but in different order.

For instance:

nap - pan
ear - are - era
cheaters - hectares - teachers
Write a function aclean(arr) that returns an array cleaned from anagrams.

For instance:

*/
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let wordMap = new Map();

  arr.forEach((word) => {
    let sorted = word.toLowerCase().split("").sort().join("");
    console.log(sorted);
    wordMap.set(sorted, word);
  });

  return Array.from(wordMap.values());

  return cleanedArray;

  console.log(wordMap);
  console.log(arr);
}

console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"
// From every anagram group should remain only one word, no matter which one.
