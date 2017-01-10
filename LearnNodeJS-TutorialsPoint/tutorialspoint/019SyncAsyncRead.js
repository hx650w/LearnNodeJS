var fs = require("fs");

fs.readFile("019Input.txt", function(err, data) {
	if(err) {
		return console.log(err.stack);
	}
	
	console.log("Asynchronous Read: " + data);
});

var data = fs.readFileSync("019Input.txt");
console.log("Synchronous Read: " + data);

console.log("Program ended");
