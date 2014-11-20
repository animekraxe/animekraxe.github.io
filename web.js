var fs = require('fs');

var express = require('express');
var app = express();
app.use(express.logger());
app.use(express.static(__dirname));

app.get('/', function(req, res) {
    var filestring = fs.readFileSync('index.html').toString();
    res.send(filestring);
});

var port = process.env.PORT || 8080;
app.listen(port,function() {
    console.log("Listening on " + port);
});
