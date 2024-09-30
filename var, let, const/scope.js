/**
 * var : 함수 레벨 스코프
 * 함수 내에서 선언된 변수는 함수 내에서만 유효
 * 함수 외부에서 참조할 수 없음
 */

function func1() {
  if (true) {
    var a = "a";
    console.log(a); // (1)
  }
  console.log(a); // (2)
}

// console.log(a); // (3) error

func1(); // (1), (2) 둘 다 잘 출력됨. (3)은 error

/**
 * let, const : 블록 레벨 스코프
 */

function func2() {
  if (true) {
    let b = "b";
    const c = "c";
    console.log(b); // (1)
    console.log(c); // (1)
  }
  //   console.log(b); // (2) error
  //   console.log(c); // (2) error
}

func2(); // (1)만 출력됨

// 스코프를 최대한 좁게 하는 것이 코드 관리에 용이