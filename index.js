
const yargs = require( "yargs" );
const helper = require( "./helper" );

yargs.command( {
  command: "add",
  describe: 'Add anew note',
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type:"string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function ( argv ) {
    helper.addNotes( argv.title, argv.body );
  }
})

yargs.command( {
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler: function ( argv ) {
    helper.removeNotes( argv.title );
  }
} )

yargs.command( {
  command: "list",
  describe: "List your notes",
  handler: function () {
    console.log( "Listing all the notes" );
  }
} )

yargs.command( {
  command: 'read',
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note")
  }
})

yargs.parse();