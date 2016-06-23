var fs = require('fs');

var dirFiles = fs.readdirSync(".");

console.log("type of dirFiles : " + typeof(dirFiles));

var strings = [];
for( i = 0; i < dirFiles.length; i++)
{
	console.log(dirFiles[i]);
	strings[i] = fs.readFileSync(dirFiles[i], "utf8");
}

var result = "";
for( i = 0; i < strings.length; i++)
{
	result += strings[i];
}

console.log(result);
