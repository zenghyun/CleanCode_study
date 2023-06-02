# Object
## [Object 다루기](https://despiteallthat.tistory.com/232)

<br>

## Shorthan Properties 

<br>

```javascript
/**
 * Shorthand Properties
 * Concise Method (간결한 메서드)
 * ES2015+
 */

const firstName = "Lee";
const lastName = "zenghyun";

// 변경 전

const person = {
  firstName: "Lee",
  lastName: "zenghyunhyun",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// 변경 후

const person1 = {
  firstName,
  lastName,
  getFullName() { // 함수가 아닌 메서드임 
    return this.firstName + " " + this.lastName;
  },
};

console.log(person);

console.log(person1);

```

<br>

## Computed Property Name 
<br>

```javascript
/**
 * Computed Property Name
 */

import React, { useState, Fragment } from 'react';

const [state, setState] = useState({
    id: '',
    password: '',
});

const handleChange = e => {
    setState({
        [e.target.name] : e.target.value, // [e.target.name]과 같이 property를 동적으로 다룰 수 있음 
    });
};

return (
    <React.Fragment>
        <input value={state.id} onChange={handleChange} name="password"/>
        <input value={state.password} onChange={handleChange} name="name"/>
    </React.Fragment>
)
```
<br>

## **📌 react의 reducer도 마찬가지이다.**

<br>

```javascript
/**
 * Computed Property Name
 */

const noop = createAction('INCREMENT');

const reducer = handleActions(
    {
        [noop]: (state, action) => ({
            counter : state.counter + action.payload,
        }),
    },
    { counter : 0},
);

```

<br>

## Lookup Table ( 순람표 )

데이터 구조가 key와 value로 나열된 것 

<br>

```javascript
/**
 * Object Lookup Table
 */

// 변경 전
function getUserType1(type) {
    if (type === "ADMIN") {
      return "관리자";
    } else if (type === "INSTRUCTOR") {
      return "강사";
    } else if (type === "STUDENT") {
      return "수강생";
    } else {
      return "해당 없음";
    }
  }
  
  // 개선 1  (보다 깔끔하지만 case가 추가될 때마다 나열되는건 다름없다.)
  
  function getUserType2(type) {
    switch (key) {
      case "ADMIN":
        return "관리자";
      case "INSTRUCTOR":
        return "강사";
      case "STUDENT":
        return "수강생";
      case "STUDENT2":
        return "수강생";
      case "STUDENT3":
        return "수강생";
      default:
        return "해당 없음";
    }
  }
  
  // 개선 2 (개인적으로 이게 가장 좋다.)
  
  function getUserType3(type) {
    const USER_TYPE = {
      ADMIN: "관리자",
      INSTRUCTOR: "수강생",
      STUDENT: "학생",
      UNDEFINED: "해당 없음",
    };
  
     return USER_TYPE[type] ?? USER_TYPE.UNDEFINED; // ver 1

    //  return USER_TYPE[type] ?? USER_TYPE["UNDEFINED"];  ver 2
  }
  
  console.log(getUserType3("ADMIN")); // 관리자 
  console.log(getUserType3("qesf")); // 해당 없음 
  
  // 개선 3
  
  function getUserType4(type) {
    return {
      ADMIN: "관리자",
      INSTRUCTOR: "수강생",
      STUDENT: "학생",
    }[type] ?? "해당 없음";
  }
  
  console.log(getUserType4("ADMIN")); // 관리자
  console.log(getUserType4("qesf")); // 해당 없음 
  
```

<br>

## Object Destructuring  

<br>

```javascript
/**
 * Object Destructuring
 */

// 변경 전

function Person1(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
}

const zenghyun1 = new Person1("zenghyun", 27, "korea");

// 개선 1 

function Person2({ name, age, location }) {
  this.name = name;
  this.age = age ?? 27;  // ?? 를 사용하여 null이나 undefined일 경우 27 반환
  this.location = location ?? 'korea'; // ?? 를 사용하여 null이나 undefined일 경우 korea를 반환
}

const zenghyun2 = new Person2({
  age: 27,
  name: "zenghyun",
  location: "korea",
}); // 이렇게 바꾸면 매개변수의 순서를 지키지 않아도 되고, age와 location의 경우 값을 넣지 않아도 된다.


// 개선 2

function Person3( name, { age, location }) { // name은 필수
    this.name = name;
    this.age = age;
    this.location = location;
  }
  
  const zenghyunOptions = ({
    age: 27,
    location: "korea",
  });

  const zenghyun3 = new Person3('zenghyun', zenghyunOptions);


```
<br>

```javascript
/**
 * Object Destructuring
 */

// 변경 전

const orders = ["First", "Second", "Third"];

const [first, , third] = orders;

console.log(first); // First

console.log(third); // Third

// 변경 후 (이렇게도 가능하다.)

const { 0: st, 2: rd } = orders;

console.log(st); // First

console.log(rd); // Third

```

<br>

## Object.freeze

<br>

```javascript
/**
 * Object.freeze
 * 
 * 1. 대중적인 유틸 라이브러리 사용 (lodash)
 * 2. 직접 유틸 함수 생성 
 * 3. TypeScript => readonly
 */

const STATUS = Object.freeze({ // shallow copy
    PENDING: 'PENDING',
    SUCCESS: 'SUCCESS',
    FAIL: 'FAIL',
    OPTIONS: {
        GREEN : 'GREEN',
        RED: 'RED',
    },
});

STATUS.PENDING = 'pending';
STATUS.PLUS = 'PLUS';

console.log( STATUS );
console.log( Object.isFrozen(STATUS) );

// shallow copy vs deep copy 

// Object.freeze는 shallow copy를 한다.

STATUS.OPTIONS.GREEN = 'green';
STATUS.OPTIONS.YELLOW = 'YELLOW';

console.log( Object.isFrozen(STATUS.OPTIONS) );
console.log( STATUS.OPTIONS); // 수정됨


// deep freeze 직접 구현 

function deepFreeze(targetObj) {
    /**
     * 1. 객체를 순회
     * 2. 값이 객체인지 확인
     * 3. 객체이면 재귀
     * 4. 그렇지 않으면 Object.freeze
     */

    // 예시
    Object.keys(kargetObj).forEach(key => {
        // if(/* 객체가 맞다면 */) {
        //     deepFreeze(targetObj[key])
        // }
    })
    return Object.freeze(targetObj);
}
 


```

<br>

## Prototype 조작 지양하기
<br>

```javascript
/**
 * Prototype 조작 지양하기
 * 
 * 1. 이미 JS는 많이 발전했다.
 *  1-1. 직접 만들어서 모듈화
 *  1-2. 직접 만들어서 모듈화 => 배포 => NPM 
 * 2. JS 빌트인 객체를 건들지말자
 */

// 클래스가 생기기 이전

function Car(name, brand) {
  this.name = name;
  this.brand = brand;
}
Car.prototype.sayName = function () {
  return this.brand + "-" + this.name;
};

// 클래스가 생긴 이후

class Car{
  constructor(name, brand) {
    this.name = name;
    this.brand = brand;
  }

  sayName() {
    return this.brand + "-" + this.name;
  }
};

const casper = new Car("캐스퍼", "현대");

console.log(casper);

```

<br>

## hasOwnProperty

자바스크립트는 프로퍼티 명칭으로서 hasOwnProperty를 보호하지 않습니다. 그러므로 이 명칭을 사용하는 프로퍼티를 가지는 객체가 존재하려면, 올바른 결과들을 얻기 위해서는 외부 hasOwnProperty를 사용해야합니다. 

hasOwnProperty를 사용하려고 호출 했을 때 다른 hasOwnProperty가 호출될 수 있어 위험합니다.

<br>

```javascript
/**
 * hasOwnProperty
 */

 const person = {
    name : 'zenghyun',
 };

 console.log( person.hasOwnProperty('name') );  // true

 console.log( person.hasOwnProperty('age') ); // false 

 const foo = {
    hasOwnProperty: function() {
        return 'hasOwnProperty';
    },
    bar: 'string',
 };

 // hasOwnProperty은 보호받지 못한다. 
 console.log( foo.hasOwnProperty('bar') ); //' hasOwnProperty'

 console.log( Object.prototype.hasOwnProperty.call(foo, 'hasOwnProperty')); // true

```

<br>

## 직접 접근 지양하기 

객체를 직접 건드는 영역을 따로 분리한다. 그리고 호출한다. 
그러면 모델에 접근하는 권한을 확실히 설정할 수 있고, 어디서나 모델에 접근할 수 있던 방법을 지양하고 함수에 위임하여 추상화한다.

모델이 어디서 어떻게 변화하는지도 추적가능하고 모델을 안전하게 사용할 수 있다. 

데이터에 접근할 때는 항상 안전하게 접근해야 한다. 

<br>

```javascript
/**
 * 직접 접근 지양하기
 * flux => action => reducer => state 변화 
 * 예측 가능한 코드를 작성해서 동작이 예측 가능한 앱을 만들자
 */


//  이 model에 너무 쉽게 접근하고 있다. 모델에 직접 접근 지양
const model = {
    isLogin: false,
    isValidToken: false,
};

// model 대신 접근
function setLogin(bool) {
    model.isLogin = bool; 
    serverAPI.log(model.isLogin);
}

// model 대신 접근
function setValidToken(bool) {
    model.isValidToken = bool;
    serverAPI.log(model.isValidToken);
}


// model 직접 접근 불가 
function login() {
    setLogin(true);
    setValidToken(true);
}

// model 직접 접근 불가 
function logout() {
    setLogin(false);
    setValidToken(false);
}

someElement.addEventListener('click', login);
```

<br>

## Optional (선택적) Chaining (?.)

<br>

```javascript
/**
 * Optional Chaining (?.)
 */
const obj = {
    name: 'value'
};
console.log( obj?.name );
const response = {
    data : {
        userList: [
            {
                name: 'Lee',
                info: {
                    tel: '010',
                    email: 'zenghyun@naver.com'
                }
            }
        ]
    }
};
console.log( response.data.userList[0].info.email );
// 만약에서 서버에서 데이터를 가져올 때 특정 부분이 유실된 상태라면? 
// 특정 부분 유실에 대한 if문을 이용하면 아래와 작성할 수 있다. 이는 꽤나 번거롭고, 복잡하다. 
function getUserEmailByIndex(userIndex) {
	if(response.data) {
		if(response.data.userList) {
			if(response.data.userList[userIndex]) {
			   // some code 
		    }
	    }
    }
}
// 옵셔널 체이닝을 이용하면 오류에 보다 깔끔하게 대응한다. 
function getUserEmailByIndex(userIndex) {
    if(response?.data?.userList?.[userIndex]?.info?.email) {
        return  response.data.userList[userIndex].info.email;
    }
    return '알 수 없는 에러가 발생했습니다.';
}
console.log( getUserEmailByIndex(0) ); // zenghyun@naver.com
 
console.log( getUserEmailByIndex(1) ); // 알 수 없는 에러가 발생했습니다.

```
