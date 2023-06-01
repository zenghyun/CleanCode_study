/**
 * map vs forEach
 */


// return이 있느냐 없느냐 

const prices = ['1000', '2000', '3000'];


// forEach의 반환 값은 undefined이다. 함수를 실행시켜주는 것이 전부이다. 
const newPriceForEach = prices.forEach( (price) => {
    return price + '원';
});

// map 요소마다 반환된 값이 조작을 가한다. 
const newPricesMap = prices.map( price => {
    return price + '원';
}
);

console.log(newPriceForEach); // undefined

console.log(newPricesMap); // ['1000원', '2000원', '3000원'];





