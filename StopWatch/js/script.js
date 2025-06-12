let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("display-Time");
let timer = null;

function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    if (displayTime) {
        displayTime.innerHTML = h + ":" + m + ":" + s;
    }
}

function watchStart() {
    if (!timer) { 
        timer = setInterval(stopwatch, 1000);
    }
}

function watchStop() {
    clearInterval(timer);
    timer = null;  
}

function watchReset() {
    clearInterval(timer);
    timer = null;
    [seconds, minutes, hours] = [0, 0, 0];
    if (displayTime) {
        displayTime.innerHTML = "00:00:00";
    }
}
