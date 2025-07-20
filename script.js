const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("task-list");

function addTask() {
    const inputValue = input.value.trim();
    if (inputValue === "") {
        alert("Please enter a task.");
        return;
    }

    const reminderTime = prompt("⏰  Set reminder time in minutes (leave blank for no reminder):");
    if (reminderTime !== null && reminderTime !== "" && !isNaN(reminderTime) && reminderTime > 0) {
        setTimeout(() => {
            alert(`⏰ Reminder: "${inputValue}"`);
        }, reminderTime * 60000);
    }

    const newTask = document.createElement("li");
    newTask.textContent = inputValue;
    newTask.className = "task-item";
    taskList.appendChild(newTask);
    input.value = '';
}

addBtn.addEventListener("click", addTask);

// Trigger "Add" on Enter key
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});
