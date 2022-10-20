var buttonList = document.getElementsByClassName("change-background");
var backgroundList = ["./img/parallaxList/sunrise.jpg",
                    "./img/parallaxList/sunset.jpg",
                    "./img/parallaxList/night.jpg", ]
var currentBackground;
function changeBackground(i) {
    document.querySelector("body").style.backgroundImage = `url("${backgroundList[i]}")`
    Array.from(buttonList).forEach(element => {
        element.style.background = "#ffffff80";
    });
    buttonList[i].style.background =  "aliceblue";
    iterator = i;
}

backgroundLoop();

var iterator = 1;

function backgroundLoop() {
    var currentHour = new Date().getHours();
    if(currentHour < 12) {
        currentBackground = 0;
    } else if(currentHour < 18 ) {
        currentBackground = 1;
    } else {
        currentBackground = 2;
    }
    changeBackground(currentBackground);
    ++iterator;
    if(iterator > 2) iterator = 0;
}

setInterval(backgroundLoop, 3600000);