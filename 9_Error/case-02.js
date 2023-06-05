/**
 * 사용자에게 알려주기
 * - 동료 개발자
 * - 내가 만든 앱을 이용하는 사용자
 *   ㄴ 내가 만든 라이브러리 => ex) React
 *   ㄴ 내가 만든 실제 앱 => ex) 간단한 애플리케이션, 계산기 
 */


function React() {
    // 생성자로 사용하길 바랄 때...!

    if(!new.target) {
        throw new ReferenceError('생성자입니다!!');
    }
}


React();


