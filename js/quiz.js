var answer1 = prompt("What is 1+1?");
var answer2 = prompt("What is 2+2?");
var answer3 = prompt("What is 3+3?");

document.getElementsByClassName("answers")[0].innerHTML = answer1;
document.getElementsByClassName("answers")[1].innerHTML = answer2;
document.getElementsByClassName("answers")[2].innerHTML = answer3;