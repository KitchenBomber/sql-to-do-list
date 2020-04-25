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
        <td>${ task.task_description }<td>
        <td>${ task.task_completed }
            <button class="checkOffButton" data-id=${ task.id }>DONE</button>
        </td>
        <td><button class="deleteTaskButton" data-id=${ task.id}>DELETE</button></td>
        </tr>`)
    }
}

function taskClick(event){
    event.preventDefault();
    console.log('you are pushing my button');
    let newTask = {
        task: $( '#in-task' ).val(),
        dueDate: $( '#in-due-date' ).val(),
    };
    console.log(newTask);
    getTasks(newTask);
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

//Delete Route

//PUT Route

