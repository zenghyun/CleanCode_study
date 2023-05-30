const x = 3;

if (x >= 5) {
  console.log("x는 5와 같거나 크다");
} else if (x >= 4) {
  console.log("x는 4와 같거나 크다");
} else if (x >= 3) {
  console.log("x는 3와 같거나 크다");
} else if (x >= 2) {
  console.log("x는 2와 같거나 크다");
} else if (x >= 1) {
  console.log("x는 1와 같거나 크다");
}

// 위와 아래는 논리적으로 같은 코드이다.

if (x >= 5) {
  console.log("x는 5와 같거나 크다");
} else {
  if (x >= 4) {
    console.log("x는 4와 같거나 크다");
  }
}
// 생략

// else if 는 모호하기 때문에 피하는 것이 좋다.
// else if를 계속한다면 switch 문을 쓰는 것과 같은 논리이다.
// 조건이 많이 늘어질 경우는 switch문을 쓰자
