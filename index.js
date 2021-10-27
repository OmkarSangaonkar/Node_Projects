const validator = require("validator");
const chalk = require("chalk");
const res = validator.isEmail("foo@bar.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
console.log(chalk.blueBright("Hello Chalk"));
console.log(chalk.green.inverse("Great Success"));
console.log(chalk.red.inverse("Sorry Try Again"));
console.log("Hello from nodemon live");

const command = process.argv[2];

if (command === "add") {
  console.log("adding notes");
} else if (command === "remove") {
  console.log("removing note");
}

// const log = console.log;

// log("Hello this is omkar ");
