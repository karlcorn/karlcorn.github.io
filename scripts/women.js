$(document).ready(function(){
		$('#women').css({'color':'white'});
		$('#title').animate({'margin-left':'-310px'},1500);
/*$('#men').on('click',function(){
$('#bar').animate({'left':'-408px'},500);
$('#bar').animate({'width':'70px'},200);
$('#men').delay(1000).css({'color':'white'});
$('.top-bar').not('#men').css({'color':'black'});
});
$('#popular').on('click',function(){
	$('#bar').animate({'width':'110px'},200);
$('#bar').animate({'left':'-753px'},500);
$('#popular').delay(1000).css({'color':'white'});
$('.top-bar').not('#popular').css({'color':'black'});
});
$('#women').on('click',function(){
$('#bar').animate({'width':'100px'},200);
$('#bar').animate({'left':'-81px'},350);
$('#women').delay(1000).css({'color':'white'});
$('.top-bar').not('#women').css({'color':'black'});
});
$('#top').on('click',function(){
	$('#bar').animate({'left':'285px'},350);
$('#bar').animate({'width':'98px'},200);
$('#top').delay(1000).css({'color':'white'});
$('.top-bar').not('#top').css({'color':'black'});
});
$('#technology').on('click',function(){
$('#bar').animate({'width':'155px'},200);
$('#bar').animate({'left':'708px'},350);
$('#technology').delay(1000).css({'color':'white'});
$('.top-bar').not('#technology').css({'color':'black'});
});*/


  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.counter').html(scrollTop);
    
    if (scrollTop >= 100) {
      $('#global-nav').addClass('scrolled-nav').css({'position': 'fixed'});
	  $('#block img').css({'top': '28px'});
    } else if (scrollTop < 100) {
      $('#global-nav').removeClass('scrolled-nav').css({'position': 'static'});
	   $('#block img').css({'top': '138px'});
    } 
    
  }); 
});