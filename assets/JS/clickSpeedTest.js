const buttom = document.getElementById("button");
const clickArea = document.getElementById("clickArea");
const scoreText = document.getElementById("scoreText");

let ms = 0;
let startRecord;

function startRecordTime() {
    startRecord = setInterval(() => {
        ms ++;
        scoreText.innerHTML = ms + "ms";
    }, 1);
}

buttom.addEventListener("click", function() {
    buttom.hidden = true;
    scoreText.hidden = false;
    clickArea.style.backgroundColor = "#00a2ffff";
    setTimeout(() => {
        startRecordTime();
        clickArea.style.backgroundColor = "#00b900";
        clickArea.addEventListener("click", () => {
            window.clearInterval(startRecord);
        });
    }, 3000);
});