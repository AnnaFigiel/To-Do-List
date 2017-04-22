$(document).ready(function(){
   
 /* ToDoList */
    
    var taskList = document.getElementById("taskList");
    var taskButton = document.getElementById("addTaskButton");
    var taskInput = document.getElementById("taskInput"); 
    var removeFinishedTasksButton = document.getElementById("removeFinishedTasksButton");
    var counter = document.getElementById("counter"); 
    
    addTaskButton.addEventListener("click", addTask);
    removeFinishedTasksButton.addEventListener("click", removeFinished);
    
    function addTask () {
        
        if (taskInput.value.length <= 3 || taskInput.value.length >= 150) {
            console.log("za malo lub za duzo znakow");
            return; 
        }
        
        var newTask = document.createElement("li");
        var newTaskText = document.createElement("p");
        var buttonDelete = document.createElement("button");
        var buttonComplete = document.createElement("button");
        
        newTask.classList.add("newTask");
        newTaskText.innerHTML = taskInput.value;
        buttonDelete.innerHTML = "Usuń";
        buttonComplete.innerHTML = "Wykonane";
        
        newTask.appendChild(newTaskText);
        newTask.appendChild(buttonDelete);
        newTask.appendChild(buttonComplete);
        taskList.appendChild(newTask);  
        
        taskInput.value = "";
        
		buttonComplete.addEventListener("click", onButtonComplete);
        buttonDelete.addEventListener("click", onButtonDelete);
        
        findDone();
	}

	function onButtonComplete() {
		this.parentElement.classList.toggle("done");
        findDone();
	}  

    function onButtonDelete () {
		this.parentElement.parentElement.removeChild(this.parentElement);
        findDone();
	} 
    
    
    function removeFinished() {
        var elementsToRemove = document.querySelectorAll(".done");
        
        for (var i=0; elementsToRemove.length; i++) {
            elementsToRemove[i].parentElement.removeChild(elementsToRemove[i]);
        }
    } 
    
    function findDone() {
//  var notDone = document.querySelectorAll("li.newTask");  
    var notDone = taskList.querySelectorAll("li:not(.done)");
        counter.innerHTML = notDone.length;
    }    
    
});


