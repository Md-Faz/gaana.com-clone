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


//FIRST MAKE ALL SONG NAMES AND IMAGE NAMES SAME 
//THEN ADD EVENT LISTENER TO THE ALBUM CLICKED AND GET THE INNER HTML OR THE NAME OF THE SONG
//WITH THE NAME OF THE SONG FIRST UPDATE THE IMAGE AND DURATION OF SONG IN THE PLAYER
//THEN WITH THE NAME OF THE SONG PLAY THE SONG 
//ADD THE PLAY PAUSE FUNCTIONS ON CLICK OF THE PLAY PAUSE BTN IN PLAYER


// for (var i = 0; i < 27; i++) {
//   document.querySelectorAll(".album")[i].addEventListener("click", function () {
//     var selectedSong = document.querySelector("div.album > h4").innerHTML;
//   })
// }

// for (var i = 0; i < 27; i++) {
//   document.querySelectorAll(".album")[i].addEventListener("click", function () {
   
//     let songName = this.querySelector("div.album > h4").innerText;
//     let playThisSong = "assets/songs/" + songName + ".mp3";
//     var playSong = new Audio(playThisSong);
//     playSong.play();

//   })
// }



// var playSong = new Audio("assets/songs/Dooriyan.mp3");
// playSong.play();


for (var i = 0; i < 27; i++) {
  document.querySelectorAll(".album")[i].addEventListener("click", function () {
    let songName = this.querySelector("div.album > h4").innerText;
    let playThisSong = "assets/songs/" + songName + ".mp3";
    var playSong = new Audio(playThisSong);
    playSong.play();
  })
}

