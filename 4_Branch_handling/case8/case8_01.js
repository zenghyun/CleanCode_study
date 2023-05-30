
// 기본 값을 미리 정의해두자 
function sum(x, y) {
  x = x || 1;
  y = y || 1;

  return x + y;
}

sum(100, 200);
