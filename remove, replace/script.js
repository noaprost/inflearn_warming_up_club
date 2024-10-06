const listParent = document.querySelector("ul");
const list = document.querySelectorAll("li");

// element remove
listParent.removeChild(list[1]);

// element replace
const oldElement = document.getElementById("A");
const newElement = document.createElement("span");
newElement.textContent = "hi";
listParent.replaceChild(newElement, oldElement);
