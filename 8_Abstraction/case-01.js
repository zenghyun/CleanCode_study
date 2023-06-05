/**
 * Magic Number
 */

// 변경 전 
// setTimeout(() => {
//     scrollToTop();
// }, 3 * 60 * 1000);


// 변경 후 
const COMMON_DELAY_MS = 3 * 60 * 1000;

// setTimeout(() => {
//     scrollToTop();
// }, COMMON_DELAY_MS);



// Numeric Operator
const PRICE = {
    MIN: 1_000_000, // 1백만원
    MAX: 100_000_000, // 1억원
};

console.log(PRICE);

// MIN, MAX

// 변경 전 
// getRandomPrice(1000000, 100000000); 

// 변경 후
// getRandomPrice(PRICE.MIN, PRICE.MAX);

//  -

// 변경 전 

function isValidName(name) {
    return carName.length >= 1 && carName.length <= 5;
}

// 변경 후 

const CAR_NAME_LEN = ({
    MIN: 1,
    MAX: 5
})

function isValidName(name) {
    return carName.length >= CAR_NAME_LEN.MIN && carName.length <= CAR_NAME_LEN.MAX;
}
 
const notiValidName = value => {
    if (!isArrayItemLengthRange(names, CAR_NAME_LEN.MIN, CAR_NAME_LEN.MAX)) {
        alert(`자동차 이름은 ${CAR_NAME_LEN.MIN}자에서 ${CAR_NAME_LEN.MAX}자까지 입력할 수 있습니다.`);
    }
}