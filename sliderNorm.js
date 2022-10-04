var buttonRightEl = document.getElementById('left');
var buttonLeftEl = document.getElementById('right');
var buttonStartEl = document.getElementById('play');
var buttonStopEl = document.getElementById('stop');
var dots = document.getElementsByClassName('dot');
var intervalID;
var x = 0;
var i = 0;
var timer;
buttonLeftEl.onclick = sliderLeft;
buttonRightEl.onclick = sliderRight;
buttonStartEl.onclick = sliderStart;
buttonStopEl.onclick = sliderStop;

function sliderLeft() {
    var sliderBoxEl = document.getElementById('slider-box');
    x = x - 280;
    if (x < -2520) {
        x = 0;
    }
    var i = Math.trunc(-x/280);
    dots[i].className += ' active';
    dots[i-1].className = dots[i-1].className.replace(' active', '');
    sliderBoxEl.style.left = x + 'px';
}
function sliderRight() {
    var sliderBoxEl = document.getElementById('slider-box');
    x = x + 280;
    if (x > 0) {
        x = 0;
    }
    sliderBoxEl.style.left = x + 'px';
}
function sliderAuto() {
    var sliderBoxEl = document.getElementById('slider-box');
        x = x - 280;
        if (x < -2212) {
            x = 0;
            clearTimeout(timer);
        }
    sliderBoxEl.style.left = x + 'px';
    sliderStart();
}
function sliderStart() {
    timer = setTimeout(sliderAuto, 1800);
}
function sliderStop() {
    clearTimeout(timer);
}
