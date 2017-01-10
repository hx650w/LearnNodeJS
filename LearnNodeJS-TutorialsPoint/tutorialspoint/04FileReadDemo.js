var fileSystem = require("fs");

fileSystem.readFile("03Input.txt", function(err, data) {
	if(err) {
		return console.error(err);
	}
	
	console.log(data.toString());
});

console.log("Program ended");