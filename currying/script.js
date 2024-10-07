// ex1
const sum = (x, y) => x + y;
console.log(sum(10, 20));

const curriedSum = (x) => (y) => x + y;
console.log(curriedSum(10)(20));

const makeFood = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1} ${ingredient2} ${ingredient3} food`;
    };
  };
};

// ex2
const hambuger = makeFood("bread")("ham")("tomato");
console.log(hambuger);

// makeFood를 깔끔하게 표현
const cleanerMakeFood = (ingredient1) => (ingredient2) => (ingredient3) => {
  return `${ingredient1} ${ingredient2} ${ingredient3} food`;
};

const newHambuger = cleanerMakeFood("bread")("ham")("tomato");
console.log(newHambuger);

// ex3
function log(date, importance, message) {
  alert(
    `[${date.getHours()}: ${date.getMinutes()}] : [${importance}] ${message}`
  );
}
// log(new Date(), "DEBUG", "some bug");

// currying function
// static
function curry(f) {
  return function (a) {
    return function (b) {
      return function (c) {
        return f(a)(b)(c);
      };
    };
  };
}

const curriedLog = curry(log);
curriedLog(new Date())("DEBUG")("some bug"); // 호출 방식이 달라짐

// dynamic
// 매개 변수가 몇개든 커리 함수로 바꿔줄 수 있음
function curry2(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}
