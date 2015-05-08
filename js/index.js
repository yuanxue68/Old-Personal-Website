$(document).ready(function(){
	setParticleJS();
	disableMobileAnim();
	initScrollTop();
});

function setParticleJS(){
	particlesJS('particles-js', {
	  particles: {
	    	color: '#fff',
	    	color_random: false,
	    	shape: 'circle', // "circle", "edge" or "triangle"
	    	opacity: {
	      	opacity: 1,
	      	anim: {
		        enable: false,
		        speed: 1.5,
		        opacity_min: 0,
		        sync: false
	      		}
	    	},
	    	size: 2.5,
	    	size_random: true,
	    	nb: 100,
	    	line_linked: {
		    enable_auto: true,
		    distance: 140,
		    color: '#fff',
		    opacity: 1,
		    width: 1,
	        condensed_mode: {
		        enable: false,
		        rotateX: 600,
		        rotateY: 600
	      	}
	    	},
	    	anim: {
		      enable: true,
		      speed: 1
	    	}
	  	},
	  	interactivity: {
		    enable: true,
		    mouse: {
		      distance: 250
		    },
		    detect_on: 'canvas', // "canvas" or "window"
		    mode: 'grab', // "grab" of false
		    line_linked: {
		      opacity: .5
		    },
		    events: {
		      	onclick: {
			        enable: false,
			        mode: 'push', // "push" or "remove"
			        nb: 1
		      	},
		      	onresize: {
			        enable: true,
			        mode: 'out', // "out" or "bounce"
			        density_auto: false,
			        density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
		      	}
	    	}
	  	},
	  /* Retina Display Support */
	  	retina_detect: true
	});
};

function initScrollTop(){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
};

function disableMobileAnim(){
	if(! /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())) 
	{
	    $('.introup').addClass("hidethis").viewportChecker({
	        classToAdd: 'showthis animated2 fadeInUp',
	        offset: 100,
	    });

	    $('.introleft').addClass("hidethis").viewportChecker({
	        classToAdd: 'showthis animated2 fadeInLeft',
	        offset: 100,
	    });

	    $('.introright').addClass("hidethis").viewportChecker({
	        classToAdd: 'showthis animated2 fadeInRight',
	        offset: 100,
	    });

	    $('.introfade').addClass("hidethis").viewportChecker({
	        classToAdd: 'showthis animated2 fadeIn',
	        offset: 100,
	    });

	   	$('.project').hover(function() {
	        $(this).addClass('zoomin');
	 
	    }, function() {
	        $(this).removeClass('zoomin');
	    });

	   	$(".first").addClass("fullscreenheight");
	   	$(".title").removeClass("smalltitle");
	   	$(".arrow").removeClass("hidethis");
	}
};

//on-click invoked function
function scrollToTimeline() {
	$("html,body").animate({
	    'scrollTop':   $('#aboutme').offset().top
	}, 700);
};





