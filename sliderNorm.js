var buttonLeftEl = document.getElementById('slider-left');
var buttonRightEl = document.getElementById('slider-right');
var buttonStartEl = document.getElementById('slider-start');
var buttonStopEl = document.getElementById('slider-stop');
var intervalID;
var x = 0;
var timer;
buttonLeftEl.onclick = sliderLeft;
buttonRightEl.onclick = sliderRight;
buttonStartEl.onclick = sliderStart;
buttonStopEl.onclick = sliderStop;

function sliderLeft() {
    var sliderBoxEl = document.getElementById('slider-box');
    x = x - 300;
    if (x < -2212) {
        x = 0;
    }
    sliderBoxEl.style.left = x + 'px';
}
function sliderRight() {
    var sliderBoxEl = document.getElementById('slider-box');
    x = x + 300;
    if (x > 0) {
        x = 0;
    }
    sliderBoxEl.style.left = x + 'px';
}
function sliderAuto() {
    var sliderBoxEl = document.getElementById('slider-box');
        x = x - 300;
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
