var events = require("events");

var eventEmitter = new events.EventEmitter();

// Create listener1
var listener1 = function listener1() {
	console.log("Listener1 is executed.");
};

var listener2 = function listener2() {
	console.log("Listener2 is executed.");
};

// Bind listener1 to the connection event.
eventEmitter.addListener("connection", listener1);

// Bind listener2 to the connection event.
eventEmitter.on("connection", listener2);

// Get the number of listeners listening to the connection event.
var eventListeners = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listener(s) listening to connection event");
eventEmitter.emit("connection");

// Remove the binding of listener1 function
eventEmitter.removeListener("connection", listener1);
console.log("Listener1 will not listen now.");

// Emit the connection event.
eventEmitter.emit("connection");

eventListeners = events.EventEmitter.listenerCount(eventEmitter, "connection");
console.log(eventListeners + " Listener(s) listening to the connection event");

console.log("Program ended");