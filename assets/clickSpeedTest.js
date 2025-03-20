const buttom = document.getElementById("buttom");
const clickArea = document.getElementById("clickArea");

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
        });
    }, 3000);
});