var buttonList = document.getElementsByClassName("change-background");
var backgroundList = ["./img/diagoona-bg-1.jpg",
                    "./img/diagoona-bg-2.jpg",
                    "./img/diagoona-bg-3.jpg", ]

function changeBackground(i) {
    document.querySelector("body").style.backgroundImage = `url("${backgroundList[i]}")`
    Array.from(buttonList).forEach(element => {
        element.style.background = "#ffffff80";
    });
    buttonList[i].style.background =  "aliceblue";
    iterator = i;
    console.log(iterator)
}

changeBackground(0);

var iterator = 1;

function backgroundLoop() {
    changeBackground(iterator);
    ++iterator;
    if(iterator > 2) iterator = 0;
}

setInterval(backgroundLoop, 5000);