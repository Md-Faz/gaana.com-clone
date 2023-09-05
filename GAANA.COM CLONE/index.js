// SLIDER JS ANIMATIONS
const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

// PLAY MUSIC OF CLICKED ALBUM
for (var i = 0; i < 27; i++) {
  document.querySelectorAll(".album")[i].addEventListener("click", function () {

    //getting innner text of clicked album
    let songName = this.querySelector("div.album > h4").innerText;

    //playing song of the album clicked
    let playThisSong = "assets/songs/" + songName + ".mp3";
    let playSong = new Audio(playThisSong);
    playSong.play();

    //selecting the music player name and image and replacing with the selected album name and img
    let musicPlayerText1 = document.querySelector(".music-name strong");
    let musicPlayerText2 = document.querySelector(".music-name small");
    musicPlayerText1.innerHTML = songName;
    musicPlayerText2.innerHTML = songName;
    let changeImg = "assets/images/" + songName + ".jpg";
    document.querySelector(".music-icon img").src = changeImg;

    //hiding the play btn and showing the pause btn
    document.querySelector(".red-play-btn").style.display = "none"
    document.querySelector(".red-pause-btn").style.display = "block"

    //adding the play and pause audio function on click of play and pause btn
    document.querySelector(".red-pause-btn").addEventListener("click", function pauseAudio() {
      playSong.pause();
      document.querySelector(".red-pause-btn").style.display = "none"
      document.querySelector(".red-play-btn").style.display = "block"
    })
    document.querySelector(".red-play-btn").addEventListener("click", function playAudio() {
      playSong.play();
      document.querySelector(".red-play-btn").style.display = "none"
      document.querySelector(".red-pause-btn").style.display = "block"
    })

    //pause previous audio and play the clicked album audio
  });
}

