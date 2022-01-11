let styles = ['Jazz', 'Blues',];

styles.push('Rock-n-Roll');

function replaceMiddle(array, newValue) {
  array[Math.floor((array.length -1 )/2)] = newValue;
  return array;
}

console.log(replaceMiddle(styles, 'Classic'));
console.log(styles.shift());
styles.unshift('Rap', 'Reggae')
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

function getMaxSubSum(array) {
  // Set the initial maximum value to 0;
  let maxSum = 0;
  // Loop though the array;
  for (let i = 0; i < array.length; i++) {
    // Set an initial variable for the partial array's max value
    let sumPartial = 0
    // Loop though only the subarray starting (started from the outer counter)
    for (let j = i; j < array.length; j++) {
      // Sum the subarray up
      sumPartial += array[j];
      // Find out if the maxSum or the sumFixedStart was bigger
      maxSum = Math.max(maxSum, sumPartial);
    }
  }
  
  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0
