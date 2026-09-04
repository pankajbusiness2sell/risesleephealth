gsap.registerPlugin(ScrollTrigger);
gsap.config({
    nullTargetWarn: false,
    trialWarn: false
});
/*----  Functions  ----*/

function getpercentage(x, y, elm) { 
    elm.find('.rise-fid-inner').html(y + '/' + x);
    var cal = Math.round((y * 100) / x);
    return cal;
}



function rise_mousehover_tooltip() {
	jQuery("<div id='rise-portfolio-cursor'><div class='rise-tooltip-content pbminfotech-box-content'></div></div>").appendTo("body");
	var rise_text = jQuery('.rise-element-portfolio-style-2 .pbminfotech-post-content');
	var rise_cursor = jQuery("#rise-portfolio-cursor");
	jQuery(document).on('mousemove', function(e) {
		var rise_x = e.clientX;
		var rise_y = e.clientY;
		rise_cursor.css({ "transform": "translate3d(" + rise_x + "px, " + rise_y + "px, 0px)" });
	})
	if (rise_text.length) {
		rise_text.each(function() {
			var elm = jQuery(this);
			var rise_html = elm.find('.pbminfotech-box-content').html();
			elm.on('mouseenter', function() {
				rise_cursor.addClass('active').find('.rise-tooltip-content').html(rise_html);
			}).on('mouseleave', function(e) {
				rise_cursor.removeClass('active').find('.rise-tooltip-content').html('');
			});
		});
	}
}

function rise_extend_section() {
	const rise_elm = gsap.utils.toArray('.rise-extend-animation');
	if (rise_elm.length == 0) return	
	ScrollTrigger.matchMedia({
		"(min-width: 1200px)": function() {
			rise_elm.forEach(section => {
				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: section,
						start: "top 50%",
						end: "+=400px",
						scrub: 1
					},
					defaults: { ease: "none" }
				});
				tl.fromTo(section, { clipPath: 'inset(0% 5% 0% 5% round 30px)' }, { clipPath: 'inset(0% 0% 0% 0% round 30px)', duration: 1.5 })	
			});			 
		},
		"(max-width:1200px)": function() {
			ScrollTrigger.getAll().forEach(section => section.kill(true));
		}
	});
}

// function rise_set_tooltip() {
// 	jQuery('[data-cursor-tooltip]').each(function() {
// 		var thisele = jQuery(this);
// 		var thisele_html = thisele.find('.pbminfotech-box-content').html();
// 		thisele.attr("data-cursor-tooltip", thisele_html);
// 	});
// }

function rise_img_animation() {
	const boxes = gsap.utils.toArray('.rise-animation-style1,.rise-animation-style2,.rise-animation-style3,.rise-animation-style4,.rise-animation-style5,.rise-animation-style6,.rise-animation-style7');
	boxes.forEach(img => {
		gsap.to(img, {
			scrollTrigger: {
				trigger: img,
				start: "top 70%",
				end: "bottom bottom",
				toggleClass: "active",
				once: true,
			}
		});
	});
}

var rise_thia_sticky = function() {	
	jQuery('.rise-sticky-sidebar').theiaStickySidebar({
		additionalMarginTop: 100
	});
	jQuery('.rise-sticky-column').theiaStickySidebar({
		additionalMarginTop: 120
	});
}

function rise_tween_effect() {
	const rise_tween = gsap.utils.toArray('.rise-tween-effect');
	if (rise_tween.length == 0) return
	ScrollTrigger.matchMedia({
		"(min-width: 1025px)": function() {
			rise_tween.forEach((box, i) => {
				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: box,
						start: "top 90%",
						end: "bottom 70%",
						scrub: 1
					},
					defaults: { ease: "none" }
				});
				let xpos_val = box.getAttribute('data-x-start');
				let xpose_val = box.getAttribute('data-x-end');
				let ypos_val = box.getAttribute('data-y-start');
				let ypose_val = box.getAttribute('data-y-end');
				let scale_x_val = box.getAttribute('data-scale-x-start');
				let scale_xe_val = box.getAttribute('data-scale-x-end');
				let skew_x_val = box.getAttribute('data-skew-x-start');
				let skew_xe_val = box.getAttribute('data-skew-x-end');
				let skew_y_val = box.getAttribute('data-skew-y-start');
				let skew_ey_val = box.getAttribute('data-skew-y-end');
				let rotation_x_val = box.getAttribute('data-rotate-x-start');
				let rotation_xe_val = box.getAttribute('data-rotate-x-end');
				gsap.set(box, { xPercent: xpos_val, yPercent: ypos_val, scale: scale_x_val, skewX: skew_x_val, skewY: skew_y_val, rotation: rotation_x_val });
				tl.to(box, { xPercent: xpose_val, yPercent: ypose_val, scale: scale_xe_val, skewX: skew_xe_val, skewY: skew_ey_val, rotation: rotation_xe_val })
			});
		},
		"(max-width:1024px)": function() {
			ScrollTrigger.getAll().forEach(section => section.kill(true));
		}
	});
}

function rise_staticbox_hover() {
	var rise_var = jQuery('.rise-element-static-box-style-2');
	if (!rise_var.length) {
		return;
	}
	rise_var.each(function() {
		var rise_Class = ' .swiper-static-slide-nav li, .rise-hover-inner li, .rise-static-box-style-2';
		jQuery(this)
			.find(rise_Class).first()
			.addClass('rise-active');
		jQuery(this)
			.find(rise_Class)
			.on('mouseover', function() {
				jQuery(this).addClass('rise-active').siblings().removeClass('rise-active');
			});
	});
}

ScrollTrigger.matchMedia({
    "(max-width: 1200px)": function() {
        ScrollTrigger.getAll().forEach(t => t.kill());
    }
});



// on load
jQuery(window).on('load', function(){
	rise_tween_effect();
	rise_mousehover_tooltip();
	rise_img_animation();
	
	jQuery('[data-magnetic]').each(function() { new Magnetic(this); });
	gsap.delayedCall(1, () =>
		ScrollTrigger.getAll().forEach((t) => {
			t.refresh();
		})
	);	
});