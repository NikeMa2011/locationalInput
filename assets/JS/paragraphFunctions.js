function contextAddParagraph(output) {
    textLength ++;
    text.innerHTML += "<p id=\"" + textLength + "\">" + output + "</p>";
}
function displayInput() {
    inputLine.innerHTML = preString + inputString;
}