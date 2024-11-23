// script.js

const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const stopBtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');

// Play Button
playBtn.addEventListener('click', () => {
  audio.play();
});

// Pause Button
pauseBtn.addEventListener('click', () => {
  audio.pause();
});

// Stop Button
stopBtn.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
});

// Update progress bar and time
audio.addEventListener('timeupdate', () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;

  // Update progress bar
  progress.value = (currentTime / duration) * 100 || 0;

  // Update time
  currentTimeEl.textContent = formatTime(currentTime);
  durationEl.textContent = formatTime(duration);
});

// Seek audio
progress.addEventListener('input', () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

// Format time helper function
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
};