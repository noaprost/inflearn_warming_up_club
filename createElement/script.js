// element 생성
const li = document.createElement("li");

// 클래스 추가
li.className = "list-group-item";

// id 추가
li.id = "new-item";

li.textContent = "new";
li.setAttribute("name", "New list item");

// link element 생성
const link = document.createElement("a");
li.appendChild(link);

link.className = "alarm-item";
link.innerHTML = "<i class='bi-alarm'></i>"

const ul = document.querySelector("ul.list-group");
ul.appendChild(li);
