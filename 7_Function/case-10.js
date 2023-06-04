/**
 * 순수 함수 (Pure Function)
 * 순수 함수는 부작용을 일으키지 않는 함수를 말하고
 * 부작용을 일으키는 함수를 "Side Effect"라고 한다. 
 */

let num1 = 10;
let num2 = 20;

function impureSum1() {
    return num1 + num2;
}
function impureSum2(newNum) {
    return num1 + newNum;
}

console.log( impureSum1() );
console.log( impureSum1() );

num1 = 30;

console.log( impureSum1() );

// -----

console.log( impureSum2(20) );

num1 = 50;

console.log( impureSum2(20) );

// 함수는 동일한 인자를 받고 동일한 출력을 내뱉어야 하는데 외부에서 값을 조작할 수 있기 때문에 위의 함수는 순수함수가 아니다. '

// 함수를 사용할 때 예측이 안되고 보장이 안되는 함수를 비순수 함수라고 한다. 

// 위의 함수를 순수 함수로 고치면 다음과 같다. 

function pureSum(num1, num2) {
    return num1 + num2;
}

console.log( pureSum(10,20) );
console.log( pureSum(10,20) );
console.log( pureSum(10,200) );
console.log( pureSum(30,200) );

// input과 output이 예측이 가능해야 순수 함수라고 할 수 있다. 


// -----------

function changeValue(num) {
    num ++;

    return num;
}

console.log( changeValue(1) );
console.log( changeValue(2) );
console.log( changeValue(3) );

// 자바스크립트에서 객체는 원시값과 다르게 작용한다. 

const obj = { one: 1 };

// 객체나 배열을 다루는 함수를 사용할 때는 새롭게 만들어서 반환해야 한다. 
function changeObj(targetObj) {
    return {...targetObj, one: 100 };
}

console.log( changeObj(obj) );

obj


