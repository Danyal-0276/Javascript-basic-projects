let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

// Set the max value of the progress bar when metadata is loaded
song.onloadedmetadata = function () {
    progress.max = song.duration;
};

// Update the progress bar based on song's current time using the timeupdate event
song.ontimeupdate = function () {
    progress.value = song.currentTime;
};

// Toggle play and pause for the song
function playPause() {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    } else {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}

// Update the song's current time when the progress bar is changed
progress.oninput = function () {
    song.currentTime = progress.value;
};

// Ensure that changing progress also plays the song if paused
progress.onchange = function () {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
};
