let range = {
  start: 0,
  end: 5,
};

range[Symbol.iterator] = function () {
  return {
    current: this.start,
    last: this.end,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

for (let num of range) {
  console.log(num);
}

// Shorter versiob, but can't run the iterator concurrently.

let rangeSort = {
  start: 0,
  end: 10,

  [Symbol.iterator]() {
    this.current = this.start;
    return this;
  },

  next() {
    if (this.current <= this.end) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};

for (let num of rangeSort) {
  console.log(num);
}

//  Calling an iterator explicityl
let str = "Adri";

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value);
}

let rangeArray = Array.from(range);

console.log(rangeArray);

let rangeArrayWithCustomMap = Array.from(range, (num) => num * num);
// Long from
let rangeArrayWithCustomMap2 = Array.from(range, function (num) {
  return num * num;
});

console.log(rangeArrayWithCustomMap);
console.log(rangeArrayWithCustomMap2);

let text = "𝒳😂❤😍😒";

// surrogate-aware

function surreageAwareSlice(text, start, end) {
  return Array.from(text).slice(start, end).join("");
}

console.log(text);

console.log(text.slice(0, 3));
console.log(surreageAwareSlice(text, 0, 3));

let counter = {
  start: 0,
  end: 100,

  current: 0,

  //  First way to declare a function inside an object
  c() {
    console.log(`i'm c`);
  },

  // Second way to declare a function inside an object
  cc: function () {
    console.log(`i'm cc`);
    return this;
  },

  // Create an iterator
  [Symbol.iterator]() {
    // Initialize the counter
    this.current = this.start;
    // Return the itarator
    return this;
  },

  // Create a next method which will be called by the iterator
  next() {
    //  Check if the current value is bigger then the target value
    if (this.current <= this.end) {
      // If so, the iterator not finished thus the done:false,
      // Return the current value and increase it at the same time
      return { done: false, value: this.current++ };
    } else {
      // The iteration is done
      return { done: true };
    }
  },
};

// console.log(counter.cc());
// console.log(counter.c());

for (let c of counter) {
  console.log(c);
}
