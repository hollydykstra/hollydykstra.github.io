function steam() {
	var elements = document.getElementsByClassName('steam');
	var intervalId = setInterval(function() {
	for (var i = 0; i < elements.length; i = i+1) {
		if(elements[i].innerHTML == ' ((') {elements[i].innerHTML = ' ))';}
		else if(elements[i].innerHTML == '((') {elements[i].innerHTML = '  ))';}
		else if(elements[i].innerHTML == ' ))') {elements[i].innerHTML = ' ((';}

		else if(elements[i].innerHTML == ' ))') {elements[i].innerHTML = ' ((';}
		else if(elements[i].innerHTML == '  ))') {elements[i].innerHTML = '((';}
		else if(elements[i].innerHTML == ' ((') {elements[i].innerHTML = ' ))';}
	}}, 2000);
}
function blink() {
	var light = document.getElementById('light');
	if(light.innerHTML == '•') {light.innerHTML = '<FONT COLOR="lightgreen">•</FONT>';}
	else if(light.innerHTML.toLowerCase() == '<font color="lightgreen">•</font>') {light.innerHTML = '•';}
}
function clearScreen(message = "World!") {
	if(document.getElementById('message').innerHTML == message) {
	var intervalId = setInterval(function() {
		for(var i = message.length - 1; i >= 0; i = i - 1) {
			var display = document.getElementById('message').innerHTML;
			if(display.charAt(i) == ' ') {} else {
			display = display.substring(0, i) + ' ' + display.substring(i+1, message.length);
			document.getElementById('message').innerHTML = display;
			return;}
		}
		if(document.getElementById('message').innerHTML = '      ') {
			if(document.getElementById('period').innerHTML == ',') {
				document.getElementById('period').innerHTML = ' ';
			}
			else if(document.getElementById('period').innerHTML == ' ') {
				document.getElementById('period').innerHTML = '.';
				clearInterval(intervalId);
			}
		}
		return;
	}, 200);
	}
//	document.getElementById('message').innerHTML = '      ';
//	document.getElementById('period').innerHTML = '.';
}
function type(message = "World!") {
	if(!isScreenOn()){toggleScreen(); return;}
	if(document.getElementById('message').innerHTML != '      ') { clearScreen(message); return;}
	var intervalId = setInterval(function() {
	if(document.getElementById('period').innerHTML == '.') {
		document.getElementById('period').innerHTML = ' ';
	}
	else if(document.getElementById('period').innerHTML == ' ') {
		document.getElementById('period').innerHTML = ',';
	}
	else {
	var display = document.getElementById('message').innerHTML;
	if(display == message) {clearInterval(intervalId); return;}
	if(message.length != display.length) {return;}
	else {
		for(var i = 0; i < message.length; i = i + 1) {
			if(message.charAt(i) == display.charAt(i)) { /* find first different character */}
			else {
				display = display.substring(0, i) + message.charAt(i) + display.substring(i+1, display.length);
				document.getElementById('message').innerHTML = display;
				return;
			}
		}
	}
	}}, 400);
}
function toggleScreen() {
	var elements = document.getElementsByClassName('screen');
	if(isScreenOn() == false) {
		for(var i = 0; i < elements.length; i = i + 1) {
			elements[i].style.backgroundColor = 'white';
			elements[i].style.color = 'black';
		}
		blink();
	}
	else {
		for(var i = 0; i < elements.length; i = i + 1) {
			elements[i].style.backgroundColor = 'darkslategray';
			elements[i].style.color = 'darkslategray';
		}
		document.getElementById('message').innerHTML = '      ';
		document.getElementById('period').innerHTML = '.';
		blink();
	}
}
function isScreenOn() {
	var elements = document.getElementsByClassName('screen');
	for(var i = 0; i < elements.length; i = i + 1) {
		if(elements[i].style.backgroundColor == 'white') {
			return true;
		}
		else {return false;}
	}
}