var inputNode = Array.from(document.querySelectorAll("input"));
var [usernameNode, emailNode, passwordNode, rePasswordNode] = inputNode;
var messageNode = Array.from(document.querySelectorAll("a"));
var [usernameState, emailState, passwordState, rePasswordState] = messageNode;

const [emailRex, upperRex, numberRex, spaceRex] = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, /[A-Z]/, /[0-9]/, /^\s+$/]
const USERNAME_LENGTH = 5;
const PASSWORD_LENGTH = 6;

usernameNode.addEventListener("blur", usernameValidation);
emailNode.addEventListener("blur", emailValidation);
passwordNode.addEventListener("blur", passwordValidation);
rePasswordNode.addEventListener("blur", rePasswordValidate);

inputNode.forEach(element => {
    element.addEventListener('click', typing);
})

document.querySelector("form").addEventListener("submit",  function(e) {
    e.preventDefault();
})

document.querySelector("Button").addEventListener("click", function (e) {
    if(messageNode.some(element => {
        return element.textContent != "";
    }) ) {
            console.log("cannot send request")
    } else {
        console.log({username: usernameNode.value,
        email: emailNode.value,
        password: passwordNode.value,
        rePassword: rePasswordNode.value});
    }
})

function usernameValidation(e) {
    var username = e.target.value;
    if(username.length < USERNAME_LENGTH) showError(usernameState, "username") 
    else showAccepted(usernameState);
}

function emailValidation(e) {
    var email = e.target.value;
    if(!(emailRex.test(email))) showError(emailState, "email") ;
    else showAccepted(emailState);
}

function passwordValidation(e) {
    var password = e.target.value;
    if(password.length < PASSWORD_LENGTH ||
        !(upperRex.test(password))|| // password contain upper character
        !(numberRex.test(password))|| // password contain number
        (spaceRex.test(password))//password contain white space
        ) showError(passwordState, "password");
    else showAccepted(passwordState);
}

function rePasswordValidate(e) {
    var password = document.getElementById("password").value;
    var rePassword = e.target.value;
    if(rePassword !== password) showError(rePasswordState, "rePassword");
    else showAccepted(rePasswordState);
}

function printError(fieldName) {
    switch (fieldName) {
        case "username":
            return `username must contain at least 5 characters !`;
        case "email":
            return `Email is invalid`;
        case "password":
            return `password must contain at least 5 characters, includes one numberand one upper character `;
        case "rePassword":
            return `Password is not match`;
        default:
            return ;
    }
}

function showError(element, name) {
    element.textContent = printError(name)
    element.classList.add("error");
}

function showAccepted(element) {
    element.classList.remove("error");
    element.textContent = "";
}

function typing(e) {
    e.target.parentElement.querySelector("a").textContent = "";
}