export default function Validator(list) {
    var methodList = list;
    var isValidated = true;
    function printMethod() {
        console.log(methodList);
    }
    function execute() {
        var matchAllMethod = true;
        methodList.forEach(element => {
            switch(element.name) {
                case "check-length":
                    if(!checkLength(element.param[0], element.param[1])) {
                        matchAllMethod = false;
                    }
                    break;
                case "check-regex":
                    if(!checkRegex(element.param[0], element.param[1], element.param[2])) {
                        matchAllMethod = false;
                    }
                    break;
                case "check-equal":
                    if(!checkEqual(document.getElementById("rePassword"), element.param[1])) {
                        matchAllMethod = false;
                    }
                    break;
                default:
                    break;
            }
        });
        return matchAllMethod;
    }

    function checkValidate() {
        isValidated = execute();
        return isValidated;
    }

    function checkLength(nodeElement, length) {
        if(nodeElement.value.length < length) {
            nodeElement.parentElement.querySelector("a").textContent = 
                `Độ dài của trường tối thiểu là ${length}`;
                return false;
        } else {
            nodeElement.parentElement.querySelector("a").textContent = "";
        }
    
        return true;
    }
    
    function checkRegex(nodeElement, rex, rule) {
        function contentError(rule) {
            switch(rule) {
                case "white-space":
                    return `Trường không chấp nhận ký tự trống`
                case "upper-letter":
                    return `Trường bắt buộc phải chứa ký tự in hoa`;
                case "number-letter":
                    return `Trường bắt buộc phải chứa chữ số`;
                case "email-format":
                    return `Địa chỉ email không khả dụng!`
                default:
                    return ""
            }
        }
        if(!rex.test(nodeElement.value)) {
            nodeElement.parentElement.querySelector("a").textContent = contentError(rule);
            return false;
        } else {
            nodeElement.parentElement.querySelector("a").textContent = "";
        }
    
        return true;
    }
    
    function checkEqual(nodeElement, toCompare) {
        console.log(document.getElementById("rePassword").value == document.getElementById("password").value)
        if(document.getElementById("rePassword").value == document.getElementById("password").value) {
            nodeElement.parentElement.querySelector("a").textContent = "";
            return true;
        }

        nodeElement.parentElement.querySelector("a").textContent = "Trường không trùng với dữ liệu đã nhập!";
        return false;
    }

    return {execute, checkValidate};
}