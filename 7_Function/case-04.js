/**
 *  Default value
 */

// 개선 전
function createCarousel(options) {
    options = options || {}; // 여기서 객체를 넘기지 않으면 오류가 발생한다. 
    var margin = options.margin || 0;
    var center = options.center || false;
    var navElement = options.navElement || 'div'; 

    // ..some comde
    return {
        margin,
        center,
        navElement,
    };
}


// 아래와 같이 인자를 넘기지 않으면 options은 undefined가 된다. 

console.log( createCarousel() );


// 개선 후 1

/**
 * default value & default parameter 
 */

function createCarousel({
    margin = 0,
    center = false, 
    navElement = 'div',

} = {}) { // {} = {} 는 무의미한 객체 선언 없이 바로 객체 분해 할당이 가능하게 만드는 것 위처럽 options || {} 를 따로 해주지 않아도 된다. 

    //..some code
    return {
        margin,
        center,
        navElement,
    };
}

console.log(createCarousel());

// 개선 후 2

/**
 * default value & default parameter 
 */

const required = argName => {
    throw new Error('required is ' + argName);
};

function createCarousel({
    items = required('items'),
    margin = 0,
    center = false, 
    navElement = 'div',

} = {}) { // {} = {} 는 무의미한 객체 선언 없이 바로 객체 분해 할당이 가능하게 만드는 것 

    //..some code
    return {
        margin,
        center,
        navElement,
    };
}

console.log(createCarousel({items: 'phone'}));

console.log(createCarousel({}));


