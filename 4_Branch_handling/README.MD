# 분기 다루기
## [분기 다루기](https://despiteallthat.tistory.com/227)

## 값식문 

1. **()** => 함수와 관련됨, 함수 호출 
2. **{}** => 중괄호 내부에는 값과 식만 넣어야 한다.
3. 값과 식을 이용하면 if문을 대체할 수 있다. 
4. 함수의 인자 안에는 값과 식만 넣을 수 있다. 

<br>

## 삼항 연산자 다루기 

### 숏 코딩도 좋지만 일관성을 가지자. 

<br>

## Truthy & Falsy 

<br>

## 단축 평가 

<br>

## else if 피하기, else 피하기 

### else if문이 많다는 것은 조건이 모호하다는 뜻이기 때문에 switch문을 쓰는 것이 더 좋다.

## else를 쓰는 것이 습관이 되면 안된다. 

<br>

## Early return (빠르게 반환한다.)

수많은 Early return을 작성하는 것은 옳지않지만, 하나의 의존성에 많은 로직을 묶고 있을 때는 Early Return을 사용하면 코드가 명시적으로 바뀔 수 있다.

<br>

## 부정 조건문 지양하기 

1. 생각을 여러번 해야할 수 있다.
2. 프로그래밍 언어 자체로 if문이 처음부터 오고 true부터 실행시킨다. 

### 부정 조건문을 사용하기 좋을 때
1. Early Return
2. Form Validation
3. 보안 혹은 검사하는 로직 

<br>

## Default case 고려하기 

<br>

## 명시적인 연산자 사용 지양하기 

### **괄호를 달아서 사용하자!!!** 

<br>

## Nullish Coalescing Operator (널 병합 연산자)

### [Nullish Coalescing Operator](https://despiteallthat.tistory.com/54)

<br>

## 드모르간의 법칙 