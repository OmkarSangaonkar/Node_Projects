// File system structure

const fs = require("fs");
fs.writeFileSync("read.txt", "welcome to my first file");
fs.writeFileSync(
  "read.txt",
  "welcome to my first file and  i am adding new data"
);

fs.appendFileSync("read.txt", "  this is appended data");

const bufferData = fs.readFileSync("read.txt");
console.log(bufferData);

const orignalData = bufferData.toString();
console.log(orignalData);

fs.renameSync("read.txt", "readwrite.txt");
