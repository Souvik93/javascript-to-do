var namesList = [];

var completedTasks = [];

var newName;

var todoCounts=0;

var fVal = document.getElementById("task");


var taskInput = document.getElementById("task");



function updateToDoCount(size)
{
	
	
	
	todoCounts=size;
	document.getElementById("todoCount").innerHTML=todoCounts;
	
}

function addTask() {
	
	if(document.getElementById("task").value=="")
		{
			alert("Blank Value");
		}
	
	else{
		
	

    this.namesList.push(document.getElementById("task").value);

    //document.getElementById("taskDetails").innerHTML= document.getElementById("task").value;



    for (var i = 0, n; n = namesList[i]; i++) {

        var liElement = document.createElement('li');

        var btn = document.createElement('button');

        var checkBox = document.createElement("input"); // checkbox

        var label = document.createElement("label");
		
		checkBox.classList.add("col-md-1");
		
		liElement.classList.add("li-style", "col-md-12","col-xs-12");
		
		liElement.style.cssText='padding-left:0px';

        btn.innerText = "Delete";

        btn.onclick = d;
		
		btn.classList.add("btn", "btn-danger" ,"myBtn" , "pull-right","col-md-2");

        checkBox.type = "checkbox";

        checkBox.onchange = c;
		
		


        label.value = n;
		
		label.innerText = n;

        liElement.id = i;
		
		label.classList.add("label-style","col-md-9");

        liElement.appendChild(checkBox);
        liElement.appendChild(label);
        liElement.appendChild(btn);



    }

    document.getElementById("taskDetails").appendChild(liElement);

    document.getElementById("task").value = "";


    document.getElementById("task").focus();
		
	var size=document.getElementById("taskDetails").childElementCount;
		
	updateToDoCount(size);
		
	}




}


var c = function completeTask() {

    alert("Task Completed");
    var c = this.parentElement.childNodes;
    console.log(c[1]);
    completedTasks.push(c[1].value);

    var elm = document.getElementById(this.parentElement.id);

	var size=document.getElementById(elm.id).parentElement.childElementCount;

    elm.parentNode.removeChild(elm);
	
	updateToDoCount(size-1);


    for (var i = 0, n; n = completedTasks[i]; i++) {
        var liElm = document.createElement('li');

        var label = document.createElement("label");

        var btn = document.createElement("button");

        btn.innerText = "Delete";

        btn.onclick = d;
		
		btn.classList.add("btn", "btn-danger", "myBtn", "pull-right");
		
		liElm.classList.add("li-style");

        label.innerText = n;
		

        liElm.id = i;

        liElm.appendChild(label);
        liElm.appendChild(btn);

    }

    document.getElementById("completedTasksUl").appendChild(liElm);



}

// For deleting tasks
var d = function deleteTask() {
    alert("Deletion Done");

    console.log("Task Deleted Successfully");
    console.log(document.getElementById("task"));

    //var lists= document.getElementsByTagName("li");
    //console.log(lists);
    var elm = document.getElementById(this.parentElement.id);
	var count=document.getElementById(elm.id).parentElement.childElementCount;
	elm.parentNode.removeChild(elm);
	updateToDoCount(count-1);
}