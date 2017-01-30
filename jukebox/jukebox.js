
let keys = ["pitch", "beats"];
let notes = prompt("Pleas write the notes you want to play and the beat of each one");
let bpm = prompt("Please write the bpm");

const splitAx = function(str, wich){  //removes * from notes
  let arr = str.split("*");
  return arr[wich];
}

let parseNote = function(notesString){
  var music = [];
  let notesArray = notesString.split(" ");

  for(var i = 0; i < notesArray.length; i++) {
    let note = new Object();

    for(var j = 0; j < keys.length; j++) {
      if(notesArray[i].length > 2 && j > 0) {
        note[keys[j]] = parseInt(splitAx(notesArray[i], 1));
      } else if(j > 0) {
        note[keys[j]] = 1;
      } else {
         note[keys[j]] = splitAx(notesArray[i], 0);
      }
    }

    music.push(note);
  }

  return music;
}


playSong(parseNote(notes), bpm);
