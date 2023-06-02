/**
 * Object Destructuring
 */

// 변경 전

const orders = ["First", "Second", "Third"];

const [first, , third] = orders;

console.log(first);

console.log(third);

// 변경 후 (이렇게도 가능하다.)

const { 0: st, 2: rd } = orders;

console.log(st);

console.log(rd);


