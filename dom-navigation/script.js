let val;

const list = document.querySelector("ul.list-group");
const listItem = document.querySelector("li.list-group-item:first-child");

console.log(list);
console.log(listItem);

val = list.childNodes; // NodeList 반환, line break도 포함(한칸 띄는 것)

// NodeType
val = list.childNodes[3].nodeType; // 1
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text Node
// 8 - Comment Node (주석)
// 9 - Document itself
// 10 - Doctype

// children element nodes 반환
val = list.children; // HTML Collection 반환 (line break, comment 등은 포함x)
// for of는 사용 가능하지만 배열 함수를 사용하지는 못함
list.children[1].textContent = "hi";

// First Child
val = list.firstChild; // text 포함
// list.firstChild === list.childNodes[0];
val = list.firstElementChild; // text 포함x

// Last Child
val = list.lastChild; // text 포함
// list.lastChild === list.childNodes[list.childNodes.length - 1];
val = list.lastElementChild; // text 포함x

// child 요소 count
val = list.childElementCount; // 5

// parent node 반환
val = listItem.parentNode; // ul
val = listItem.parentElement; // ul
val = listItem.parentElement.parentElement; // div

// next sibling
val = listItem.nextSibling; // text 포함
val = listItem.nextElementSibling; // text 포함 x
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// previous sibling 반환
val = listItem.previousSibling; // text 포함
val = listItem.previousElementSibling; // 이전 요소가 없을 경우 null
console.log(val);
