// 사용자의 잘못을 유도할 수 있는 환경이라면 당연히 default value를 고려해야 한다. 

function registerDay(userInputDay) {
    switch(userInputDay) {
        case '월요일': // some code
        case '화요일': // some code
        case '수요일': // some code
        case '목요일': // some code
        case '금요일': // some code
        case '토요일': // some code
        case '일요일': // some code
        default: throw new Error('입력 값이 유효하지 않습니다.');
    }
}

e.target.value = '월ㄹ요일';

registerDay(e.target.value);