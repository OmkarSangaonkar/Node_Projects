const fs = require("fs");

const crypto = { name: "bitcoin", price: `${40000}$` };

// const jsonData = JSON.stringify(crypto);
// console.log(jsonData);

// const parseData = JSON.parse(jsonData);
// console.log(parseData.name);

// const jsonData = JSON.stringify(crypto);

// fs.writeFileSync("1-json.json", jsonData);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJson = dataBuffer.toString();
// const parseData = JSON.parse(dataJson);
// console.log(parseData);

// CHALLANGE

const Block = { name: "Matic", type: "Etherium" };

const blockData = JSON.stringify(Block);
// fs.writeFileSync("block.json", blockData);

const dBuffer = fs.readFileSync("block.json");
const dJson = dBuffer.toString();
const pJson = JSON.parse(dJson);

pJson.name = "Serum";
pJson.type = "Solana";

const userJson = JSON.stringify(pJson);
fs.writeFileSync("block.json", userJson);
