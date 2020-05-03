var http = require('http'),
    fs = require('fs');


fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
		}     
		const port = process.env.PORT || 8000;  
    http.createServer(function(req, res) {  
        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write(html);  
        res.end();  
    }).listen(port);
});