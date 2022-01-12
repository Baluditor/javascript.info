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
