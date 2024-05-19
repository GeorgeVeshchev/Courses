document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.js--form');
    const input = document.querySelector('.js--form__input');
    const todosWrapper = document.querySelector('.js--todos-wrapper');

    loadTasks();

    function addTask(taskText) {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            todoItem.classList.toggle('todo-item--checked');
            saveTasks();
        });

        const description = document.createElement('span');
        description.classList.add('todo-item__description');
        description.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('todo-item__delete');
        deleteButton.textContent = 'Видалити';
        deleteButton.addEventListener('click', function() {
            todoItem.remove();
            saveTasks();
        });

        todoItem.appendChild(checkbox);
        todoItem.appendChild(description);
        todoItem.appendChild(deleteButton);
        todosWrapper.appendChild(todoItem);

        saveTasks();
    }


    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = input.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            input.value = '';
        }
    });

    function saveTasks() {
        const tasks = [];
        todosWrapper.querySelectorAll('.todo-item').forEach(function(todoItem) {
            tasks.push({
                text: todoItem.querySelector('.todo-item__description').textContent,
                done: todoItem.classList.contains('todo-item--checked')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            const tasks = JSON.parse(savedTasks);
            tasks.forEach(function(task) {
                addTask(task.text);
                if (task.done) {
                    todosWrapper.lastChild.classList.add('todo-item--checked');
                }
            });
        }
    }
});
