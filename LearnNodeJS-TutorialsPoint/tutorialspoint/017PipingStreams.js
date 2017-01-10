var fs = require("fs");

var readableStream = fs.createReadStream("017Input.txt");
var writableStream = fs.createWriteStream("017Output.txt");

readableStream.pipe(writableStream);

console.log("Program Ended");