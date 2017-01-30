
let notes = prompt("Pleas write the notes you want to play and the beat of each one");
let bpm = prompt("Please write the bpm");

/*
*   Takes a string containing a musical note and optional beat-length
*   and return an object with named parameters. If beat-length is not
*   specified, it defaults to 1.
*
*   e.g.
*         parseNote("A")    -> { pitch: "A", beats: 1 }
*         parseNote("B*2")  -> { pitch: "B", beats: 2 }
*
*/
const parseNote = function(noteString){
  let noteArray = noteString.split("*");          // "B*2" -> ["B", 2]
  let note = {
    pitch: noteArray[0],                          // "B"
    beats: parseInt(noteArray[1] || 1)            // 2 (but defaults to 1)
  };

  return note;                                    // { pitch: "B", beats: 2 }
}

/*
*   Takes a complete song string and returns an Array of pitch+beat
*   objects.
*
*   e.g.
*         parseSong("A B*2 C*3") ->
*             [
*               { pitch: "A", beats: 1 },
*               { pitch: "B", beats: 2 },
*               { pitch: "C", beats: 3 }
*             ]
*
*/
let parseSong = function(notesString){
  var music = [];
  let notesArray = notesString.split(" ");        // "A B*2 C*3"

  // Iterate through each pitch-note pair
  for(var i = 0; i < notesArray.length; i++) {
    let note = parseNote(notesArray[i]);          // { pitch: "B", beats: 2 }
    music.push(note);
  }

  return music;                                   // [ { pitch: "B", beats: 2 } ]
}


playSong(parseSong(notes), bpm);
