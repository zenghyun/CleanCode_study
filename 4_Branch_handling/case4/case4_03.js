function favoriteDog(someDog) {
    let favoriteDog; 
    if (someDog) {
        favoriteDog = someDog; 
    } else {
        favoriteDog = '냐옹';
    } 
    return favoriteDog + '입니다.';
}

favoriteDog() // => 냐옹 
favoriteDog('포메') // => 포메 입니다. 

// 위의 함수를 아래와 같이 바꿀 수 있다. 

function favoriteDog() {
    return (someDog || '냐옹') + '입니다.';
}

// someDog에 값이 들어가지 않으면 undefined가 되는데 undefined는 falsy로 평가된다. 