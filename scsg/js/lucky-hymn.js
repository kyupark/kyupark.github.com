function lucky(num) {    
	var url = 'http://www.google.com/search?btnI&q=새찬송가+';
	var text = String(num).split('-').join('+').split('&').join('+');
	url = url + text + "장";
	return url;
}

window.onload = function() {
	textbox = document.getElementById('nums');
	textbox.focus();
	document.getElementById('submit').onclick = function() {
    	window.location.href = lucky(textbox.value);
		return false;
	}
};