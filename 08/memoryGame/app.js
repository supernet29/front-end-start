var cardElements = $(".card > a");

var images = [

];

var controler = {
	start : function () {

	},

	OnCardOpen : function (card) {
		openedCard[openedCardNumber] = card;
		openedCardNumber ++;

		if(openedCardNumber < 1) {
		}
			


	},

	openedCard = [],
	opendCardNumber = 0
	
}

var card = {

	openCard : function () {

	},

	closeCard : function () {
		
	},

	cardElement : null,

	controler : controler
};
