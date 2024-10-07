// shallow copy
const aArray = [1, 2, 3];

// shallow copy with spread operator
const bArray = [...aArray];
console.log(aArray === bArray); // false
bArray.push(4);

// shallow copy with Object.assign()
const cArray = Object.assign([], bArray);
console.log(cArray === bArray); // false

// Nasted Arrays and Objects
cArray.push([5, 6, 7]);
const dArray = [...cArray, 10];
dArray[4].push(8);
console.log(cArray, dArray); // cArray와 dArray 모두 8이 들어가게 됨

/**
 * 얕은 복사는 첫 번째 depth에만 해당
 * 중첩이 된 부분까지는 복사가 되지 않은 것을 확인할 수 있음
 * 얕은 부분만 복사가 되기 때문에 얕은 복사라고 함
 */

// 얕은 동결
// Object.freeze()
// 동결된 부분은 변경이 일어나지 않음
// 이 역시 얕은 동결이기 때문에 깊은 곳은 동결이 일어나지 않음

// deep copy with JSON.parse(JSON.stringify())
// 깊은 부분의 값을 바꿔도 값이 바뀌지 않음
const aObject = {
  a: "a",
  b: "b",
  cObject: {
    a: 1,
    b: 2,
  },
};
const newAObject = JSON.parse(JSON.stringify(aObject));
console.log(newAObject === aObject); // false

// deep copy with nested spread operator
// 얕은 복사를 중첩된 부분까지 여러번 해주는 개념
newAObject = { ...aObject, cObject: { ...aObject.cObject } };

// structuredClone()

// deep copy는 주로 lodash, Ramda등 라이브러리를 이용함