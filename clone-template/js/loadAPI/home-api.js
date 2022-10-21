async function getData(URL, callback) {
    await fetch(URL)
    .then(response => {
        return  response.json()
    })
    .then(data => {
        console.log(data)
        callback(data)
    })
    .catch(e => {
        console.log(e)
    }) 

}



var setHome= function setHomeContent(data) {
    document.querySelector(".title").innerText=data.title;
    document.querySelector(".above-content").innerText = data.above
    document.querySelector(".below-content").innerText = data.below;
    document.querySelector(".lyrics").innerText = data.lyric
}
getData('./API-FAKE/homeContent.json', setHome)