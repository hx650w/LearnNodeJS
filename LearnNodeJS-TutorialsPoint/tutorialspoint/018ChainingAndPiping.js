var fs = require("fs");
var zlib = require("zlib");

/*fs.createReadStream("018Input.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("018Input.txt.gz"));

console.log("File compressed");*/

fs.createReadStream("018Input.txt.gz").pipe(zlib.createGunzip()).pipe(fs.createWriteStream(("018Output.txt")));
console.log("File decompressed");