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
        return a + b ;
    }
} else if (document.querySelector(".btn").value() === "subtract" ){
    function sub(a,b) {
        return a - b ;
    }
} else if (document.querySelector(".btn").value() === "multiply" ){
    function multiply(a,b) {
        return a * b ;
    }
} else if (document.querySelector(".btn").value() === "divide" ){
    function divide(a,b) {
        return a / b ;
    }
} else if (document.querySelector(".btn").value() === "mod" ){
    function mod(a,b) {
        return a % b ;
    }    
} 



function output(a,b,operator) {
    return operator(a,b);
}