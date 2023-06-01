/**
 * 유사 배열 객체
 */

const arrayLikeObject = {
    0: 'HELLO',
    1: 'WORLD',
    length: 2,
};

const arr = Array.from(arrayLikeObject);

console.log(Array.isArray(arrayLikeObject));

console.log(Array.isArray(arr));

console.log(arr);

console.log(arr.length);


// argument도 유사 배열 객체이다.

function generatePriceList() {
    console.log(Array.isArray(arguments));

        return Array.from(arguments).map( arg => arg + '원');
}

const newList = generatePriceList(100, 200, 300, 400, 500, 600);

console.log(newList);






