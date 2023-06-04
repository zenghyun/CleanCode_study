/**
 * 복잡한 인자 관리하기 
 * 
 * 매개변수의 개수는 몇개가 적당한가? 
 * 
 * 보통 2개까지를 적절하다고 보지만, 명시적으로 그 쓰임의 용도가 명확하다면 그 이상도 상관없다. 
 * 맥락과 흐름을 파악할 수 있다면 많다고 무조건 나쁜건 아니다. 
 */

function toggleDisplay(isToggle) {
    // ...some code
}

function sum(sum1, sum2) {
    // ...some code
}

function genRandomNumber(min, max) {
    // ....some code
}

function timer(start, stop, end) {
    // ...some code 
}


// 매개변수의 개수가 많아도 좋은 예
function genSquare(top, right, bottom, left) {
    // ...some code
}

// 매개변수의 개수가 많을 때 안좋은 예 
function createCar(name, brand, color, type) {
    return {
        name,
        brand,
        color,
        type
    };
}

// 위의 코드를 개선 
function createCar({name, brand, color, type}) {
    if(!name){
        throw new Error('name is a required');
    }
    if(!brand){
        throw new Error('brand is a required');
    }
    if(!color){
        throw new Error('color is a required');
    }
    if(!type){
        throw new Error('type is a required');
    }

    return {
        name,
        brand,
        color,
        type
    };
}

const option = (
    {
        name : 'car',
        brand: 'bmw',
        // color: 'black',
        type: 'no option',
    }
)

console.log( createCar(option));