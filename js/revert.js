var string = prompt("Enter text to reverse");

(function (str) { //IIFE
	document.getElementsByClassName("revert")[0].innerHTML = str.split("").reverse().join("");
}(string));
