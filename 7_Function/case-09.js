/**
 * Callback Function 
 */

// someElement.addEventListener(
//     'click',
//     function(e){
//         console.log(
//             someElement + '이 클릭되었습니다.',
//         );
//     },
// );

// DOMException.prototype.addEventListener = function (
//     eventType,
//     cbFunc
// ) {
//     if ( eventType === 'click') {
//         const clickEventObject = {
//             target: {},
//         };

//         cbFunc(clickEventObject);
//     }
// };


// 변경 전 

function register() {
    const isConfirm = confirm(
        '회원가입에 성공했습니다.',
    );

    if (isConfirm) {
        redirectUserInfoPage();
    }
}

function login() {
    const isConfirm = confirm(
        '로그인에 성공했습니다.',
    );

    if(isConfirm) {
        redirectIndexPage();
    }
}


// 변경 후 

function confirmModal(message, cbFunc = () => {}){
    const isConfirm = confirm(message);

    if(isConfirm && cbFunc) {
        cbFunc();
    }
}

function register() {
    confirmModal('회원가입에 성공했습니다.', redirectUserInfoPage);
}

function login() {
    confirmModal('로그인에 성공했습니다.' , redirectIndexPage);
}