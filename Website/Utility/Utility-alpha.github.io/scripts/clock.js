var options = {
  weekday: 'long',
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZone: 'UTC'
};

var options1 = {
  weekday: 'long',
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
};

function displayUTCTime() {
  var currentTime = new Date();
  var utcTime = currentTime.toLocaleString('en-US', options);
  document.getElementById("utc-time").innerHTML = utcTime;
}

setInterval(displayUTCTime, 1000);

function displayLocalTime() {
  var currentTime = new Date();
  var localTime = currentTime.toLocaleString(undefined, options1);
  document.getElementById("local-time").innerHTML = localTime;
}

setInterval(displayLocalTime, 1000);

setInterval(displayLocalTime, 1000);

var intervalIds = {};
    var timerElements = {};

    function startTimer(id) {
      var startTime = Date.now();
      intervalIds[id] = setInterval(updateTime, 1);

      function updateTime() {
        var currentTime = Date.now();
        var elapsedTime = currentTime - startTime;
        var minutes = Math.floor(elapsedTime / 60000);
        var seconds = Math.floor(elapsedTime / 1000) % 60;
        var milliseconds = elapsedTime % 1000;
        timerElements[id].textContent = pad(minutes) + ":" + pad(seconds) + "." + padMilliseconds(milliseconds);
      }

      function pad(value) {
        return value.toString().padStart(2, "0");
      }

      function padMilliseconds(value) {
        return value.toString().padStart(3, "0");
      }

      document.getElementById("start-btn-" + id).disabled = true;
      document.getElementById("stop-btn-" + id).disabled = false;
    }

    function stopTimer(id) {
      clearInterval(intervalIds[id]);

      document.getElementById("stop-btn-" + id).disabled = true;
      document.getElementById("start-btn-" + id).disabled = false;
    }

    window.addEventListener("DOMContentLoaded", function() {
      timerElements["timer-display1"] = document.getElementById("timer-display1");
      timerElements["timer-display2"] = document.getElementById("timer-display2");
      timerElements["timer-display3"] = document.getElementById("timer-display3");
      timerElements["timer-display4"] = document.getElementById("timer-display4");
      timerElements["timer-display5"] = document.getElementById("timer-display5");
      timerElements["timer-display6"] = document.getElementById("timer-display6");

      document.getElementById("start-btn-1").addEventListener("click", function() { startTimer("timer-display1"); });
      document.getElementById("stop-btn-1").addEventListener("click", function() { stopTimer("timer-display1"); });
      document.getElementById("start-btn-2").addEventListener("click", function() { startTimer("timer-display2"); });
      document.getElementById("stop-btn-2").addEventListener("click", function() { stopTimer("timer-display2"); });
      document.getElementById("start-btn-3").addEventListener("click", function() { startTimer("timer-display3"); });
      document.getElementById("stop-btn-3").addEventListener("click", function() { stopTimer("timer-display3"); });
      document.getElementById("start-btn-4").addEventListener("click", function() { startTimer("timer-display4"); });
      document.getElementById("stop-btn-4").addEventListener("click", function() { stopTimer("timer-display4"); });
      document.getElementById("start-btn-5").addEventListener("click", function() { startTimer("timer-display5"); });
      document.getElementById("stop-btn-5").addEventListener("click", function() { stopTimer("timer-display5"); });
      document.getElementById("start-btn-6").addEventListener("click", function() { startTimer("timer-display6"); });
      document.getElementById("stop-btn-6").addEventListener("click", function() { stopTimer("timer-display6"); });
    });