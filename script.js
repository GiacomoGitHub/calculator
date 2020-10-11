// STORE INPUT NUMBER
let inputNumber = "";



/// STORE STORED NUMBER
let storedNumber = "";



// STORE THE OPERATOR
let operator = "";



// STORE RESULT
let result = 0;



// LISTEN TO NUMBER CLICKS AND UPDATE DISPLAY
document.getElementById("one").addEventListener("click", function () { if (inputNumber.length < 7) { inputNumber += 1; updateDisplay() } });
document.getElementById("two").addEventListener("click", function () { if (inputNumber.length < 7) { inputNumber += 2; updateDisplay() } });
document.getElementById("three").addEventListener("click", function () { if (inputNumber.length < 7) { inputNumber += 3; updateDisplay() } });
document.getElementById("four").addEventListener("click", function () { if (inputNumber.length < 7) { inputNumber += 4; updateDisplay() } });
document.getElementById("five").addEventListener("click", function () { if (inputNumber.length < 7) { inputNumber += 5; updateDisplay() } });
document.getElementById("six").addEventListener("click", function () { if (inputNumber.length < 7) { inputNumber += 6; updateDisplay() } });
document.getElementById("seven").addEventListener("click", function () { if (inputNumber.length < 7) { inputNumber += 7; updateDisplay() } });
document.getElementById("eight").addEventListener("click", function () { if (inputNumber.length < 7) { inputNumber += 8; updateDisplay() } });
document.getElementById("nine").addEventListener("click", function () { if (inputNumber.length < 7) { inputNumber += 9; updateDisplay() } });
document.getElementById("zero").addEventListener("click", function () { if (inputNumber === "") { inputNumber = "0"; } else { if (inputNumber.length < 7) inputNumber += "0"; updateDisplay() } });
document.getElementById("comma").addEventListener("click", function () { if (inputNumber.indexOf('.') === -1) { inputNumber += "."; updateDisplay() } });



// LISTEN TO OPERATOR CLICKS, STORE ITS VALUE, STORES PREVIOUS NUMBER AND RESETS INPUT NUMBER
document.getElementById("percentage").addEventListener("click", function () { operator = "%"; storedNumber = inputNumber; inputNumber = ""; });
document.getElementById("divide").addEventListener("click", function () { operator = "/"; storedNumber = inputNumber; inputNumber = ""; });
document.getElementById("multiply").addEventListener("click", function () { operator = "x"; storedNumber = inputNumber; inputNumber = ""; });
document.getElementById("subtract").addEventListener("click", function () { operator = "-"; storedNumber = inputNumber; inputNumber = ""; });
document.getElementById("add").addEventListener("click", function () { operator = "+"; storedNumber = inputNumber; inputNumber = ""; });



// CLEAR NUMBER AND OPERATOR
document.getElementById("clear").addEventListener("click", function () { inputNumber = ""; storedNumber = ""; operator = ""; result = 0; updateDisplay()});



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
    if (operator === "") {
        inputNumber = ""; 
        storedNumber = "";
        document.getElementById("display").textContent = 0;
    } else if (operator === '+') {
        add();
    } else if (operator === '-') {
        subtract();
    } else if (operator === 'x') {
        multiply();
    } else if (operator === '/') {
        if (inputNumber === 0) {
            document.getElementById("display").textContent = "NOPE";
            inputNumber = "";
            storedNumber = "";
            operator = "";
            result = 0;
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
    if (result.toString().length > 10) {
        document.getElementById("display").textContent = "TOO BIG LOL";
        inputNumber = "";
        storedNumber = "";
        operator = "";
        result = 0;
    } else {
        document.getElementById("display").textContent = result;
        operator = "";
        inputNumber = result;
    }
}

function subtract() {
    result = (storedNumber -= inputNumber);
    if (result.toString().length > 10) {
        document.getElementById("display").textContent = "TOO BIG LOL";
        inputNumber = "";
        storedNumber = "";
        operator = "";
        result = 0;
    } else {
        document.getElementById("display").textContent = result;
        operator = "";
        inputNumber = result;
    }
}

function multiply() {
    result = (storedNumber *= inputNumber);
    if (result.toString().length > 10) {
        document.getElementById("display").textContent = "TOO BIG LOL";
        inputNumber = "";
        storedNumber = "";
        operator = "";
        result = 0;
    } else {
        document.getElementById("display").textContent = result;
        operator = "";
        inputNumber = result;
    }
}

function divide() {
    result = (storedNumber /= inputNumber);
    if (result.toString().length > 10) {
        document.getElementById("display").textContent = "TOO BIG LOL";
        inputNumber = "";
        storedNumber = "";
        operator = "";
        result = 0;
    } else {
        document.getElementById("display").textContent = result;
        operator = "";
        inputNumber = result;
    }
}

function percentage() {
    result = Number((inputNumber / 100) * storedNumber);
    document.getElementById("display").textContent = Number(result.toString().substring(0, 3));
    operator = "";
    inputNumber = result;
}




// ----------------------------------------------------- //





// (EXPERIMENTAL) RUNS OPERATIONS
// function add() {
//     result = Number(storedNumber) + Number(inputNumber);
//     if (result.toString().length > 10) {
//         document.getElementById("display").textContent = "TOO BIG LOL";
//         inputNumber = "";
//         storedNumber = "";
//         operator = "";
//         result = 0;
//     } else {
//         document.getElementById("display").textContent = result;
//         operator = "";
//         inputNumber = "";
//         storedNumber = result;
//     }
// }

// function subtract() {
//     result = (storedNumber -= inputNumber);
//     if (result.toString().length > 10) {
//         document.getElementById("display").textContent = "TOO BIG LOL";
//         inputNumber = "";
//         storedNumber = "";
//         operator = "";
//         result = 0;
//     } else {
//         document.getElementById("display").textContent = result;
//         operator = "";
//         inputNumber = "";
//         storedNumber = result;
//     }
// }

// function multiply() {
//     if (inputNumber != "") {
//         result = (storedNumber *= inputNumber);
//     } else if (inputNumber === "") {
//         result = (storedNumber *= 1)
//     }
//     if (result.toString().length > 10) {
//         document.getElementById("display").textContent = "TOO BIG LOL";
//         inputNumber = "";
//         storedNumber = "";
//         operator = "";
//         result = 0;
//     } else {
//         document.getElementById("display").textContent = result;
//         operator = "";
//         inputNumber = "";
//         storedNumber = result;
//     }
// }

// function divide() {
//     result = (storedNumber /= inputNumber);
//     if (result.toString().length > 10) {
//         document.getElementById("display").textContent = "TOO BIG LOL";
//         inputNumber = "";
//         storedNumber = "";
//         operator = "";
//         result = 0;
//     } else {
//         document.getElementById("display").textContent = result;
//         operator = "";
//         inputNumber = "";
//         storedNumber = result;
//     }
// }

// function percentage() {
//     result = Number((inputNumber / 100) * storedNumber);
//     document.getElementById("display").textContent = Number(result.toString().substring(0, 3));
//     operator = "";
//     inputNumber = "";
//     storedNumber = result;
// }



// // (EXPERIMENTAL) SHOWS RESULT WHEN CLICK ON =
// document.getElementById("equal").addEventListener("click", function () { 
//     document.getElementById("display").textContent = result; });



// // (EXPERIMENTAL) LISTEN TO OPERATOR CLICK AND RUNS OPERATION
// document.getElementById("add").addEventListener("click", function () { 
//     if (storedNumber === "") { operator = "+"; storedNumber = inputNumber; inputNumber = ""; 
// } else if (storedNumber != "") { operator = "+"; result = storedNumber = Number(storedNumber) + Number(inputNumber); inputNumber = ""; document.getElementById("display").textContent = storedNumber;}
// });
// document.getElementById("subtract").addEventListener("click", function () { 
//     if (storedNumber === "") { operator = "-"; storedNumber = inputNumber; inputNumber = ""; 
// } else if (storedNumber != "") { operator = "-"; storedNumber = Number(storedNumber) - Number(inputNumber); inputNumber = ""; document.getElementById("display").textContent = storedNumber;}
// });
// document.getElementById("divide").addEventListener("click", function () { 
//     if (storedNumber === "") { operator = "/"; storedNumber = inputNumber; inputNumber = ""; 
// } else if (storedNumber != "") { operator = "/"; storedNumber = Number(storedNumber) / Number(inputNumber); inputNumber = ""; document.getElementById("display").textContent = storedNumber;}
// });
// document.getElementById("multiply").addEventListener("click", function () { 
//     if (storedNumber === "") { operator = "*"; storedNumber = inputNumber; inputNumber = ""; 
// } else if (storedNumber != "") { operator = "*"; storedNumber = Number(storedNumber) * Number(inputNumber); inputNumber = ""; document.getElementById("display").textContent = storedNumber;}
// });
// document.getElementById("percentage").addEventListener("click", function () { 
//     if (storedNumber === "") { operator = "%"; storedNumber = inputNumber; inputNumber = ""; 
// } else if (storedNumber != "") { operator = "%"; storedNumber = Number((inputNumber / 100) * Number(storedNumber)); inputNumber = ""; document.getElementById("display").textContent = storedNumber;}
// });








// BUGS
// several operations


// SOLVED 
// 10% of 100
// division by 0
// rounding length of input numbers
// several commas
// rounding result length
// addition

