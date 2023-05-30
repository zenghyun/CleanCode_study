// 부정 조건문 지양하기 

/**
 * 1. 생각을 여러번 해야할 수 있다. 
 * 2. 프로그래밍 언어 자체로 if문이 처음부터 오고 true부터 실행시킨다. 
 */

/**
 * 부정조건문을 사용하기 좋을 때
 * 1. Early Return
 * 2. Form Validation
 * 3. 보안 혹은 검사하는 로직 
 */

const isCondition = true;
const isNotCondition = false; 

// NaN Not a Number

// 숫자일때만

if(!isNaN(3)) {
    console.log('숫자입니다.');
}

// 위 보다는 아래가 명시적으로 좋다. 

function isNumber(num) {
    return !Number.isNaN(num) && typeof num === 'number';
}

if(isNumber(3)){
    console.log('숫자입니다.'); 
}

if(!isCondition) {
    console.log('거짓인 경우에만 실행');
}

if(isNotCondition) {
    console.log('거짓인 경우에만 실행');
}

