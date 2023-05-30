// 변경 전 

function fetchData() {
     if (state.data) {
        return state.data;
     } else {
        return 'Fetching...';
     }
}

// 위의 코드는 아래와 같이 바꿀 수 있다. (OR 연산자의 단축평가)

// 변경 후 

function fetchData() {
    return state.data || 'Fetching...'; 
}
