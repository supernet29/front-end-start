/*for(var i = 1; i <= 9; i++)
{
	console.log(i + "�� ����");

	for(var j = 1; j <= 9 ; j++)
	{
		console.log(i + " X " + j + " = " + (i * j));
	}

	console.log();
}*/

/*document.body.addEventListener('click', function(){
	console.log("Debug");
});
*/

var lastSelectedPosition = null;


// Data definition
var todayPhoto = [
        {"url":"http://media.daum.net/photo/2841","img":"http://icon.daumcdn.net/w/c/12/05/82877085750988319.jpeg","title":"&quot;�߸� ����&quot; �ְ� ������� ������ ����","id":"20120516082207657"}
        ,{"url":"http://media.daum.net/entertain/photo/gallery/?gid=100320","img":"http://icon.daumcdn.net/w/c/12/05/82876693901189319.jpeg","title":"&#39;���ø�&#39; �ʸ��� ���� 5������ ���� ��ģ��","id":"20120516091011626"}
        ,{"url":"http://media.daum.net/photo/4010","img":"http://icon.daumcdn.net/w/c/12/05/82876307459008319.jpeg","title":"[���� ��ȥ�� ǳ��] �Ŷ����ź� &quot;�ູ�մϴ�&quot;","id":"20120516092605081"}
        ,{"url":"http://sports.media.daum.net/general/gallery/gagsports/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81730673405131839.jpeg","title":"&#39;���� �� ����&#39; �ĺ�GK ��� ������ ����","id":"20120516100608409"}
        ,{"url":"http://sports.media.daum.net/general/gallery/0516ufc/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81728759258718839.jpeg","title":"�絿���� ����ű�� Ÿ�ٷ��� &#39;����&#39;","id":"20120516093313331"}
        ,{"url":"http://media.daum.net/entertain/photo/gallery/?gid=100539","img":"http://icon.daumcdn.net/w/c/12/05/81728404408992839.jpeg","title":"�̽�ö �Ƴ��� �� ���� ���� &quot;���ֿ�. .&quot;","id":"20120516093918544"}
        ,{"url":"http://media.daum.net/photo/3899","img":"http://icon.daumcdn.net/w/c/12/05/81728227037306839.jpeg","title":"���� 6������ �������� �Ծ�ƴ� ���̰�..","id":"20120516030614331"}
        ,{"url":"http://sports.media.daum.net/general/gallery/STARKIMYUNA/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81727815537682839.jpeg","title":"&#39;����&#39; �迬��, �����ǳ����� �α�����","id":"20120516092003892"}
    ];

var carouselElement = document.getElementById('carousel1');

// class definition
 
function Carousel(carouselElement, images)
{
	this.carouselElement = carouselElement;
	this.images = images;
	this.pageNumber = 1;
	
	this.viewPage = function () {
		this.printPageImages(this.pageNumber);
		this.printPageInformation(this.pageNumber);
	};


	this.printPageImages = function(pageNumber) {
		if(!this.isCorrectPageNumber(pageNumber))
			return;

		var startImageNumber = (pageNumber - 1) * 3;
		var newInnerHTML = '';

		for(var i = 0; (i < 3) && ((startImageNumber + i) < this.images.length); i++) {
			newInnerHTML += "<img src = \'" + this.images[startImageNumber + i].img + "\'>";
		}

		this.carouselElement.children[0].innerHTML = newInnerHTML;
	};	

	this.nextPage = function() {
		if(this.isCorrectPageNumber(this.pageNumber + 1))
		{
			this.pageNumber++;
			this.viewPage()
		}
	};

	this.prevPage = function() {
		if(this.isCorrectPageNumber(this.pageNumber - 1))
		{
			this.pageNumber--;
			this.viewPage()
		}
	};

	this.printPageInformation = function (pageNumber) {
		var newInnerHTML = pageNumber + " / " + this.getMaxPage();

		this.carouselElement.children[1].children[1].innerHTML = newInnerHTML;
	};

	this.getMaxPage = function() {
		return Math.ceil(this.images.length / 3);
	};

	this.isCorrectPageNumber = function (number) {
		return (number >= 1) && (number <= this.getMaxPage());
	};

	this.viewPage();
}


// chess
function ChessTable(){
	var chessTableElement = document.createElement('div');	
	chessTableElement.className = "div chessTable";
	
	var createRow = function(isOdd) {
		var className = [];
		className[0] = "div position chessTable_row_black";
		className[1] = "div position chessTable_row_white";

		var select = isOdd ? 0 : 1;

		var row = document.createElement('div');
		row.className = 'div chessTable_row';

		for(var i = 0; i < 4; i++) {
			var position = document.createElement('div');
			position.className = className[select];
			row.appendChild(position);
			select++;
			select %= 2;
		}
		
		return row;
	}

	for(var i = 0; i < 4; i++) {
		var row = createRow( (i % 2) == 0 );
		chessTableElement.appendChild(row);
	}

	return chessTableElement;
}


function chessEventHandler() {
	if(lastSelectedPosition != null){
		if(lastSelectedPosition.className == "div position chessTable_row_black")
			lastSelectedPosition.style.background = "black";
		else
			lastSelectedPosition.style.background = "white";
	}

	this.style.background = "red";
	lastSelectedPosition = this;
}


// Strart
var carousel1 = new Carousel(carouselElement, todayPhoto);
var chessTable = ChessTable();

document.body.appendChild(chessTable);

// Link EventListener
// carousel
carouselElement.children[1].children[0].addEventListener('click',carousel1.prevPage.bind(carousel1));
carouselElement.children[1].children[2].addEventListener('click',carousel1.nextPage.bind(carousel1));

// chessTable
var positions = document.querySelectorAll(".position");
for(var i = 0; i < positions.length; i++) {
	positions[i].addEventListener('click', chessEventHandler);
}
