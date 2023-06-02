/**
 * Object Destructuring
 */

// 변경 전

function Person1(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
}

const zenghyun1 = new Person1("zenghyun", 27, "korea");

// 개선 1 

function Person2({ name, age, location }) {
  this.name = name;
  this.age = age ?? 27;  // ?? 를 사용하여 null이나 undefined일 경우 27 반환
  this.location = location ?? 'korea'; // ?? 를 사용하여 null이나 undefined일 경우 korea를 반환
}

const zenghyun2 = new Person2({
  age: 27,
  name: "zenghyun",
  location: "korea",
}); // 이렇게 바꾸면 매개변수의 순서를 지키지 않아도 되고, age와 location의 경우 값을 넣지 않아도 된다.


// 개선 2

function Person3( name, { age, location }) { // name은 필수
    this.name = name;
    this.age = age;
    this.location = location;
  }
  
  const zenghyunOptions = ({
    age: 27,
    location: "korea",
  });

  const zenghyun3 = new Person3('zenghyun', zenghyunOptions);

