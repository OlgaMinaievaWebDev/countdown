const christmas = new Date("dec 25, 2023 00:00:00").getDate();

const countdownDisplay = document.getElementById("display");

let x = setInterval(function () {
  let now = new Date().getDate();
  let remain = christmas - now;

  console.log(remain);
  // Task:
  if (remain < 0) {
    clearInterval(x);
    countdownDisplay.innerHTML = "EXPIRED";
  } else {
    countdownDisplay.innerHTML = remain;
  }
}, 1000);
