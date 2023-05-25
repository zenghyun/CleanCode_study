/**
 *  경계 다루기 (min-max)
 *
 * 1. 명확하게 최소와 최대값을 다룬다.
 * 2. 최소값과 최대값 포함 여부를 결정해야한다. (이상-초과 / 이하-미만)
 * 3. 혹은 네이밍에 최소값과 최대값 포함 여부를 표현한다.
 * 4. 누가봐도 명시적인 코드를 작성하자
 */

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const MAX_AGE = 20;

const isAdult = (age) => {
  // 최소값, 최대값 (포함되는지 vs 안되는지)
  // 이상, 초과 vs 이하, 미만
  if (age > 20) {
  }
};

// 상수
const MIN_NUMBER_LIMIT = 1;
const MAX_NUMBER_LIMIT = 45;

console.log(getRandomNumber(MIN_NUMBER_LIMIT, MAX_NUMBER_LIMIT));

// Begin - End

const reservationDate = (beginDate, endDate) => {
  // ...some code
};

reservationDate("2023-01-01", "2023-05-31");

/**
 * first-last
 *
 * 포함된 양 끝을 의미한다.
 * 부터 ~~~~ 까지
 * 양끝점이 존재하나 그 안의 규칙이 보장되지 않는다.
 */

const students = ["정현", "존", "피터", "지민"];

const getNumberOfStudents = (first, last) => {
  // ... some code
  const firstIndex = students.findIndex((index) => index === first);
  const lastIndex = students.findIndex((index) => index === last);

  return lastIndex - firstIndex + 1;
};

console.log(getNumberOfStudents("정현", "지민"));

// 예전에는 _를 쓰면 private를 나타냈는데 요즘은 #을 쓰면 private를 뜻함

/**
 * 매개변수의 순서가 경계다.
 *
 * 호출하는 함수의 네이밍과 인자의 순서의 연관성을 고려한다.
 *
 * 유지보수에 취약한 함수를 만들지 않기 위한 방법
 * 1. 매개변수를 2개가 넘지 않도록 만든다.
 * 2. arguments, rest parameter를 고려하자
 * 3. 매개변수를 객체에 담아서 넘긴다.
 * 4. 랩핑하는 함수를 만든다.
 */

// const someFunc = (someArg, someArg) => {

// }

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
