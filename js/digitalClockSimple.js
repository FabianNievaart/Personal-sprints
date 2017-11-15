var hour = prompt("Please enter how many hours", 0);
var min = prompt("Please enter how many minutes", 0);
var sec = prompt("Please enter how many seconds", 0);
document.getElementsByClassName("countdown")[0].innerHTML = hour + "h " + min + "m " + sec + "s" ;
var timer = setInterval(function() {
	sec--;
	document.getElementsByClassName("countdown")[0].innerHTML = hour + "h " + min + "m " + sec + "s" ;
	if (min > 0 && sec <= 0){
		sec = 60;
		min--;
	}
	else if (hour > 0 && min <= 0 &&  sec <= 0){
		sec = 60;
		min = 59;
		hour--;
	}
	if (hour <= 0 && min <= 0 && sec <= 0){
		clearInterval(timer);
		document.getElementsByClassName("countdown")[0].innerHTML = "Time is up";
	}
},1000);
