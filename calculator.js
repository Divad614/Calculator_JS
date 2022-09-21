console.log("JavaScript, HTML & CSS Calculator by David Wilson");

document.getElementById("answer").readOnly = true;
let screen = document.getElementById("answer");
let savedAnswerScreen = document.getElementById("savedAnswer");
let buttons = document.querySelectorAll("button");
let screenValue = "";
let operandCounter = 0;
let LastValue = "";
let bracketMultiplication = false;

function clear() {
    screenValue = "";
    screen.value = screenValue;
    console.clear();
    operandCounter = 0;
    bracketMultiplication = false;
    savedAnswerScreen.value = "";
}

class lengthError extends Error {
    constructor(message) {
        super(message);
        this.name = "LengthError";
        clear();
    }
}

for (item of buttons) {
    item.addEventListener("click", (e) => {
        console.log(screen.value.length)
        let buttonText = e.target.innerText;
        if (screen.value.replace(/\s/g, '').length <= 16) {
            if (bracketMultiplication == true) {
                operandCounter = 0;
            }
            if (buttonText == "x") {
                operandCounter += 1;
                if (operandCounter == 2) {
                    getAnswer();
                    buttonText = " * ";
                    screenValue = screen.value + buttonText;
                    screen.value = screenValue;
                    operandCounter = 1;
                    LastValue = buttonText;
                } else {
                    buttonText = " * ";
                    screenValue += buttonText;
                    screen.value = screenValue;
                    LastValue = buttonText;
                }
            } else if (buttonText == "C") {
                clear();
            } else if (buttonText == "=") {
                getAnswer();
            } else if (buttonText == "-") {
                operandCounter += 1;
                if (operandCounter == 2) {
                    getAnswer();
                    buttonText = " - ";
                    screenValue = screen.value + buttonText;
                    screen.value = screenValue;
                    operandCounter = 1;
                    LastValue = buttonText;
                } else {
                    buttonText = " - ";
                    screenValue += buttonText;
                    screen.value = screenValue;
                    LastValue = buttonText;
                }
            } else if (buttonText == "+") {
                operandCounter += 1;
                if (operandCounter == 2) {
                    getAnswer();
                    buttonText = " + ";
                    screenValue = screen.value + buttonText;
                    screen.value = screenValue;
                    operandCounter = 1;
                    LastValue = buttonText;
                } else {
                    buttonText = " + ";
                    screenValue += buttonText;
                    screen.value = screenValue;
                    LastValue = buttonText;
                }
            } else if (buttonText == "\u00F7") {
                operandCounter += 1;
                if (operandCounter == 2) {
                    getAnswer();
                    buttonText = " / ";
                    screenValue = screen.value + buttonText;
                    screen.value = screenValue;
                    operandCounter = 1;
                    LastValue = buttonText;
                } else {
                    buttonText = " / ";
                    screenValue += buttonText;
                    screen.value = screenValue;
                    LastValue = buttonText;
                }
            } else if (buttonText == "%") {
                operandCounter += 1;
                if (operandCounter == 2) {
                    getAnswer();
                    buttonText = " % ";
                    screenValue = screen.value + buttonText;
                    screen.value = screenValue;
                    operandCounter = 1;
                    LastValue = buttonText;
                } else {
                    buttonText = " % ";
                    screenValue += buttonText;
                    screen.value = screenValue;
                    LastValue = buttonText;
                }
            } else if (buttonText == "(") {
                if (LastValue == " ) ") {
                    buttonText = " * ( ";
                    screenValue = screen.value + buttonText;
                    screen.value = screenValue;
                    bracketMultiplication = true;
                    LastValue = buttonText;
                } else {
                    buttonText = " ( ";
                    screenValue = screen.value + buttonText;
                    screen.value = screenValue;
                    bracketMultiplication = true;
                    LastValue = buttonText;
                }
            } else if (buttonText == ")") {
                buttonText = " ) ";
                screenValue = screen.value + buttonText;
                screen.value = screenValue;
                bracketMultiplication = false;
                LastValue = buttonText;
            } else {
                screenValue += buttonText;
                screen.value = screenValue;
                LastValue = buttonText;
            }
        } else {
            try {
                throw new lengthError("Expression too long!");
            } catch (e) {
                alert(e.message);
            }
        }
    });
}

document.addEventListener("keydown", function (event) {
    if (screen.value.replace(/\s/g, '').length <= 16) {
        if (event.shiftKey == 57) {
            event.key = "(";
        } else if (event.shiftKey == 48) {
            event.key = ")";
        } else if (event.shiftKey == 53) {
            event.key = "%";
        }
        if (event.keyCode == 88) {
            screenValue += " * ";
            screen.value = screenValue;
        }
        if (event.key <= 9) {
            screenValue += event.key;
            screen.value = screenValue;
        }

        if (
            event.key == "+" ||
            event.key == "-" ||
            event.key == "*" ||
            event.key == "." ||
            event.key == "/" ||
            event.key == "%" ||
            event.key == "(" ||
            event.key == ")"
        ) {
            operandCounter++;
            if (operandCounter == 2) {
                getAnswer();
                screenValue += " " + event.key + " ";
                screen.value = screenValue;
                operandCounter = 1;
            } else {
                screenValue += " " + event.key + " ";
                screen.value = screenValue;
            }
        }

        if (event.keyCode == 13 || event.keyCode == 187) {
            getAnswer();
        } else if (event.keyCode == 46) {
            clear();
        } else if (event.keyCode == 8) {
            screenValue = screenValue.slice(0, -1);
            screen.value = screenValue;
        } else if (event.keyCode == 67) {
            clear();
        }
    }
    else {
        try {
            throw new lengthError("Expression too long!");
        } catch (e) {
            alert(e.message);
        }
    }
});

function getAnswer() {
    try {
        let oldScreenValue = screenValue;
        screenValue = eval(screenValue);
        screen.value = screenValue;
        savedAnswerScreen.value = oldScreenValue + " =";
        console.log(screen.value);
    } catch (e) {
        alert("ERROR");
        clear();
    }
}



