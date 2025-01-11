$('.carousel').carousel({
	interval: 10000
})
$('a[href*="#"]').not('[href="#"]').
not('[href="#0"]').
click(function(event) {
	if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if(target.length) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000, function() {
				var $target = $(target);
				$target.focus();
				if($target.is(":focus")) {
					return false;
				} else {
					$target.attr('tabindex', '-1');
					$target.focus();
				};
			});
		}
	}
});
$(document).ready(function() {
	var display_width = $(window).width();
	var hamburger = $("#hambuger_menu");
	var menu = $("#menubody");
	$(hamburger).click(function(e) {
		menu.toggleClass("open");
		hamburger.toggleClass("open");
	});
	$('.menu_list a').click(function() {
		menu.toggleClass("open");
		hamburger.toggleClass("open");
	});
	$(".menu_body__item_wrapper li.has_child").each(function(index) {
		$(this).click(function(event) {
			$('.sub-menu').eq(index).slideToggle();
			event.preventDefault();
			event.stopImmediatePropagation();
		});
		$('.sub-menu').click(function(e) {
			e.stopPropagation();
			e.stopImmediatePropagation();
		});
	});
});
(function(root) {
	"use strict";
	if(root.imgLightbox) {
		imgLightbox("img-lightbox-link", {
			onCreated: function() {
				/* show your preloader */
			},
			onLoaded: function() {
				/* hide your preloader */
			},
			onError: function() {
				/* hide your preloader */
			},
			onClosed: function() {
				/* hide your preloader */
			},
			rate: 500 /* default: 500 */ ,
			touch: false /* default: false - use with care for responsive images in links on vertical mobile screens */
		});
	}
})("undefined" !== typeof window ? window : this);
const accSingleTriggers = document.querySelectorAll('.js-acc-single-trigger');
accSingleTriggers.forEach(trigger => trigger.addEventListener('click', toggleAccordion));

function toggleAccordion() {
	const items = document.querySelectorAll('.js-acc-item');
	const thisItem = this.parentNode;
	items.forEach(item => {
		if(thisItem == item) {
			thisItem.classList.toggle('is-open');
			return;
		}
		item.classList.remove('is-open');
	});
}
$(document).ready(function() {
	$('#slider>li:gt(0)').hide();
	setInterval(function() {
		$('#slider > li:first').
		fadeOut(3500).
		next().
		fadeIn(3500).
		end().
		appendTo('#slider');
	}, 3500);
});
new WOW().init();
$(document).ready(function() {
	// Initialize Carousel 1
	$('#carousel1').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		margin: 70,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});
	// Initialize Carousel 2
	$('#carousel2').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		margin: 50,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});
	// Initialize Carousel 3
	$('#carousel3').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		margin: 30,
		autoplay: true,
		autoplayTimeout: 6000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});
	// Initialize Carousel 4
	$('#carousel4').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		margin: 30,
		autoplay: true,
		autoplayTimeout: 6000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});
	// Initialize Carousel 5
	$('#carousel5').owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 6000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 4
			}
		}
	});
	// Initialize Carousel 6
	$('#carousel6').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		margin: 30,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		animateIn: 'fadeInRightBig',
        animateOut: 'fadeOut',
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});

	// Initialize Carousel 7
	$('#carousel7').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		margin: 30,
		autoplay: true,
		autoplayTimeout: 6000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 3
			}
		}
	});

	// Play/Stop buttons for Carousel 1 (if needed)
	$('.play-carousel1').on('click', function() {
		$('#carousel1').trigger('play.owl.autoplay', [2500]);
	});
	$('.stop-carousel1').on('click', function() {
		$('#carousel1').trigger('stop.owl.autoplay');
	});
});
$('#menu a').click(function() {
	$('#burger-menu').removeClass('close');
	$('#menu').removeClass('overlay');
});
var btn = $('#top-scroll');
$(window).scroll(function() {
	if($(window).scrollTop() > 300) {
		btn.addClass('show');
	} else {
		btn.removeClass('show');
	}
});
btn.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: 0
	}, '300');
});
$("a[href^='#']").click(function(e) {
	e.preventDefault();
	var position = $($(this).attr("href")).offset().top;
	$("body, html").animate({
			scrollTop: position
		}
		/* speed */
	);
});