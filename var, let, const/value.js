// var를 사용하면 중복 선언, 중복 할당이 가능하기 때문에 값을 관리하기가 어려움
var greeting = "hello";
console.log(greeting);

var greeting = "hi";
console.log(greeting);

greeting = "How are You";
console.log(greeting);

// let은 중복 선언은 불가하지만 중복 할당은 가능
let hello = "hello";
console.log(hello);

// let hello = "hi"; // error

hello = "hi";
console.log(hello);

// const는 중복 선언, 중복 할당 둘 다 불가능
const a = "a";
// const a = "b"; // error
// a = "b"; // error
