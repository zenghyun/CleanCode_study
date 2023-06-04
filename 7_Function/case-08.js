/**
 * 화살표 함수
 */

class Parent {
    parentMethod() {
        console.log('parentMethod');
    }

    parentMethodArrow = () => {
        console.log('parentMethodArrow');
    };

    overrideMethod = () => {
        return 'Parent';
    };
}

class Child extends Parent {
    childMethod() {
        super.parentMethod();
        // super.parentMethodArrow();
    }

    overrideMethod() {
        return 'child';
    }
}

console.log( new Child().childMethod());
console.log( new Child().overrideMethod());


//  일반 함수와 다르게 화살표 함수로 만든 부모 메서드를 클래스에서 구현 했을 때 생성자 함수 내부에서 바로 초기화 되버리는 현상이 존재한다. 그렇기 때문에 화살표 함수로 만든 this와 메서드는 자식 클래스에서 문제를 일으킨다. 
// 또한, extends로 지정한 부모와 자식 관계에서 자식이 기존의 부모가 가진 오버라이드 메서드를 자식 클래스에서 변경하고 호출해도 부모 메서드가 호출된다. 