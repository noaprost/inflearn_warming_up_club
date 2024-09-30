/**
 * 호이스팅
 * js 인터프리터는 선언 단계와 할당 단계를 분리함
 */

// var
// 호이스팅이 됨 (선언 당시에 undefined을 할당)
// 이후 할당 되었을 때 hello라는 값이 들어감
// 초기화 되기 전에 값을 사용할 수 있음

console.log(a); // undefined
var a = "hello";

// let, const
// 호이스팅은 되지만 초기화 되기 전에 어떤 값도 할당해주지 않음
// TDZ : Temporal Dead Zone (변수를 사용할 수 없는 일시적인 비활성 상태)
// TDZ가 존재하기 때문에 초기화 되기 전에 값을 사용할 수 없음

// console.log(b); // error
let b = "hello";

// 함수
// 호이스팅 됨
// 함수가 정의되고 실행되기 때문에 잘 실행됨
func();

function func() {
  console.log("hoisting test");
}
