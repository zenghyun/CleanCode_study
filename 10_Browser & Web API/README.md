# Browser & Web API

## 웹 표준

<br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 헤더 -->
    <header>

    </header>
    
    <!-- 컨텐츠 -->
    <main>
        <article>
            <section>

            </section>
        </article>

        <article>
            <section>
                
            </section>
        </article>
    </main>

    <!-- 푸터 -->
    <footer>

    </footer>
</body>
</html>
```

<br>

## NodeList

### [NodeList란?](https://despiteallthat.tistory.com/236)

### NodeList 인스턴스 

<br>

#### 인스턴스 속성
- length 

#### 인스턴스 메서드 
- entries()
- forEach()
- item()
- keys()
- values()

<br>

## innerHTML

### [innerHTML, innerText, textContent 차이 + insertAdjacentHTML](https://despiteallthat.tistory.com/166)

XSS (크로스 사이트 스크립팅) 노출 위험!!! 

innerHTML 대신에 **insertAdjacentHTML**을 사용하자!! ( setHTML()도 있으나 이건 아직 실험중인 메서드 임 )


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <main></main>
    <div></div>
</body>
<script>
    // document.querySelector('main').innerHTML = '<h1>Hello World!</h1>'   
    document.querySelector('main').insertAdjacentHTML('afterbegin', '<h1>Hello World!</h1>')
    // 문자열만 넣는 경우는
    document.querySelector('div').textContent = 'Hi!';
    // innerHTML => insertAdjacentHTML
    // 문자열만 렌더링 : innerHTML => innerText => textContent
    // 속도도 innserHTML이 제일 느리다. 


    /**
     * insertAdjacentElement()
     * insertAdjacentHTML()
     * insertAdjacentText()
     * */

</script>
</html>
```

<br>

## Data Attribute

<br>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <!-- Data Attribute -->
    <!-- 아래와 같이 비표준으로 사용도 가능하다. -->
    <!-- <h1 안녕="하세요">Hello World</h1>  -->
    <!-- <main hello="world">main</main> -->

    <input type="text" class="" id="" />

    <main
      id="electriccars"
      data-columns="3"
      data-index-number="12314"
      data-parent-world="cars"
    >
      main
    </main>
    <script>
      const main = document.getElementById("electriccars");

      console.log(main.dataset.columns); // '3'
      console.log(main.dataset.indexNumber); // '12314'
      console.log(main.dataset.parentWorld); // 'cars'
      delete main.dataset.parentWorld;
    </script>
  </body>
</html>

```

<br>

## Black Box Event Listener

<br>

```javascript
/**
 * Black Box => Event Listener 
 * (개인적인 사례 혹은 주관)
 * 
 * Black Box
 * ㄴ 내부 구현이 어떻게 동작될 지 예측할 수 없는 경우를 뜻함 
 * ㄴ 추상화가 너무 과하게 되거나 명시적인 코드가 아닌 경우 
 */

const button = document.querySelector('button');


// 버튼.이벤트_등록('이벤트_타입', 리스너_함수_실행) => 반응형으로 실행된다.
button.addEventListener('click', onCLick); // onClick 함수가 뭔데? 

// 실행하는 함수의 이름을 보다 직관적으로 명시하자. 


// handleBar 만들 때 많이 하는 실수 


// 검색상자..  엔터 당연히 되어야 하는게 아닌가? 
const handleSearch = e => {
    // 1. input을 받는 코드
    // 2. 유효성 검사를 하는 코드
    // 3. form을 전송하는 코드 
};

button.addEventListener('click', handleSearch);
button.addEventListener('keyup', handleSearch);
form.addEventListener('onsubmit', handleSearch);
```