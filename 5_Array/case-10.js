/**
 * 불변성 (immutable)
 */

const originArray = ['123', '456', '789'];

const newArray = originArray;

originArray.push(10);
originArray.push(11);
originArray.push(12);
originArray.unshift(0);

console.log(newArray);