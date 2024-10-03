/**
 * 타입 변환 방법
 * 1. JS 함수를 사용
 * 2. JS 자체에 의해 자동으로 변환
 */

// 함수를 사용한 방법

// Number to String
let val;
val = String(111);

// Boolean to String
val = String(false);

// Date to String
val = String(new Date());

// Array to String
val = String([1, 2, 3, 4, 5]);

// toString()
val = (5).toString();

// String to Number
val = Number("1"); // 1
val = Number(true); // 1
val = Number(false); // 0
val = Number(null); // 0
val = Number([1, 2, 3]); // NaN

val = parseInt("111.40"); // 소수점 탈락
val = parseFloat("111.40"); // 소수점 유지

console.log(val, typeof val);

// JS 자체에 의해 자동으로 변환하는 방법
const val1 = String(2);
const val2 = 3;
const sum = val1 + val2; // string + number = string

console.log(sum);
console.log(typeof sum);
