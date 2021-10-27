const yargs = require("yargs");
const notes = require("./notes");

// const command = process.argv[2];

// console.log(process.argv);

yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "this is note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },

  handler: function (argv) {
    // console.log("Title: " + argv.title);
    // console.log("Body: " + argv.body);
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing a new note");
  },
});

yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a new note");
  },
});

// yargs.command({
//   command: "list",
//   describe: "List a note",
//   handler: function () {
//     console.log("Listing a new Note");
//   },
// });

yargs.parse();
// console.log(yargs.argv);
