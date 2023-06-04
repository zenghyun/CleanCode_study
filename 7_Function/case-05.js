/**
 * Rest Parameters
 */

// 개선 전 

function sumTotal() {
  console.log(Array.isArray(arguments)); // false 
  return Array.from(arguments).reduce((acc, curr) => acc + curr, 0);
}

console.log(sumTotal(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


// 개선 후 

function sumTotal(initValue, bonus, ...args) { // Rest Parameter를 사용한 매개변수는 배열로 들어간다. 
    console.log(initValue);
    console.log(bonus);
    return args.reduce((acc, curr) => acc + curr, initValue + bonus);
  }
  
  console.log(sumTotal(100, 99, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
  