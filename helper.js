const fs = require( "fs" )
module.exports = {
  loadNotes: function () {
    try {
      let notesBuffer = fs.readFileSync( 'notes.json' )
      let notesJSON = notesBuffer.toString()
      return JSON.parse( notesJSON )

    } catch ( error ) {
      return []
    }
  },
  saveNotes: function ( notes ) {
    try {
      let result = fs.writeFileSync( 'notes.json', JSON.stringify( notes ) )
    } catch ( error ) {
      return console.log( "Error in saving notes ----> ", error )
    }

  },
  addNotes: function ( title, body ) {
    let notes = this.loadNotes()

    let duplicateNotes = notes.filter( function ( note ) {
      return note.title === title
    } )

    if ( duplicateNotes.length == 0 ) {
      notes.push( {
        title,
        body
      } )
      this.saveNotes( notes )
      console.log( "New Note added" )
    }
    else {
      console.log( "This title already exists" )
    }

  },
  removeNotes: function ( title ) {
    let notes = this.loadNotes()
    let notesToKeep = notes.filter( ( note ) => {
      return note.title != title
    } )
    this.saveNotes( notesToKeep )
    if ( notes.length > notesToKeep.length ) {
      console.log( "Removed a note" )
    }
    else {
      console.log( `Removing notes with title ${ title }` )

    }
  }
}