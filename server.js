var http = require('http');
var fs = require('fs');

var dataIndex = fs.readFileSync("index.html", "utf8");
var dataGeneric = fs.readFileSync("generic.html", "utf8");
var dataElements = fs.readFileSync("elements.html", "utf8");


var contIndex = 0;
var contGeneric = 0;
var contElements = 0;

http.createServer(function (req, res) {

	switch(req.url)
	{
		case "/":
			res.write(dataIndex);
			contIndex++;
		break;
		case "/generic":
			res.write(dataGeneric);
			contGeneric++;
		break;
		case "/elements":
			res.write(dataElements);
			contElements++;
		break;
		default:
			res.writeHead(404, {'Content-Type': 'text/html;charset=UTF-8'});
			res.write("404, Page not Found!");
		break;
	}
	res.end();
	//Guarda el número de veces que entras en cada página
	var stats = "--INDEX: "+ contIndex +"\n"+"--GENERIC: "+contGeneric+"\n"+"--ELEMENTS: "+contElements;
	fs.writeFileSync("stats.txt",stats);
	console.log(stats);
	
}).listen(8080);


