const http = require('http');
const url = require('url');
const querystring = require('querystring');

const ContentReader = require('./contentReader');

var server = http.createServer(
	function(request, response) {
		let path = url.parse(request.url).pathname;
		// removing leading '/'
		path = path.substring(1);

		response.writeHead(200, {"Content-Type": "text/html"});

		let reader = new ContentReader(response);

		reader.read('header_html')()
			.then( reader.write() )
			.then( reader.read(path) )
			.then( reader.write() )
			.then( reader.read('footer_html') )
			.then( reader.write() )
			.catch( reader.error() )
			.then( reader.end() );
	}
);

server.listen(8080);
