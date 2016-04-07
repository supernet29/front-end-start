console.log("App.js");

var apiURL = "http://m.movie.daum.net/data/movie/movie_info/box_office.json?country=KR&startDate=20150101&endDate=20150401&pageSize=10&pageNo=";

var wrap = document.getElementById('warp');
var template = document.getElementById('movieTemplate').innerHTML;

//var data = {
//	title : "Alpago",
//	image : '',
//	star : 5,
//	link : 'localhost'
//};

//ajax(apiURL, function(responseText) {
//	console.log(responseText);
//});
//



function render(res) {
	var html = "";
	var array = res.data;
	for(var i = 0; i < array.length; i++) {
		var data = array[i];
		html += tmpl(template, data);
	}
	warp.innerHTML = html;
}


getJSON(apiURL, render);
