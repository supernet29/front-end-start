var browser = $(window);
var body = $(document.body);
var topButton = $("#topButton");

function onScroll() {
	var y = browser.scrollTop();

	if( y >= 50) {
		topButton.fadeIn();
	}
	else {
		topButton.fadeOut();
	}
}

function onTopClick () {
	body.animate({
		scrollTop:0
	}, 500);
}

browser.scroll(onScroll);
topButton.on("click", onTopClick);
