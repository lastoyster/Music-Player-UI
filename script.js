let audio = document.getElementById('audio');
let playpause = document.getElementById('play');

function togglePlayPause() {
  if (audio.paused || audio.ended) {
    playpause.title = 'Pause';
    audio.play();
  } else {
    playpause.title = 'Play';
    audio.pause();
  }
}
