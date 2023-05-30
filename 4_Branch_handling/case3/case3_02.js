function printName(name) {
    if( name === undefined || name === null) {
        return '사람이 없네요';
    }

    return '안녕하세요 ' + name + '님';
}

// name 값이 존재하면 truthy이고 값이 존재하지 않으면 falsy이다. 

function printName(name) {
    if(!name) {
        return '사람이 없네요';
    }

    return '안녕하세요 ' + name + '님';
}

// 이렇게 바꿀 수 있다. 