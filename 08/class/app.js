console.log("app.js");
var box = $("#box");
$("#box").append("<div>JQuery 로 div 태그 삽입</div>");
$("#box").hide();
$("#box").show();
$("#box").toggle();
$("#box").fadeOut();
$("#box").fadeIn();
$("#box").fadeToggle();

function animateBox() {
	box.animate({ 
		'top' : '200',
		'left' : '500'
	}, 5000, function () {
		console.log("animation is done!");
	});
}

box.toggle();
