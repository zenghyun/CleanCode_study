# Bonus Chapter 

## 공백 

<br>

```javascript
/**
 * 공백도 코드 작성의 일부다.
 *
 * 반환문 위에 한 줄만 띄워도 코드가 깔끔해진다.
 */

// 변경 전
const loadingElements = () => {
  const el = document.createElement("div");
  el.setAttribute("class", "loading-1");

  const el2 = document.createElement("div");
  el2.setAttribute("class", "loading-2");

  const el3 = document.createElement("div");
  el3.setAttribute("class", "loading-3");

  el.append(el2);
  el2.append(el3);

  return el;
};

// 변경 후
const loadingElements2 = () => {
  // 1. 선언
  const el = document.createElement("div");
  const el2 = document.createElement("div");
  const el3 = document.createElement("div");

  // 2. 로직, 문
  el.setAttribute("class", "loading-1");
  el2.setAttribute("class", "loading-2");
  el3.setAttribute("class", "loading-3");

  el.append(el2);
  el2.append(el3);

  // 3. 반환
  return el;
};

```

<br>

## indent depth

<br>

```javascript
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
```

<br>

## Style Guide

네이밍 컨벤션을 포함하는 규칙을 위한 **가이드라인**으로 하나의 팀 혹은 집단을 위해 존재한다. 즉, 협업에 큰 도움을 주기 위해 사용한다.

- 서로를 이해하기 위한 시간 절약
- 코드 품질 향상
- 일관성
- 가독성 향상
- 유지보수 용이성


### 수많은 스타일 가이드를 보고 나한테 맞는 스타일 가이드를 선택하거나 회사의 스타일 가이드를 따르자 
- Airbnb
- Google
- Rush Stack 
- prettier & esLint 
- esLint custom 
- JavaScript Standard Style 등등 