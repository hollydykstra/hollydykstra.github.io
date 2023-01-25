function steam() {
	var elements = document.getElementsByClassName('steam');
	for (var i = 0; i < elements.length; i = i+1) {
		if(elements[i].innerHTML == ' ((') {elements[i].innerHTML = ' ))';}
		else if(elements[i].innerHTML == '((') {elements[i].innerHTML = '  ))';}
		else if(elements[i].innerHTML == ' ))') {elements[i].innerHTML = ' ((';}

		else if(elements[i].innerHTML == ' ))') {elements[i].innerHTML = ' ((';}
		else if(elements[i].innerHTML == '  ))') {elements[i].innerHTML = '((';}
		else if(elements[i].innerHTML == ' ((') {elements[i].innerHTML = ' ))';}
	}
}
function blink() {
	var elements = document.getElementsByClassName('blink');
	for (var i = 0; i < elements.length; i = i+1) {
		if(elements[i].innerHTML == '•') {elements[i].innerHTML = '<FONT COLOR="lightgreen">•</FONT>';}
		else if(elements[i].innerHTML.toLowerCase() == '<font color="lightgreen">•</font>') {elements[i].innerHTML = '•';}
	}
}
function type(message = "World!") {
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
function clearScreen() {
	document.getElementById('message').innerHTML = '      ';
	document.getElementById('period').innerHTML = '.';
}
function toggleScreen() {
	var elements = document.getElementsByClassName('screen');
	for(var i = 0; i < elements.length; i = i + 1) {
		if(elements[i].style.backgroundColor == 'darkslategray') {
			elements[i].style.backgroundColor = 'initial';
			elements[i].style.color = 'initial';
		}
		else {
			elements[i].style.backgroundColor = 'darkslategray';
			elements[i].style.color = 'darkslategray';
		}
	}
}