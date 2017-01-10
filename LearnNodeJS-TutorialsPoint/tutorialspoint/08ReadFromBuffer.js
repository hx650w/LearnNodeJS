var buf = new Buffer(26);

for(var bufCounter = 0; bufCounter < 26; bufCounter++) {
	buf[bufCounter] = bufCounter + 97;
}

console.log("toString()");
console.log(buf.toString());

console.log("ASCII");
console.log(buf.toString("ascii"));

console.log("ASCII, 0, 5");
console.log(buf.toString("ASCII", 0, 5));