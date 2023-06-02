/**
 * Optional Chaining (?.)
 */
const obj = {
    name: 'value'
};
console.log( obj?.name );
const response = {
    data : {
        userList: [
            {
                name: 'Lee',
                info: {
                    tel: '010',
                    email: 'zenghyun@naver.com'
                }
            }
        ]
    }
};
console.log( response.data.userList[0].info.email );
// 만약에서 서버에서 데이터를 가져올 때 특정 부분이 유실된 상태라면? 
// 특정 부분 유실에 대한 if문을 이용하면 아래와 작성할 수 있다. 이는 꽤나 번거롭고, 복잡하다. 
function getUserEmailByIndex(userIndex) {
	if(response.data) {
		if(response.data.userList) {
			if(response.data.userList[userIndex]) {
			   // some code 
		}
	}
}
}

// 옵셔널 체이닝을 이용하면 오류에 보다 깔끔하게 대응한다. 
function getUserEmailByIndex(userIndex) {
    if(response?.data?.userList?.[userIndex]?.info?.email) {
        return  response.data.userList[userIndex].info.email;
    }
    return '알 수 없는 에러가 발생했습니다.';
}
console.log( getUserEmailByIndex(0) ); // zenghyun@naver.com
 
console.log( getUserEmailByIndex(1) ); // 알 수 없는 에러가 발생했습니다.
