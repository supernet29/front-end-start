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

	this.setClickEvent = function () 
	{

	};

	this.clearClickEvent = function () 
	{

	};

	this.setCardElement = function (element) 
	{

	};
}

function Control (closeDelay, winPoint)
{
	this.closeDelay = closeDelay;
	this.winPoint = winPoint;

	this.cardList = [];
	this.openedCard = [];
	this.hasOpenedCard = false;
	this.matchedNumber = 0;

	this.cardClicked = function (card)
	{
		var cardOpen = card.open.bind(card);
		cardOpen();

		if(!this.hasOpenedCard)
		{
			this.openedCard[0] = card;
			this.hasOpenedCard = true;
			return;
		}
		else
		{
			this.openedCard[1] = card;
		}

		if(this.openedCard[0].imageNumber === this.openedCard[1].imageNumber)
		{
			for(i = 0; i < 2; i++) 
			{
				var cardHide = openedCard[i].hide.bind(openedCard[i]);
				cardHide();
			}

			this.matchedNumber++;
			
			if(this.matchNumber >= this.winPoint)
			{
				alert("승리하셧습니다.");
			}
		}
		else
		{
			this.offEvent();
			setTimeout(this.waitAndClose.bind(this), this.closeDelay);
		}

		this.hasOpenedCard = false;

	};
	
	this.waitAndClose = function() 
	{

		for(i = 0; i < 2; i++)
		{
			var cardClose = openedCard[i].close.bind(openedCard[i]);
			cardClose();
		}

		this.onEvent();
	};

	this.offEvent = function() 
	{
		var cardNum = this.cardList.length;
		for(i = 0; i < cardNum; i++)
		{
			(this.cardList[i].clearClickEvent.bind(this.cardList[i]))();
		}
	};

	this.onEvent = function ()
	{
		var cardNum = this.cardList.length;
		for(i = 0; i < cardNum; i++)
		{
			(this.cardList[i].setClickEvnet.bind(this.cardList[i]))();
		}
	};

	this.init = function ()
	{
		for(i = 0; i < 8; i++) 
		{
			this.cardList[i] = new Card(this, Math.floor(i / 2));
		}

		for(i = 0; i < 8; i++)
		{
			var random = Math.floor(Math.random()*10) % 8;
			var temp = this.cardList[i];
			this.cardList[i] = this.cardList[random];
			this.cardList[random] = temp;
		}

		var cardElements = $(".card > a");
		for(i = 0; i < 8; i++)
		{
			(this.cardList[i].setCardElement.bind(this.cardList[i]))(cardElements[i]);
		}
	};
}
