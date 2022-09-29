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
    imgmas[3].style.display = 'none';
    imgmas[2].style.display = 'block';
    setTimeout(() => {
      imgmas[3].style.display = 'block';
      imgmas[2].style.display = 'none';
      document.querySelector('button').style.display = 'block';
    }, 4000);}