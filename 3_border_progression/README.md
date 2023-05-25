# 경계 다루기

## [경계 다루기](https://despiteallthat.tistory.com/225)
<br>

1. 명확하게 최소와 최대값을 다룬다. 
2. 최소값과 최대값 포함 여부를 결정해야한다. (이상-초과 / 이하-미만)
3. 혹은 네이밍에 최소값과 최대값 포함 여부를 표현한다. 
4. 누가봐도 명시적인 코드를 작성하자 

```javascript
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 상수
const MIN_NUMBER_LIMIT = 1; 
const MAX_NUMBER_LIMIT = 45; 

console.log(getRandomNumber(MIN_NUMBER_LIMIT, MAX_NUMBER_LIMIT));

```

<br>

# Begin-End 

```javascript
// Begin - End 

const reservationDate = (beginDate, endDate) => {
    // ...some code
};
 

reservationDate('2023-01-01', '2023-05-31');
```

<br>

# first-last
1. 포함된 양 끝을 의미한다.
2. 부터 ~~~~ 까지
3. 양끝점이 존재하나 그 안의 규칙이 보장되지 않는다. 

<br>

```javascript
const students = ['정현', '존', '피터', '지민'];

const getNumberOfStudents = (first, last) => {
   // ... some code
   const firstIndex = students.findIndex(index => index === first);
   const lastIndex = students.findIndex(index => index === last);

   return (lastIndex - firstIndex  + 1 );
};

console.log( getNumberOfStudents('정현', '지민') );
```
<br>

# prefix(접두사)-suffix(접미사)
접두사 : 앞 쪽에 붙음
접미사 : 뒷 쪽에 붙음 

네이밍이 주는 약속이 대단하다. 

<br>

# 매개변수의 순서가 경계다. 
매개변수의 순서만 잘 지켜도 그것 자체가 경계다. 

## 유지보수에 취약한 함수를 만들지 않기 위한 방법

1. 매개변수는 2개가 넘지 않도록 만든다.
2. arguments rest parameter를 고려한다.
3. 매개변수를 객체에 담아서 넘긴다.
4. 랩핑하는 함수를 만든다. 

<br>

```javascript
const getAvg = ( math, english, science, society ) => {
// ... some code
};
 
const MATH = 90;
const ENGLISH = 80;
const SCIENCE = 95;
const SOCIETY = 85;
 
console.log(getAvg( MATH, ENGLISH, SCIENCE, SOCIETY ));
```

**위의 코드는 다음과 같이 변경될 수 있습니다.**
<br>

```javascript
const getAvg = (score) => {
  const { MATH, ENGLISH, SCIENCE, SOCIETY } = score;
  // ... some code
};

const MATH = 90;
const ENGLISH = 80;
const SCIENCE = 95;
const SOCIETY = 85;

const score = { MATH, ENGLISH, SCIENCE, SOCIETY };

console.log(getAvg(score));

```
