const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const data = fs.readFileSync(`${__dirname}//makeApi/makeApi.json`, "utf-8");
  const objData = JSON.parse(data);

  //   console.log(req.url);

  if (req.url == "/") {
    res.end("Hello from Home Page");
  } else if (req.url == "/contact") {
    res.end("hello form contact side ");
  } else if (req.url == "/about") {
    res.end("Hello this is about us page");
  } else if (req.url == "/makeapi") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(objData[0].first_name);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1> 404 error page, page does not exsist </h1>");
  }
});

server.listen(5500, "127.0.0.1", () => {
  console.log("listening from port 5500");
});
