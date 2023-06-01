/**
 * 배열 요소에 접근하기
 */


// 1

function formatDate(targetDate) {
    const date = targetDate.toISOString().split('T')[0];

    const [year, month, day] = date.split('-');

    return `${year}년 ${month}월 ${day}일`;

}

// 2

function formatDate(targetDate) {
    const [date] = targetDate.toISOString().split('T'); // 구조 분해 할당은 하나일 때도 사용할 수 있다. 

    const [year, month, day] = date.split('-');

    return `${year}년 ${month}월 ${day}일`;
    
}

// 3 

function head(arr) {
    return arr[0] ?? '';
}

function formatDate(targetDate) {
    const date = head(targetDate.toISOString().split('T')); 

    const [year, month, day] = date.split('-');

    return `${year}년 ${month}월 ${day}일`;
    
}