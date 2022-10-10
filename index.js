var usernameNode = document.getElementById("username");
usernameNode.addEventListener('blur', usernameValidation);
usernameNode.addEventListener('click', onTyping);
var emailNode = document.getElementById("email")
emailNode.addEventListener('blur', emailValidation);
emailNode.addEventListener('click', onTyping)
var passwordNode = document.getElementById("password");
passwordNode.addEventListener("blur", passwordValidation);
passwordNode.addEventListener('click', onTyping);
var rePasswordNode = document.getElementById("rePassword");
rePasswordNode.addEventListener("blur", rePasswordValidate);
rePasswordNode.addEventListener("click", onTyping);


document.getElementsByTagName("form")[0].onsubmit =  function(e) {
    e.preventDefault();
}

document.getElementsByTagName("Button")[0].addEventListener('click', sendRequest);
function sendRequest(e) {
    if(usernameNode.value == "" ||
        emailNode.value == ""||
        passwordNode.value == ""||
        rePasswordNode.value != passwordNode.value ||
        document.getElementsByClassName("username-state")[0].textContent != "" ||
        document.getElementsByClassName("email-state")[0].textContent != "" ||
        document.getElementsByClassName("password-state")[0].textContent != "" ||
        document.getElementsByClassName("rePassword-state")[0].textContent != "" ) {
            console.log("cannot send request")
    } else {
        console.log({username: usernameNode.value,
        email: emailNode.value,
        password: passwordNode.value,
        rePassword: rePasswordNode.value});
 //       document.getElementsByTagName("form")[0].submit();
    }
}


function usernameValidation(e) {
    var username = e.target.value;
    var usernameState = document.getElementsByClassName("username-state")[0];
    if(username.length < 5) showError(usernameState, "username") 
    else showAccepted(usernameState);
}

function emailValidation(e) {
    var email = e.target.value;
    var emailState = document.getElementsByClassName("email-state")[0];
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) showError(emailState, "email") ;
    else showAccepted(emailState);
}

function passwordValidation(e) {
    var password = e.target.value;
    var passwordState = document.getElementsByClassName("password-state")[0];
    if(password.length < 6 ||
        !(/[A-Z]/.test(password))|| // password contain upper character
        !(/[0-9]/.test(password))|| // password contain number
        (/^\s+$/.test(password))//password contain white space
        ) showError(passwordState, "password");
    else showAccepted(passwordState);
}

function rePasswordValidate(e) {
    var password = document.getElementById("password").value;
    if(!password) return false;
    else {
        var rePassword = e.target.value;
        console.log(rePassword)
        var rePasswordState = document.getElementsByClassName("rePassword-state")[0];
        if(rePassword !== password) showError(rePasswordState, "rePassword");
        else showAccepted(rePasswordState);
    }

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
    element.classList.add("accepted");
    element.textContent = "";
}

function onTyping(e) {
    e.target.parentElement.querySelector("a").textContent = "";
}