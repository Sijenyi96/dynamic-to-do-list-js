// setup event listener for page load
document.addEventListener('DOMContentLoaded',() => {
       loadTasks();
    // select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // create the addTask function
    function addTask() {
        const taskText = taskInput.value.trim();
        //add classlist
        const addButton = document.createElement('button');
        addButton.textContent = 'Add Task';
        addButton.classList.add = 'add-task-btn';
        // check if taskText is not empty
        if (taskText === '') {
            alert('Enter a new task');
        }
        // task creation and removal
        const newTask = document.createElement('li');
        newTask.textContent = taskText;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        // assign onclick event
        removeButton.onclick = function(){
            taskList.removeChild(newTask);
        }
        // append the remove button
        newTask.appendChild(removeButton);
        taskList.appendChild(newTask);
        // clear the task input
        taskInput.value = '';
    }
    
    // attach event listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    })
    // invoke the addTask function
    addTask();
})