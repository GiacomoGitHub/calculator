

// STORE WHAT HAS TO APPEAR IN DISPLAY
// let displayValue = "";


// STORE NUMBER
let number = "";


// STORE THE OPERATOR
let operator = "";


// LISTEN TO NUMBER CLICKS AND UPDATE DISPLAY
document.getElementById("one").addEventListener("click", function () { number += 1; updateDisplay()});
document.getElementById("two").addEventListener("click", function () { number += 2; updateDisplay()});
document.getElementById("three").addEventListener("click", function () { number += 3; updateDisplay()});
document.getElementById("four").addEventListener("click", function () { number += 4; updateDisplay()});
document.getElementById("five").addEventListener("click", function () { number += 5; updateDisplay()});
document.getElementById("six").addEventListener("click", function () { number += 6; updateDisplay()});
document.getElementById("seven").addEventListener("click", function () { number += 7; updateDisplay()});
document.getElementById("eight").addEventListener("click", function () { number += 8; updateDisplay()});
document.getElementById("nine").addEventListener("click", function () { number += 9; updateDisplay()});
document.getElementById("zero").addEventListener("click", function () { number += 0; updateDisplay()});


// LISTEN TO OPERATOR CLICKS AND STORE IT IN VAR OPERATOR
document.getElementById("percentage").addEventListener("click", function () { operator = "%";  });
document.getElementById("divide").addEventListener("click", function () { operator = "/" });
document.getElementById("multiply").addEventListener("click", function () { operator = "x" });
document.getElementById("subtract").addEventListener("click", function () { operator = "-" });
document.getElementById("add").addEventListener("click", function () { operator = "+" });


// CLEAR DISPLAY
document.getElementById("clear").addEventListener("click", function () { number = ""; updateDisplay()});


// SHOW DATA IN DISPLAY
function updateDisplay () {
    document.getElementById("display").textContent = number;
}


// OPERATE AND RETURN THE RESULT WHEN CLICK ON "="
document.getElementById("equal").addEventListener("click", operate());


// CHECK THE OPERATION THAT NEEDS TO BE RUN
function operate(operator) {
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


// OPERATE AND SHOW RESULT
function add(number, b) {
    document.getElementById("display").textContent = number += b;
}

function subtract(number, b) {
    document.getElementById("display").textContent = number -= b;
}

function multiply(number, b) {
    document.getElementById("display").textContent = number *= b;
}

function divide(number, b) {
    document.getElementById("display").textContent = number /= b;
}