"use strict";

let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");

function replaceMiddle(array, newValue) {
  array[Math.floor((array.length - 1) / 2)] = newValue;
  return array;
}

console.log(replaceMiddle(styles, "Classic"));
console.log(styles.shift());
styles.unshift("Rap", "Reggae");
console.log(styles);

function sumInput() {
  let numbers = [];

  while (true) {
    let value = prompt("A number please?", 0);

    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

// console.log(sumInput());

// function getMaxSubSum(array) {
//   // Set the initial maximum value to 0;
//   let maxSum = 0;
//   // Loop though the array;
//   for (let i = 0; i < array.length; i++) {
//     // Set an initial variable for the partial array's max value
//     let sumPartial = 0
//     // Loop though only the subarray starting (started from the outer counter)
//     for (let j = i; j < array.length; j++) {
//       // Sum the subarray up
//       sumPartial += array[j];
//       // Find out if the maxSum or the sumFixedStart was bigger
//       maxSum = Math.max(maxSum, sumPartial);
//     }
//   }

//   return maxSum;
// }

function getMaxSubSum(array) {
  maxSum = 0;

  for (let i = 0; i < array.length; i++) {
    let tempSum = 0;
    for (let j = i; j < array.length; j++) {
      tempSum += array[j];
      maxSum = Math.max(maxSum, tempSum);
    }
  }

  return maxSum;
}

// alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
// alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
// alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
// alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
// alert( getMaxSubSum([1, 2, 3]) ); // 6
// alert( getMaxSubSum([-1, -2, -3]) ); // 0

let loreText = "It is a long established fact that a reader will be distracted";

let loreArr = loreText.split(" ");

console.log(loreArr);

let removeTwoArray = loreArr.splice(0, 2);

let addTwoArr = loreArr.splice(0, 0, "It", "'s");

console.log(loreArr);

function camelize(text) {
  let wordArr = text.split("-");

  let camelCaseText = "";
  for (let i = 0; i < wordArr.length; i++) {
    camelCaseText +=
      i === 0
        ? wordArr[i]
        : wordArr[i].slice(0, 1).toUpperCase() + wordArr[i].slice(1);
  }

  return camelCaseText;
}

//  More elegant solution

function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

console.log(
  camelize("background-color") == "backgroundColor",
  camelize("list-style-image") == "listStyleImage",
  camelize("-webkit-transition") == "WebkitTransition"
);

console.log(
  camelize("background-color"),
  camelize("list-style-image"),
  camelize("-webkit-transition")
);

function filterRange(arr, min, max) {
  return arr.filter((v) => v >= min && v <= max);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (matching values)

console.log(arr); // 5,3,8,1 (not modified)

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

// let arr2 = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log(arr); // [3, 1]

let arr2 = [5, 2, 1, -10, 8];

arr2.sort((a, b) => (a > b ? -1 : 1));

// Or even shorter
arr2.sort((a, b) => b - a);

console.log(arr2); // 8, 5, 2, 1, -10

function copySorted(arr) {
  let copyArr = arr.slice();
  return copyArr.sort((a, b) => a.localeCompare(b));
}

let arr3 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr3);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr3); // HTML, JavaScript, CSS (no changes)

function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator();

console.log(calc.calculate("3 + 7"));

// MIND = BLOWN! Forgot that you actually can do this. AMAZING!
let method = {
  sup: (name) => `Sup ${name}`,
  sup2: function name2(params) {
    for (let index = 0; index < 10; index++) {
      console.log(params);
    }
  },
};

console.log(method["sup"]("Adri"));
console.log(method["sup2"]("Adri"));

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];

// let names = users.map((u) => u.name);

// console.log(names); // John, Pete, Mary

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// let usersMapped = users.map((u) => ({
//   ["fullName"]: `${u.name} ${u.surname}`,
//   id: u.id,
// }));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

// console.log(usersMapped[0].id); // 1
// console.log(usersMapped[0].fullName); // John Smith

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr4 = [pete, john, mary];

// function sortByAge(arr) {
//   return arr.sort((a, b) => a.age - b.age);
// }

// sortByAge(arr4);

// now: [john, mary, pete]
// console.log(arr4[0].name); // John
// console.log(arr4[1].name); // Mary
// console.log(arr4[2].name); // Pete

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
let arr5 = [1, 2, 3];

console.log(shuffle(arr5));
console.log(shuffle(arr5));
console.log(shuffle(arr5));
console.log(shuffle(arr5));

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr6 = [john, pete, mary];

function getAverageAge(arr) {
  return arr.reduce((acc, user) => acc + user.age, 0) / arr.length;
}

console.log(getAverageAge(arr6)); // (25 + 30 + 29) / 3 = 28

function unique(arr) {
  return Array.from(new Set(arr));
}

let strings = [
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

console.log(unique(strings)); // Hare, Krishna, :-O

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

function groupById(arr) {
  let grouped = {};

  arr.forEach((u) => {
    grouped[u.id] = u;
  });

  return grouped;
}

// Other solution
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

let usersById = groupById(users);

console.log(usersById);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
