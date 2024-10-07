/**
 * Closure
 *
 */
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("Outer Variable: " + outerVariable);
    console.log("Inner Variable: " + innerVariable);
  };
}

const newFunction = outerFunction("outside");
newFunction("inside");

// 순서
// 1. outerFunction("outside")는 newFunction에 할당되는 즉시 호출됨
// 2. 호출되면 newFunction에는 innerFunction(innerVariable)이 할당됨
// 3. newFunction("inside")을 호출하면 innerFunction("inside")이 호출되고
//    이때 클로저는 innerFunction이 outerVariable이 "outside"였다는 것을 기억하고 엑세스 할 수 있다는 것을 말함

// Example
// let a = "a";
// function functionB() {
//   let c = "c";
//   console.log(a, b, c); // error b is not defined
// }

// function functionA() {
//   let b = "b";
//   console.log(a, b);
//   functionB();
// }

// functionA();

// 위의 에러를 closure를 이용해서 해결한 예제
let a = "a";

function functionA() {
  function functionB() {
    let c = "c";
    console.log(a, b, c);
  }
  let b = "b";
  console.log(a, b);
  functionB();
}

functionA();

/**
 * 다른 함수 내부에 정의된 함수가 있는 경우 외부 함수가 실행을 완료하고
 * 해당 변수가 해당 함수 외부에서 더 이상 엑세스할 수 없는 경우에도
 * **해당 내부 함수는 외부 함수의 변수 및 범위에 엑세스할 수 있다.**
 */