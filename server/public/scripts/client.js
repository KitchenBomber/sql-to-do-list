console.log('js');
$(document).ready(onReady);

function onReady (){
    console.log('jquery ready');
    $("#btn-add-task").on( 'click', addTask);
    
}

function addTask(){
    console.log('you are pushing my button');
    let newTask = {
        task: $( '#in-task' ).val(),
        dueDate: $( '#in-due-date' ).val(),
    };
    console.log(newTask);
    
}
