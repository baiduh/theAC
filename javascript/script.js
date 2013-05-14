//Scroll de conteúdo
$(document).ready(function(){

		// initiate page scroller plugin
		$('body').pageScroller({
			navigation: '#nav'
		});

	});

$(function() {
	$('#foo2').carouFredSel({
		width: 1100,
		auto: false,
		prev: '#prev2',
		next: '#next2',
		mousewheel: true,
		swipe: {
			onMouse: true,
			onTouch: true
		}
	});

	$('#foo3').carouFredSel({
		width: 1100,
		auto: false,
		prev: '#prev3',
		next: '#next3',
		mousewheel: true,
		swipe: {
			onMouse: true,
			onTouch: true
		}
	});
});

// Configuração Shadowbox
function setupDemos() {

	Shadowbox.setup("a.bigportifolio", {
		// gallery:        "portifolio",
		continuous:     false,
		counterType:    "skip"
	});
}
// Chamando shadowbox
Shadowbox.init({
    // a darker overlay looks better on this particular site
    overlayOpacity: 0.8
    // setupDemos is defined in assets/demo.js
}, setupDemos);