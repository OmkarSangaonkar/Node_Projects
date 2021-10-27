console.log("this is events-mod");

const EventEmiiter = require("events");
const event = new EventEmiiter();

//  EVENT for checking event listing of name

event.on("sayMyName", () => {
  console.log("your name is omkar");
});

event.on("sayMyName", () => {
  console.log("your mid name is sanjay");
});

event.on("sayMyName", () => {
  console.log("your surname is sangaonkar");
});

event.emit("sayMyName");

// Event for checking status for page

event.on("checkpage", (sc, msg) => {
  console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit("checkpage", 200, "ok");
