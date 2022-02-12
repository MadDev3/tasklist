
	let parent;
	let elem;
	let clone;
	var els = document.getElementsByName("del");
	var ready  = document.getElementsByName("ready");


function CloneTask(){
	parent = document.getElementById('second');
	elem = parent.querySelector('.task');
	clone = elem.cloneNode(true);

	els.forEach(function(item) {
    item.addEventListener("click", function(){
        item.closest(".task").remove();
    });
});

	ready.forEach(function(item1) {
    item1.addEventListener("click", function(){
        var p = item1.closest(".task");
        p.querySelector(".circle").style.borderColor = "green";
    });
});


}

function RemoveAll(){
	parent = document.getElementById('second');
	while(parent.firstChild){
	parent.removeChild(parent.firstChild);
	}
}


function ReadyAll(){
	for (var i = 0; i < document.getElementsByClassName('circle').length; i++) {
		document.getElementsByClassName('circle')[i].style.borderColor = 'green';
	}
	
}


function AddTask(){



		if (document.getElementById('taskText').value) {
			var taskText = document.getElementById('taskText').value;
			let newClone = clone.cloneNode(true);	
			newClone.children[1].innerHTML = taskText;
			parent.appendChild(newClone);
			document.getElementById('taskText').value = '';

			els.forEach(function(item) {
    item.addEventListener("click", function(){
        item.closest(".task").remove();
    });
});

			ready.forEach(function(item1) {
    item1.addEventListener("click", function(){
        var p = item1.closest(".task");
        p.querySelector(".circle").style.borderColor = "green";
    });
});
		}


}