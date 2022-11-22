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

function notinone(){
    document.getElementById('notification').style.display = 'none';
}

var daq = document.getElementsByTagName('img');


//document.getElementsByClassName('glbodarluna').style.display = 'none';
var imgmas = document.getElementsByTagName('img');
console.log(imgmas.length);
imgmas[3].style.display = 'none';

function backbodar(){
    document.querySelector('button').style.display = 'none';
    imgmas[4].style.opacity = '0';
    imgmas[3].style.display = 'block';
    setTimeout(() => {
      imgmas[3].style.display = 'none';
    }, 3900);
    setTimeout(() => {
      imgmas[4].style.opacity = '100';
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

    var parallx = null;
var demoCount = 0;
function Parallx() {
    var self = this;
    $("body").mousemove(function(e) {

        parallax.mouseX(e.pageX);
        parallax.mouseY(e.pageY);

    });

    self.sensitivityMultiplier = ko.observable(0.03);
    self.wrapperOffset = $('#parallxWrapper').offset();
    self.wrapperCenter = {
        x:ko.computed(function() {return self.wrapperOffset.left + ($('#parallxWrapper').width()/2 )}, this),
        y:ko.computed(function() {return self.wrapperOffset.top + ($('#parallxWrapper').height()/2 )}, this)
        
    };
    self.mouseX = ko.observable(0);
    self.mouseY = ko.observable(0);
    self.relativeMouse = {
        x:ko.computed(function() {return(self.mouseX() - self.wrapperCenter.x()) * self.sensitivityMultiplier()}, this),
        y:ko.computed(function() {return((self.mouseY() - self.wrapperCenter.y()) * -1) * self.sensitivityMultiplier()}, this)
    };
    self.origin = {
        x:ko.computed(function() {return ((self.mouseX())/$(window).width()) * 100}, this),
        y:ko.computed(function() {return ((self.mouseY())/$(window).height()) * 100}, this)
    };
}
$(document).ready(function(){
    parallax = new Parallx();
    ko.applyBindings(parallax);

    setInterval(function(){
        if(demoCount < 130){
            parallax.mouseX(parallax.mouseX() + 10);
            demoCount+=1;
        }
    }, 40);
})