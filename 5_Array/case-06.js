/**
 * 배열 요소에 접근하기
 */

// 1

function operateTime(input, operators, is) {
  inputs[0].split("").forEach((num) => {
    cy.get(".digit").contain(num).click();
  });

  inputs[1].split("").forEach((num) => {
    cy.get(".digit").contains(num).click();
  });
}

// 2

function operateTime(input, operators, is) {
  const [firstElement, secondElement] = input;

  firstElement.split("").forEach((num) => {
    cy.get(".digit").contain(num).click();
  });

  secondElement.split("").forEach((num) => {
    cy.get(".digit").contains(num).click();
  });
}

// 3

function operateTime([firstElement, secondElement], operators, is) {
  firstElement.split("").forEach((num) => {
    cy.get(".digit").contain(num).click();
  });

  secondElement.split("").forEach((num) => {
    cy.get(".digit").contains(num).click();
  });
}

operateTime([1, 2], 1, 2);
