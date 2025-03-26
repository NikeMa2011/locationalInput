const text = document.getElementById("text");
const input = document.getElementById("input");
const inputLine = document.getElementById("inputLine");
const showLocation = document.getElementById("showLocation");

let inputString = " ", inputKey = '';
let selectLength = 0, inputLength = 0;
const preString = "> ";

let frontString, backString;

let outputLength = 0;

const specialKeys = ["Enter", "Shift", "Backspace", "ArrowLeft", "ArrowRight"];
const involvedKeys = ["CapsLock", "Control", "Alt", "Tab", "Escape", "ArrowUp", "ArrowDown"];