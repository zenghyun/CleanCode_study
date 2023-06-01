/**
 * JavaScript의 배열은 객체다.
 */

const arr = [1, 2, 3];

arr[3] = 'test';
arr['property'] = 'string value';
arr['obj'] = {}
arr[{}] = [1,2,3];
arr['func'] = function () {
    return 'hello';
};

for(let i = 0; i< arr.length; i++) {
    console.log(arr[i]);
}

// 위와 아래는 같다. 

const obj = {
    arr: [1,2,3],
    3: 'test',
    property: 'string value',
    obj: {},
    '{}': [1,2,3],
    func: function() {
        return 'hello';
    }
}

obj 


