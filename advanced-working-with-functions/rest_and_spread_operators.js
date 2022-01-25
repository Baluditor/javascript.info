// Rest
function sumAll(...args) {
  let = res = 0;
  for (num of args) {
    res += num;
  }

  return res;
}

console.log(sumAll(12, 2, 2321, 5, 11, 2));

// Spread
const arr = [1, 23, 213, 21, 321, 412, 512, 1];

// Copy an array;
const copyArr = [...arr];

// Used together
function findMax(...args) {
  return Math.max(...args);
}

console.log(findMax(1, 2, 3, 4, 5, 6, 7, 32, 41, 4, 632, 52, 23));
