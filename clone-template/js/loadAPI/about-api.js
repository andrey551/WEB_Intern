async function getData(URL, callback) {
    await fetch(URL)
    .then(response => {
        return  response.json()
    })
    .then(data => {
        console.log(data)
        callback(data.card)
    })
    .catch(e => {
        console.log(e)
    }) 

}

var about = function setAbout (data) {
    data.forEach(element => {
        document.querySelector(".option").appendChild(setmediaElement(element))
    });
}

function setmediaElement(data) {
    let classIcons = data.icon
    const classlist = classIcons.split(" ")
    let divTag = document.createElement("div");
    divTag.classList.add("media", "my-3")
    divTag.appendChild(setIconElement(classlist))
    divTag.appendChild(setTextElement(data.text))
    return divTag
}

function setIconElement(icon) {
    let divTag = document.createElement("div")
    console.log(icon)
    divTag.classList.add("icon")
    let iconTag = document.createElement("i")
    icon.forEach(e => {
        iconTag.classList.add(e)
    })
    divTag.appendChild(iconTag)
    return divTag;
}

function setTextElement (text) {
    let divTag = document.createElement("div")
    divTag.classList.add("text")
    let textTag = document.createElement("p")
    textTag.innerText = text;
    divTag.appendChild(textTag)
    return divTag;
}
getData("../../API-FAKE/aboutContent.json", about)