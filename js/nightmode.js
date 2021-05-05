function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

}
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function Functionvideo() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}
/* Are de scroll*/

ScrollReveal().reveal('.clearfix', {
    delay: 500,
    duration: 500,
    reset: true,
    distance: '5px'
});
ScrollReveal().reveal('.texto', {
    delay: 900,
    duration: 500,
    reset: true,
    distance: '5px'
});