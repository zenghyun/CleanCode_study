/**
 * Shorthand Properties
 * Concise Method (간결한 메서드)
 * ES2015+
 */

const firstName = "Lee";
const lastName = "zenghyun";

// 변경 전

const person = {
  firstName: "Lee",
  lastName: "zenghyunhyun",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// 변경 후

const person1 = {
  firstName,
  lastName,
  getFullName() { // 함수가 아닌 메서드임 
    return this.firstName + " " + this.lastName;
  },
};

console.log(person);

console.log(person1);








