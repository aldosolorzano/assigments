$(document).ready(function() {
  let $songPlaying = $('#song-playing > h3').first()
  $songPlaying.append('Enter a song')

  const $add_song =   $('#song-form > input[type=submit]')
  $($add_song).on('click',function(event){
    event.preventDefault()
    const {currentTarget} = event
    const $notes = $('#song-form > input[name=notes]')
    const $songName = $('#song-form > input[name=song-name]')
    if($notes.val() != ""){
      $('#song-queue').append(`<span>${$songName.val()}</span><li>${$notes.val()}</li>`)
        $notes.val('')
        $songName.val('')
    }

  })

  $('#play-button').on('click',function(event){
    event.preventDefault()
    const currentChild = $('#song-queue > li')[0]
    const songName = $('#song-queue > span')[0].innerHTML
    $(this).slideUp('fast',function(){
      if (currentChild != undefined){
        const notes = currentChild.innerHTML
        $songPlaying.empty().append('Playing')
        $songPlaying.next().append(songName)
        playSong(parseSong(notes),400)
      }
    })
  })
});



// playSong(song, bpm, onComplete)
