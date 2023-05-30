// 1
function example() {
  return condition1
    ? value1
    : condition2
    ? value2
    : condition3
    ? value3
    : value4;
}

// 2
function example() {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    return value4;
  }
}

// 3 switch 문은 어때 ?

const key = {
  // condition을 받아올 수 있는 어떤 코드
}; // 조건을 정리

// 아래와 같이 switch문을 고려

switch (key) {
  case condition1:
    value1;
    break;
  case condition2:
    value2;
    break;
  case condition3:
    value3;
    break;
  default:
    value4;
}
