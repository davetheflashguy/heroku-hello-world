const http = require('http');
const server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type' : 'text/html'});
  res.end("<h1>Hello World</h1>");

});

const port = Number(process.env.PORT || 3000);

server.listen(port);
