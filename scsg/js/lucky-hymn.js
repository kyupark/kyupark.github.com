function lucky(num) {    
	var url = 'http://www.google.com/search?btnI=I&ie=UTF-8&oe=UTF-8&q=새찬송가+';
	var text = String(num).split('-').join('+').split('&').join('+');
	url = url + text + "+장";
	return url;
}

$(document).ready(function(){
	$('.btn-primary').click(function() {
		window.location.href = lucky($('input').val());
		return false;
	});

	$('.num').click(function() {
		$('input').val($('input').val() + $(this).text());
		return false;
	})
});