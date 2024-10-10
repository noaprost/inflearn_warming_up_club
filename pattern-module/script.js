/**
 * 이렇게 한 파일에 몰아서 작성하는 것 보다는 나눠서 작성하는 것이 좋음
 */

function validateInput(input) {
  if (typeof input !== "number") {
    throw new Error("Invalid input");
  }
}

function sum(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

function subtract(x, y) {
  return x - y;
}

function divide(x, y) {
  return x / y;
}
