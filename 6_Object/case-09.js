/**
 * hasOwnProperty
 */

 const person = {
    name : 'zenghyun',
 };

 console.log( person.hasOwnProperty('name') );  // true

 console.log( person.hasOwnProperty('age') ); // false 

 const foo = {
    hasOwnProperty: function() {
        return 'hasOwnProperty';
    },
    bar: 'string',
 };

 // hasOwnProperty은 보호받지 못한다. 
 console.log( foo.hasOwnProperty('bar') ); //' hasOwnProperty'

 console.log( Object.prototype.hasOwnProperty.call(foo, 'hasOwnProperty')); // true



