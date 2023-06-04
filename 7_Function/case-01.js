/**
 *  함수, 메서드, 생성자
 */

// 함수 
function func() {
    return this;
}

// 객체의 메서드
const obj = {
    method() {
        return 1;
    }, // 얘가 원래는 
    method1 : function () {
        return 2;
    }  // 이렇게 생긴건데 conciseMethod 기법을 사용한 것임 
}

// 생성자 함수 (Class)
function Func() {
    return this;
}

/**
 * 함수 
 * 1급 객체
 * - 변수나, 데이터에 담길 수 있다.
 * - 매개변수로 전달이 가능하다 (콜백 함수)
 * - 함수가 함수를 반환한다. (고차 함수)
 */

func();

//  메서드 => 객체에 의존성이 있는 함수, OOP를 의미
console.log( obj.method() ); 
console.log( obj.method1() ); 

 // 생성자 함수 => 인스턴스를 생성하는 역할 => Class
 const instance = new Func();

 