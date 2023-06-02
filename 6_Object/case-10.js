/**
 * 직접 접근 지양하기
 * flux => action => reducer => state 변화 
 * 예측 가능한 코드를 작성해서 동작이 예측 가능한 앱을 만들자
 */


//  이 model에 너무 쉽게 접근하고 있다. 모델에 직접 접근 지양
const model = {
    isLogin: false,
    isValidToken: false,
};

// model 대신 접근
function setLogin(bool) {
    model.isLogin = bool; 
    serverAPI.log(model.isLogin);
}

// model 대신 접근
function setValidToken(bool) {
    model.isValidToken = bool;
    serverAPI.log(model.isValidToken);
}


// model 직접 접근 불가 
function login() {
    setLogin(true);
    setValidToken(true);
}

// model 직접 접근 불가 
function logout() {
    setLogin(false);
    setValidToken(false);
}

someElement.addEventListener('click', login);

