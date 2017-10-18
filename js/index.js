(function jukebox() {
var audio = document.getElementById('audio');
var play = document.getElementById('play');
var pause = document.getElementById('pause');
var stop = document.getElementById('stop');
var next = document.getElementById('next');
var hitchhiker = document.getElementById('btn3');
var strength = document.getElementById('btn4');
var powderfinger = document.getElementById('btn5');

//var songs = [
 //song1 = [ audio.src = 'audio/hitchhiker.mp3' },
 //song2 = { Title: 'Give Me Strength', Artist: 'Neil Young', src: 'audio/givemestrength.mp3' } ],
 //song3 = { Title: 'Powderfinger',  Artist: 'Neil Young', src: 'audio/powderfinger.mp3' };



//var tracks = [];
//function addTrack() {
  // songs.forEach(src => tracks.push(track));
 //};

//songtext.innerHTML = songs[0].Title + ' by ' + songs[0].Artist;

function playsong() {
  audio.play();
}

function playsong1() {

  audio.src = 'audio/hitchhiker.mp3';
  audio.play();
  document.getElementById('songtext').innerHTML = 'Hitchhiker By Neil Young';
};

function playsong2() {
  audio.src = 'audio/givemestrength.mp3';
  audio.play();
  document.getElementById('songtext').innerHTML = 'Give Me Strength by Neil Young';
};

function playsong3() {
audio.src = 'audio/powderfinger.mp3';
  audio.play();
  document.getElementById('songtext').innerHTML = 'Powderfinger by Neil Young';
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

//function nextsong() {
 //var value = function() {
  // songs[currentValue + 1]
 //}
 //audio.pause();
// }

//if ( audio.src = 'audio/hitchhiker.mp3' ) {
//  function() {playsong2} } else if ( audio.src = 'audio/givemestrength.mp3' ) {
//  function() {playsong3} } else if ( audio.src = 'audio/powderfinger.mp3')
//  { function() {playsong1} };
//};


 //audio.src = songs[1].src;

  //var currentNum = (counter + 1);
    //songs[currentNum].src;
    //audio.play();
    //songtext.innerHTML = songs[1].Title + ' by ' + songs[1].Artist;

  //};
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
//next.addEventListener('click', nextsong);
hitchhiker.addEventListener('click', playsong1);
strength.addEventListener('click', playsong2);
powderfinger.addEventListener('click', playsong3);

})()
