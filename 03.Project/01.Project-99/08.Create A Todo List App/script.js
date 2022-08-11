const taskInput = document.querySelector(".task-input input"),
filters = document.querySelectorAll(".filters span"),
clearAll = document.querySelector(".clear-btn"),
taskBox = document.querySelector(".task-box");

let editId,
isEditTask = false,
// getting localStorage todo-list
todos = JSON.parse(localStorage.getItem("todo-list"));

filters.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("span.active").classList.remove("active");
        btn.classList.add("active");
        showTodo(btn.id);
    });
});

function showTodo(filter){
    let li = '';
    if(todos){
        todos.forEach((todo, id) => {
            // console.log(id, todo)
            // if todo status is completed, set the isCompleted value to checked
            let isCompleted = todo.status == 'completed' ? 'checked' : '';
            if(filter == todo.status || filter == "all"){
                li += `<li class="task">
                        <label for="${id}">
                            <input onclick = "updateStatus(this)" type="checkbox" name="" id="${id}" ${isCompleted}>
                            <p class="${isCompleted}">${todo.name}</p>
                        </label>
                        <div class="settings">
                            <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                            <ul class="task-menu">
                                <li onclick='editTask(${id}, "${todo.name}")'><i class="uil uil-pen"></i>Edit</li>
                                <li onclick='deleteTask(${id}, "${filter}")'><i class="uil uil-trash"></i>Delete</li>
                            </ul>
                        </div>
                    </li>`
            }
            
        });
    }
    // console.log(li);
    // if li isn't empty, insert this value inside taskbox else insert span
    taskBox.innerHTML = li || `<span>You don't have any task here</span>`;
}
showTodo('all');

function showMenu(selectedTask){
    // console.log(selectedTask)
    // getting task menu div
    let menuDiv = selectedTask.parentElement.lastElementChild;
    menuDiv.classList.add("show");
    // removing show class from the task menu on the document click
    document.addEventListener("click", e => {
        if(e.target.tagName != "I" || e.target != selectedTask) {
            menuDiv.classList.remove("show");
        }
    });
}

function editTask(taskId, textName) {
    editId = taskId;
    isEditTask = true;
    taskInput.value = textName;
    taskInput.focus();
    taskInput.classList.add("active");
}
function deleteTask(deleteId, filter) {
    console.log(deleteId);
    isEditTask = false;
    // removing selected task from array/todos
    todos.splice(deleteId, 1);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo(filter);
}

clearAll.addEventListener("click", () => {
    isEditTask = false;
    // removing all items of array/todos
    todos.splice(0, todos.length);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo('all')
});

function updateStatus(selectedTask){
    // console.log(selectedTask);
    // getting paragraph that contains task name
    let taskName = selectedTask.parentElement.lastElementChild;
    // console.log(taskName);
    if(selectedTask.checked){
        taskName.classList.add("checked");
        // updating the status of selected task to completed
        todos[selectedTask.id].status = "completed";
    }
    else {
        
        taskName.classList.remove("checked");
        // updating the status of selected task to pending
        todos[selectedTask.id].status = "pending";
    }
    // console.log(todos)
    localStorage.setItem("todo-list", JSON.stringify(todos));
}

taskInput.addEventListener('keyup', e => {
    let userTask = taskInput.value.trim();
    if(e.key == 'Enter' && userTask){
        if(!isEditTask){ // if isEditedtask isn't true
            if(!todos){
                // if isn,t exist, pass an empty array to todos
                todos = []
            }
            let taskInfo = {name: userTask, status: 'pending'};
            todos.push(taskInfo); // adding new task to todos
        } else {
            isEditTask = false;
            todos[editId].name = userTask;
        }
        
        taskInput.value = '';
        localStorage.setItem("todo-list", JSON.stringify(todos));
        showTodo('all');
        // console.log(todos)
    }
})