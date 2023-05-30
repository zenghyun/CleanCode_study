/**
 * age가 20 미만시 특수 함수 실행
 */

// 변경 전

function getHelloCustomer(user) {
  if (user.age < 20) {
    report(user);
  } else {
    return "안녕하세요";
  }
}

// 변경 후

function getHelloCustomer(user) {
  if (user.age < 20) {
    report(user);
  }
  return "안녕하세요";
}
