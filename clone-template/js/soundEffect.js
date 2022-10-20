var soundOn = document.querySelector(".turn-on")
var soundOff = document.querySelector(".turn-off")
var soundControl = document.getElementById("soundmp3")

soundOff.classList.add("disappear");
function soundOnAction () {
    soundOff.classList.toggle("disappear");
    soundOn.classList.toggle("disappear");
    if(soundOn.classList.contains("disappear")) {
        soundControl.pause()
    } else {
        soundControl.play()
    }
}