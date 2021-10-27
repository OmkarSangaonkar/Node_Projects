const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from other side this is checking for htttp request");
});

server.listen(5500, "127.0.0.1", () => {
  console.log("listening from port");
});
