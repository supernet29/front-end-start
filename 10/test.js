var fs = require('fs');
var prettyBytes = require('pretty-bytes');

fs.writeFile('message.txt', 'Hello Node', function (err) {
	if(err) throw err;
	console.log('it\'s saved!');
});

var bytes = prettyBytes(100000000);
fs.writeFile('message.txt', bytes , function (err) {
	if(err) throw err;
	console.log('it\'s saved!');
});
