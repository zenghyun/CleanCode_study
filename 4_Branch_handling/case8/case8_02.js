// 안전하고 확장성 높은 코드를 작성할 수 있다. 

function createElement(type, height, width) {
    const element = document.createElement(type || 'div');

    element.style.height = height || 100; 
    element.style.width = width || 100; 

    return element;
}

createElement();