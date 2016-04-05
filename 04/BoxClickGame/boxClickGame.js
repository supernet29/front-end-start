var score = 0;
var level = 1;
var hit = 0;
var miss = 0
var levelUpSize = 10;
var gameOverMiss = 10;
var delay = 5000;
var boxSize = 50;

var boxClickGameElement = document.getElementById('boxClickGame');
var box = document.querySelectorAll(".box", boxClickGameElement)[0];
var scoreBoard = document.querySelectorAll(".scoreBoard", boxClickGameElement)[0];
var gameWindow = document.querySelectorAll(".gameWindow", boxClickGameElement)[0];
var height = gameWindow.clientHeight;
var width = gameWindow.clientWidth;

function boxClick() {
	score += level;
	hit++;

	if(hit >= levelUpSize){
		level++;
		hit = 0;
	}

	refreshScoreBoard();
	repositionBox();
}

function repositionBox() {
	var newLeftPos = Math.floor(Math.random() * (width - boxSize));
	var newTopPos = Math.floor(Math.random() * (height - boxSize));

	box.style.left = newLeftPos + "px";
	box.style.top = newTopPos + "px";
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

	if(miss >= gameOverMiss) {
		gameOver();
	}

	repositionBox();
}

box.addEventListener("click", boxClick);
