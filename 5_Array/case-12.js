/**
 * 배열 고차 함수
 *
 * 1. 원화 표기
 * 2. 1000원 초과 리스트만 출력
 * 3. 가격 순 정렬
 */

const price = ["2000", "1000", "3000", "6000", "4000"];

const suffixWon = (price) => price + "원";
const isOverOneThousand = (price) => Number(price) > 1000;
const ascendingList = (a, b) => a - b;

function getWonPrice(priceList) {
  // 배열 메서드 체이닝
  return priceList
    .filter(isOverOneThousand) // filter 원하는 조건에 맞는 배열 리스트 만들기
    .sort(ascendingList) // sort 정렬
    .map(suffixWon); // 배열 요소들을 다시 정리
}

const result = getWonPrice(price);

console.log(result);
