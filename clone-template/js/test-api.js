async function getData() {
    await fetch('./API-FAKE/homeContent.json')
    .then(response => {
        return  response.json()
    })
    .then(data => setHomeContent(data))
    .catch(e => {
        console.log(e)
    }) 

}

getData()

function setHomeContent(data) {
    document.querySelector(".title").innerText=data.title;
    document.querySelector(".above-content").innerText = data.above
    document.querySelector(".below-content").innerText = data.below;
    document.querySelector(".lyrics").innerText = data.lyric
}