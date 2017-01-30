
let keys = ["pitch", "beats"];
let notes = prompt("Pleas write the notes you want to play and the beat of each one");
let bpm = prompt("Please write the bpm");

const splitAx = function(str, wich){  //removes * from notes
  let arr = str.split("*");
  return arr[wich];
}

let parseNote = function(note){
  var music = [];
  let arr = note.split(" ");

  for(var i =0, len = arr.length; i < len; i++) {
    let obj = new Object();

    for(var j =0, l=keys.length; j<l; j++) {
      if(arr[i].length > 2 && j > 0) {
        obj[keys[j]] = parseInt(splitAx(arr[i], 1));
      } else if(j > 0) {
        obj[keys[j]] = 1;
      } else {
         obj[keys[j]] = splitAx(arr[i], 0);
      }
    }

    music.push(obj);
  }

  return music;
}


playSong(parseNote(notes), bpm);
