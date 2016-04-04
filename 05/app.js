var multiplicationDiv = document.getElementById("multiplicationDiv");
var multiplicationTemplate = document.getElementById("multiplyTemplate").innerHTML;

var multiplyResult = [];

for (var i = 1; i <= 9; i++) {
	multiplyResult[i - 1] = {};
	multiplyResult[i - 1].i = i;
	multiplyResult[i - 1].result = [];
	for (var j = 1; j <= 9; j++) {
		multiplyResult[i - 1].result[j - 1] = i * j;
	}
}
