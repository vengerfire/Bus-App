var routeselect = document.getElementById("routes");
var divContent = document.getElementById("content");
var routeUser;
	 
function getRoute() {
    routeUser = routeselect.options[routeselect.selectedIndex].text;
    console.log(routeUser);
	
	switch (routeUser) {
	case "Highbury":
		divContent.innerHTML = "The Highbury bus times are here my :P:";
		break;
    case "Roslyn":
		divContent.innerHTML = "The Roslyn bus times are here my :P:";
		break;
	case "Cloverlea":
		divContent.innerHTML = "Nah my :P: you can't go to my house lol";
		break;
	default:
		alert("You broke something dude");
	}
	
}

var departTime = document.getElementById("departTime");
var arrivalTime = document.getElementById("arrivalTime");
var timeContent = document.getElementById("timeContent");

function getTime() {
	var departSelected = departTime.options[routeselect.selectedIndex].value;
	var arrivalSelected = arrivalTime.options[routeselect.selectedIndex].value;
	
	timeConent.innerHTML calcTime(departSelected, arrivalSelected)
}

function calcTime(a,b) {
	var time = b - a;
	return time;
}