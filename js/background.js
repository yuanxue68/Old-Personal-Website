$(function() {
	$.vegas('slideshow', {
		backgrounds: [
			{ src: 'images/1.jpg', fade: 2000},
			{ src: 'images/2.jpg', fade: 2000}
		],
		preload: true
	});
	$.vegas('overlay', {
		src:'js/vegas/overlays/01.png'
	});
});