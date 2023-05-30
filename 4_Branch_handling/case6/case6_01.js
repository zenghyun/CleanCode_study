// 변경 전
function loginService(isLogin, user) {
  if (!isLogin) {
    // 로그인 여부 확인
    if (checkToken()) {
      // 토큰 존재 여부 확인
      if (!user.nickName) {
        // 가입 유저 확인
        return registerUser(user);
      } else {
        refreshToken();
        return "로그인 성공";
      }
    } else {
      throw new Error("No Token");
    }
  }
}

// 변경 후
function login() {
  refreshToken();

  return "로그인 성공";
}

function loginService(isLogin, user) {
  // Early Return
  /**
   * 함수를 미리 종료
   * 사고하기 편하다.
   */
  if (isLogin) {
    return;
  }

  if (!checkToken) {
    throw new Error("No Token");
  }

  if (!user.nickName) {
    return registerUser(user);
  }

  login();
}

// 로직은 변한 것이 없지만 가독성이 훨씬 좋아졌다.
