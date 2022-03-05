let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
  {
    name: "Hare Ram Hare",
    artist: "Natwar Bhai",
    image:"https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path:"https://github.com/NatwarBHAI/mp3/raw/main/1.mp3"

  },
  {
    name: "The Twist",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/2.mp3"
  },
  {
    name: "Wo Ladki Bahut",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/3.mp3"
  },
  {
    name: "Zara Sa",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/4.MP3"
  },
  {
    name: "01-Chand Sifarish",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/5.mp3"
  },
  {
    name: "01HoshwaliKo(Sarfarosh)",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/6.mp3"
  },
  {
    name: "1 Do dil mil rahe hai",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/7.mp3"
  },
  {
    name: "002 MITRAN DI CHATRI",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/8.mp3"
  },
  {
    name: "02 - Soniyo - Sonu Niigaam",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/9.mp3"
  },
  {
    name: "02 - Tumhare Siva",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/10.mp3"
  },
  {
    name: "samajh kar chand",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/11.mp3"
  },
  {
    name: "jhalak dikhlaja",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/12.mp3"
  },
  {
    name: "koyal si teri boli",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/13.mp3"
  },
  {
    name: "dil ne yeh kaha hai",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/14.mp3"
  },
  {
    name: "dekhne walo ne",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/15.mp3"
  },
  {
    name: "ankh uthi mohabbat ne",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/16.mp3"
  },
  {
    name: "father saab",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/17.mp3"
  },
  {
    name: "filhaal mohabbat",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/18.mp3"
  },
  {
    name: "firse machayenge",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/19.mp3"
  },
  {
    name: "garmi street dancer",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/20.mp3"
  },
  {
    name: "genda phool",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/21.mp3"
  },
  {
    name: "goli chal javegi",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/22.mp3"
  },
  {
    name: "husn hai suhana",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/23.mp3"
  },
  {
    name: "ek aise ladki thi",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/24.mp3"
  },
  {
    name: "kabhi tumhe",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/25.mp3"
  },
  {
    name: "kya karte the sajna",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/26.mp3"
  },
  {
    name: "laal chunariya",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/27.mp3"
  },
  {
    name: "lagdi lahore di",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/28.mp3"
  },
  {
    name: "Loca",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/29.mp3"
  },
  {
    name: "loot liya",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/30.mp3"
  },
  {
    name: "bhola parvat ka",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/31.mp3"
  },
  {
    name: "main jis din bhula du",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/32.mp3"
  },
  {
    name: "malang",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/33.mp3"
  },
  {
    name: "moscow suka",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/34.mp3"
  },
  {
    name: "muqabala",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/35.mp3"
  },
  {
    name: "paani paani remix",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/36.mp3"
  },
  {
    name: "pachtaoge",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/37.mp3"
  },
  {
    name: "pyar tenu karda",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/38.mp3"
  },
  {
    name: "raatan lambiyan",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/39.mp3"
  },
  {
    name: "razzi bolja",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/40.mp3"
  },
  {
    name: "shayad (love aaj kal)",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/41.mp3"
  },
  {
    name: "shona shona",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/42.mp3"
  },
  {
    name: "taaron ke shehar me",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/43.mp3"
  },
  {
    name: "teri choriyaan",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/44.mp3"
  },
  {
    name: "thoda thoda pyar",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/45.mp3"
  },
  {
    name: "Tip Tip Barsa Pani",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/46.mp3"
  },
  {
    name: "titliyaan warga",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/47.mp3"
  },
  {
    name: "wafa na raas aayi",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/48.mp3"
  },
  {
    name: "yaar badmash",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/49.mp3"
  },
  {
    name: "zara thehro",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/50.mp3",
  },

];


function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  random_bg_color();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}


