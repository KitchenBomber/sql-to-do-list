console.log('js');
$(document).ready(onReady);

function onReady (){
    console.log('jquery ready');
    $("#btn-add-task").on('click', taskClick);
    $('#outTasks').on('click', '.deleteTaskButton', deleteTask);
    $('#outTasks').on('click', '.checkOffButton', checkOff);
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
            <button class="checkOffButton" data-id=${ task.id} data-complete=${task.completed }>DONE</button>
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
})//END POST


}
//Delete Route
function deleteTask(){
    const myId = $(this).data('id');
    console.log('in deleteTask', myId);
    $.ajax({
        type: 'DELETE',
        url: `/tasks/${myId}`
    }).then(function(response) {
        console.log('back from Delete:', response);
        getTasks();
    }).catch(function(error){
        alert('DELETE is busted');
        console.log(error);      
    })
}//END DELETE


//PUT Route
function checkOff(){
    let id = $(this).data('id');
    // let status = $(this).data('complete');
    console.log('in checkOff', id);
    $.ajax({
        type: 'PUT',
        url: `/tasks/${id}`,
        data:{
            completed: status
        }
    }).then(function(response){
        getTasks();
        console.log(response);
    }).catch(function(error){
        alert('error in PUT /tasks')
    })
}//END PUT
