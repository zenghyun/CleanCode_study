/**
 * Black Box => Event Listener 
 * (개인적인 사례 혹은 주관)
 * 
 * Black Box
 * ㄴ 내부 구현이 어떻게 동작될 지 예측할 수 없는 경우를 뜻함 
 * ㄴ 추상화가 너무 과하게 되거나 명시적인 코드가 아닌 경우 
 */

const button = document.querySelector('button');


// 버튼.이벤트_등록('이벤트_타입', 리스너_함수_실행) => 반응형으로 실행된다.
button.addEventListener('click', onCLick); // onClick 함수가 뭔데? 

// 실행하는 함수의 이름을 보다 직관적으로 명시하자. 


// handleBar 만들 때 많이 하는 실수 


// 검색상자..  엔터 당연히 되어야 하는게 아닌가? 
const handleSearch = e => {
    // 1. input을 받는 코드
    // 2. 유효성 검사를 하는 코드
    // 3. form을 전송하는 코드 
};

button.addEventListener('click', handleSearch);
button.addEventListener('keyup', handleSearch);
form.addEventListener('onsubmit', handleSearch);