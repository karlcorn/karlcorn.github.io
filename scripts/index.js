$(document).ready(function(){

$('#menu2').hide();
		if($("#example").css("display") == "block"){
			

$('#title').animate({'margin-left':'-410px'},1500);
					$('.speech-bubble').hide();
					$('#speech-bubbles').hide();
				$('.shop,#speechbubble,#speechbubbles').hover(function(e){
					e.preventDefault();
					$('#speech-bubbles').stop().toggle();
					$('.speech-bubble').stop().slideToggle();
});


  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.counter').html(scrollTop);
    
    if (scrollTop >= 116) {
      $('#global-nav').addClass('scrolled-nav').css({'position': 'fixed'});
	  $('#block img').css({'top': '28px'});
    } else if (scrollTop < 115) {
      $('#global-nav').removeClass('scrolled-nav').css({'position': 'static'});
	   $('#block img').css({'top': '147px'});
    } 
  }); 
}

$('#menu').on('click',function(){
	$('#more').animate({'margin-left':'0'});
});

	});