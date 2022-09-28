# Calculator App

![](Images/Calculator.gif)

## About:

An HTML Based Calculator App, that use javascript to calculate the value shown on the input.

```JavaScript
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
```

My inspiration came from the  Microsoft Calculator on the Windows operating system, it is very similar in design but the functionality differs.


## Features:

### 1.) It has BODMAS built into it and can use brackets in a equation.

![](Images/BODMAS_Calculator.png)

### Result: 
![](Images/BODMAS_Result.png)

### 2.) It can use keypresses as well as button clicks.


