/**
 * 원시 타입 : Boolean, String, Number, null, undefined, Symbol
 * 고정된 크기로 Call Stack에 저장됨
 * 실제 데이터가 변수에 할당
 */

const sym = Symbol();

/**
 * 참조 타입 : Object, Array, Function, Class
 * 데이터 크기가 정해지지 않음
 * 변수에는 heap의 메모리 주소만 할당되어 Call Stack 메모리에 저장됨
 * 데이터의 실제 값은 Heap에 저장됨
 */

// 배열도 Object의 하나의 종류이기 때문에 typeof를 사용할 경우 object로 출력됨
// 타입을 확인하고 싶다면 Array.isArray()를 사용하면 됨

/**
 * JS는 동적 타입 언어
 * 같은 변수가 여러 개의 타입을 가질 수 있고
 * 타입을 명시하지 않아도 됨
 */

let foo = 42;
console.log(typeof foo); // number

foo = "hi";
console.log(typeof foo); // string

foo = true;
console.log(typeof foo); // boolean
