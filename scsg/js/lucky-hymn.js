function lucky(num) {    
	var url = 'http://www.google.com/search?btnI&q=%EC%83%88%EC%B0%AC%EC%86%A1%EA%B0%80+';
	var text = String(num).split('-').join('+').split('&').join('+');
	url = url + text + "%EC%9E%A5";
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