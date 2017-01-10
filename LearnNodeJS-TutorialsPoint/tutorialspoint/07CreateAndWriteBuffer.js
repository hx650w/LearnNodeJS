var buf1 = new Buffer(10);
console.log(buf1);

var buf2 = new Buffer([10, 20, 30, 40, 50]);
console.log(buf2.toString("UTF-8", 0, 50));

var buf3 = new Buffer("This is node buffer", "UTF-8");
console.log(buf3);

// Write to the buffer
var buf4 = new Buffer(256);
var length = buf4.write("Simply Easy Learning", "UTF-8");
console.log(length);

console.log("Program ended");