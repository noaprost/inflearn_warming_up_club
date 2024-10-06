/**
 * clientY = 윈도우로부터의 거리 좌표
 * offsetY = 요소로부터의 거리 좌표
 */

// CLICK EVENT
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector("form");
const title1 = document.querySelector("h2");
// Click
submitBtn.addEventListener("click", handleEvent1);
// Doubleclick
submitBtn.addEventListener("dblclick", handleEvent1);
// Mousedown
submitBtn.addEventListener("mousedown", handleEvent1);
// Mouseup
submitBtn.addEventListener("mouseup", handleEvent1);
// Mouseenter
submitBtn.addEventListener("mouseenter", handleEvent1);
// Mouseleave
submitBtn.addEventListener("mouseleave", handleEvent1);
// Mousemove
container.addEventListener("mousemove", handleEvent1);

// Event Handler
function handleEvent1(e) {
  e.preventDefault();
  console.log(`EVENT TYPE: ${e.type}`);
  title1.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
}

// FORM EVENT
const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const title2 = document.querySelector("h2");

// Clear input
emailInput.value = "";

form.addEventListener("submit", handleEvent2);

// Keydown
emailInput.addEventListener("keydown", handleEvent2);
// keyup
emailInput.addEventListener("keyup", handleEvent2);
// Keypress
emailInput.addEventListener("keypress", handleEvent2);
// Focus
emailInput.addEventListener("focus", handleEvent2);
// Blur (focus 하고 다른 곳 클릭하면...)
emailInput.addEventListener("blur", handleEvent2);
// Cut (잘라내기 할 때)
emailInput.addEventListener("cut", handleEvent2);
// Paste (붙여 넣기 할 때)
emailInput.addEventListener("paste", handleEvent2);
// Input (input 요소 값이 달라졌을 때)
emailInput.addEventListener("input", handleEvent2);

function handleEvent2(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  if (e.type === "submit") {
    e.preventDefault();
  }

  console.log(e.target.value);
  title2.innerText = e.target.value;
}
