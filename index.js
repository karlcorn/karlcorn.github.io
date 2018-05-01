$(document).ready(function(){
	
	function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}


$(window).on('resize',function(){
    if (($(window).width() > 1050) && ($(window).width() < 1080)) {   
      location.reload();  // refresh page 
    }
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
	
	