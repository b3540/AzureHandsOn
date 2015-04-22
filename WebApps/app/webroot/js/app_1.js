$(function () {
    function refreshTodoItems(timeout) {
        $.get("/todos.json").then(function (todoItems) {
            var listItems = $.map(todoItems, function (item) {
                return $('<li>')
                    .attr('data-todoitem-id', item.Todo.id)
                    .append($('<button class="item-delete">Delete</button>'))
                    .append($('<input type="checkbox" class="item-complete">').prop('checked', item.Todo.complete))
                    .append($('<div>').append($('<input class="item-text">').val(item.Todo.text)));
            });
            $('#todo-items').empty().append(listItems).toggle(listItems.length > 0);
            $('#summary').html('<strong>' + todoItems.length + '</strong> item(s)');
        }, handleError);
    }
 
    function handleError(error) {
        var text = error + (error.request ? ' - ' + error.request.status : '');
        $('#errorlog').append($('<li>').text(text));
    }
 
    refreshTodoItems();
});