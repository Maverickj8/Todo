// create a variable that access the DOM tree
const newTaskInput = document.querySelector("#new-task");
const allTodo = document.querySelector(".plans-all");
const filledForm = document.querySelector("#add-tasks");
const clearAll = document.querySelector("#clear-all")
let title = document.querySelector(".title")

// Add an Event listner that clears all task from the localStorage Array
clearAll.addEventListener('click', () => {
    // This will remove all the tasks from the localStorage
    localStorage.removeItem("todos") 
    let deletedTodos = document.querySelectorAll(".new-plans")
    deletedTodos.forEach(todo => {
        allTodo.removeChild(todo)
    });
    // This will be the title when all task has been cleared
    title.innerText = "Add Task"
})

// To add a new task
let createNewTodo = (task) => {
  // This will create a div that will contain the added tasks
  let newItem = document.createElement("div");
  // This will add the new plan to the created div
  newItem.classList.add("new-plans")
  // The new task will have this template
  const newTaskItem = `
   <p class="text">${task}</p>
    <div class="edit-delete">
    <button class="edit">Done</button>
    <button class="delete"><i class="bi bi-trash3"></i></button>
    </div>`;
    // This will make sure that the new task inherits the above template
  newItem.innerHTML = newTaskItem;
  allTodo.appendChild(newItem);
//  This will select the delete button and the added task
  let delButton = newItem.querySelector(".delete");
  let addedTask = newItem.querySelector(".text");

 
  // This function will remove the task from the localStorage when it is deleted
  let removeItemFromStorage = () => {

    let actualText = addedTask.innerText;
    // This will get the indexOf the task that is to be deleted
    let index = todos.indexOf(actualText);
    // This will remove the particular task that was delete from the array of taskes
    todos.splice(index, 1);
    
    localStorage.setItem("todos", JSON.stringify(todos));
    todos.length == 0?title.innerText = "Add Task": title.innerText = "All Tasks"
  };

  delButton.addEventListener("click", () => {
    removeItemFromStorage();
    allTodo.removeChild(newItem);
  });

  let editButton = newItem.querySelector(".edit");

  editButton.addEventListener("click", () => {
    addedTask.classList.toggle("done");
    if (addedTask.classList.contains("done")) {
      editButton.innerText = "undone";
    } else {
      editButton.innerText = "done";
    }
  });
};

// NB: JSON stringify converts objects to string, JSON parse converts string to object.
let todos = JSON.parse(localStorage.getItem("todos")) || [];

if (todos.length == 0) {
   title.innerText = "Add Task" 
}

if (todos.length > 0) {
  todos.forEach((todo) => {
    createNewTodo(todo);
  });
}
let handleFormSubmit = (event) => {
  event.preventDefault();
  const taskSubmit = document.querySelector("#new-task");
  let value = taskSubmit.value;
  createNewTodo(value);
  taskSubmit.value = "";
  todos.push(value);
  localStorage.setItem("todos", JSON.stringify(todos));
  title.innerText = "All tasks"
};
filledForm.addEventListener("submit", handleFormSubmit);

// How to save things to local storage and retrieve them
// 1.
// let todos = ["call", "home"]
// localStorage.setItem('todos', JSON.stringify(todos));
// localStorage.getItem("todos");
// // localStorage.removeItem("todos");
// // localStorage.clear()
