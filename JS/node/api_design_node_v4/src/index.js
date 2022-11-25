const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    console.log('Hello friend')
    res.end();
  }
});

server.listen(8080, () => {
  console.log("Server on http://localhost:8080");
});
