  // Select elements
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");
  
  // Add task
  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const taskItem = document.createElement("li");
  
      const taskContent = document.createElement("span");
      taskContent.textContent = taskText;
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
  
      // Delete task
      deleteBtn.addEventListener("click", () => {
        taskList.removeChild(taskItem);
      });
  
      taskItem.appendChild(taskContent);
      taskItem.appendChild(deleteBtn);
      taskList.appendChild(taskItem);
  
      taskInput.value = ""; // Clear input
    } else {
      alert("Please enter a task!");
    }
  });
  
  // Add task with "Enter" key
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTaskBtn.click();
    }
  });
  