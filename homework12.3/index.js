document.getElementById('wrapper').addEventListener('click', function(event) {
    if (event.target && event.target.nodeName == 'BUTTON') {
        event.target.parentNode.remove();
    }
});

document.getElementById('addNewTask').addEventListener('click', function(){
    let newTaskInput = document.getElementById('newTaskInput');
    if (newTaskText !== "") {
        let ul = document.querySelector('#wrapper ul');
        let li = document.createElement('li');
        li.textContent = newTaskText;
            
    }
});
