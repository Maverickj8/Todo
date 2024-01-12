// Get the input element where the user can type a new task
var taskInput = document.getElementById("new-task");

// Get the button element that will add the task to the list
var addButton = document.getElementById("addTaskButton");

// Get the ul element that will display the tasks
var taskList = document.getElementById("task-list");

// Define a function that will create a new li element for a task
function createTaskElement(taskText) {
  // Create a new li element
  var taskItem = document.createElement("li");

  // Create a checkbox input element
  var taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";

  // Create a label element to display the task text
  var taskLabel = document.createElement("label");
  taskLabel.textContent = taskText;

  // Append the checkbox and the label to the li element
  taskItem.appendChild(taskCheckbox);
  taskItem.appendChild(taskLabel);

  // Return the li element
  return taskItem;
}

// Define a function that will add a new task to the list
function addTask() {
  // Get the value of the input element
  var taskText = taskInput.value;

  // Check if the input is not empty
  if (taskText) {
    // Create a new task element
    var taskItem = createTaskElement(taskText);

    // Append the task element to the task list
    taskList.appendChild(taskItem);

    // Clear the input value
    taskInput.value = "";
  }
}

// Add an event listener to the add button that will call the addTask function
addButton.addEventListener("click", addTask);
