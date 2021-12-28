
const yargs = require( "yargs" )
const helper = require( "./helper" )

yargs.command( {
  command: "add",
  describe: 'Add anew note',
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function ( argv ) {
    helper.addNotes( argv.title, argv.body )
  }
} )

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
    helper.removeNotes( argv.title )
  }
} )

yargs.command( {
  command: "list",
  describe: "List your notes",
  handler: function () {
    helper.listNotes()
  }
} )

yargs.command( {
  command: 'read',
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler: function (argv) {
    helper.readNote( argv.title );
  }
} )

const yargParser=yargs.parse()

module.exports = yargParser;