var string = prompt("Enter text to reverse");

function reverseString(str) {
	document.getElementsByClassName("revert")[0].innerHTML = str.split("").reverse().join("");
}

reverseString(string);