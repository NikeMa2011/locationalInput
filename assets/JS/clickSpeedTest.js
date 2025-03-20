const buttom = document.getElementById("button");
const clickArea = document.getElementById("clickArea");
const scoreText = document.getElementById("sorceText");

let ms = 0;

function startRecordTime() {
    let startRecord = setInterval("ms ++;", 1);
    startRecord;
}

buttom.addEventListener("click", function() {
    buttom.hidden = true;
    clickArea.style.backgroundColor = "#00a2ffff";
    setTimeout(() => {
        startRecordTime();
        clickArea.style.backgroundColor = "#00b900";
        clickArea.addEventListener("click", () => {
            clearInterval(startRecord);
            scoreText = "your score: " + ms + "ms";
        });
    }, 3000);
});