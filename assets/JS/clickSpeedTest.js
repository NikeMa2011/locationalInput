const buttom = document.getElementById("button");
const clickArea = document.getElementById("clickArea");
const scoreText = document.getElementById("sorceText")

let ms = 0;

function startRecordTime() {
    let startRecord = setInterval("ms ++;", 1);
    startRecord;
}

buttom.addEventListener("click", function() {
    buttom.hidden = true;
    setTimeout(() => {
        startRecordTime();
        clickArea.style.color = "green";
        clickArea.addEventListener("click", () => {
            clearInterval(startRecord);
            scoreText = "your score: " + ms + "ms";
        });
    }, 3000);
});