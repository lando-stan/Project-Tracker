//live clock functionaltiy
let display_time = document.querySelector(".live_clock");

var timeInterval = setInterval(function () {
  display_time.textContent = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
}, 1000);
