// operations
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


// check what operation needs to be done
function operate(operator, a, b) {
    if (operator === '+') {
        add();
    } else if (operator === '-') {
        subtract();
    } else if (operator === '*') {
        multiply();
    } else if (operator === '/') {
        divide();
    }
}


// listen to number clicks
document.getElementById("one").addEventListener("click", function(){ alert("Hello World!"); });
document.getElementById("two").addEventListener("click", function(){ alert("Hello World!"); });
document.getElementById("three").addEventListener("click", function(){ alert("Hello World!"); });
document.getElementById("four").addEventListener("click", function(){ alert("Hello World!"); });
document.getElementById("five").addEventListener("click", function(){ alert("Hello World!"); });
document.getElementById("six").addEventListener("click", function(){ alert("Hello World!"); });
document.getElementById("seven").addEventListener("click", function(){ alert("Hello World!"); });
document.getElementById("eight").addEventListener("click", function(){ alert("Hello World!"); });
document.getElementById("nine").addEventListener("click", function(){ alert("Hello World!"); });
document.getElementById("zero").addEventListener("click", function(){ alert("Hello World!"); });

// listen to operator and other buttons clicks
document.getElementById("clear").addEventListener("click", function(){ alert("Hello World!"); });
document.getElementById("percentage").addEventListener("click", function(){ alert("Hello World!"); });
document.getElementById("divide").addEventListener("click", function(){ alert("Hello World!"); });
document.getElementById("multiply").addEventListener("click", function(){ alert("Hello World!"); });
document.getElementById("subtract").addEventListener("click", function(){ alert("Hello World!"); });
document.getElementById("add").addEventListener("click", function(){ alert("Hello World!"); });
document.getElementById("comma").addEventListener("click", function(){ alert("Hello World!"); });
document.getElementById("equal").addEventListener("click", function(){ alert("Hello World!"); });