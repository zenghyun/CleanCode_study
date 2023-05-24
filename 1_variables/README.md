# var를 지양하자 
## [변수에 대하여](https://despiteallthat.tistory.com/221)

## var
함수 스코프

## let & const
블록 단위 스코프 + TDZ (Temperal Dead Zone) => 안전한 코드 작성이 가능하다. 

let은 재할당이 가능하지만, const는 재할당이 불가능하다. 

<br>


# funcion scope & block scope 

## let보다는 const가 더 좋다. 
const는 재할당만 금지된다. <br>
본연의 객체 그리고 배열 같은 레퍼런스 객체들을 조작할 때는 이상이 없다.

<br>

# 전역 공간 사용 최소화 

 ## 전역 공간 사용을 최소화 해라
  1. 경험
  2. 누군가 혹은 자바스크립트 생태계
  3. 강의 혹은 책
  4. 회사 혹은 멘토 
  5. Lint 

전역 공간 => 최상위 공간 

최상위 공간을 나룰 때는 브라우저(Window)와 Node js(global)로 나눈다.  

**파일을 나누면 코드의 구역도 나뉘는게 아니다. <br> 즉, 어디서나 접근이 가능하다.**

1. 전역 변수는 애초에 만들지 않는다. 
2. 지역 변수만 만든다. 
3. Window, Global에 접근하며 조작하지 않는다.
4. 즉시 실행 함수, 모듈, 클로저 활용을 고민하자 

<br>

# 임시 변수 제거하기 
임시 변수: 어느 Scope안에서 전역 변수 처럼 활용되는 변수

📌 예시 1 
```javascript
function getElements() {
    const result = {}; // 임시 객체  CRUD 

    result.title = document.querySelector('.title');
    result.text = document.querySelector('.text');
    result.value = document.querySelector('.value');

    return result; 
}

// 여기서의 result도 이 함수의 공간 안에서는 전역변수나 다름이 없다. 


```

임시 변수를 어떻게 CRUD할 것인가. 

=> 제일 좋은 방법은 임시 변수를 사용하지 않는 것 

위의 코드는 아래와 같이 고칠 수 있다. 이런 식으로 고칠 경우 사이드 이펙트가 많지 않은 함수가 될 수 있다. 
```javascript
function getElements() {
    return {
        title : document.querySelector('.title'),
        text : document.querySelector('.text'),
        value : document.querySelector('.value'),
    }; 
}

```
<br>

📌 예시 2

```javascript
function getDateTime(targetDate) {
  let month = targetDate.getMonth();
  let day = targetDate.getDate();
  let hour = targetDate.Hours();

  month = month >= 10 ? month : "0" + month;
  day = day >= 10 ? day : "0" + day;
  hour = hour >= 10 ? hour : "0" + hour;

  return {
    month,
    day,
    hour,
  };
}
```

```javascript
function getDateTime(targetDate) {
  let month = targetDate.getMonth();
  let day = targetDate.getDate();
  let hour = targetDate.Hours();

  return {
    month: month >= 10 ? month : "0" + month,
    day: day >= 10 ? day : "0" + day,
    hour: hour >= 10 ? hour : "0" + hour,
  };
}

```

### ※ 임시 변수를 쓰지 않아야 할 이유 

1. 명령형으로 가득한 로직이 나온다.

2. 어디서 어떻게? 디버깅 하기가 힘들다.

3. 추가적인 코드를 작성하게 하는 유혹을 당하게 만든다. 

<br>

### 💡 해결책 
1. 함수를 나눈다. 

2. 바로 반환하는 것

3. 고차 함수를 사용하자 

4. 선언형 코드로 바꾸자 

<br>

# 호이스팅 
호이스팅은 선언과 할당이 분리된 것을 말한다. 

[변수 호이스팅이란?](https://despiteallthat.tistory.com/71)

변수 뿐만 아니라 함수도 호이스팅이 된다. 

함수를 만들 때는 **함수 표현식**으로 만들자 

```javascript
const sum = function () {
    return 1 + 2;
}

console.log(sum());
```

### 호이스팅
런타임 시 => 선언이 최상단으로 끌어올려진다. 

즉, 코드 작성 시 예측이 힘들고 실행이 안되는 경우가 생긴다. 

그래서 var를 지양해야 한다. 

함수도 호이스팅되기 때문에 함수 표현식을 사용하자 