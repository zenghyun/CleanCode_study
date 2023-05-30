// parseInt의 두번째 인자가 있음을 유의하자!!! 기본값이 절대 10진수로 변환하는 것이 아니다. 


// 누군가 만들어 놓은 코드도 이렇게 맵핑할 수 있다. 
// 항상 사용자의 실수를 고려하기 위해 default case를 고려해야 한다. 
function safeParseInt(number, radix) {
    return parseInt(number, radix || 10);
}