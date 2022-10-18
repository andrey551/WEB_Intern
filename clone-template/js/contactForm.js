var inputName = document.getElementById("email");
var emailRex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
inputName.addEventListener("blur", function (e) {
    if(!emailRex.test(e.target.value)) {
        inputName.setCustomValidity("Email is invalid!")
    }
})
