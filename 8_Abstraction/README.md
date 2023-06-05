# Abstruction

## Magic Number

<br>

```javascript
/**
 * Magic Number
 */

// 변경 전 
// setTimeout(() => {
//     scrollToTop();
// }, 3 * 60 * 1000);


// 변경 후 
const COMMON_DELAY_MS = 3 * 60 * 1000;

// setTimeout(() => {
//     scrollToTop();
// }, COMMON_DELAY_MS);


```

<br>

```javascript
/**
 * Magic Number
 */

// Numeric Operator
const PRICE = {
    MIN: 1_000_000, // 1백만원
    MAX: 100_000_000, // 1억원
};

console.log(PRICE);

// MIN, MAX

// 변경 전 
getRandomPrice(1000000, 100000000); 

// 변경 후
getRandomPrice(PRICE.MIN, PRICE.MAX);

// -

// 변경 전 

function isValidName(name) {
    return carName.length >= 1 && carName.length <= 5;
}

// 변경 후 

const CAR_NAME_LEN = ({
    MIN: 1,
    MAX: 5
})

function isValidName(name) {
    return carName.length >= CAR_NAME_LEN.MIN && carName.length <= CAR_NAME_LEN.MAX;
}
 
const notiValidName = value => {
    if (!isArrayItemLengthRange(names, CAR_NAME_LEN.MIN, CAR_NAME_LEN.MAX)) {
        alert(`자동차 이름은 ${CAR_NAME_LEN.MIN}자에서 ${CAR_NAME_LEN.MAX}자까지 입력할 수 있습니다.`);
    }
}

```

<br>

## 네이밍 컨벤션

<br>

### 💡 저장소, 폴더, 파일, 함수, 변수, 상수, 깃 브랜치, 커밋 등 
 * 프로그래밍 전반적으로 이름을 네이밍을 위한 규칙이나 관습을 만드는 것 
 * 팀이나 개인의 차원에 따라 다를 수 있으며 특히 개인적인 견해와 해석에 따라 다를 수 있다.
 * **하지만 기준을 선정할 때 기본적인 논리와 이유는 있어야 한다.**

### ⭐️ javascript의 예약어(keyword)와 겹치지 않게 사용하는게 가장 중요하다!! ⭐️
<br>

### 💡 대표적인 케이스 
- camelCase // JS
- PascalCase // 함수, 클래스 
- kebab-case // NPM 패키지, 저장소 등등
- SNAKE_CASE // 상수 

<br>

### 💡 접두사, 접미사 
<br>

📌 **prefix-***, ***-suffix**

- data-id
- data-name
- data-value

- AppContainer
- ItemComponent

- ICar
- TCar

- AType
- BType

- 동사-* => ⭐️ 함수는 동사로 시작한다. ⭐️
- _로 시작하거나, #으로 시작하면 // private한 용도로 쓰임 

<br>

### 💡 이벤트 표현 
 * function on-*
 * function handle-*
 * function *-Action
 * function *-Event
 * function take-*
 * function *-Query
 * function *-All

<br>

### 💡 CRUD Create Read Update Delete 
 * function generator-*
 * function gen-*
 * function make-*
 * function get
 * function set
 * function remove
 * function create 
 * function delete 

<br>

### 💡 Flag 
 * is ~

 * isSubmit
 * isDisable
 * isString
 * isNumber

<br>

### 💡 ETC

 * function selectById(id)
 * function 

<br>

## DOM API 접근 추상화 

<br>

```javascript
/**
 * HTML에 접근하는 JavaScript 코드 추상화
 */

// 예제 1 

// 변경 전
export const loader = () => {
  const el = document.createElement("div");
  el.setAttribute("class", "loading d-flex justify-center mt-3");

  const el2 = document.createElement("div");
  el2.setAttribute("class", "relative spinner-container");

  const el3 = document.createElement("div");
  el3.setAttribute("class", "material spinner");

  el.append(el2);
  el2.append(el3);
};

// 변경 후

const createLoader = () => {
  // 반복문도 가능
  const el = document.createElement("div");
  const el2 = document.createElement("div");
  const el3 = document.createElement("div");

  return {
    el,
    el2,
    el3,
  };
};

const createLoaderStyle = ({ el, el2, el3 }) => {
  el.setAttribute("class", "loading d-flex justify-center mt-3");
  el2.setAttribute("class", "relative spinner-container");
  el3.setAttribute("class", "material spinner");

  return {
   newEl: el,
   newEl2: el2,
   newEl3: el3,
  };
};

const loader2 = () => {
  const { el, el2, el3 } = createLoader();
  const { newEl, newEl2, newEl3 } = createLoaderStyle({ el, el2, el3 });

  newEl.append(newEl2);
  newEl2.append(newEl3);
};


// 예제 2 

const changeColor = (element) => {
    element.style.backgroundColor = 'black';
}

const openModal = (element) => {
    element.classList.add('--open');
};


const closeModal = (element) => {
    element.classList.remove('--open');
};


const myModal = () => {
    // 모달 생성 코드

    return document.querySelector('#modal');
}


openModal(myModal);
changeColor(myModal);
closeModal(myModal);
```