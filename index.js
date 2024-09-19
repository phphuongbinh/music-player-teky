const song = document.querySelector("#song");
const playControl = document.querySelector("#playControl");
const progress = document.querySelector("#progress");
const toggleSpeaker = document.querySelector(".toggle-speaker");
const toggleCircle = toggleSpeaker.querySelector(".circle");

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function playPauseSong() {
  if (playControl.name == "pause") {
    song.pause();
    playControl.name = "play";
  } else {
    song.play();
    playControl.name = "pause";
  }
}
playControl.addEventListener("click", playPauseSong);

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.addEventListener("change", function () {
  song.play();
  song.currentTime = progress.value;
});

// Toggle
toggleSpeaker.addEventListener("click", function () {
  console.log("rest");

  toggleSpeaker.classList.toggle("active");
});
