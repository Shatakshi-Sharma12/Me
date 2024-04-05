const slider = document.querySelector(".slider");

function activate(e) {
  const items = document.querySelectorAll(".item");
  const songs = document.querySelectorAll(".song");

  if (e.target.matches(".next")) {
    slider.append(items[0]);
    songs.forEach((song) => song.pause());
    const currentSong = items[0].querySelector(".song");
    currentSong.currentTime = 0;
    currentSong.play();
  } else if (e.target.matches(".prev")) {
    slider.append(items[items.length - 1]);
    songs.forEach((song) => song.pause());
    const currentSong = items[items.length - 1].querySelector(".song");
    currentSong.currentTime = 0;
    currentSong.play();
  }
}

document.addEventListener("click", activate, false);
