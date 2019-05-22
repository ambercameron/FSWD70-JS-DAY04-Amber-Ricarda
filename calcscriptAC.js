
var button = document.getElementsByClassName("digit");
for (let i=0; i<button.length; i++){
button[i].addEventListener("click", display);
}

var string = ("")
function display() {
	string += (this.innerHTML);
  	document.getElementById("display1").innerHTML= string;
  	var answer = (eval(string));
	document.getElementById("display2").innerHTML= answer;
}

var button = document.getElementsByClassName("math");
for (let i=0; i<button.length; i++){
button[i].addEventListener("click", dismath);
}

var string = ("")
function dismath() {
	string += (this.innerHTML);
  	document.getElementById("display1").innerHTML= string;
}


document.getElementById("clear").addEventListener("click", cleardisplay);

function cleardisplay() {
	string = ("");
	document.getElementById("display1").innerHTML=string;
	document.getElementById("display2").innerHTML="";
}

document.getElementById("equal").addEventListener("click", calculate);

function calculate() {
	var answer = (eval(string));
	document.getElementById("display2").innerHTML= answer;
	string = (answer)
	document.getElementById("display1").innerHTML="";
}
