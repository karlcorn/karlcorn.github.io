$(document).ready(function(){
$(window).on('resize',function(){
    if (($(window).width() > 810) && ($(window).width() < 850)) {   
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
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}