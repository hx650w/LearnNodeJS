var fs = require("fs");

var data = "Simply Easy Learning";

var writableStream = fs.createWriteStream("016output.txt");
writableStream.write(data, "UTF8");
writableStream.end();

writableStream.on("finish", function(){
	console.log("Write finished.");
});

writableStream.on("error", function(err){
	console.log(err.stack);
});