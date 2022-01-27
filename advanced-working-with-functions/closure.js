// Does a function pickup latest changes?
// importance: 5
// The function sayHi uses an external variable name. When the function runs, which value is it going to use?

let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"?
//  Pete;

// Which variables are available?
// importance: 5
// The function makeWorker below makes another function and returns it. That new function can be called from somewhere else.

// Will it have access to the outer variables from its creation place, or the invocation place, or both?

function makeWorker() {
  let name2 = "Pete";

  return function () {
    console.log(name2);
  };
}

let name2 = "John";

// create a function
let work = makeWorker();

// call it
work(); // what will it show?
// Pete

// Are counters independent?
// importance: 5
// Here we make two counters: counter and counter2 using the same makeCounter function.

// Are they independent? What is the second counter going to show? 0,1 or 2,3 or something else?

function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

console.log(counter2()); // ?
console.log(counter2()); // ?
// 0,1

// Counter object
// importance: 5
// Here a counter object is made with the help of the constructor function.

// Will it work? What will it show?

function Counter2() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter3 = new Counter2();

console.log(counter3.up()); // ? 1,
console.log(counter3.up()); // ? 2
console.log(counter3.down()); // ? 1

// Function in if
// Look at the code. What will be the result of the call at the last line?

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi(); // in non strict env this works.

// Sum with closures
// importance: 4
// Write function sum that works like this: sum(a)(b) = a+b.

// Yes, exactly this way, using double parentheses (not a mistype).

// For instance:

function sum(number) {
  return function sum2(number2) {
    return number + number2;
  };
}

// shorter one would be const sum = a => b => a + b

console.log(sum(1)(2)); //= 3
console.log(sum(5)(-1)); //= 4

// Is variable visible?
// importance: 4
// What will be the result of this code?

let x = 1;

// function func() {
//   console.log(x); // ?

//   let x = 2;
// }

// func(); // error, x called before it gets initialized

// Filter through function
// importance: 5
// We have a built-in method arr.filter(f) for arrays. It filters all elements through the function f. If it returns true, then that element is returned in the resulting array.

// Make a set of “ready to use” filters:

// inBetween(a, b) – between a and b or equal to them (inclusively).
// inArray([...]) – in the given array.
// The usage must be like this:

// arr.filter(inBetween(3,6)) – selects only values between 3 and 6.
// arr.filter(inArray([1,2,3])) – selects only elements matching with one of the members of [1,2,3].
// For instance:

/* .. your code for inBetween and inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2;

// Sort by field
// importance: 5
// We’ve got an array of objects to sort:

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];
// The usual way to do that would be:

// // by name (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// // by age (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// Can we make it even less verbose, like this?

// users.sort(byField('name'));
// users.sort(byField('age'));
// So, instead of writing a function, just put byField(fieldName).

// Write the function byField that can be used for that.

function byField(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}

console.log(users.sort(byField("name")));

// Army of functions
// importance: 5
// The following code creates an array of shooters.

// Every function is meant to output its number. But something is wrong…

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function () {
      // create a shooter function,
      console.log(j); // that should show its number
    };
    shooters.push(shooter); // and add it to the array
    i++;
  }

  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2](); // 10 ...and so on.
// Why do all of the shooters show the same value?

// Fix the code so that they work as intended.
