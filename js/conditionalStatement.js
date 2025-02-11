var number1 = parseInt(prompt("enter first number"));
var number2 = parseInt(prompt("enter second number"));
var number3 = parseInt(prompt("enter third number"));
var number4 = parseInt(prompt("enter fourth number"));
var number5 = parseInt(prompt("enter fifth number"));

var arr = [number1, number2, number3, number4, number5];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
	if (largest < arr[i] ) {
		largest = arr[i];
	}
}
alert(largest + " is the largest number");
