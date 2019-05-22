
var button = document.getElementsByClassName("digit");
for (let i=0; i<button.length; i++){
button[i].addEventListener("click", display);
}

var string = (0)
function display() {
	string += (this.innerHTML);
  document.getElementById("display").innerHTML=string
}

document.getElementById("clear").addEventListener("click", cleardisplay);

function cleardisplay() {
	string = (0)
	document.getElementById("display").innerHTML=string
}

document.getElementById("equal").addEventListener("click", calculate);

function calculate() {
	var answer = (eval(string));
	document.getElementById("display").innerHTML= answer;
	string = (0)
}
