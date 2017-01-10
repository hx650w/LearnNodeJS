var http = require("http");

http.createServer(function(request, response) {
	// Send the HTTP header
	// HTTP Status = 200 : OK
	// Content Type = text/plain
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	
	// Send the response body as "Hello World!!! This is the server"
	response.end("Hello World!!! This is the server");
}).listen(8081);

console.log("Server running at http://localhost:8081/");