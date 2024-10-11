const list = document.getElementById("list");
const createBtn = document.getElementById("create-btn");

let todos = [];

createBtn.addEventListener("click", createNewTodo);

function createNewTodo() {
  const item = {
    id: new Date().getTime(),
    text: "",
    complete: false,
  };

  todos.unshift(item);

  const { itemEl, inputEl, editBtnEl, removeBtnEl } = createTodoElement(item);

  list.prepend(itemEl);

  inputEl.removeAttribute("disabled");

  inputEl.focus();
  saveToLocalstorage();
}

function createTodoElement(item) {
  const itemEl = document.createElement("div");
  itemEl.classList.add("item");

  const checkboxEl = document.createElement("input");
  checkboxEl.type = "checkbox";
  checkboxEl.classList.add("checkbox");
  checkboxEl.checked = item.complete;

  if (item.complete) {
    itemEl.classList.add("complete");
  }

  const inputEl = document.createElement("input");
  inputEl.type = "text";
  inputEl.value = item.text;
  inputEl.classList.add("text");
  inputEl.setAttribute("disabled", "");

  const actionsEl = document.createElement("div");
  actionsEl.classList.add("actions");

  const editBtnEl = document.createElement("button");
  editBtnEl.classList.add("material-icons");
  editBtnEl.innerText = "edit";

  const removeBtnEl = document.createElement("button");
  removeBtnEl.classList.add("material-icons", "remove-btn");
  removeBtnEl.innerText = "remove_circle";

  inputEl.addEventListener("input", () => {
    item.text = inputEl.value;
  });

  inputEl.addEventListener("blur", () => {
    inputEl.setAttribute("disabled", "");
    saveToLocalstorage();
  });

  checkboxEl.addEventListener("change", () => {
    item.complete = checkboxEl.checked;

    if (item.complete) {
      itemEl.classList.add("complete");
    } else {
      itemEl.classList.remove("complete");
    }

    saveToLocalstorage();
  });

  editBtnEl.addEventListener("click", () => {
    inputEl.removeAttribute("disabled");
    inputEl.focus();
  });

  removeBtnEl.addEventListener("click", () => {
    todos = todos.filter((todo) => todo.id !== item.id);
    itemEl.remove();
    saveToLocalstorage();
  });

  actionsEl.appendChild(editBtnEl);
  actionsEl.appendChild(removeBtnEl);

  itemEl.appendChild(checkboxEl);
  itemEl.appendChild(inputEl);
  itemEl.appendChild(actionsEl);

  return { itemEl, inputEl, editBtnEl, removeBtnEl };
}

function saveToLocalstorage() {
  const data = JSON.stringify(todos);

  localStorage.setItem("my_todos", data);
}

function loadFromLocalstorage() {
  const data = localStorage.getItem("my_todos");

  if (data) {
    todos = JSON.parse(data);
  }
}

function displayTodos() {
  loadFromLocalstorage();

  for (let i = 0; i < todos.length; i++) {
    const item = todos[i];
    const { itemEl } = createTodoElement(item);
    list.append(itemEl);
  }
}

displayTodos();
