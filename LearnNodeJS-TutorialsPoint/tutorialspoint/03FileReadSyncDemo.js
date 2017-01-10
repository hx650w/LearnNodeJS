var fileSystem = require("fs");

var data = fileSystem.readFileSync("03Input.txt");
console.log(data.toString());
console.log("Program ended");