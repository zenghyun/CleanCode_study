/**
 * Closure
 */

function add(num1) {
    return function sum(num2) {
        return num1 + num2;
    };
}

const addOne = add(1)(3);
const addTwo = add(2);

console.log( addOne );

// - 

function add1(num1) {
    return function(num2) {
        return function( calculateFn) {
            return calculateFn(num1, num2);
        };
    };
}

function sum(num1, num2) {
    return num1 + num2;
}

function multiple(num1, num2) {
    return num1 * num2;
}

const addOne1 = add1(5)(2);
const sumAdd = addOne1(sum);
const multipleAdd = addOne1(multiple);

console.log( sumAdd );
console.log(multipleAdd);

// - 

function log(value) {
    return function(fn) {
        fn(value);
    };
}

const logFoo = log('foo');

console.log( logFoo( v => console.log(v)) );
console.log( logFoo( v => console.info(v)) );
console.log( logFoo( v => console.error(v)) );
console.log( logFoo( v => console.warn(v)) );


// - 

const arr = [1, 2, 3, 'A', 'B', 'C']; 

function isTypeOf(type) {
    return function(value) {
        return typeof value === type;
    };
}

const isNumber = isTypeOf('number');
const isString = isTypeOf('string');

console.log( arr.filter(isNumber) );
console.log( arr.filter(isString) );

// -

function fetcher(endPoint) {
    return function ( url, options ) {
        return fetch(endPoint + url, options)
        .then((res) => {
            if (res.ok){
                return res.json();
            } else {
                throw new Error(res.error);
            }
        })
        .catch(err => console.log(err));
    };
}

const naverApi = fetcher('http://naver.com');
const daumApi = fetcher('http://daum.net');

// naverApi('/webtoon').then(res => res);
// daumApi('/webtoon').then(res => res);


