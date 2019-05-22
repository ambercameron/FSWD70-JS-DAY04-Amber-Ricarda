//Intermediate 01

function HotelConstructor(name, available) {
       this.name = name;
       this.available = available;

       }

var hilton = new HotelConstructor('Hilton', Math.floor(Math.random() * 11));
var marriott = new HotelConstructor('Marriott', Math.floor(Math.random() * 11));
var holiday = new HotelConstructor('Holiday Inn', Math.floor(Math.random() * 11));

function hiltonavail(){
	var n = document.getElementById("hiltonnights").value;
	console.log(hilton.available);
	console.log(n)

	if (n > Number(hilton.available)){
		document.getElementById("hiltonresult").innerHTML = "Sorry, no free room for " + n + " nights."
	}
	else{
		document.getElementById("hiltonresult").innerHTML = "We have availability, please click to Proceed"
		document.getElementById("hiddenhil").style.display = "block";
	}
}

function marriottavail(){
	var n = document.getElementById("marriottnights").value;
	var a = Number(marriott.available) - Number(n);
	console.log(marriott.available);
	console.log(n)

	if (n > Number(marriott.available)){
		document.getElementById("marriottresult").innerHTML = "Sorry, no free room for " + n + " nights."
	}
	else{
		document.getElementById("marriottresult").innerHTML = "We have availability, please click to Proceed"
		document.getElementById("hiddenmar").style.display = "block"

	}
}

function holidayavail(){
	var n = document.getElementById("holidaynights").value;
	var a = Number(holiday.available) - Number(n);
	console.log(holiday.available);
	console.log(n)

	if (n > Number(holiday.available)){
		document.getElementById("holidayresult").innerHTML = "Sorry, no free room for " + n + " nights."
	}
	else{
		document.getElementById("holidayresult").innerHTML = "We have availability, please click to Proceed"
		document.getElementById("hiddenhol").style.display = "block";
	}
}

function errmess(){
	alert("Website still in testing phase.")

}