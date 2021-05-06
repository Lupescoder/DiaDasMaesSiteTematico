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
    delay: 300,
    duration: 500,
    reset: false,
    distance: '50px'
});
ScrollReveal().reveal('.texto', {
    delay: 500,
    duration: 500,
    reset: false,
    distance: '50px'
});