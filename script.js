VANTA.TRUNK({
    el: "#your-element-selector",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    chaos: 2.50,
    spacing: -1.70
  });

  VANTA.DOTS({
    el: "#your-element-selector2",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x98465f,
    color2: 0x850ff,
    backgroundColor: 0x222426,
    spacing: 22.00,
    showLines: false
  });

var daq = document.getElementsByTagName('img');


//document.getElementsByClassName('glbodarluna').style.display = 'none';
var imgmas = document.getElementsByTagName('img');
console.log(imgmas.length);
imgmas[2].style.display = 'none';

function backbodar(){
    document.querySelector('button').style.display = 'none';
    imgmas[3].style.opacity = '0';
    imgmas[2].style.display = 'block';
    setTimeout(() => {
      imgmas[2].style.display = 'none';
    }, 3900);
    setTimeout(() => {
      imgmas[3].style.opacity = '100';
      document.querySelector('button').style.display = 'block';
    }, 5000);}

/*function backbodar(){
    document.querySelector('button').style.display = 'none';
    imgmas[3].style.opacity = '0';
    imgmas[2].style.display = 'block';
    setTimeout(() => {
      imgmas[3].style.opacity = '100';
      imgmas[2].style.display = 'none';
      document.querySelector('button').style.display = 'block';
    }, 3990);}*/

    var el = document.getElementById('btn-play');
    var playing = false; // текущее состояние плеера

    var player = new Audio('audio.mp3');
    player.preload = "auto";
    player.addEventListener('ended', function(){ // слушаем окончание трека
      el.innerText = "Done";
      playing = false;
    });
    el.addEventListener('click', playPause); // слушаем нажатие на кнопку

    function playPause() {
      if( playing) {
        player.pause();
        //el.innerText = "Paused";
      } else {
        player.play();
        //el.innerText = "Playing..";
      }
      playing = !playing;
    }

    var el2 = document.getElementById('btn-play2');
    var playing2 = false; // текущее состояние плеера

    var player2 = new Audio('audio.mp3');
    player2.preload = "auto";
    player2.addEventListener('ended', function(){ // слушаем окончание трека
      el2.innerText = "Done";
      playing2 = false;
    });
    el2.addEventListener('click', playPause2); // слушаем нажатие на кнопку

    function playPause2() {
      if( playing2) {
        player2.pause();
        el2.innerText = "Пауза";
      } else {
        player2.play();
        el2.innerText = "Нажал..";
      }
      playing2 = !playing2;
    }

