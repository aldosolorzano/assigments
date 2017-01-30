
let notes = prompt("Pleas write the notes you want to play and the beat of each one");
let bpm = prompt("Please write the bpm");

/*
*   Takes a string containing a musical note and optional beat-length
*   and return an object with named parameters. If beat-length is not
*   specified, it defaults to 1.
*
*   e.g.
*         splitAx("A")    -> { pitch: "A", beats: 1 }
*         splitAx("B*2")  -> { pitch: "B", beats: 2 }
*
*/
const splitAx = function(noteString){
  let noteArray = noteString.split("*");
  let note = {
    pitch: noteArray[0],
    beats: parseInt(noteArray[1] || 1)
  };

  return note;
}

/*
*   Takes a complete song string and returns an Array of pitch+beat
*   objects.
*
*   e.g.
*         parseNotes("A B*2 C*3") ->
*             [
*               { pitch: "A", beats: 1 },
*               { pitch: "B", beats: 2 },
*               { pitch: "C", beats: 3 }
*             ]
*
*/
let parseNotes = function(notesString){
  var music = [];
  let notesArray = notesString.split(" ");

  for(var i = 0; i < notesArray.length; i++) {
    let note = splitAx(notesArray[i]);
    music.push(note);
  }

  return music;
}


playSong(parseNotes(notes), bpm);
