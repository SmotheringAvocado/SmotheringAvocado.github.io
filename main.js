$(document).ready(function(){
	$('.navbar').hover(
		function(){
				$(this).addClass('navbarActive');
		},
		function(){
				$(this).removeClass('navbarActive');
		}
	);
	
	$('#title').hover(
		function(){
				$(this).addClass('titleActive');
		},
		function(){
				$(this).removeClass('titleActive');
		}
	);

});