# Function
## [함수 다루기](https://despiteallthat.tistory.com/233)
## 함수, 메서드, 생성자 

<br>

```javascript
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

 
```
<br>

## argument & parameter

<br>

```javascript
/**
 * argument & parameter
 */


/**
 * Parameter (Formal Parameter)
 * 
 * 형식을 갖춘, 매개변수
 */

function axios(url) {
    // some code
}

/**
 * Argument (Actual Parameter)
 * 
 *  실제로 사용되는, 인자 or 인수 
 */

axios('https://github.com');

```
<br>

- Function parameters are the names listed in the function's definition
- ( 함수 매개변수는 함수 정의에 나열된 이름입니다. )
- Function arguments are the real values passed to the function.
- ( 함수 인수는 함수에 전달된 실제 값입니다. )
- Parameters are initialized to the values of the arguments supplied. 
- ( 매개변수는 제공된 인수 값으로 초기화 됩니다. )

<br>

## 복잡한 인자 관리하기

<br>

```javascript
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
```

<br>

## Default Value

<br>

```javascript
/**
 *  Default value
 */

// 개선 전
function createCarousel(options) {
    options = options || {}; // 여기서 객체를 넘기지 않으면 오류가 발생한다. 
    var margin = options.margin || 0;
    var center = options.center || false;
    var navElement = options.navElement || 'div'; 

    // ..some comde
    return {
        margin,
        center,
        navElement,
    };
}


// 아래와 같이 인자를 넘기지 않으면 options은 undefined가 된다. 

console.log( createCarousel() );


// 개선 후 1

/**
 * default value & default parameter 
 */

function createCarousel({
    margin = 0,
    center = false, 
    navElement = 'div',

} = {}) { // {} = {} 는 무의미한 객체 선언 없이 바로 객체 분해 할당이 가능하게 만드는 것 위처럽 options || {} 를 따로 해주지 않아도 된다. 

    //..some code
    return {
        margin,
        center,
        navElement,
    };
}

console.log(createCarousel());

// 개선 후 2

/**
 * default value & default parameter 
 */

const required = argName => {
    throw new Error('required is ' + argName);
};

function createCarousel({
    items = required('items'),
    margin = 0,
    center = false, 
    navElement = 'div',

} = {}) { // {} = {} 는 무의미한 객체 선언 없이 바로 객체 분해 할당이 가능하게 만드는 것 

    //..some code
    return {
        margin,
        center,
        navElement,
    };
}

console.log(createCarousel({items: 'phone'}));

console.log(createCarousel({}));



```

<br>

## Rest Parameters

<br>

```javascript
/**
 * Rest Parameters
 */

// 개선 전 

function sumTotal() {
    console.log(Array.isArray(arguments)); // false 
    return Array.from(arguments).reduce((acc, curr) => acc + curr, 0);
  }
  
  console.log(sumTotal(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
  
  
// 개선 후 
  
function sumTotal(initValue, ...args) { // Rest Parameter를 사용한 매개변수는 배열로 들어간다. 
     console.log(initValue);
     return args.reduce((acc, curr) => acc + curr, initValue);
 }
    
    console.log(sumTotal(100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
    
```

<br>

## void & return 

<br>

```javascript
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
```

<br>

## 화살표 함수 

<br>

```javascript
/**
 * Arrow Function
 */

// 예시 1

const user = {
    name: 'Zenghyun',
    getName: () => {
        return this.name;
    },
    newFrineds: (...rest) => {
        // 화살표 함수에서는 call, apply, bind 사용 안됨 
        // 화살표 함수에서는 arguments 사용 안됨 
        // const newFriendList = Array.from(arguments);

        // return this.name + newFriendList;
        return this.name + ' ' + rest; 
    }
};

console.log( user.getName() ); // 'Zenghyun'

console.log( user.newFrineds('zenghyun') );  // undefined zenghyun

// 예시 2


// 일반 함수는 생성자 함수로 사용할 수 있지만, 화살표 함수는 생성자 함수로 사용할 수 없다.  

const Person = (name, city) => {
    this.name = name;
    this.city = city;
};

const person = new Person('zenghyun', 'korea'); // Person is not constructor


```
<br>

```javascript
/**
 * 화살표 함수
 */

class Parent {
    parentMethod() {
        console.log('parentMethod'); // parentMethod
    }

    parentMethodArrow = () => {
        console.log('parentMethodArrow');
    };

    overrideMethod = () => {
        return 'Parent';
    };
}

class Child extends Parent {
    childMethod() {
        super.parentMethod();
        // super.parentMethodArrow();
    }

    overrideMethod() {
        return 'child';
    }
}

console.log( new Child().childMethod()); // undefined
console.log( new Child().overrideMethod()); // Parent


//  일반 함수와 다르게 화살표 함수로 만든 부모 메서드를 클래스에서 구현 했을 때 생성자 함수 내부에서 바로 초기화 되버리는 현상이 존재한다. 그렇기 때문에 화살표 함수로 만든 this와 메서드는 자식 클래스에서 문제를 일으킨다. 
// 또한, extends로 지정한 부모와 자식 관계에서 자식이 기존의 부모가 가진 오버라이드 메서드를 자식 클래스에서 변경하고 호출해도 부모 메서드가 호출된다. 
```

<br>

## Callback Function

<br>

```javascript
/**
 * Callback Function 
 */

// 변경 전 

function register() {
    const isConfirm = confirm(
        '회원가입에 성공했습니다.',
    );

    if (isConfirm) {
        redirectUserInfoPage();
    }
}

function login() {
    const isConfirm = confirm(
        '로그인에 성공했습니다.',
    );

    if(isConfirm) {
        redirectIndexPage();
    }
}


// 변경 후 

function confirmModal(message, cbFunc = () => {}){
    const isConfirm = confirm(message);

    if(isConfirm && cbFunc) {
        cbFunc();
    }
}

function register() {
    confirmModal('회원가입에 성공했습니다.', redirectUserInfoPage);
}

function login() {
    confirmModal('로그인에 성공했습니다.' , redirectIndexPage);
}
```

<br>

## 순수 함수

<br>

```javascript
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

// 함수는 동일한 인자를 받고 동일한 출력을 내뱉어야 하는데 외부에서 값을 조작할 수 있기 때문에 위의 함수는 순수함수가 아니다. 

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

```

<br>

## Closure 

<br>

```javascript
/**
 * Closure
 */

function add(num1) {
    return function sum(num2) {
        return num1 + num2;
    };
}

const addOne = add(1)(3);
const addTwo = add(2);

console.log( addOne );

// - 

function add1(num1) {
    return function(num2) {
        return function( calculateFn) {
            return calculateFn(num1, num2);
        };
    };
}

function sum(num1, num2) {
    return num1 + num2;
}

function multiple(num1, num2) {
    return num1 * num2;
}

const addOne1 = add1(5)(2);
const sumAdd = addOne1(sum);
const multipleAdd = addOne1(multiple);

console.log( sumAdd );
console.log(multipleAdd);

// - 

function log(value) {
    return function(fn) {
        fn(value);
    };
}

const logFoo = log('foo');

console.log( logFoo( v => console.log(v)) );
console.log( logFoo( v => console.info(v)) );
console.log( logFoo( v => console.error(v)) );
console.log( logFoo( v => console.warn(v)) );


// - 

const arr = [1, 2, 3, 'A', 'B', 'C']; 

function isTypeOf(type) {
    return function(value) {
        return typeof value === type;
    };
}

const isNumber = isTypeOf('number');
const isString = isTypeOf('string');

console.log( arr.filter(isNumber) );
console.log( arr.filter(isString) );

// -

function fetcher(endPoint) {
    return function ( url, options ) {
        return fetch(endPoint + url, options)
        .then((res) => {
            if (res.ok){
                return res.json();
            } else {
                throw new Error(res.error);
            }
        })
        .catch(err => console.log(err));
    };
}

const naverApi = fetcher('http://naver.com');
const daumApi = fetcher('http://daum.net');

// naverApi('/webtoon').then(res => res);
// daumApi('/webtoon').then(res => res);



```