/**
 * 공백도 코드 작성의 일부다.
 *
 * 반환문 위에 한 줄만 띄워도 코드가 깔끔해진다.
 */

// 변경 전
const loadingElements = () => {
  const el = document.createElement("div");
  el.setAttribute("class", "loading-1");

  const el2 = document.createElement("div");
  el2.setAttribute("class", "loading-2");

  const el3 = document.createElement("div");
  el3.setAttribute("class", "loading-3");

  el.append(el2);
  el2.append(el3);

  return el;
};

// 변경 후
const loadingElements2 = () => {
  // 1. 선언
  const el = document.createElement("div");
  const el2 = document.createElement("div");
  const el3 = document.createElement("div");

  // 2. 로직, 문
  el.setAttribute("class", "loading-1");
  el2.setAttribute("class", "loading-2");
  el3.setAttribute("class", "loading-3");

  el.append(el2);
  el2.append(el3);

  // 3. 반환
  return el;
};
