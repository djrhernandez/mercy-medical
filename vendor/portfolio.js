/*!
 * Start Bootstrap - Freelancer v5.0.3 (https://startbootstrap.com/template-overviews/freelancer)
 * Copyright 2013-2019 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
 */

(function($) {
	"use strict";

	//Smooth scrolling using jQuery easing
	$(function() { //<--------------- WHY DO I NEED TO PUT THIS LINE OF FUCKING CODE HERE IN ORDER FOR IT TO WORK?!?!?!?!?!
		//Select all links with hashes, but remove links that don't link to anything
		$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(ev) {
			//On-page links
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				//Figure out which element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				//Check if scroll target exists
				if (target.length) {
					//Only prevent default if animation is actually gonna happen
					ev.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top - 56
					}, 1000, "easeInOutExpo");
					return false;
				}
			}
		});
	});

	//Displays button that will allow users to scroll to top of page
	$(document).scroll(function() {
		var scrollDistance = $(this).scrollTop();
		if (scrollDistance > 100) {
			$('.scroll-to-top').fadeIn();
		} else {
			$('.scroll-to-top').fadeOut();
		}
	});

	//Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll-trigger').click(function() {
		$('.navbar-collapse').collapse('hide');
	});

	//Uses scrollspy to add active classes to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: 57
	});

	$(window).scroll(function() {
		if ($("#mainNav").offset().top > 100) {
			$("#mainNav").removeClass("py-3");
			$("#mainNav").addClass("navbar-shrink");
		} else {
			$("#mainNav").removeClass("navbar-shrink");
			$("#mainNav").addClass("py-3");
	   }
   });

	//Modals for each project
	$(document).ready(function() {
		$("#inline-popups").magnificPopup({
			delegate: 'a',
			removalDelay: 500, //Delay removal by X to allow exit animation
			showCloseBtn: false,
			callbacks: {
				beforeOpen: function() {
					this.st.mainClass = this.st.el.attr('data-effect');
				}
			},
			midClick: true
		});

		$(document).on("click", ".project-modal-dismiss", function(e) {
			e.preventDefault(),
			$.magnificPopup.close();
		});
	});

	//Floating label headings for the contact form
	$(function() {
		$("body").on("input propertychange", ".floating-label-form-group", function(e) {
			t(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
		}).on("focus", ".floating-label-form-group", function() {
			$(this).addClass("floating-label-form-group-with-focus");
		}).on("blur", ".floating-label-form-group", function() {
			$(this).removeClass("floating-label-form-group-with-focus");
		});
	});

})(jQuery);
