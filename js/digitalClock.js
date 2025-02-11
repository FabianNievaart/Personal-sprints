// Set the date we're counting down to
var diffday = prompt("Please enter how many days", 0);
var diffhour = prompt("Please enter how many hours", 0);
var diffmin = prompt("Please enter how many minutes", 0);
var diffsec = prompt("Please enter how many seconds", 0);
var countDownDate = new Date(Date.now()
	+ diffday * 1000 * 60 * 60 * 24
	+ diffhour * 1000 * 60 * 60
	+ diffmin * 1000 * 60
	+ diffsec * 1000);

// Update the count down every 1 second
var x = setInterval(function() {

	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now an the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display the result in the element with id="demo"
	document.getElementsByClassName("countdown")[0].innerHTML = days + "d " + hours + "h "
		+ minutes + "m " + seconds + "s ";

	if (distance < 11000) {
			var color = document.getElementsByClassName("countdown")[0].style.color;
			if (color === "black"){
				document.getElementsByClassName("countdown")[0].style.color = "red";
			}
			else {
				document.getElementsByClassName("countdown")[0].style.color = "black";
			}
	}

	// If the count down is finished, write some text
	if (distance < 0) {
		clearInterval(x);
		document.getElementsByClassName("countdown")[0].innerHTML = "Time is up";
		document.getElementsByClassName("countdown")[0].style.color = "black";
	}
}, 100);
