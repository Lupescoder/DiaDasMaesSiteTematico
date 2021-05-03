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