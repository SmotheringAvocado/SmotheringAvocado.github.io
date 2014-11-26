$(document).ready(function(){

  $('div').hover(
    function(){
        $(this).addClass('navbarActive');
    },
    function(){
        $(this).removeClass('navbarActive');
    }
  );

});