window.addEventListener("keydown", function (event) {
    inputKey = event.key;
    if (involvedKeys.includes(inputKey)) {
        console.log("involved input: " + inputKey);
    } else {
        if (specialKeys.includes(inputKey)) {
            if (inputKey == "ArrowLeft") {1
                if (selectLength > 0) {
                    selectLength --;
                } else {
                    console.log("selected length is already on minium size (0)");
                }
            } else if (inputKey == "ArrowRight") {
                if (selectLength < inputLength) {
                    selectLength ++;
                } else {
                    console.log("selected length is already on maxium size (" + inputLength + ")");
                }
            } else if (inputKey == "Shift") {
                // null
            }
                else if (inputKey == "Backspace") {
                if (selectLength > 0) {
                    selectLength --;
                    inputString = inputString.slice(0, -1);
                } else {
                    console.log("selected length is already on minium size (0)");
                }
            } else if (inputKey == "Enter") {
                // null
            }
            console.log("speical input: " + inputKey);
        } else {
            frontString = inputString.slice(0, selectLength);
            backString = inputString.slice(0, (0 - selectLength));
            inputString = frontString + inputKey + backString;
            selectLength ++;
        }
        displayInput();
    }
    inputLength = inputString.length;
});