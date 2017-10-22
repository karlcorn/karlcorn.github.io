$(document).ready(function(){
$('button, .arrow').on('mouseenter',function(){
	$('.arrow').stop();
$('.arrow').animate({'margin-left':'600px'}, { duration: 400, queue: false });
$('button').css({'padding-left':'35px'},{ duration: 200, queue: false });
});
$('button, .arrow').on('mouseleave',function(){
	$('.arrow').stop();
$('.arrow').animate({'margin-left':'560px'}, { duration: 400, queue: false });
$('button').css({'padding-left':'7px'}, { duration: 200, queue: false });
});


	 var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.counter').html(scrollTop);
    
    if (scrollTop >= 111.5) {
      $('#global-nav').addClass('scrolled-nav').css({'position': 'fixed'});
    } else if (scrollTop < 112) {
      $('#global-nav').removeClass('scrolled-nav').css({'position': 'static'});
    } 
  }); 
  
  
});