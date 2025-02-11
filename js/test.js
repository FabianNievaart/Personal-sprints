let ready = false;
let i = 0;

setInterval(function ready() {
	i++;
	if (i >= 3){
		i = 0;
		return true;
	}
	else {
		return false;
	}
},1000);