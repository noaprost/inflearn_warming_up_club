/**
 * window
 * 브라우저에서 자동으로 생성됨
 * 브라우저 창에 대한 정보를 알 수 있고, 창을 제어할 수 있음
 */

/**
 * var로 변수 또는 함수를 선언하게 되면 window 객체의 프로퍼티가 됨
 */

let val;
val = window.innerWidth;

val = window.location; // url에 대한 정보를 알려줌
// window.location.href = "https://google.com"; // 이 url로 이동

val = window.history; // back, foward등을 사용 가능

// window.navigator // 브라우저에 대한 정보가 들어 있음
console.log(val);
