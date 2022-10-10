function Validator() {
    var method = []
    var isValidated;
    function execute() {
        var matchAllMethod = true;
        method.forEach(element => {
            if(!element()) matchAllMethod = false;
        });

        return matchAllMethod;
    }

    function checkValidate() {
        isValidated = execute();
    }
}

function checkLength(nodeElement, length) {
    if(nodeElement.value.length < length) {
        nodeElement.parentElement.querySelector("a").textContent = 
            `Độ dài của trường tối thiểu là ${length}`;
    }
}

function checkRegex(nodeElement, rex, rule) {
    if(!rex.test(nodeElement.value)) {
        nodeElement.parentElement.querySelector("a").textContent = contentError(rule);
        return false;
    } 
    return true;
}

function contentError(rule) {
    switch(rule) {
        case "white-space":
            return `Trường không chấp nhận ký tự trống`
        case "upper-letter":
            return `Trường bắt buộc phải chứa ký tự in hoa`;
        case "number-letter":
            return `Trường bắt buộc phải chứa chữ số`;
        default:
            return ""
    }
}