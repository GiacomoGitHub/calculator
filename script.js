// STORE INPUT NUMBER
let inputNumber = "";



/// STORE STORED NUMBER
let storedNumber = "";



// STORE THE OPERATOR
let operator = "";



// STORE RESULT
let result = 0;


// LISTEN TO NUMBER CLICKS AND UPDATE DISPLAY
document.getElementById("one").addEventListener("click", function () { inputNumber += 1; updateDisplay() });
document.getElementById("two").addEventListener("click", function () { inputNumber += 2; updateDisplay() });
document.getElementById("three").addEventListener("click", function () { inputNumber += 3; updateDisplay() });
document.getElementById("four").addEventListener("click", function () { inputNumber += 4; updateDisplay() });
document.getElementById("five").addEventListener("click", function () { inputNumber += 5; updateDisplay() });
document.getElementById("six").addEventListener("click", function () { inputNumber += 6; updateDisplay() });
document.getElementById("seven").addEventListener("click", function () { inputNumber += 7; updateDisplay() });
document.getElementById("eight").addEventListener("click", function () { inputNumber += 8; updateDisplay() });
document.getElementById("nine").addEventListener("click", function () { inputNumber += 9; updateDisplay() });
document.getElementById("zero").addEventListener("click", function () { if (inputNumber === "") { inputNumber = 0; } else { inputNumber += "0"; updateDisplay() } });
document.getElementById("comma").addEventListener("click", function () { inputNumber += "."; updateDisplay() });



// LISTEN TO OPERATOR CLICKS, STORE ITS VALUE, STORES PREVIOUS NUMBER AND RESETS INPUT NUMBER
document.getElementById("percentage").addEventListener("click", function () { operator = "%"; storedNumber = inputNumber; inputNumber = ""; });
document.getElementById("divide").addEventListener("click", function () { operator = "/"; storedNumber = inputNumber; inputNumber = ""; });
document.getElementById("multiply").addEventListener("click", function () { operator = "x"; storedNumber = inputNumber; inputNumber = ""; });
document.getElementById("subtract").addEventListener("click", function () { operator = "-"; storedNumber = inputNumber; inputNumber = ""; });
document.getElementById("add").addEventListener("click", function () { operator = "+"; storedNumber = inputNumber; inputNumber = ""; });



// CLEAR NUMBER AND OPERATOR
document.getElementById("clear").addEventListener("click", function () { inputNumber = ""; storedNumber = ""; operator = ""; updateDisplay()});



// SHOW DATA IN DISPLAY
function updateDisplay () {
    if (inputNumber != "") {
        document.getElementById("display").textContent = inputNumber;
    } else {
        document.getElementById("display").textContent = 0;
    }
}



// OPERATE AND RETURN THE RESULT WHEN CLICK ON "="
document.getElementById("equal").addEventListener("click", function () { operate(operator) });



// CHECK THE OPERATION THAT NEEDS TO BE RUN
function operate() {
    if (operator === '+') {
        add();
    } else if (operator === '-') {
        subtract();
    } else if (operator === 'x') {
        multiply();
    } else if (operator === '/') {
        if (inputNumber === 0) {
            document.getElementById("display").textContent = "ERROR";
        } else {
            divide();
        }
    } else if (operator === '%') {
        percentage();
    }
}



// OPERATE, SHOW RESULT IN DISPLAY, RESET EVERYTHING, MAKE RESULT THE INPUT NUMBER FOR EVENTUAL ADDITIONAL OPERATIONS
function add() {
    result = Number(storedNumber) + Number(inputNumber);
    document.getElementById("display").textContent = result;
    operator = "";
    inputNumber = result;
}

function subtract() {
    result = storedNumber -= inputNumber;
    document.getElementById("display").textContent = result;
    operator = "";
    inputNumber = result;
}

function multiply() {
    result = storedNumber *= inputNumber
    document.getElementById("display").textContent = result;
    operator = "";
    inputNumber = result;
}

function divide() {
    result = storedNumber /= inputNumber
    document.getElementById("display").textContent = result;
    operator = "";
    inputNumber = result;
}

function percentage() {
    result = (inputNumber / 100) * storedNumber;
    document.getElementById("display").textContent = result;
    operator = "";
    inputNumber = result;
}


// BUGS
// addition
// several operations
// several commas

// SOLVED 
// 10% of 100
// division by 0

