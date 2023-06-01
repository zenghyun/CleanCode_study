/**
 * Array.length
 */

Array.prototype.clear = function () {
  this.length = 0;
};

function clearArray(array) {
  array.length = 0;

  return array;
}

let arr = [1, 2, 3];

arr.clear();

console.log(arr);

arr = [1, 2, 3];

console.log(arr);

console.log(clearArray(arr));



