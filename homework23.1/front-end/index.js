$(() => {
  $('#add-todo').on('click', async () => {
      const todoText = $('#todo-input').val();
      if (todoText) {
          try {
              const response = await fetch('http://localhost:3111/todos', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ title: todoText })
              });

              if (!response.ok) {
                  throw new Error('Failed to add todo: ' + response.statusText);
              }

              const newTodo = await response.json();

              const listItem = $(`
                  <li class="list-group-item todo-item" data-todo-id="${newTodo._id}">
                      <span class="task-text">${newTodo.title}</span>
                      <button class="btn btn-sm delete-btn">Удалить</button>
                  </li>
              `);
              $('#todo-list').append(listItem);
              $('#todo-input').val('');
          } catch (error) {
              console.error('Ошибка при добавлении задачи:', error);
            
          }
      }
  });

  $('#todo-list').on('click', '.delete-btn', async function() {
      const todoItem = $(this).closest('.todo-item');
      const todoId = todoItem.data('todo-id');

      try {
          const response = await fetch(`http://localhost:3111/todos/${todoId}`, {
              method: 'DELETE'
          });

          if (!response.ok) {
              throw new Error('Failed to delete todo: ' + response.statusText);
          }

          todoItem.remove();
      } catch (error) {
          console.error('Ошибка при удалении задачи:', error);
      }
  });

  $('#todo-list').on('click', '.todo-item', async function() {
      const taskText = $(this).find('.task-text').text();
      $('#todoModalBody').text(taskText);
      $('#todoModal').modal('show');
  });

  
  fetch('http://localhost:3111/todos')
      .then(response => {
          if (!response.ok) {
              throw new Error('Failed to fetch todos: ' + response.statusText);
          }
          return response.json();
      })
      .then(data => {
          data.forEach(todo => {
              const listItem = $(`
                  <li class="list-group-item todo-item" data-todo-id="${todo._id}">
                      <span class="task-text">${todo.title}</span>
                      <button class="btn btn-sm delete-btn">Удалить</button>
                  </li>
              `);
              $('#todo-list').append(listItem);
          });
      })
      .catch(error => {
          console.error('Ошибка при получении списка задач:', error);
      });
});
