function getActiveUserName(user) {
    if (user.name) {
        return user.name;
    } else {
        return '이름없음';
    }
}

// 변경 

function getActiveUserName(user) {
    if (user.name) {
        return user.name;
    } 
        return '이름없음';
}

// 변경 

function getActiveUserName(user) {
    return user.name || '이름없음';
}

