//Basic 01

	birthYear = 1989;
	currentYear = new Date().getFullYear();
	age = currentYear-birthYear;

	document.getElementById("lowage").innerHTML = age-1
	document.getElementById("highage").innerHTML = age

//Basic 02
function truncate(){
	var wowstring = "I am a hero from World of Warcraft";
	var lengthc = 12;
	var newstring = wowstring.substring(0,(Number(lengthc)));
	return newstring
}
	document.getElementById("output02").innerHTML = truncate();

//Basic 03

function personalInfo(){

	name = "Amber"
	surname = "Cameron"
	age = "30"
	furtherInfo = "I am a future programmer"
	return "Hi I am " + name + ". I am " + age + " years old and " + furtherInfo + "."
}

document.getElementById("myInfo").innerHTML = personalInfo();

//Intermediate 01

function HotelConstructor(name, available) {
       this.name = name;
       this.available = available;

       }

var hilton = new HotelConstructor('Hilton', Math.floor(Math.random() * 11));
var marriot = new HotelConstructor('Marriott', Math.floor(Math.random() * 11));
var holidayInn = new HotelConstructor('Holiday Inn', Math.floor(Math.random() * 11));
