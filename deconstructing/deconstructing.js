// Destructuring assignment
// importance: 5
// We have an object:

// let user = {
//   name: "John",
//   years: 30
// };

// Write the destructuring assignment that reads:

// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false, if no such property)
// Here’s an example of the values after your assignment:

let user = { name: "John", years: 30 };

let { name, years: age, isAdmin = false } = user;

// your code to the left side:
// ... = user

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false

// The maximal salary
// importance: 5
// There is a salaries object:

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

// Create the function topSalary(salaries) that returns the name of the top-paid person.

// If salaries is empty, it should return null.
// If there are multiple top-paid persons, return any of them.
// P.S. Use Object.entries and destructuring to iterate over key/value pairs.

function getPersonWithTopSalary(salaries) {
  if (!salaries) return null;

  let topSalary = 0;
  let personWithBestSalary = "";
  for ([name, salary] of Object.entries(salaries)) {
    if (salary > topSalary) {
      topSalary = salary;
      personWithBestSalary = name;
    }
  }

  return personWithBestSalary;
}

console.log(getPersonWithTopSalary(salaries));
