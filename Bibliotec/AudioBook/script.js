const audio = document.getElementById('audio');

function changeAudio(audioFile) {
  audio.src = audioFile;
  audio.load();
  audio.play();
}
