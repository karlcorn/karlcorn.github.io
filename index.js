$(document).ready(function(){
$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); /* false to get page from cache */
  }, 100);
});
 
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