var buttonAdd = document.getElementById("enter");
var buttonClearList = document.getElementById("clear");
var input = document.getElementById("user-input");
var ul = document.querySelector("ul");
 // var list = document.getElementById("list");




buttonAdd.addEventListener("click", function(){
	if(input.value.length > 0){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var i = document.createElement("i");
	ul.appendChild(li);
	input.value="";
	}
})


buttonClearList.addEventListener("click" , function(){
    ul.removeChild(ul.childNodes[1]);
})

// li.addEventListener("click", function(){
// 	li.style.color ='red';
// });

