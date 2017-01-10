var fs = require("fs");
var readerStream = fs.createReadStream("015ReadStream.txt");
readerStream.setEncoding("UTF8");

var data = "";

readerStream.on("data", function(chunk) {
	data += chunk;
});

readerStream.on("end", function() {
	console.log(data);
});

readerStream.on("error", function(err) {
	console.log(err.stack);
});

console.log("Program Ended");