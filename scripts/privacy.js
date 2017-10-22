// JavaScript Document
$(document).ready(function(){

		$('#popular').css({'color':'white'});
				$('#title').animate({'margin-left':'-410px'},1500);
				 var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.counter').html(scrollTop);
    
    if (scrollTop >= 117) {
      $('#global-nav').addClass('scrolled-nav').css({'position': 'fixed'});
	  $('#block img').css({'top': '28px'});
    } else if (scrollTop < 100) {
      $('#global-nav').removeClass('scrolled-nav').css({'position': 'static'});
	   $('#block img').css({'top': '138px'});
    } 
  }); 
  

	});

