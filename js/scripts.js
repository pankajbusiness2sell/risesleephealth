(function ($) {
  "use strict";
  /*-------------------------------------
      Animation on scroll: Number rotator
  -------------------------------------*/
  $("[data-appear-animation]").each(function() {
	var self      = $(this);
	var animation = self.data("appear-animation");
	var delay     = (self.data("appear-animation-delay") ? self.data("appear-animation-delay") : 0);{ 
		self.html('0');
		self.waypoint(function(direction) {
			if( !self.hasClass('completed') ){
				var from     = self.data('from');
				var to       = self.data('to');
				var interval = self.data('interval');
				self.numinate({
					format: '%counter%',
					from: from,
					to: to,
					runningInterval: 2000,
					stepUnit: interval,
					onComplete: function(elem) {
						self.addClass('completed');
					}
				});
			}
		}, { offset:'85%' });
	}
});

     /*-------------------------------------
    Swiper Slider
    -------------------------------------*/
    var swiperslider = $(".swiper-slider");
	var x = 1;
	swiperslider.each(function () {  
				var carouselElement	= $(this);
				var columns = $(this).data('columns');
				var loop = $(this).data('loop');
				var autoplay2 = $(this).data('autoplay');
				var autoplayspeed1 = $(this).data('autoplayspeed');
				var val_nav = $(this).data('arrows');
				var nav_arrow = $(this).data('arrows-class');                
				var val_dots = $(this).data('dots');
				var val_center = $(this).data('center');
				var style = $(this).data('effect');
				var loopSlide = null;
				var sl_speed = 3000; 

				carouselElement.addClass( 'rise-element-viewtype-carousel-' + x );


				if( columns === 1 ){ 
					var responsive_items = [ /* 1199 : */ columns, /* 991 : */ '1', /* 767 : */ '1', /* 575 : */ '1', /* 0 : */ '1' ];
				} else if( columns === 2  ||  columns == 2.6 ){ 
					var responsive_items = [ /* 1199 : */ columns, /* 991 : */ '2', /* 767 : */ '2', /* 575 : */ '2', /* 0 : */ '1' ];
				} else if( columns === 3 ){
					var responsive_items = [ /* 1199 : */ columns, /* 991 : */ '2', /* 767 : */ '2', /* 575 : */ '1', /* 0 : */ '1' ];
				} else if( columns === 3 ||  columns == 3.6 ){
					var responsive_items = [ /* 1199 : */ columns, /* 991 : */ '2.3', /* 767 : */ '2', /* 575 : */ '2', /* 0 : */ '1' ];
				} else if( columns === 4 ){
					var responsive_items = [ /* 1199 : */ columns, /* 991 : */ '4', /* 767 : */ '3', /* 575 : */ '2', /* 0 : */ '1' ];
				} else if( columns === 5 ){
					var responsive_items = [ /* 1199 : */ '5', /* 991 : */ '4', /* 767 : */ '3', /* 575 : */ '2', /* 0 : */ '1' ];
				} else if( columns === 6 ){
					var responsive_items = [ /* 1199 : */ '6', /* 991 : */ '4', /* 767 : */ '3', /* 575 : */ '2', /* 0 : */ '1' ];
				} else {
					var responsive_items = [ /* 1199 : */ '3', /* 991 : */ '3', /* 767 : */ '2', /* 575 : */ '2', /* 0 : */ '1' ];
				}

				if (val_dots === true) {
					carouselElement.append('<div class="swiper-pagination swiper-pagination"></div>');
				}

				if(val_nav === true){
					
					if(!nav_arrow){
					carouselElement.append( '<div class="swiper-buttons"></div>' );
					carouselElement.find('.swiper-buttons').append( '<div class="swiper-button-next swiper-button-next-' + x + '"></div>' );
					carouselElement.find('.swiper-buttons').append( '<div class="swiper-button-prev swiper-button-prev-' + x + '"></div>' );
					} else{             
					$('.' + nav_arrow).append( '<div class="swiper-buttons"></div>' );
					$('.' + nav_arrow).append( '<div class="swiper-button-next swiper-button-next-' + x + '"></div>' );
					$('.' + nav_arrow).append( '<div class="swiper-button-prev swiper-button-prev-' + x + '"></div>' );
					}
				}

				var pagination_val = false;
				if (val_dots === true) {

					if(carouselElement.hasClass('rise-sep-number')){ 
						pagination_val = {
							el: '.swiper-pagination',
							type :'fraction',
						};
					} else{
						pagination_val = {
						el: '.swiper-pagination',
						clickable: true,
					};
						}
					}
				var navigation_val = false;
				if(val_nav === true){
					navigation_val =  {
					nextEl: '.swiper-button-next-' + x,
					prevEl: '.swiper-button-prev-' + x,
					};
				}

				if(!style){
					style = "slide";
				}    
				
				var margin_val = 30;
				if( $(carouselElement).data('margin') !== '' || $(carouselElement).data('margin') === '0'){
					margin_val = $(carouselElement).data('margin');  
				} 
				
				if(carouselElement.hasClass('marquee')){ 
					var reverse_direction = $(this).data('reverse');
					if (!reverse_direction) reverse_direction = false;
					var swiper2 = new Swiper( '.rise-element-viewtype-carousel-' + x, { 
						spaceBetween: 0,
						centeredSlides: true,
						speed: 10000,
						autoplay: {
							delay: 1,
							disableOnInteraction: true,
							reverseDirection: reverse_direction,
						},
						loop: true,
						slidesPerView: 'auto',
						allowTouchMove: false,
						disableOnInteraction: true
					});
				} else{                   
				var swiper = new Swiper( '.rise-element-viewtype-carousel-' + x, { 
					loop: loop, 
					navigation: navigation_val,
					pagination: pagination_val,
					slidesPerView: columns,
					spaceBetween: margin_val,
					loopedSlides: loopSlide, 
					autoplay : autoplay2,
					effect: style,
					speed: sl_speed, 
					grabCursor: false,
					centeredSlides: val_center,
					breakpoints		  : {
					1199 : {
						slidesPerView	: responsive_items[0],
					},
					991	 : {					
						slidesPerView	: responsive_items[1],
					},
					767	 : {
						slidesPerView	: responsive_items[2],
					},
					575	 : {
						slidesPerView	: responsive_items[3],
					},
					0	 : {
						slidesPerView	: responsive_items[4],
					}
					}
				});
			}
		x = x + 1;             
	});
  





  /*-------------------------------------
  Scroll To Top
  -------------------------------------*/

	var rise_back_to_top = function() {
		var progressPath = document.querySelector('.rise-progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
		var updateProgress = function() {
			var scroll = jQuery(window).scrollTop();
			var height = jQuery(document).height() - jQuery(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		jQuery(window).scroll(updateProgress);
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.rise-progress-wrap').addClass('active-progress');
			} else {
				jQuery('.rise-progress-wrap').removeClass('active-progress');
			}
		});
		jQuery('.rise-progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({ scrollTop: 0 }, duration);
			return false;
		})
	}
	rise_back_to_top();

  /*-------------------------------------
  Header Search Form
  -------------------------------------*/
	$( ".rise-header-search-btn a" ).on('click', function() {     
		$(".rise-search-overlay").addClass('st-show');
		$("body").addClass('st-prevent-scroll');            
		return false;
	});   
	$( ".rise-icon-close" ).on('click', function() {
			$(".rise-search-overlay").removeClass('st-show');
		$("body").removeClass('st-prevent-scroll');            
		return false;
	}); 
	$('.rise-site-searchform').on('click', function(event){
		event.stopPropagation();
	});
  
  /*-------------------------------------
  Count Down
  -------------------------------------*/ 

	if( $('#clock').length>0 ){
		$('#clock').countdown('2024/10/10', function(event) {
		$(this).html(event.strftime(''
		+ '<div class="count-time"><span class="time_left">365</span><span class="time_description">Day%!d </span></div>'
		+ '<div class="count-time"><span class="time_left">05</span><span class="time_description"> Hours </span></div> '
		+ '<div class="count-time"><span class="time_left">20</span><span class="time_description"> Minutes </span></div>'
		+ '<div class="count-time"><span class="time_left">%S</span><span class="time_description"> Seconds </span></div>'
		));
		});
	}

    /*-------------------------------------
    Active Hover
    -------------------------------------*/ 
    $( ".active-onhover .rise-miconheading-style-3:nth-child(2),.rise-miconheading-style-37:first-child" ).addClass('rise-mihbox-hover-active');
    
      $( ".active-onhover .rise-miconheading-style-3,.rise-miconheading-style-37" ).mouseover(function() {
        var main_row = $( this ).closest( '.active-onhover' );
        $('.rise-miconheading-style-3,.rise-miconheading-style-37', main_row).removeClass('rise-mihbox-hover-active'); 
        $(this).addClass('rise-mihbox-hover-active');
      }).mouseout(function() {
        var main_row = $( this ).closest( '.active-onhover' );
        $('.rise-miconheading-style-3,.rise-miconheading-style-37', main_row).removeClass('rise-mihbox-hover-active');
        $('.rise-miconheading-style-3:nth-child(2),.rise-miconheading-style-37:first-child', main_row).addClass('rise-mihbox-hover-active');
       
    });

  /*-------------------------------------
    tooltip
  -------------------------------------*/
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    
  /*-------------------------------------
    Mobile Menu
  -------------------------------------*/     
  $('.navbar-toggler,.closepanel').on('click', function () { 
    jQuery("header").toggleClass("active");
  }); 

  /*-------------------------------------
  Sticky header wrapper
  -------------------------------------*/
	if( jQuery('.site-header-menu-wrapper').length == 0 ){
		jQuery('.site-header-menu').wrap('<div class="site-header-menu-wrapper"></div>');
		}
		jQuery('.site-header-menu-wrapper').height( jQuery('.site-header-menu-wrapper').height() ).css('margin-bottom', jQuery('.site-header-menu').css('margin-bottom') );

		jQuery(window).resize(function(){
		if( jQuery(window).width() < 1200 ){
			//jQuery('.site-header-menu-wrapper').css('height', '');
			jQuery('.site-header-menu-wrapper').css('margin-bottom', '');
		} else {
			jQuery('.site-header-menu-wrapper').height( jQuery('.site-header-menu-wrapper').height() ).css('margin-bottom', jQuery('.site-header-menu').css('margin-bottom') );
		}
		
	});

  
  
  /*-------------------------------------
    Add plus icon in menu
    -------------------------------------*/
  	$( ".main-menu ul.navigation li.dropdown").append( "<span class='righticon'><i class='rise-base-icon-angle-right'></i></span>" );
  
  /*-------------------------------------
  Responsive Menu
  -------------------------------------*/ 
	$('.main-menu ul.navigation li.dropdown .righticon').on('click', function() {
			$(this).siblings().toggleClass('open');
			$(this).find('i').toggleClass('rise-base-icon-angle-right rise-base-icon-up-open-big');
			return false;
	});  

	/*-------------------------------------
    Sticky Header
    -------------------------------------*/ 
    $(window).scroll(function(){
        var sticky = $('.site-header-menu'),
        scroll = $(window).scrollTop();
        if (scroll >= 90) sticky.addClass('sticky-header');
        else sticky.removeClass('sticky-header');
    });


		/*------------------------------------------
	= inhover active
	-------------------------------------------*/
	$(".xb-mouseenter").on('mouseenter', function () {
		$(".xb-mouseenter").removeClass("active");
		$(this).addClass("active");
	});
	$(".xb-mouseenter2").on('mouseenter', function () {
		$(".xb-mouseenter2").removeClass("active");
		$(this).addClass("active");
	});


	//tes1 active
	const tes1 = $(".controls li");
	tes1.on("click", function () {
	  $(".controls li").removeClass("active");
	  $(this).addClass("active");
	});

	// SWIPER SLIDER //
document.addEventListener("DOMContentLoaded", function () {
	var swiper3 = new Swiper(".swiper-thumb2", {
	  spaceBetween: 10,
	  slidesPerView: 6,
	  freeMode: true,
	  watchSlidesProgress: true,
	  autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	  },
	});
	var swiper4 = new Swiper(".swiper-testimonial-2", {
	  spaceBetween: 10,
	  loop: true,
	  navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	  },
	  autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	  },
	  thumbs: {
		swiper: swiper3,
	  },
	});
  });

    /*-------------------------------------
    Sortable Div
    -------------------------------------*/

    jQuery('.rise-sortable-yes').each(function(){ 
		var boxes = jQuery('.rise-element-posts-wrapper', this ); 
		var links = jQuery('.rise-sortable-list a', this ); 
		boxes.isotope({ animationEngine : 'best-available'}); 
		links.on('click', function(e){  
		  var selector = jQuery(this).data('sortby'); 
		  if( selector != '*' ){ 
			var selector = '.' + selector; 
		  } 
		  boxes.isotope({ filter : selector, itemSelector : '.rise-ele', layoutMode : 'fitRows' }); 
		  links.removeClass('rise-selected');
		  jQuery(this).addClass('rise-selected');
		  e.preventDefault(); 
		});
	}); 

	/*-------------------------------------
    Stretched Div
    -------------------------------------*/ 	
	var document_width = $(document).width();
	function rise_col_stretched(){
		$('.rise-col-stretched-yes').each(function() {
			var this_ele = $(this);
			var window_width = jQuery(window).width();
			var main_width = $('.container').width();
			var extra_width = ((window_width - main_width) / 2);  
			if (window_width < 1200){
				extra_width = 0;
			}
			if (this_ele.hasClass('rise-col-right')) { 
				$('.rise-col-stretched-right', this_ele).css('margin-right', '-' + extra_width + 'px'); 
			} else { 
				$('.rise-col-stretched-left', this_ele).css('margin-left', '-' + extra_width + 'px'); 
			}
		});
	}
	$(window).resize(function(){
		rise_col_stretched();
	});
	rise_col_stretched();



})($);

   /*-------------------------------------
    Contact form validator
    -------------------------------------*/
    if ( $.isFunction($.fn.validate) ) {
      $("#contact-form").validate(); 
    }




	/*-------------------------------------
    Twentytwenty
    -------------------------------------*/
	if($(".twentytwenty-container").length){
		$(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({default_offset_pct: 0.7});
		$(".twentytwenty-container[data-orientation='vertical']").twentytwenty({default_offset_pct: 0.3, orientation: 'vertical'});
	}