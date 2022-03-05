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
    path:"https://github.com/NatwarBHAI/mp3/raw/main/4.mp3"

  },
  {
    name: "The Twist",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/1.mp3"
  },
  {
    name: "Wo Ladki Bahut",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/2.mp3"
  },
  {
    name: "Zara Sa",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/3.MP3"
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
    path: "https://github.com/NatwarBHAI/mp3/raw/main/04.%20Samajh%20Ker%20Chand%20Jisko.mp3"
  },
  {
    name: "jhalak dikhlaja",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/01.%20Jhalak%20Dikhlaja.mp3"
  },
  {
    name: "koyal si teri boli",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/01.%20Koyal%20Si%20Teri%20Boli.mp3"
  },
  {
    name: "dil ne yeh kaha hai",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/02.%20Dil%20Ne%20Ye%20Kaha%20Hai.mp3"
  },
  {
    name: "dekhne walo ne",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/04.%20Dekhne%20Walon%20Ne%20Kiya.mp3"
  },
  {
    name: "ankh uthi mohabbat ne",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Ankh%20Uthi%20Mohabbat%20Ne%20Angrai%20Li.mp3"
  },
  {
    name: "father saab",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Father%20Saab%20-%20Khasa%20Aala%20Chahar.mp3"
  },
  {
    name: "filhaal mohabbat",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Filhaal%202%20Mohabbat%20Remix%20-%20DJ%20Vispi.mp3"
  },
  {
    name: "firse machayenge",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Firse%20Machayenge%20-%20Emiway%20Bantai.mp3"
  },
  {
    name: "garmi street dancer",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Garmi%20-%20Street%20Dancer%203D.mp3"
  },
  {
    name: "genda phool",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Genda%20Phool%20-%20Badshah.mp3"
  },
  {
    name: "goli chal javegi",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Goli%20Chal%20Javegi.mp3"
  },
  {
    name: "husn hai suhana",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Husnn%20Hai%20Suhaana%20New%20-%20Coolie%20No%201.mp3"
  },
  {
    name: "ek aise ladki thi",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Jeeta%20Tha%20Jiske%20Liye.mp3"
  },
  {
    name: "kabhi tumhe",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Kabhi%20Tumhe%20-%20Shershaah.mp3"
  },
  {
    name: "kya karte the sajna",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Kya%20Karte%20the%20Saajna%20-%20Anuradha%20Paudwal.mp3"
  },
  {
    name: "laal chunariya",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Laal%20Chunariya%20-%20Akull.mp3"
  },
  {
    name: "lagdi lahore di",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Lagdi%20Lahore%20Di%20-%20Street%20Dancer%203D.mp3"
  },
  {
    name: "Loca",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Loca%20-%20Yo%20Yo%20Honey%20Singh.mp3"
  },
  {
    name: "loot liya",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Loot%20Liya.mp3"
  },
  {
    name: "bhola parvat ka",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Main%20Bhola%20Parvat%20Ka%20Bholenath%20-%20Kaka.mp3"
  },
  {
    name: "main jis din bhula du",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Main%20Jis%20Din%20Bhulaa%20Du%20-%20Jubin%20Nautiyal.mp3"
  },
  {
    name: "malang",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Malang%20-%20Title%20Track.mp3"
  },
  {
    name: "moscow suka",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Moscow%20Suka%20-%20Yo%20Yo%20Honey%20Singh.mp3"
  },
  {
    name: "muqabala",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Muqabla%20-%20Street%20Dancer%203D.mp3"
  },
  {
    name: "paani paani remix",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Paani%20Paani%20Remix%20-%20DJ%20Lemon.mp3"
  },
  {
    name: "pachtaoge",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Pachtaoge%20-%20Atif%20Aslam.mp3"
  },
  {
    name: "pyar tenu karda",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Pyaar%20Tenu%20Karda%20Gabru%20-%20Romy.mp3"
  },
  {
    name: "raatan lambiyan",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Raataan%20Lambiyan%20-%20Shershaah.mp3"
  },
  {
    name: "razzi bolja",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Razzi%20Bolja%20-%20Harjeet%20Deewana.mp3"
  },
  {
    name: "shayad (love aaj kal)",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Shayad%20-%20Love%20Aaj%20Kal.mp3"
  },
  {
    name: "shona shona",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Shona%20Shona%20-%20Tony%20Kakkar.mp3"
  },
  {
    name: "taaron ke shehar me",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Taaron%20Ke%20Shehar%20-%20Neha%20Kakkar.mp3"
  },
  {
    name: "teri choriyaan",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Teri%20Choriyaan%20-%20Guru%20Randhawa.mp3"
  },
  {
    name: "thoda thoda pyar",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Thoda%20Thoda%20Pyaar%20-%20Stebin%20Ben.mp3"
  },
  {
    name: "Tip Tip Barsa Pani",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Tip%20Tip%20-%20Sooryavanshi.mp3"
  },
  {
    name: "titliyaan warga",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Titliaan%20Warga%20Mashup%20-%20DJ%20Shadow%20Dubai.mp3"
  },
  {
    name: "wafa na raas aayi",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Wafa%20Na%20Raas%20Aayee%20-%20Jubin%20Nautiyal.mp3"
  },
  {
    name: "yaar badmash",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Yaar%20Badmash.mp3"
  },
  {
    name: "zara thehro",
    artist: "Natwar BHAI",
    image: "https://github.com/NatwarBHAI/image/raw/main/1.jpg",
    path: "https://github.com/NatwarBHAI/mp3/raw/main/Zara%20Thehro%20-%20Armaan%20Malik.mp3",
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


