/**
 * Object.freeze
 * 
 * 1. 대중적인 유틸 라이브러리 사용 (lodash)
 * 2. 직접 유틸 함수 생성 
 * 3. TypeScript => readonly
 */

const STATUS = Object.freeze({ // shallow copy
    PENDING: 'PENDING',
    SUCCESS: 'SUCCESS',
    FAIL: 'FAIL',
    OPTIONS: {
        GREEN : 'GREEN',
        RED: 'RED',
    },
});

STATUS.PENDING = 'pending';
STATUS.PLUS = 'PLUS';

console.log( STATUS ); 
console.log( Object.isFrozen(STATUS) );

// shallow copy vs deep copy 

// Object.freeze는 shallow copy를 한다.

STATUS.OPTIONS.GREEN = 'green';
STATUS.OPTIONS.YELLOW = 'YELLOW';

console.log( Object.isFrozen(STATUS.OPTIONS) );
console.log( STATUS.OPTIONS); // 수정됨


// deep freeze 직접 구현 

function deepFreeze(targetObj) {
    /**
     * 1. 객체를 순회
     * 2. 값이 객체인지 확인
     * 3. 객체이면 재귀
     * 4. 그렇지 않으면 Object.freeze
     */

    // 예시
    Object.keys(kargetObj).forEach(key => {
        // if(/* 객체가 맞다면 */) {
        //     deepFreeze(targetObj[key])
        // }
    })
    return Object.freeze(targetObj);
}
 

