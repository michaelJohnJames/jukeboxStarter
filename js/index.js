(function jukebox() {
  var audio = document.getElementById('audio');
  var play = document.getElementById('play');
  var pause = document.getElementById('pause');
  var stop = document.getElementById('stop');
  var hitchhiker = document.getElementById('btn3');
  var strength = document.getElementById('btn4');
  var powderfinger = document.getElementById('btn5');

  document.getElementById('songtext').innerHTML = 'Hitchhiker By Neil Young'

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

  play.addEventListener('click', playsong);
  pause.addEventListener('click', pausesong);
  stop.addEventListener('click', stopsong);
  hitchhiker.addEventListener('click', playsong1);
  strength.addEventListener('click', playsong2);
  powderfinger.addEventListener('click', playsong3);
  duration.addEventListener('load', duration);

})()
