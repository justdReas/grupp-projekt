const http = require("http");

const helloWorld = (req, res) => {
  console.log("Request Url: ", req.url);

  res.writeHead(200);
  res.end();
};

const server = http.createServer(helloWorld);
server.listen(8080);
