// содежимое index.js
const http = require('http')

http.createServer(function(request,response){

	response.setHeader("Content-Type","text/html; charset=utf-8;");

	if(request.url === "/home" || request.url === "/"){
		response.write('<h2> Home</h2>');
	}

	else if(request.url === "/is-91-003"){
		response.write('<h2> Геневський Максим IC-91 2 курс</h2>');
	}
	else{
		response.write('<h2>Not found</h2>');
	}
	response.end();
}).listen(3000);