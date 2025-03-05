const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');
const currentTime = document.getElementById('current-time');
const volume = document.getElementById('volume');

playButton.addEventListener('click', () => {
  audio.play();
});
pauseButton.addEventListener('click', () => {
  audio.pause();
});
stopButton.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
});

audio.addEventListener('timeupdate', () => {
  currentTime.innerText = audio.currentTime.toFixed(2);
});

volume.addEventListener('change', () => {
  audio.volume = volume.value;
});
