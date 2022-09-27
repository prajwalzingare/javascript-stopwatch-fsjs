var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var timer = false;

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

//start function
function start() {
  timer = true;
  stopwatch();
}

//stop function
function stop() {
  timer = false;
}

//reset function
function reset() {
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
}

//stopwatch function
function stopwatch() {
  console.log("object");

  if (timer == true) {
    count = count + 1;
    if (count == 100) {
      sec = sec + 1;

      count = 0;
    }
    if (sec == 60) {
      sec = 0;
      min = min + 1;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }
    document.getElementById("hr").innerHTML = hr;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("count").innerHTML = count;
    setTimeout(stopwatch, 10);
  }
}
