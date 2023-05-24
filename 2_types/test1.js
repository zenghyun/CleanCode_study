class myClass {}
const str = new String('문자열');


console.log(typeof '문자열');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof 123);
console.log(typeof Symbol());
console.log(typeof myClass);
console.log(typeof str);
console.log(typeof null);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
} 

const p = {
    name: 'zenghyun',
    age: 27
}

const zenghyun = new Person('zenghyun', 27);

console.log( zenghyun instanceof Person ); 

console.log( p instanceof Person);



const arr = [];
const func = function() {} 
const date = new Date() 

console.log( arr instanceof Array);
console.log( func instanceof Function);
console.log( date instanceof Date);

console.log( arr instanceof  Object);
console.log( func instanceof Object);
console.log( date instanceof Object);

console.log( Object.prototype.toString.call(arr) );
console.log( Object.prototype.toString.call(func) );
console.log( Object.prototype.toString.call(date) );