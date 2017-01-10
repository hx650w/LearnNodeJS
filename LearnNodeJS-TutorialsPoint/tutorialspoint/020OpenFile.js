var fs = require("fs");

console.log("Going to open the file.");
fs.open("020Input.txt", "r+", function(err, fd) {
	if(err) {
		return console.log(err.stack);
	}
	
	console.log("File Opened Successfully.");
});
