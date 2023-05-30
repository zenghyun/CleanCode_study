/**
 * 드모르간의 법칙
 * true is not true
 * false is not false 
 */

const isValidUser = false; 
const isValidToken = false;

if (! (A && B)) {
    // 성공
}

// 위와 아래는 같은 코드이다. 

if (!A || !B) {
    // 성공
}


if(!(isValidToken && isValidUser)) {
    console.log('로그인 성공');
}

// 위와 아래는 같은 코드이다. 

if( !isValidToken || !isValidUser) {
    console.log('로그인 성공');
}


