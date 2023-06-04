/**
 * void & return 
 */


// react 
function handleClick() {
    return setState(false); // 굳이 return을 쓸 필요가 없다.
}

function showAlert(message) {
    return alert(message); // 굳이 return을 쓸 필요가 없다.
}

//  JS는 아무것도 반환하지 않을 때 기본적으로 undefined를 반환한다. 

function test(sum1, sum2) {
    const result = sum1 + sum2;
}

function testVoidFunc() {
    return test(1,2);
}

console.log( testVoidFunc() );  // undefined

// Array.push는 length를 return으로 반환한다. 

function aryReturn() {
    const arr = [1,2];
    return arr.push(10);
}

console.log( aryReturn() ); // 3


// 함수명이 반환 값이 있음을 의미하는 경우 

function isAdult(age) {
    return age > 19;
}

function getUserName(name) {
    return '유저' + name; 
}

const isFrag = isAdult(10);

console.log(typeof isFrag); // boolean

// 즉 반환값이 있어야 하는 함수의 경우 네이밍부터 반환값이 있음을 나타낼 수 있게 명시해야 한다. 