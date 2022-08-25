 AOS.init();









// scroll-top//
let mybutton = document.getElementById("btn-back-to-top");


window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// scroll-top//
(function($) { "use strict";

	// $(function() {
	// 	var header = $(".start-style");
	// 	$(window).scroll(function() {    
	// 		var scroll = $(window).scrollTop();
		
	// 		if (scroll >= 10) {
	// 			header.removeClass('start-style').addClass("scroll-on");
	// 		} else {
	// 			header.removeClass("scroll-on").addClass('start-style');
	// 		}
	// 	});
	// });		
		
	//Animation
	
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	
  })(jQuery); 


//   $('.carousel').carousel({
//     interval: 100000000000000
//   })



//   ceo-slide
// owl carousel//
$(document).ready(function() {
 
	$("#owl-demo").owlCarousel({
   
		autoPlay: 3000, //Set AutoPlay to 3 seconds
   
		items : 4,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3]
   
	});
   
  });
  // owl carousel//
//   ceo-slide
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
});
//   ceo-slide


//gallery

//gallery