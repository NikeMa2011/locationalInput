const text = document.getElementById("text");
const input = document.getElementById("input");
const inputLine = document.getElementById("inputLine");

let inputString = " ", inputKey = '';
let selectLength = 0, inputLength = 0;

let frontString, backString;

let outputLength = 0;

const specialKeys = ["Enter", "Backspace", "ArrowLeft", "ArrowRight"];
const involvedKeys = ["CapsLock", "Shift", "Control", "Alt", "Tab", "Escape", "ArrowUp", "ArrowDown"];