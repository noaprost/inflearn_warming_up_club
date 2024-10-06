let val;

val = document;
val = document.baseURI; // 웹 페이지의 절대 URI 반환

val = document.head; // <head> 반환
val = document.body; // <body> 반환

val = document.forms; // <form>들 반환
val = document.forms[0].className;

val = document.scripts[0].getAttribute("src");

const headerContainer = document.getElementById("header-container");
// headerContainer.style.display = "none";
// headerContainer.textContent = "textContent";
// headerContainer.innerText = "innerText";
// headerContainer.innerHTML = "<button>Hello</button>";

console.log(headerContainer);

let lists = document.getElementsByTagName("li"); // Collection
console.log(lists);

// collection은 forEach를 사용하지 못함
// lists.forEach((list) => {
//     console.log(list);
//   });

lists = Array.from(lists); // array
console.log(lists);

lists.forEach((list, index) => {
  list.textContent = `${index}. List`;
});

let liOdd = document.querySelectorAll("li:nth-child(odd");
console.log(liOdd);

/**
 * innerHTML vs innerText vs textContent
 * innerHTML : html까지 같이 보여줌
 * innerText : 사용자에게 보여주는 text값을 읽어오며 여러 공백은 무시하고 하나의 공백만 처리함
 * textContent : 숨겨진 텍스트도 가져옴. 노드가 가지고 있는 텍스트 값 그대로를 보여줌
 */
