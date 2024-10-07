// impure function 예시
let x = 0;
const numberUp = () => (x += 1);
console.log(numberUp());
console.log(x); // x가 1로 변경됨. 사이드 이펙트 발생

// pure function으로 변경
let y = 0;
const pureNumberUp = (num) => (num += 1);
console.log(numberUp(y));
console.log(y); // y는 계속 0을 유지

// impure function 예시
const alphabetArray = ["A", "B"];
const addItemToArray = (originArray, newItem) => {
  originArray.push(newItem);
  return originArray;
};
console.log(addItemToArray(alphabetArray, "C"));
console.log(alphabetArray); // "C"가 추가됨. 사이드 이펙트 발생

// pure function으로 변경
const alphabetArray2 = ["A", "B"];
const pureAddItemToArray = (originArray, newItem) => {
  return [...originArray, newItem];
};
console.log(addItemToArray(alphabetArray, "C"));
console.log(alphabetArray); // 원본이 유지됨.
