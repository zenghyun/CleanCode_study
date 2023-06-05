# 에러 다루기

<br>

## 유효성 검사
💡 사용자의 입력 값이 유효한지 검증하는 것 

💡 유효성 검사는 할 수 있는 모든 곳에서 다 처리하는게 좋다. 

사용자의 입력 => 클라이언트 (HTML, JavaScript) => 백엔드에서 처리

사용자와 상호작용 => 사용자의 입력을 받거나 그것을 통해서 무언가 하게된다. 

📌 이메일인 경우
- 사용자의 입력이 이메일 포맷에 맞는지 검증한다.
  - 이메일 포맷이 맞는 경우 **그때서야 서버와 통신을 한다.**

※ 어떻게 할까? 
-  정규식
-  JavaScript 문법 (문자열 검사)
-  웹 표준 API (Browser API)

<br>

## try-catch

<br>

## 사용자에게 알려주기