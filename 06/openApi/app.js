var apiKey = '42d11779e0cbae4694ffbe909dd331ba'

var resultTemplate = document.getElementById('resultTemplate').innerHTML;
var searchBox = document.getElementById('searchBox');
var resultListElement = document.querySelectorAll('.resultList', searchBox)[0];
var queryInputElement = document.getElementById('queryInput');
var searchButtonElement = document.getElementById('searchButton');
var moreButtonElement = document.getElementById('moreButton');

var currentQuery = '';
var currentViewPage = 1;
var maxViewPage = 3;


function getApiUrl(query, page) {
	var apiUrl = 'https://apis.daum.net/search/web?apikey=' + apiKey + '&q=' + query + '&pageno=' + page + '&output=json';
	return apiUrl;
}


function render(dataList) {
	var resultHTML = "";
	for(var i = 0; i < dataList.length; i++) {
		var data = dataList[i];
		resultHTML += tmpl(resultTemplate, data);
	}
	resultListElement.innerHTML += resultHTML;
}

function onSearch() {
	window.resultListElement.innerHTML = "";

	var query = queryInputElement.value;
	var apiUrl = getApiUrl(query, 1);
	var dataRenderer = function(data) {
		render(data.channel.item);
	};

	currentQuery = query;
	currentViewPage = 1;

	if(query == '')
		return;

	getJSON(apiUrl, dataRenderer);
}

function onMore() {
	if(currentViewPage >= maxViewPage){
		return;
	}

	currentViewPage++;
	var apiUrl = getApiUrl(currentQuery, currentViewPage);
	var dataRenderer = function(data) {
		render(data.channel.item);
	};
	getJSON(apiUrl, dataRenderer);
}

searchButtonElement.addEventListener('click', onSearch);
moreButtonElement.addEventListener('click', onMore);
