var score = 0;
var level = 1;
var hit = 0;
var miss = 0
var levelUpSize = 10;
var gameOverMiss = 10;
var delay = 4500;
var boxSize = 50;

var boxClickGameElement = document.getElementById('boxClickGame');
var box = document.querySelectorAll(".box", boxClickGameElement)[0];
var scoreBoard = document.querySelectorAll(".scoreBoard", boxClickGameElement)[0];
var gameWindow = document.querySelectorAll(".gameWindow", boxClickGameElement)[0];
var height = gameWindow.clientHeight;
var width = gameWindow.clientWidth;
var blinkTime = 500;
var timerID;
var clicked = false;

function boxClick() {
	if(!clicked) {
		clicked = true;
		clearTimeout(timerID);
		score += level;
		hit++;

		if(hit >= levelUpSize){
			levelUp();
		}

		box.style.background = 'blue';

		refreshScoreBoard();
		setTimeout(repositionBox, blinkTime);
	}
}

function levelUp() {
	level++;
	hit = 0;
	miss = 0;

	delay = 500 + Math.floor((delay - 500) * 0.8);
}

function repositionBox() {
	var newLeftPos = Math.floor(Math.random() * (width - boxSize));
	var newTopPos = Math.floor(Math.random() * (height - boxSize));

	box.style.background = '';
	box.style.left = newLeftPos + "px";
	box.style.top = newTopPos + "px";

	clicked = false;	
	timerID = setTimeout(boxMiss, delay);
}

function refreshScoreBoard() {
	var scoreElement = document.querySelectorAll(".score > .value", scoreBoard)[0];
	var levelElement = document.querySelectorAll(".level > .value", scoreBoard)[0];
	var missElement = document.querySelectorAll(".miss > .value", scoreBoard)[0];

	scoreElement.innerHTML = score;
	levelElement.innerHTML = level;
	missElement.innerHTML = miss;
}

function boxMiss() {
	miss++;

	refreshScoreBoard();
	if(miss >= gameOverMiss) {
		gameWindow.innerHTML = "GameOver!!";
		return;
	}

	repositionBox();
}

function gameStart() {
	refreshScoreBoard();
	repositionBox();
}

gameStart();
box.addEventListener("click", boxClick);
