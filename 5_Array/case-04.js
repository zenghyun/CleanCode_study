/**
 * Array.length
 */

const arr = [1, 2, 3];

console.log(arr.length); // 3

arr.length = 10; 

console.log(arr.length); // 10

arr // [1, 2, 3, , , , , , , ]


const arr2 = [1, 2, 3];

arr2[3] = 4; // [1, 2, 3, 4]

console.log(arr2.length); // 4

arr2[9] = 10;

arr2 // [1, 2, 3, 4, , , , , , 10]

console.log(arr2.length); // 10 



