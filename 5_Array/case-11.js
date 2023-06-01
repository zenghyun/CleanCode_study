/**
 * 불변성 (immutable)
 * 1. 배열을 복사한다.
 * 2. 새로운 배열을 반환하는 메서드들을 활용한다. 
 * 3. filter, map, slice 등등이 새로운 배열로 반환함 
 */

const originArray = ['123', '456', '789'];

const newArray1 = originArray;

const newArray2 = [...originArray];

originArray.push(10);
originArray.push(11);
originArray.push(12);
originArray.unshift(0);

// 원본 배열 변경 
console.log(newArray1);

// 원본 배열 유지
console.log(newArray2);