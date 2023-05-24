# 타입 검사
## [타입 검사](https://despiteallthat.tistory.com/222)
```javascript
class MyClass {}
const str = new String('문자열')

typeof '문자열'  => 'string'
typeof true => 'boolean' 
typeof undefined => 'undefined'
typeof 123 => 'number'
typeof Symbol() => 'symbol'
typeof MyClass => 'function'
typeof str => 'object'
typeof null => 'object' // 언어적인 오류 
```

<br>

## PREMITIVE vs REFERENCE
PREMITIVE value는 typeof로 잘 구분할 수 있지만 REFERENCE value는 typeof로 구분이 어렵다. 

자바스크립트는 동적으로 변하는 언어이기 대문에 타입도 동적이다. 

떄문에 동적인 타입까지 검사하기가 어려워서 주의를 해야한다. 

```javascript
function Person(name, age){
    this.name = name;
    this.age = age;
} 

const p = {
    name: 'zenghyun',
    age: 27
}

const zenghyun = new Person('zenghyun', 27);

zenghyun instanceof Person => true

p instanceof Person => false 
```
<br>

instanceof는 객체를 확인하기 위해 용이하지만, REFERENCE value에 포함된 것 중에 arr와 function등과 같은 경우 혼란이 없어보이지만, 

```javascript
const arr = [];
const func = function() {} 
const date = new Date() 

arr instanceof Array => true
func instanceof Function => true
date instanceof Date => true 
```
<br>

prototype을 보다보면 최상위 타입에 Object가 있기 때문에 아래와 같이 혼란을 야기할 수 있다,
```javascript
arr instanceof Object => true
func instanceof Object => true
date instanceof Object => true 
```

<br>

이를 방지하고자 아래와 같이 검사할 수도 있다.

```javascript
const arr = [];
const func = function() {} 
const date = new Date() 

Object.prototype.toString.call(arr) => `[Object Array]`
Object.prototype.toString.call(func) => `[Object Function]`
Object.prototype.toString.call(date) => `[Object Date]`
```


## **즉, 검사를 할 때는 항상 조심해야 한다!!**

<br>

### 요약 : 자바스크립트는 동적인 타입을 갖는 언어이기 때문에 타입 검사가 어렵다. <br> 그렇기에 잘 찾아서 상황에 맞게 타입을 검사해야한다. 
<br>

typeof는 절대 무적이 아니고 instanceof도 있다.

# undefined & null
## [undefined와 null의 차이](https://despiteallthat.tistory.com/223)
undefined: 무언가 만들어 놓고 정의하지 않음 

null: 없다는 것을 명시적으로 표현함 

## undefined와 null의 차이점 

1. undefined와 null은 값이 없거나(없다는 것을 명시적으로 표현) 정의되지 않음 
2. undefined는 숫자적으로 NaN
3. null은 숫자적으로 0에 가까움 
4. undefined의 type은 undefined
5. null의 type은 object 

<br>

# eqeq 줄이기 

= : 할당 연산자
<br>
== : 엄격하지 않은 동등 연산자 
<br>
=== : 엄격한 동등 연산자 

동등 연산자를 엄격하게 사용하지 않으면 **"Type Casting"** 이 일어나게 된다. 

<br>

# 형변환 주의하기 

느슨한 검사 시 암묵적인 형 변환이 일어난다.

```javascript
// 느슨한 검사 =>  형 변환
'1' == 1  => true
1 == true => true
0 == false => false

// 암묵적인 형 변환 
11 + ' 문자와 결합' => '11 문자와 결합'
!!'문자열' => true
!!'' => false

// 명시적인 형 변환
String(11 + ' 문자와 결합') => '11 문자와 결합'
Boolean('문자열') => true
Boolean('') => false
Number('11') => 11 

⭐️ parseInt('9.9999', 10); => 9 // parseInt 두번째 매개변수는 몇진수로 나타낼지 정하는 것  
// 두번째 매개변수를 지정하지 않으면 10진수가 기본값이 아니라는 걸 꼭 알아야 함 
```

사용자 => 명시적인 변환 (타입) 
JS => 암묵적인 변환 (타입)

타입을 변환할 때는 명시적으로 해야 할 필요가 있다. 

사람이 작성한 코드를 보고 명시적으로 예측할 수 있는 형변환을 활용해야 한다. 

<br>

# isNaN
## [isNaN이란?](https://despiteallthat.tistory.com/224)

자바스크립트는 IEEE 754를 통해 부동소수점을 해결하고자 한다. <br>
IEEE 754는 IEEE에서 개발한 컴퓨터에서 부동소수점을 표현하는 가장 널리 쓰이는 표준이다. 

```javascript
Number.MAX_SAFE_INTEGER =>  9007199254740991
Number.isInteger => f is Integer 

is Not A Number => 숫자가 아니다. 

isNaN(123) // false => 숫자가 숫자가 아니다. => 숫자가 맞다. 
isNaN(123 + '테스트') => true 
Number.isNaN(123 + '테스트') => false  // 이 방법을 쓰자 

// isNaN의 문제점을 파악하고 ES2015에서 폴리필을 만듦 

isNaN // 느슨한 검사 
Number.isNaN // 엄격한 검사
```

