const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  // NORMAL WAY OF CALLINIG DATA
  // fs.readFile("streams.txt", (err, data) => {
  //   if (err) return console.error(err);
  //   res.end(data.toString());
  // });

  //  SECOND WAY OF CALLING DATA BY CHUNKS

  // const rstream = fs.createReadStream("streams.txt");
  //   rstream.on("data", (chunkdata) => {
  //     res.write(chunkdata);
  //   });
  //   rstream.on("end", () => {
  //     res.end();
  //   });

  //   rstream.on("error", (err) => {
  //     console.log(err);
  //     res.end("file doesn't exsist");
  //   });
  // });

  // THIRD WAY OF CALLING DATA BY STREAM PIPING METHOD

  const rstream = fs.createReadStream("streams.txt");
  rstream.pipe(res);
});

server.listen(8000, "127.0.0.1");
