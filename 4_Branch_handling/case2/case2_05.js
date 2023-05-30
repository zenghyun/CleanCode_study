// 잘못된 예시
// 삼항 연산자는 값 또는 식을 반환해야 한다.
function getMessage(isAdult) {
  isAdult
    ? alert("입장이 가능합니다.") // undefined
    : alert("입장이 불가능합니다."); // undefined

}

// 1.

function getMessage(isAdult) {
  return isAdult ? "입장이 가능합니다." : "입장이 불가능합니다.";
}

// 2.

function getMessage(isAdult) {
  const adult = isAdult ? "입장이 가능합니다." : "입장이 불가능합니다.";

  if (isAdult) {
    // some logic code
  }

  if (isAdult && gender === "MAN") {
    // some logic code
  }
}
