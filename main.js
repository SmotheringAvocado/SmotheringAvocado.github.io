$(document).ready(function() {
	$('.navbar').hover(
		function() {
			$(this).addClass('navbarActive');
		},
		function() {
			$(this).removeClass('navbarActive');
		}
	);
});