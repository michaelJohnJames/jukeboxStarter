
var audio = document.getElementById('audio');
var play = document.getElementById('play');
var pause = document.getElementById('pause');
var stop = document.getElementById('stop');
var next = document.getElementById('next');
var hitchhiker = document.getElementById('btn3');

var songs = [
 song1 = { Title: 'Powderfinger',  Artist: 'Neil Young', src: 'audio/powderfinger.mp3' },
 song2 = { Title: 'Hitchhiker', Artist: 'Neil Young', src: 'audio/hitchhiker.mp3' },
 song3 = { Title: 'Give Me Strength', Artist: 'Neil Young', src: 'audio/givemestrength.mp3'} ];

songtext.innerHTML = songs[0].Title + ' by ' + songs[0].Artist;

function playsong() {
  audio.play();
};

function pausesong() {
  audio.pause();
};

function stopsong() {
 audio.pause();
 audio.currentTime = 0;
};

function volume() {
  audio.volume;
}

function nextsong() {
 //var value = function() {
  // songs[currentValue + 1]
 //}
 audio.pause();
 audio.currentTime = 0;
 audio.src = songs[1].src;

  //var currentNum = (counter + 1);
    //songs[currentNum].src;
    audio.play();
    songtext.innerHTML = songs[1].Title + ' by ' + songs[1].Artist;

  };
 //function (){
   //for (let i = 0; i < songs.length; i++) {
   //audio.src( songs[i+1].src );
 //} }

 //function hitchhiker() {
//   audio.pause();
//   audio.currentTime = 0;
//   audio.src = "audio/hitchhiker.mp3";
//   songtext.innerHTML = "Hitchhiker by Neil Young";
//   audio.play();
// }


play.addEventListener('click', playsong);
pause.addEventListener('click', pausesong);
stop.addEventListener('click', stopsong);
next.addEventListener('click', nextsong);
//hitchhiker.addEventListener('click', hitchhiker)
