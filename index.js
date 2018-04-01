$(document).ready(function(){
$(window).on('resize',function(){
    if (($(window).width() > 1050) && ($(window).width() < 1080)) {   
      location.reload();  // refresh page 
    }
    else {  
      // Width greater than 768px for PC 
      // Or width is smaller than 480 for mobile
    }
}); 
/*$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false);
  }, 100);
});*/
 
$('#menu2').hide();
$('#cross').hide();
		if($("#example").css("display") == "block"){

  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.counter').html(scrollTop);
    
    if (scrollTop >= 94) {
      $('#global-nav').addClass('scrolled-nav').css({'position': 'fixed'});
	  $('#block img').css({'top': '28px'});
    } else if (scrollTop < 115) {
      $('#global-nav').removeClass('scrolled-nav').css({'position': 'static'});
	   $('#block img').css({'top': '147px'});
    } 
  }); 
}

$('#menu1').on('click',function(){
	$(".dropdown-content").css("display", "block");
	$('#cross').show();
	$('#menu1').hide();
});
$('#cross').on('click',function(){
	$(".dropdown-content").css("display", "none");
	$('#cross').hide();
	$('#menu1').show();
	
});

	});