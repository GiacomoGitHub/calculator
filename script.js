// OPERATIONS
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


// CHECK THE OPERATION THAT NEEDS TO BE RUN
function operate(operator, a, b) {
    if (operator === '+') {
        add();
    } else if (operator === '-') {
        subtract();
    } else if (operator === 'x') {
        multiply();
    } else if (operator === '/') {
        divide();
    }
}


// STORE WHAT HAS TO APPEAR IN DISPLAY
let displayValue = "";

// LISTEN TO NUMBER CLICKS
document.getElementById("one").addEventListener("click", function () { displayValue += 1});
document.getElementById("two").addEventListener("click", function () { displayValue += 2});
document.getElementById("three").addEventListener("click", function () { displayValue += 3});
document.getElementById("four").addEventListener("click", function () { displayValue += 4});
document.getElementById("five").addEventListener("click", function () { displayValue += 5});
document.getElementById("six").addEventListener("click", function () { displayValue += 6});
document.getElementById("seven").addEventListener("click", function () { displayValue += 7});
document.getElementById("eight").addEventListener("click", function () { displayValue += 8});
document.getElementById("nine").addEventListener("click", function () { displayValue += 9});
document.getElementById("zero").addEventListener("click", function () { displayValue += 0});


// LISTEN TO OPERATOR CLICKS
document.getElementById("percentage").addEventListener("click", function () { displayValue += " % "});
document.getElementById("divide").addEventListener("click", function () { displayValue += " / "});
document.getElementById("multiply").addEventListener("click", function () { displayValue += " x "});
document.getElementById("subtract").addEventListener("click", function () { displayValue += " - "});
document.getElementById("add").addEventListener("click", function () { displayValue += " + "});


// CLEAR DISPLAY
document.getElementById("clear").addEventListener("click", function () { displayValue = ""});