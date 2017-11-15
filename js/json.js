function ParseJSON(json) {
	let xhttp = new XMLHttpRequest();
	xhttp.open('GET',json,false);
	xhttp.send(null);
	return xhttp.responseText;
}

let text = JSON.parse(ParseJSON('../hobby.json'));

for (i = 0; i < text.hobby.length; i++){	//Template literal
	document.getElementsByClassName("json")[0].innerHTML +=`
		<ul>
			<li class='color'><b>Hobby:</b> ${text.hobby[i].name} </li>
			<li class='color'><b>What is it:</b> ${text.hobby[i].description} </li>
			<li class='color'><b>When I started this hobby:</b> ${text.hobby[i].started} </li>
			<li class='color'><b>With whom i do it:</b> ${text.hobby[i].who} </li>
			<li class='color'><b>Where I do it:</b> ${text.hobby[i].where} </li>
			<li class='color'><b>When I do it:</b> ${text.hobby[i].when} </li>
			<li class='color'><b>How long I do it:</b> ${text.hobby[i].duration} </li>
			<li class='color'><b>Why I do it:</b> ${text.hobby[i].why} </li>
		</ul>`;
}

for (i = 0; i < document.getElementsByClassName("color").length; i++){
	if (i % 2 === 0) {
		document.getElementsByClassName("color")[i].style.backgroundColor = "white";
	}
	else {
		document.getElementsByClassName("color")[i].style.backgroundColor = "darkgrey";
		document.getElementsByClassName("color")[i].style.color = "white";
	}
}