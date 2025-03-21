window.addEventListener("keydown", function (event) {
    inputKey = event.key;
    if (specialKeys.includes(inputKey)) {
        console.log("speical input: " + inputKey);
        if (inputKey == "Backspace") {
            inputLengh --;
            inputString = inputString.slice(0, -1);
        } else if (inputKey == "Enter") {
            
        }
    } else if (involvedKeys.includes(inputKey)) {
        console.log("involved input: " + inputKey);
    } else {
        inputLengh ++;
        inputString += inputKey;
    }
});