/**
 * map vs forEach
 */


// forEach가 적절한 경우 

const prices = ['1000', '2000', '3000'];

prices.forEach( price => console.log(price + '원')); // 적절

console.log('--------');

prices.map(price => console.log(price + '원')); // 부적절





