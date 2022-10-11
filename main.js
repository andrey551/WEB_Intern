import Validator from "./Validator.js";
var [usernameNode, emailNode, passwordNode, rePasswordNode] = Array.from(document.querySelectorAll("input"));
var button = document.getElementsByTagName("Button")[0];

var username = Validator([{name: "check-length",param: [usernameNode, 5]}]);

var email = Validator([{name:"check-regex", param:[emailNode, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "email-format"]}]);
var password = Validator([{name: "check-regex", param:[passwordNode, /^\s+$/, "white-space"]},
                                {name: "check-regex", param:[passwordNode, /[A-Z]/, "upper-letter"]},
                                {name: "check-regex", param:[passwordNode, /[0-9]/, "number-letter"]}]);


var rePassword = Validator([{name: "check-equal", param:[rePasswordNode, passwordNode.value]}]);
usernameNode.addEventListener('blur', username.execute);
usernameNode.addEventListener('click',onType )
emailNode.addEventListener("blur", email.execute);
emailNode.addEventListener('click',onType )
passwordNode.addEventListener('blur', password.execute);
passwordNode.addEventListener('click',onType )
rePasswordNode.addEventListener('blur', rePassword.execute )
rePasswordNode.addEventListener('click',onType )
button.addEventListener('click', function(e) {
    if((username.checkValidate() && email.checkValidate() && password.checkValidate() && rePassword.checkValidate())) {
        console.log({username: usernameNode.value,
                    email: emailNode.value,
                    password: passwordNode.value,
                    rePassword: rePasswordNode.value});
        
    } else {
        e.preventDefault()

    }
})

function onType(e) {
    e.target.parentElement.querySelector("a").textContent = ""; 
}









