var URL = 'https://jsonplaceholder.typicode.com/todos'
var methodList = {
    get: "GET",
    post: "POST",
    put: "PUT",
    patch: "PATCH",
    delete: "DELETE"

}

async function actionTodo(strMethod, todo, position) {
        const result = await fetch((position === undefined) ? URL : URL + `/${position}`, {
            method: strMethod,
            body: JSON.stringify(todo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })

        return result;
}

async function filterTodo(key, value) {
    await fetch(URL +  `?${key}=${value}`)
    .then ((response) => {
        return response.json()
    })
    .then ((json) => {
        console.log(json)
    })
    .catch((error) => {
        console.error(error);
    })
}

actionTodo(methodList.get)
    .then(result => {
        return result.json()
    })
    .then(json => {
        var arr = json.filter(function(element) {
            return element.id > 50
        })
        console.log(arr)
    })
    .catch(error => {
        console.error(error);
    })


// Working with map
function map2(callback) {
    var result = new Array();

    this.forEach(element => {
        result.push(callback(element))
    });

    return result;
}

function filter2(callback) {
    var result = new Array();

    this.forEach(element => {
        if(callback(element)) {
            result.push(element)
        }
    })
}

function find2(callback) {
    this.forEach(element => {
        if(callback(element)) {
            return element
        }
    })
}

function reduce2(callback, initValue) {
    if(initValue == undefined) {
        initValue = this[0];
        this.shift();
    }
    this.forEach(element => {
        initValue = callback(initValue, element);
    })

    return initValue;
}

function some2(callback) {
    this.forEach(element => {
        if(callback(element)) return true;
    })
    return false;
}

function every2(callback) {
    this.forEach(element => {
        if(!callback(element)) return false;
    })
    return true;
}

Array.prototype.reduce2 = reduce2


var arr = new Array(2, 3);
console.log(arr.reduce(function(initValue, element) {
        return initValue + element 
}, 0))
