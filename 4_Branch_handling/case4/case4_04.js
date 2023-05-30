const getActiveUserName = (user, isLogin) => {
    if(isLogin) {
        if(user) {
            if(user.name){
                return user.name;
            } else {
                return '이름없음'
            }
        }
    }
}

// 위의 코드는 아래와 같이 바꿀 수 있다. 

const re_getActiveUserName = (user, isLogin) => {
    if(isLogin && user) {
        if(user.name) {
            return user.name;
        } else {
            return '이름없음';
        }
    }
}

// 위의 코드는 한번 더 줄일 수 있다. 

const rere_getActiveUserName = (user, isLogin) => {
    if(isLogin && user) {
        return user.name || '이름없음'; 
    }
}