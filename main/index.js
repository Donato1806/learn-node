var http = require('http');
var getData = require('../modules/getData')
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const test = getData.myDateTime();
    res.write("The date and time are currently: " + test + req.url);
    res.end
}).listen(8080);