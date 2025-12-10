function addTask() {
    const taskInput = document.getElementById("taskInput");
    const priority = document.getElementById("priority").value;
    const taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${taskInput.value} (${priority})</span>
        <div>
            <button onclick="completeTask(this)">✔</button>
            <button class="delete" onclick="deleteTask(this)">✖</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

function completeTask(button) {
    const task = button.parentElement.parentElement;
    task.classList.toggle("completed");
}

function deleteTask(button) {
    const task = button.parentElement.parentElement;
    task.remove();
}
