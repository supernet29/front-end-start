var apiKey = '42d11779e0cbae4694ffbe909dd331ba'

var resultTemplate = document.getElementById('resultTemplate').innerHTML;
var searchBox = document.getElementById('searchBox');

function getApiUrl(query) {
	var apiUrl = 'https://apis.daum.net/search/web?apikey=' + apiKey + '&q=' + query + '&output=json';
	return apiUrl;
}


var data = {
	title: "Hello",
	link: "http://naver.com",
	description: "this is a hello world program"
};



