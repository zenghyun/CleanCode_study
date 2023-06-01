const arr = '[1, 2, 3]';

// 1
if(arr.length) {
    console.log(arr.length);
}

// 2
if(typeof arr === 'object' ) {
    console.log('배열 확인');
}

// 3
if (Array.isArray(arr)) {
    console.log('배열 확인');
}

// 확인하고자 하는 것이 정말 배열인지 확인할 때는 Array.isArray()를 사용하자! 


