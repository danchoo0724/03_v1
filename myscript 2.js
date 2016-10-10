//hide Add Task function at the beginning
$(document).ready(function () {
    $('#addTask').hide();
    $("button").on('click', function () {
        //console.log($('.actionButton'));
        $('#addTask').show();
    });

});


var completeBtn = document.getElementById('completeBtn');

$(document).ready(function () {
//have the textfield for Add Task be disabled if empty
    setInterval(function(){
        if($('.txt').val().length > 0){
            $(".btn").attr('disabled', false);
        }else{
            $(".btn").attr('disabled', true);
        }
    }, 100);
 
//New Task is created when user clicks "Add Task" button
    $(".btn").on('click', function () {
        $('#newTask').append("<tr> <td>" + '<input type="checkbox" name="myCheckbox" />' + $(".txt").val() + "</td> </tr>");
     
    });

//Deleting completed New Tasks
    $("#completeBtn").on('click', function(){
        $('#newTask tr').has('input:checkbox:checked').remove();
    });
});

//Removing already existing tasks
//completeBtn.addEventListener('click', function(){
//    var rmvTask = document.getElementsByName('task');
//        for(var i = 0; i < rmvTask.length; i++)
//        {
//            
//            if(rmvTask[i].checked)
//            {
//                //console.log(rmvTask[i].checked);
//                removeTask(rmvTask[i]);
//            }
//        }
//});
//
//function removeTask(task){
//    
//    var rmvRow = task.parentElement;
//    //console.log(rmvRow.parentElement);
//    rmvRow.parentElement.removeChild(rmvRow);
//}

$("#completeBtn").on("click",function(){
    $("input:checkbox").each(function() {
        if ($(this).is(":checked")) {
            $(this).parent().remove();
        }
    });
});