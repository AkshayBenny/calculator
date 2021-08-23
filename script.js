var elementIsClicked = false; 

function clickHandler(){ 
  elementIsClicked = true;
}


for (var i = 0; i < 11; i++) {
    var element = document.querySelectorAll('.number')[i]; 
    element.addEventListener('click', clickHandler); 
}



function output(a,b,operator) {
    operator(a,b);
    return op;
}

document.querySelector(".current-operand p").innerHTML = "op";