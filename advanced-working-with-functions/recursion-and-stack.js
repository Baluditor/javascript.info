"use strict";

import { data } from "./data.js";

// Sum all numbers till the given one
// importance: 5
// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// For instance:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Make 3 solution variants:

// Using a for loop.
// Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
// Using the arithmetic progression formula.
// An example of the result:

// function sumTo(n) { /*... your code ... */ }

// alert( sumTo(100) ); // 5050
// P.S. Which solution variant is the fastest? The slowest? Why?

// P.P.S. Can we use recursion to count sumTo(100000)?

function sumToLoop(number) {
  if (number < 0) return 0;
  let result = 0;
  for (let i = 0; i <= number; i++) {
    result += i;
  }

  return result;
}

function sumToRecursion(number) {
  if (number < 0 || number === 0) return;
  if (number === 1) return 1;

  return number + sumToRecursion(number - 1);
}

function sumToFormula(number) {
  if (number < 0 || number === 0) return;
  return (number * (number + 1)) / 2;
}

console.log(sumToLoop(100));
console.log(sumToRecursion(100));
console.log(sumToFormula(100));

// Calculate factorial
// importance: 4
// The factorial of a natural number is a number multiplied by "number minus one", then by "number minus two", and so on till 1. The factorial of n is denoted as n!

// We can write a definition of factorial like this:

// n! = n * (n - 1) * (n - 2) * ...*1
// Values of factorials for different n:

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// The task is to write a function factorial(n) that calculates n! using recursive calls.

// alert( factorial(5) ); // 120
// P.S. Hint: n! can be written as n * (n-1)! For instance: 3! = 3*2! = 3*2*1! = 6

function factorial(n) {
  if (n === 1) return n;
  return n * factorial(n - 1);
}

console.log(factorial(5));

// Fibonacci numbers
// importance: 5
// The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. In other words, the next number is a sum of the two preceding ones.

// First two numbers are 1, then 2(1+1), then 3(1+2), 5(2+3) and so on: 1, 1, 2, 3, 5, 8, 13, 21....

// Fibonacci numbers are related to the Golden ratio and many natural phenomena around us.

// Write a function fib(n) that returns the n-th Fibonacci number.

// An example of work:

// function fib(n) { /* your code */ }

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757
// P.S. The function should be fast. The call to fib(77) should take no more than a fraction of a second.

function fib(n) {
  if (n === 0) return n;
  if (n === 1 || n === 2) return 1;

  return fib(n - 1) + fib(n - 2);
}

// From javascript.info

function fib2(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fib(3));
console.log(fib(7));
console.log(fib2(77));

// Output a single-linked list
// importance: 5
// Let’s say we have a single-linked list (as described in the chapter Recursion and stack):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
// Write a function printList(list) that outputs list items one-by-one.

// Make two variants of the solution: using a loop and using recursion.

// What’s better: with recursion or without it?

function printListLoop(list) {
  while (list) {
    console.log(list.value);
    list = list.next;
  }
}

printListLoop(list);

function printListRecursion(list) {
  console.log(list.value);

  if (list.next) {
    printListRecursion(list.next);
  }
}

printListRecursion(list);

// Output a single-linked list in the reverse order
// importance: 5
// Output a single-linked list from the previous task Output a single-linked list in the reverse order.

// Make two solutions: using a loop and using a recursion.

function printReverseList(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

function printListReverseRecursion(list) {
  if (list.next) {
    printListReverseRecursion(list.next);
  }

  console.log(list.value);
}

printReverseList(list);
printListReverseRecursion(list);

const rootFolders = data.filter((d) => {
  if (d.parentIds)
    return d.parentIds.includes("04ca1bffeebab6c09c42247b5bc61246");
  return false;
});

console.log(rootFolders.length);
console.log(data.length);

const createDataTree = (dataset) => {
  const hashTable = Object.create(null);

  dataset.forEach(
    (aData) => (hashTable[aData.id] = { ...aData, childNodes: [] })
  );
  return hashTable;
};

console.log(createDataTree(data.slice(0, 19)));

// const createDataTree = (dataset) => {
//   const hashTable = Object.create(null);
//   dataset.forEach(
//     (aData) => (hashTable[aData.ID] = { ...aData, childNodes: [] })
//   );
//   const dataTree = [];
//   dataset.forEach((aData) => {
//     if (aData.parentID)
//       hashTable[aData.parentID].childNodes.push(hashTable[aData.ID]);
//     else dataTree.push(hashTable[aData.ID]);
//   });
//   return dataTree;
// };
