
       // var button = document.getElementById("button");
    //    button.onclick = function() {
      //      document.add.value;
    //    }

//function myFunction() {
//    var button = document.getElementById("actionButton").value;
//    document.getElementById("addTask").innerHTML = button;
//}

//var actionButton = document.getElementById('actionButton');

$(document).ready(function () {
    $('#addTask').hide();
    $("button").on('click', function () {
        //console.log($('.actionButton'));
        $('#addTask').show();
    });
//    $('.actionButton').on('click', function() {
//        $parent_showAdd = $(this).closest('.showAdd');
//        $parent_showAdd.siblings().find('#addTask').hide();
//        $parent_showAdd.find('#addTask').show();
//    });
});

//var list = document.getElementById('add');
//
//function addTask() {
//    var add = document.getElementById('add').value;
//    document.getElementById('newTask').innerHTML = add;
//    
//    var entry = document.createElement('li');
//    entry.appendChild(document.createTextNode(add));
//    //console.log(list.appendChild);
//    list.appendChild(entry);
//}

var completeBtn = document.getElementById('completeBtn');

$(document).ready(function () {
//    $(".btn").attr('disabled',true);
//    
//    $('#newTask').keyup(function(){
//        if($(this).val().length !=0){
//            $(".btn").attr('disabled', false);
//        }
//        else
//        {
//            alert('Input can not be left blank');
//            $(".btn").attr('disabled', true);
//            
//        }
//    })
//    
//    $(".btn").click(function(){
//            if($.trim($('#addTask').val()) == ''){
//                alert('Input can not be left blank');
//                $('#myCheckbox').attr('disabled',true);
//            }
//        });
    
    setInterval(function(){
        if($('.txt').val().length > 0){
            $(".btn").attr('disabled', false);
        }else{
            $(".btn").attr('disabled', true);
        }
    }, 100);
    
    
    $(".btn").on('click', function () {
        $('#newTask').append("<tr> <td>" + '<input type="checkbox" name="myCheckbox" />' + $(".txt").val() + "</td> </tr>");
     
    });
        
        
//        console.log($('#newTask'));
    
    
    
//    $("#newTask").on('click', 'input[value="completeBtn"]', function () {
//        $('#newTask td').has('input:checkbox:checked').remove();
//        //console.log($('#newTask'));
//    });
//    $("#completeBtn").on('click', function () {
//        $('#myCheckbox').has('input:checkbox:checked').remove();
//        console.log($('myCheckbox'));
//    });
    
    $("#completeBtn").on('click', function(){
        $('#newTask tr').has('input:checkbox:checked').remove();
    });
});

//var completeBtn = document.getElementById('completeBtn');

completeBtn.addEventListener('click', function(){
    var rmvTask = document.getElementsByName('task');
        for(var i = 0; i < rmvTask.length; i++)
        {
            
            if(rmvTask[i].checked)
            {
                console.log(rmvTask[i].checked);
                removeTask(rmvTask[i]);
            }
        }
    
    
   // $("#newTask").remove(); //see if get ID of checked element
//    var rmvTask2 = document.getElementsByName('newTask');
//    console.log($('#newTask'));
//        for(var i = 0; i < rmvTask2.length; i++)
//        {
//            if(rmvTask2[i].checked)
//            {
//                removeTask2(rmvTask2[i]);
//            }
//        }
});

function removeTask(task){
    
    var rmvRow = task.parentElement;
    //console.log(rmvRow.parentElement);
    rmvRow.parentElement.removeChild(rmvRow);
}

//function removeTask2(newTask){
//    
//    var rmvRow2 = newTask.parentElement;
//    //console.log(rmvRow.parentElement);
//    rmvRow2.parentElement.removeChild(rmvRow2);
//}

//var completeBtn2 = document.getElementById('completeBtn');
//
//completeBtn2.addEventListener('click', function(){
//    var rmvTask = document.getElementsByName('newTask');
//        for(var i = 0; i < rmvTask.length; i++)
//        {
//            if(rmvTask[i].checked)
//            {
//                removeTask(rmvTask[i]);
//            }
//        }
//});
//
//function removeTask(newTask){
//    
//    var rmvRow = newTask.parentElement;
//    //console.log(rmvRow.parentElement);
//    rmvRow.parentElement.removeChild(rmvRow);
//}
//            