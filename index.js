var express = require('express');
var app = express();
var http = require('http').Server(app);

const PORT = 10003;

http.listen(PORT, function(){
  console.log("listening on port " + 10003);
});

app.get('/chat', function(req, res){
  res.sendFile(__dirname + '/chat/index.html');
});
app.use('/chat',express.static(__dirname + '/chat'));

app.get(/\/round\/([0-9]+)/, function(req, res){
  res.sendFile(__dirname + '/round/' + req.params[0] + '.pdf');
});
