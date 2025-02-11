// Stays
/*
function scroll() {
	var y = document.documentElement.scrollTop;
	console.log(y);
	if (y >= 300 && y <= 500) {
		document.getElementsByClassName("image")[0].style.animationPlayState = "running";
	}
}*/

// Moves in and out

var shown = false;

function scroll() {
	var y = document.documentElement.scrollTop;
	console.log(y);
	console.log(shown);
	if (y >= 300 && y <= 500 && shown === false){
		document.getElementsByClassName("image")[0].style.animationPlayState = "running";
		setTimeout(pauseShown,800);
	}
	else if (y >= 300 && y <= 500 && shown === true){
		document.getElementsByClassName("image")[0].style.animationPlayState = "paused";
	}
	else if (y < 300 && shown === true || y > 500 && shown === true){
		document.getElementsByClassName("image")[0].style.animationPlayState = "running";
		setTimeout(pauseHidden,800);
	}
	else if (y < 300 && shown === false || y > 500 && shown === false){
		document.getElementsByClassName("image")[0].style.animationPlayState = "paused";
	}
}

function pauseShown() {
	document.getElementsByClassName("image")[0].style.animationPlayState = "paused";
	shown = true;
}

function pauseHidden() {
	document.getElementsByClassName("image")[0].style.animationPlayState = "paused";
	shown = false;
}
