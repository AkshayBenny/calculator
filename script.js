var elementIsClicked = false; 

function clickHandler(){ 
  elementIsClicked = true;
}


for (var i = 0; i < 11; i++) {
    var element = document.querySelectorAll('.number')[i]; 
    element.addEventListener('click', clickHandler); 
}


if (document.querySelector(".btn").value() === "add" ) {
    function add(a,b) {
        op = a + b;
        return operator = add ;
    }
} else if (document.querySelector(".btn").value() === "subtract" ){
    function sub(a,b) {
        op = a - b ;
        return operator = sub ;
    }
} else if (document.querySelector(".btn").value() === "multiply" ){
    function multiply(a,b) {
        op = a * b ;
        return operator = multiply
    }
} else if (document.querySelector(".btn").value() === "divide" ){
    function divide(a,b) {
        op = a / b ;
        return operator = divide;
    }
} else if (document.querySelector(".btn").value() === "mod" ){
    function mod(a,b) {
        op = a % b ;
        return operator = mod;
    }    
} else {
    return null;
}



function output(a,b,operator) {
    operator(a,b);
    return op;
}

document.querySelector(".current-operand p").innerHTML = "op";