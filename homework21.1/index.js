$(document).ready(function() {
    $('#add-todo').on('click', function() {
        var todoText = $('#todo-input').val();
        if (todoText) {
            var listItem = $(
                '<li class="list-group-item todo-item">' +
                    '<span class="task-text">' + todoText + '</span>' +
                    '<button class="btn btn-sm delete-btn">Удалить</button>' +
                '</li>'
            );
            $('#todo-list').append(listItem);
            $('#todo-input').val('');
        }
    });

    $('#todo-list').on('click', '.delete-btn', function() {
        $(this).closest('.todo-item').remove();
    });

    $('#todo-list').on('click', '.todo-item', function() {
        var taskText = $(this).find('.task-text').text();
        $('#todoModalBody').text(taskText);
        $('#todoModal').modal('show');
    });
});
