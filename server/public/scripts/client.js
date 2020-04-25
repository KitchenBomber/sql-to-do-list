console.log('js');
$(document).ready(onReady);

function onReady (){
    console.log('jquery ready');
    $("#btn-add-task").on('click', taskClick);
    getTasks();
}

function appendToDom(taskArray){
    console.log('in append to DOM with,', taskArray);
    $( '#outTasks').empty();
    for( let task of taskArray ){
    $('#outTasks' ).append(`
    <tr>
        <td>${ task.description }<td>
        <td>${ task.completed }
            <button class="checkOffButton" data-id=${ task.id }>DONE</button>
        </td>
        <td><button class="deleteTaskButton" data-id=${ task.id}>DELETE</button></td>
        </tr>`)
    }
}

function taskClick(event){
    event.preventDefault();
    console.log('you are pushing my button');
    let newTask = {};
    newTask.description = $( '#in-task' ).val(),
    newTask.due = $( '#in-due-date' ).val(),
    console.log(newTask);
    addTask(newTask);
    
}

//GET Route
function getTasks(){
    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then(function(response){
        console.log(response);
        appendToDom(response);
    }).catch(function (error){
        alert('error retrieving task array, see console');
        console.log(error);
    })
}

//POST Route
function addTask(newTask){
console.log('in addTask', newTask);
$.ajax({
    type: 'POST',
    url: '/tasks',
    data: newTask
}).then( function(response){
    console.log('back from POST with:', response);
    getTasks();
} ).catch(function(error){
    alert( 'error adding task. see console' );
    console.log(error);
})


}
//Delete Route

//PUT Route

