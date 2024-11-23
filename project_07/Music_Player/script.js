let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let nextButton = document.getElementById("nextButton"); // Next button element
let nxtButton = document.getElementById("nxtButton"); // Next button element
let songName = document.getElementById("song_name");
let singer = document.getElementById("name");

// Array of song URLs
let songList = [
    
     "media/song1.mp4",
     "media/song2.mp3",
     "media/song3.mp3",
     "media/song4.mp3"
];

// Function to update song name and singer dynamically
function updateSongInfo() {
    // Update song name and singer based on the current song index
    if (currentSongIndex === 0) {
        songName.innerHTML = "Birsiney hou ki-cover";
        singer.innerHTML = "Rajesh Thapa ft. Pratyoos Panta";
    } else if (currentSongIndex === 1) {
        songName.innerHTML = "La Haasil";
        singer.innerHTML = "Sunny Khan Durrani";
    } else if (currentSongIndex === 2) {
        songName.innerHTML = "4AM in Karachi";
        singer.innerHTML = "Talha Anjum";
    } else if (currentSongIndex === 3) {
        songName.innerHTML = "Agency";
        singer.innerHTML = "Talha Anjum ft. Rap Demon";
    }
}



let currentSongIndex = 0; // Pointer to track the current song

// Initially set the song to the first song in the list
song.src = songList[currentSongIndex];
song.load(); // Load the song
song.play(); // Automatically play the first song

updateSongInfo(); // Update song info on load

song.onloadedmetadata = function()
{
    progress.max = song.duration;
    progress.value = song.currentTime;
}
// This is an event handler triggered when the metadata of the audio file (e.g., duration) is loaded.
// Metadata loading occurs before the audio is fully buffered or played.

function playPause()
{
    if(ctrlIcon.classList.contains("fa-pause"))
    {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");

    }
    else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500)
}

progress.onchange = function()
{
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}

// progress.onchange = function() { ... }:

// This sets an event listener that triggers when the user changes the value of the progress element (e.g., by dragging the slider).



// Next button functionality
function changeSongFront() {
    currentSongIndex = (currentSongIndex + 1) % songList.length; // Go to the next song, loop back to the start
    song.src = songList[currentSongIndex]; // Update song source
    song.load(); // Load the new song
    song.play(); // Play the new song
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");

    updateSongInfo();
};

// Example 1: Normal Case
// If currentSongIndex is 2 and songList.length is 5:
// currentSongIndex = (2 + 1) % 5;
// (2 + 1) = 3
// 3 % 5 = 3 (since 3 is less than 5, it remains the same)
// Result: currentSongIndex = 3

// Example 2: Wrapping Around
// If currentSongIndex is 4 (last index) and songList.length is 5:

// currentSongIndex = (4 + 1) % 5;
// (4 + 1) = 5
// 5 % 5 = 0 (remainder when 5 is divided by 5 is 0)
// Result: currentSongIndex = 0 (wraps back to the first song)


function changeSongBack() {
    currentSongIndex = (currentSongIndex - 1 + songList.length) % songList.length;
 // Go to the next song, loop back to the start
    song.src = songList[currentSongIndex]; // Update song source
    song.load(); // Load the new song
    song.play(); // Play the new song
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");

    updateSongInfo();
};

// Optional: Automatically play the next song when the current one ends
song.onended = function () {
    nextButton.click(); // Simulate the next button click
};