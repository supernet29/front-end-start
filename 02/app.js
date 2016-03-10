//var str = 'hello world!\n';
//console.log(str);

/*
var man = {
	name : 'aj',
	age : 30,
	hobby: 'bike'
};

if(man.name !== 'woochan')
{
	console.log('he is not woochan');
}
else
{
	console.log('he is woochan');
}

function printHuman( human )
{
	console.log("== Human informatioin ==");
	console.log("name : " + human.name);
	console.log("age : " + human.age);
	console.log("hobby : " + human.hobby);
	console.log("========================");
}

function SumAtoB(A, B)
{
	var sum = 0;

	for(var i = A; i <= B; i++)
	{
	   	sum += i;
	}

	return sum;
}


var Info = printHuman;

Info(man);

printHuman( man );

console.log("Sum 10 to 20 = " + SumAtoB(10, 20));


var date = new Date();
console.log(date.toString());

//hoisting
var link = "hello";
function Hoisting()
{
	console.log(link);
	var link = "name";
	console.log(link);
}

Hoisting();

*/

function print1to100()
{
	for(var i = 1; i <= 100; i++)
	{
		console.log(i);
	}
}

function printEvenNumber()
{
	for(var i = 2; i <= 100; i += 2)
	{
		console.log(i);
	}
}

function printTimesTable()
{
	for(var i = 2; i <= 9; i++)
	{
		console.log("=" + i + "=");
		for( var j = 1; j <= 9; j++)
		{
			console.log( i + " X " + j + " = " + (i*j));
		}
	}
}

function printSumOfUserInput()
{
	var userInput;
	var parsedData = 0;
	var sum = 0;
	do
	{
		userInput = prompt("Input number what you want.");
		if(userInput != null)
		{
			parsedData = parseInt(userInput);
			sum += parsedData;
		}
	}while(userInput != null);
	alert("the sum of input is " + sum );
}

print1to100();
printEvenNumber();
printTimesTable();
printSumOfUserInput();
