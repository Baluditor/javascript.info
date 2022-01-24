"use strict";

/**
 * The nullish coalescing operator is a nice short way to get the first
 * defined value in an expression / list.
 * */

/*
* b is undefined therefore a will be 5
* */
let b;

console.log(typeof b);

let a = b ?? 5;

console.log(a);

let c = a ?? 'right';

console.log(c);

/*
* c will be 5 as 'a' is defined
* */

c = 10;

console.log(c ?? a);
