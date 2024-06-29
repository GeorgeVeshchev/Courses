$(() => {
    $('#add-todo').on('click', () => {
        const todoText = $('#todo-input').val();
        if (todoText) {
            const listItem = $(`
                <li class="list-group-item todo-item">
                    <span class="task-text">${todoText}</span>
                    <button class="btn btn-sm delete-btn">Удалить</button>
                </li>
            `);
            $('#todo-list').append(listItem);
            $('#todo-input').val('');
        }
    });

    $('#todo-list').on('click', '.delete-btn', function() {
        $(this).closest('.todo-item').remove();
    });

    $('#todo-list').on('click', '.todo-item', function() {
        const taskText = $(this).find('.task-text').text();
        $('#todoModalBody').text(taskText);
        $('#todoModal').modal('show');
    });
}); 


fetch('http://localhost:3111/todo-list', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  console.log('Список задач получен:', data);
})
.catch(error => {
  console.error('Ошибка при получении списка задач:', error);
});