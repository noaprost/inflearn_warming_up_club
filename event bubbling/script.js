/**
 * 가장 깊게 중첩된 요소에 이벤트가 발생했을 때 이벤트가 위로 전달되는 것
 * 위로 전달되면서 상위 요소의 event handler가 차례로 실행됨
 */

const form = document.querySelector("form");
const div = document.querySelector("div");
const p = document.querySelector("p");

// event.target => 실제 이벤트가 시작된 "target" 요소
// handler가 할당된 요소는 this or event.currentTarget
form.addEventListener("click", (e) => {
  e.target.style.backgroundColor = "yellow";
  e.currentTarget.style.backgroundColor = "red";

  setTimeout(() => {
    alert("target = " + e.target.tagName + ", this = " + this.tagName);
  }, 0);
});
