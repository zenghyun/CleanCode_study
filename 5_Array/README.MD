# Array
## [Array](https://despiteallthat.tistory.com/231)

## JavaScript의 배열은 객체다.

```javascript
const arr = [1,2,3];

const obj = {
    0 : 1,
    1 : 2,
    2 : 3
}
```
<br>

```javascript
/**
 * JavaScript의 배열은 객체다.
 */

const arr = [1, 2, 3];

arr[3] = 'test';
arr['property'] = 'string value';
arr['obj'] = {}
arr[{}] = [1,2,3];
arr['func'] = function () {
    return 'hello';
};

for(let i = 0; i< arr.length; i++) {
    console.log(arr[i]);
}

// 위와 아래는 같다. 

const obj = {
    arr: [1,2,3],
    3: 'test',
    property: 'string value',
    obj: {},
    '{}': [1,2,3],
    func: function() {
        return 'hello';
    }
}

```
<br>

```javascript
const arr = '[1, 2, 3]';

// 1
if(arr.length) {
    console.log(arr.length);
}

// 2
if(typeof arr === 'object' ) {
    console.log('배열 확인');
}

// 3
if (Array.isArray(arr)) {
    console.log('배열 확인');
}

// 확인하고자 하는 것이 정말 배열인지 확인할 때는 Array.isArray()를 사용하자! 

```


<br>

## Array.length 

```javascript
/**
 * Array.length
 */

const arr = [1, 2, 3];

console.log(arr.length); // 3

arr.length = 10; 

console.log(arr.length); // 10

arr // [1, 2, 3, , , , , , , ]


const arr2 = [1, 2, 3];

arr2[3] = 4; // [1, 2, 3, 4]

console.log(arr2.length); // 4

arr2[9] = 10;

arr2 // [1, 2, 3, 4, , , , , , 10]

console.log(arr2.length); // 10 


```
<br>

**자바스크립트 Array.length는 절대 배열의 길이를 보장하지 못한다.** 

<br>

**이 점을 이용하여 아래와 같은 응용도 가능하다.**

```javascript
/**
 * Array.length
 */

Array.prototype.clear = function () {
  this.length = 0;
};

function clearArray(array) {
  array.length = 0;

  return array;
}

let arr = [1, 2, 3];

arr.clear();

console.log(arr);

arr = [1, 2, 3];

console.log(arr);

console.log(clearArray(arr));

```

<br>

## 배열 요소에 접근하기

```javascript
/**
 * 배열 요소에 접근하기
 */

// 1

function operateTime(input, operators, is) {
  inputs[0].split("").forEach((num) => {
    cy.get(".digit").contain(num).click();
  });

  inputs[1].split("").forEach((num) => {
    cy.get(".digit").contains(num).click();
  });
}

// 2

function operateTime(input, operators, is) {
  const [firstElement, secondElement] = input;

  firstElement.split("").forEach((num) => {
    cy.get(".digit").contain(num).click();
  });

  secondElement.split("").forEach((num) => {
    cy.get(".digit").contains(num).click();
  });
}

// 3

function operateTime([firstElement, secondElement], operators, is) {
  firstElement.split("").forEach((num) => {
    cy.get(".digit").contain(num).click();
  });

  secondElement.split("").forEach((num) => {
    cy.get(".digit").contains(num).click();
  });
}

operateTime([1, 2], 1, 2);

```
<br>

**배열의 index는 0부터 시작하는 건 누구나 알고 있지만, 사람이 작성하기에 실수가 일어날 수 있다. 
index[0], index[1]과 같이 쓰는 것보다는 위와같이 사용하는 방법도 있다.**

<br>

**다른 예시**

```javascript
/**
 * 배열 요소에 접근하기
 */

// 1

function clickGroupButton() {
  const confirmButton = document.getElementsByTagName("button")[0];
  const cancelButton = document.getElementsByTagName("button")[1];
  const resetButton = document.getElementsByTagName("button")[2];

  // ...some code
}

// 2

function clickGroupButton() {
  const [confirmButton, cancelButton, resetButton] =
    document.getElementsByTagName("button");

  // ...some code
}

```
<br>

**다른 예시**

```javascript
/**
 * 배열 요소에 접근하기
 */


// 1

function formatDate(targetDate) {
    const date = targetDate.toISOString().split('T')[0];

    const [year, month, day] = date.split('-');

    return `${year}년 ${month}월 ${day}일`;

}

// 2

function formatDate(targetDate) {
    const [date] = targetDate.toISOString().split('T'); // 구조 분해 할당은 하나일 때도 사용할 수 있다. 

    const [year, month, day] = date.split('-');

    return `${year}년 ${month}월 ${day}일`;
    
}

// 3 

function head(arr) {
    return arr[0] ?? '';
}

function formatDate(targetDate) {
    const date = head(targetDate.toISOString().split('T')); 

    const [year, month, day] = date.split('-');

    return `${year}년 ${month}월 ${day}일`;
    
}
```

<br>

## 유사 배열 객체 

```javascript
/**
 * 유사 배열 객체
 */

const arrayLikeObject = {
    0: 'HELLO',
    1: 'WORLD',
    length: 2,
};

const arr = Array.from(arrayLikeObject);

console.log(Array.isArray(arrayLikeObject));

console.log(Array.isArray(arr));

console.log(arr);

console.log(arr.length);


// argument도 유사 배열 객체이다.

function generatePriceList() {
    console.log(Array.isArray(arguments));

        return Array.from(arguments).map( arg => arg + '원');
}

const newList = generatePriceList(100, 200, 300, 400, 500, 600);

console.log(newList);

```
**Array.from()** 메서드를 사용하면 유사 배열 객체를 배열로 바꿀 수 있다. <br>
**Array.isArray()** 메서드를 사용하면 가장 정확하게 값이 배열인지 확인할 수 있다. 

<br>

## 불변성

```javascript
/**
 * 불변성 (immutable)
 * 1. 배열을 복사한다.
 * 2. 새로운 배열을 반환하는 메서드들을 활용한다. 
 * 3. filter, map, slice 등등이 새로운 배열로 반환함 
 */

const originArray = ['123', '456', '789'];

const newArray1 = originArray; // 원본 배열 유지

const newArray2 = [...originArray]; // 원본 배열 변경 

originArray.push(10);
originArray.push(11);
originArray.push(12);
originArray.unshift(0);

// 원본 배열 변경 
console.log(newArray1);

// 원본 배열 유지
console.log(newArray2);
```

<br>

## 배열 고차 함수 && 배열 메서드 체이닝 

```javascript
/**
 * 배열 고차 함수
 *
 * 1. 원화 표기
 * 2. 1000원 초과 리스트만 출력
 * 3. 가격 순 정렬
 */

const price = ["2000", "1000", "3000", "6000", "4000"];

const suffixWon = (price) => price + "원";
const isOverOneThousand = (price) => Number(price) > 1000;
const ascendingList = (a, b) => a - b;

function getWonPrice(priceList) {
  // 배열 메서드 체이닝
  return priceList
    .filter(isOverOneThousand) // filter 원하는 조건에 맞는 배열 리스트 만들기
    .sort(ascendingList) // sort 정렬
    .map(suffixWon); // 배열 요소들을 다시 정리
}

const result = getWonPrice(price);

console.log(result);

```
<br>

## map vs forEach 

```javascript
/**
 * map vs forEach
 */


// return이 있느냐 없느냐 

const prices = ['1000', '2000', '3000'];


// forEach의 반환 값은 undefined이다. 함수를 실행시켜주는 것이 전부이다. 
const newPriceForEach = prices.forEach( (price) => {
    return price + '원';
});

// map 요소마다 반환된 값이 조작을 가한다. 
const newPricesMap = prices.map( price => {
    return price + '원';
}
);

console.log(newPriceForEach); // undefined

console.log(newPricesMap); // ['1000원', '2000원', '3000원'];
```

<br>

```javascript
/**
 * map vs forEach
 */


// forEach가 적절한 경우 

const prices = ['1000', '2000', '3000'];

prices.forEach( price => console.log(price + '원')); // 적절

console.log('--------');

prices.map(price => console.log(price + '원')); // 부적절

```

<br>

## Continue & Break
<br>
고차 함수의 경우 continue와 break문이 동작하지 않기 때문에 다음과 같이 사용할 수 있다.

<br>

```javascript
/**
 * Continue & Break
 */

const orders = ['first', 'second', 'third'];

try {
    orders.forEach( order => {
        if(order === 'second') {
            throw new Error('Something went wrong!');
        }
        console.log(order);
    })
} catch (error) {   
    console.log(error.message);
}

```


