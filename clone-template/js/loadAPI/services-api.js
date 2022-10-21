async function getData(URL, callback) {
    await fetch(URL)
    .then(response => {
        return  response.json()
    })
    .then(data => {
        callback(data.card)
    })
    .catch(e => {
        console.log(e)
    }) 

}

function setServices(data) {
    let titles = document.getElementsByClassName("title");
    let contents = document.getElementsByClassName("content");
    console.log(data)
    for(i in data) {
        titles[i].innerText = data[i].title;
        contents[i].innerText = data[i].text;
    }
}

getData("../../API-FAKE/servicesContent.json", setServices)