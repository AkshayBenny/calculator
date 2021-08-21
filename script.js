var elementIsClicked = false; 

function clickHandler(){ 
  elementIsClicked = true;
}


for (var i = 0; i < 11; i++) {
    var element = document.querySelectorAll('.number')[i]; 
    element.addEventListener('click', clickHandler); 
}





function add(a,b) {
    return a + b ;
}

function sub(a,b) {
    return a - b ;
}

function multiply(a,b) {
    return a * b ;
}

function divide(a,b) {
    return a / b ;
}

function mod(a,b) {
    return a % b ;
}



function output(a,b,operator) {
    return operator(a,b);
}