var events = require("events");

// Event emitter
var eventEmitter = new events.EventEmitter();

// Event handler / listener
var connectionHandler = function connected(){
	console.log("Connection successful.");
	eventEmitter.emit("data_received");
};

// Bind the connection event with the handler
eventEmitter.on("connection", connectionHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on("data_received", function() {
	console.log("Data received successfully.");
});

// Fire the connection event.
eventEmitter.emit("connection");

console.log("Program ended");