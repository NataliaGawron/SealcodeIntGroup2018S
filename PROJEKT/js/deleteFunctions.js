
function reloadButtons(){
    
var removeButtons = document.getElementsByName("removeTask");

for(var i = 0; i < removeButtons.length; i++)
{
    removeButtons[i].onclick = function()
    {
        var id = this.id;
        id = id.toString();
        id = id.substring(7, id.length);
        
        var taskLabel = document.getElementById("t-"+id);
        var toDoListLabel = document.getElementsByClassName("toDoList")[0];
        toDoListLabel.removeChild(taskLabel);
        deleteTask(id);
    }
}

}

window.addEventListener("load", reloadButtons, false);

function removeAllTasks()
{
    console.log("del")
    var toDoList = document.getElementsByClassName("toDoList")[0];
    while (toDoList.firstChild) 
    {
        toDoList.removeChild(toDoList.firstChild);
    }
}
