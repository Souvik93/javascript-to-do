var namesList = [];

var completedTasks = [];

var newName;

var todoCounts = 0;

var fVal = document.getElementById("task");


var taskInput = document.getElementById("task");

function weather()
{
    
var url = 'http://api.apixu.com/v1/current.json?key=23319fb777b04d468cc173118173112&q='+document.getElementById("search").value;
var req = new Request(url);
    fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
        
        console.log(data.current);
        var liElement = document.createElement('li');
        var span=document.createElement('span');
        var span2=document.createElement("h5");
        var img=document.createElement("img");
        var label=document.createElement("label");
        label.innerText=data.current.condition.text; 
        span2.classList.add("h5-style");
        span2.appendChild(label);
        img.src=data.current.condition.icon;
        span2.appendChild(img);
        span.innerText= "Region: "+ data.location.region + ",Current Temperature:"+data.current.temp_c;
        span.classList.add("span-style");
        liElement.className="weather-li";
        var h2=document.createElement("H3");
        h2.innerText=data.location.name;
        h2.classList.add("h2-style");
        
        liElement.appendChild(h2);
        liElement.appendChild(span);
        liElement.appendChild(span2);
        
        //console.log(document.getElementById("weatherUl").hasChildNodes);
        if(document.getElementById("weatherUl").hasChildNodes)
            {
                var textnode = document.createTextNode("Water");
        document.getElementById("weatherUl").replaceChild(liElement,document.getElementById("weatherUl").firstChild);
            }
        
        else{
            document.getElementById("weatherUl").appendChild(liElement);
        }
        
    
    })
  
  .catch(function(error) {
        alert("Invalid City Name");
        document.getElementById("weatherUl").innerHTML="";
    console.log(error);
  });  
    
}


function updateToDoCount(size) {



    todoCounts = size;
    document.getElementById("todoCount").innerHTML = todoCounts;
    


}

function addTask() {

    if (document.getElementById("task").value == "") {
        alert("Blank Value");
    } else {



        this.namesList.push(document.getElementById("task").value);

        //document.getElementById("taskDetails").innerHTML= document.getElementById("task").value;



        for (var i = 0, n; n = namesList[i]; i++) {

            var liElement = document.createElement('li');

            var btn = document.createElement('button');

            var checkBox = document.createElement("input"); // checkbox

            var label = document.createElement("label");

            checkBox.classList.add("col-md-1");

            liElement.classList.add("li-style", "col-md-12", "col-xs-12");

            liElement.style.cssText = 'padding-left:0px';

            btn.innerText = "Delete";

            btn.onclick = d;

            btn.classList.add("btn", "btn-danger", "myBtn", "pull-right", "col-md-2");

            checkBox.type = "checkbox";

            checkBox.onchange = c;




            label.value = n;

            label.innerText = n;

            liElement.id = i;

            label.classList.add("label-style", "col-md-9");

            liElement.appendChild(checkBox);
            liElement.appendChild(label);
            liElement.appendChild(btn);



        }

        document.getElementById("taskDetails").appendChild(liElement);

        document.getElementById("task").value = "";


        document.getElementById("task").focus();

        var size = document.getElementById("taskDetails").childElementCount;

        updateToDoCount(size);

    }




}


var c = function completeTask() {

    alert("Task Completed");
    var c = this.parentElement.childNodes;
    console.log(c[1]);
    completedTasks.push(c[1].value);

    var elm = document.getElementById(this.parentElement.id);

    var size = document.getElementById(elm.id).parentElement.childElementCount;

    elm.parentNode.removeChild(elm);

    updateToDoCount(size - 1);


    for (var i = 0, n; n = completedTasks[i]; i++) {
        var liElm = document.createElement('li');

        var label = document.createElement("label");

        var btn = document.createElement("button");

        btn.innerText = "Delete";

        btn.onclick = d;

        btn.classList.add("btn", "btn-danger", "myBtn", "pull-right", "col-md-2");

        liElm.classList.add("li-style");

        label.innerText = n;
		
		label.classList.add("col-md-10");


        liElm.id = i+"count";
		
		liElm.classList.add("li-style", "col-md-12", "col-xs-12");

            liElm.style.cssText = 'padding-left:0px';

        liElm.appendChild(label);
        liElm.appendChild(btn);

    }

    document.getElementById("completedTasksUl").appendChild(liElm);



}

// For deleting tasks
var d = function deleteTask() {
    alert("Deletion Done");
    var elm = document.getElementById(this.parentElement.id);
    var count = document.getElementById(elm.id).parentElement.childElementCount;
	var flag= document.getElementById(elm.id).parentElement.id;
	console.log( document.getElementById(elm.id).parentElement.childElementCount);
    elm.parentNode.removeChild(elm);
	//For Updating The Pending Task Counter
	if(flag=="taskDetails")
		{
			 updateToDoCount(count - 1);
		}
   
}