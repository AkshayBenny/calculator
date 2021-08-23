var operator, calculated_value,a = 0, b = 0;


/*--------------------GETTING VALUES OF THE VARIABLES-------------------------*/

function a_value() {
    for 
}



/*--------------------OPERATION FUNCTIONS-------------------------*/
function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function mod(a,b) {
    return a%b;
}


/*--------------------CALCULATION-------------------------*/

/*---------------------*/
/*TO FIND OPERATION*/
/*---------------------*/
function operator_finder() {
    for (var i = 0 ; i <=5 ; i++) {
        var btn_value = document.querySelectorAll(".sign")[i].value;
        if (btn_value == "add"){
            return operator = add;
        } else if (btn_value == "subtract"){
            return operator = subtract;
        } else if (btn_value == "multiply"){
            return operator = multiply;
        } else if (btn_value == "divide"){
            return operator = divide;
        } else if (btn_value == "mod"){
            return operator = mod;
        } else {
            return null;
        }

    }
    
    
}


/*---------------------*/
/*FINAL OUTPUT*/
/*---------------------*/

function output(a,b,operator) {
    return calculated_value = operator(a,b);
}


/*------------------OUTPUT DISPLAYING-------------------------*/
document.querySelector(".current-operand p").innerHTML = "calculated_value";