let food = {
  apple: 3,
  banana: 4,
  raspberry: 6,
  melon: 2,
};

const foodWithDoublePrices = Object.fromEntries(
  Object.entries(food).map((f) => [f[0], f[1] * 2])
);

console.log(foodWithDoublePrices);

function multiplyPrices(obj, multiplier) {
  return Object.fromEntries(
    Object.entries(obj).map((product) => [product[0], product[1] * multiplier])
  );
}

console.log(multiplyPrices(food, 5));

// Sum the properties
// importance: 5
// There is a salaries object with arbitrary number of salaries.

// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

// If salaries is empty, then the result must be 0.

// For instance:

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(obj) {
  let salaries = 0;
  Object.values(obj).forEach((v) => (salaries += v));
  return salaries;
}

// reduce loops over array of salaries,
// adding them up
// and returns the result
function sumSalaries2(salaries) {
  return Object.values(salaries).reduce((a, b) => a + b, 0); // 650
}

console.log(sumSalaries(salaries)); // 650

// Count properties
// importance: 5
// Write a function count(obj) that returns the number of properties in the object:

let user = {
  name: "John",
  age: 30,
};

function count(obj) {
  return Object.keys(obj).length;
}

console.log(count(user)); // 2
