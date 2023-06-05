/**
 * HTML에 접근하는 JavaScript 코드 추상화
 */

// 예제 1 

// 변경 전
export const loader = () => {
  const el = document.createElement("div");
  el.setAttribute("class", "loading d-flex justify-center mt-3");

  const el2 = document.createElement("div");
  el2.setAttribute("class", "relative spinner-container");

  const el3 = document.createElement("div");
  el3.setAttribute("class", "material spinner");

  el.append(el2);
  el2.append(el3);
};

// 변경 후

const createLoader = () => {
  // 반복문도 가능
  const el = document.createElement("div");
  const el2 = document.createElement("div");
  const el3 = document.createElement("div");

  return {
    el,
    el2,
    el3,
  };
};

const createLoaderStyle = ({ el, el2, el3 }) => {
  el.setAttribute("class", "loading d-flex justify-center mt-3");
  el2.setAttribute("class", "relative spinner-container");
  el3.setAttribute("class", "material spinner");

  return {
   newEl: el,
   newEl2: el2,
   newEl3: el3,
  };
};

const loader2 = () => {
  const { el, el2, el3 } = createLoader();
  const { newEl, newEl2, newEl3 } = createLoaderStyle({ el, el2, el3 });

  newEl.append(newEl2);
  newEl2.append(newEl3);
};


// 예제 2 

const changeColor = (element) => {
    element.style.backgroundColor = 'black';
}

const openModal = (element) => {
    element.classList.add('--open');
};


const closeModal = (element) => {
    element.classList.remove('--open');
};


const myModal = () => {
    // 모달 생성 코드

    return document.querySelector('#modal');
}


openModal(myModal);
changeColor(myModal);
closeModal(myModal);