$(document).ready(function() {
	$('.navbar').hover(
		function() {
			$(this).addClass('active');
		},
		function() {
			$(this).removeClass('active');
		}
	);
})