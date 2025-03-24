window.addEventListener("keydown", function (event) {
    inputKey = event.key;
    if (involvedKeys.includes(inputKey)) {
        console.log("involved input: " + inputKey);
    } else {
        if (specialKeys.includes(inputKey)) {
            console.log("speical input: " + inputKey);
            if (inputKey == "ArrowLeft") {
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
            } else if (inputKey == "Backspace") {
                if (selectLength > 0) {
                    selectLength --;
                    inputString = inputString.slice(0, -1);
                } else {
                    console.log("selected length is already on minium size (0)");
                }
            } else if (inputKey == "Enter") {

            }
        } else {
            frontString = inputString.slice(0, selectLength);
            backString = inputString.slice(0 - selectLength, 0);
            inputString = frontString + inputKey + backString;
            selectLength ++;
        }
        displayInput();
    }
    inputLength = inputString.length;
});