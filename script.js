const form = document.querySelector(".form");

const list = document.querySelector(".todo-list");

// form submit event function
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log(event.target[0].value);

  // Creating new task

  // >>creating wrappers (workspace for task)
  const newTodoText = event.target[0].value;
  const taskWrapper = document.createElement("li");
  taskWrapper.classList.add("todo");
  const inputWrapper = document.createElement("div");
  inputWrapper.classList.add("text");
  const buttonWrapper = document.createElement("div");
  buttonWrapper.classList.add("buttons");
  // >>creating text
  const input = document.createElement("input");
  input.classList.add("todo");
  input.type = "text";
  input.value = newTodoText;
  input.disabled = true;
  // pushing input into task
  if (newTodoText === "") {
    return alert("Input for task can not be empty.");
  }
  inputWrapper.appendChild(input);

  // >>creating buttons
  const editButton = document.createElement("button");
  editButton.classList.add("edit");
  editButton.textContent = "Edit";
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.textContent = "Delete";
  const doneButton = document.createElement("button");
  doneButton.classList.add("done");
  doneButton.textContent = "Done";

  // pushing buttons into task
  buttonWrapper.appendChild(editButton);
  buttonWrapper.appendChild(deleteButton);
  buttonWrapper.appendChild(doneButton);

  deleteButton.addEventListener("click", () => {
    list.removeChild(taskWrapper);
  });

  editButton.addEventListener("click", () => {
    if (editButton.textContent === "Edit") {
      input.disabled = false;
      editButton.textContent = "Save";
      inputWrapper.classList.toggle("active");
      input.focus();
    } else {
      editButton.textContent = "Edit";
      inputWrapper.classList.toggle("active");
      input.disabled = true;
    }
  });

  doneButton.addEventListener("click", () => {
    if (doneButton.textContent === "Done") {
      doneButton.textContent = "Undo";
      inputWrapper.classList.toggle("finished");
    } else {
      doneButton.textContent = "Done";
      inputWrapper.classList.toggle("finished");
    }
  });

  taskWrapper.appendChild(inputWrapper);
  taskWrapper.appendChild(buttonWrapper);

  list.appendChild(taskWrapper);
  // input value reset
  event.target[0].value = "";
});
