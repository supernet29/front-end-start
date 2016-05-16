function Card (control, imageNum) 
{
	this.cardElement = null;
	this.imageNumber = imageNum;
	this.controller = control;
	this.isOpened = false;
	
	this.open = function () 
	{
		
	};

	this.close = function () 
	{

	};

	this.hide = function () 
	{

	};

	this.setCardElement = function (element) 
	{

	};
}

function Control ()
{
	this.cardList = [];
	this.openedCard = [];
	this.hasOpenedCard = false;
	this.matchedNumber = 0;

	this.cardClicked = function (card)
	{

	};

	this.init = function ()
	{

	};
}
