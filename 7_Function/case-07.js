/**
 * Arrow Function
 */

// 예시 1

const user = {
    name: 'Zenghyun',
    getName: () => {
        return this.name;
    },
    newFrineds: (...rest) => {
        // 화살표 함수에서는 call, apply, bind 사용 안됨 
        // 화살표 함수에서는 arguments 사용 안됨 
        // const newFriendList = Array.from(arguments);

        // return this.name + newFriendList;
        return this.name + ' ' + rest; 
    }
};

console.log( user.getName() ); // 'Zenghyun'

console.log( user.newFrineds('zenghyun') );  // undefined zenghyun

// 예시 2


// 일반 함수는 생성자 함수로 사용할 수 있지만, 화살표 함수는 생성자 함수로 사용할 수 없다.  

const Person = (name, city) => {
    this.name = name;
    this.city = city;
};

const person = new Person('zenghyun', 'korea'); // Person is not constructor

