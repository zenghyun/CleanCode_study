/**
 * indent depth
 * ㄴ 복잡해질수록 깊어진다! 
 * 
 * HTML
 * - 2depth
 * 
 * JS
 * - 2,4 depth 
 * 
 * - 의식적으로 코드를 작성
 * 1. 조기 반환
 * 2. callback => Promise => Async & Await
 * 3. 고차 함수 (map, reduce, filter)
 * 4. 함수를 나누고 추상화하기
 * 5. 메서드 체이닝 (.then().then().then()
 * 
 * - 도구를 사용해서 통일 
 * esLint 등등 
 */

function test() {
    somePromise()
    .then()
    .then()
    .then()
};