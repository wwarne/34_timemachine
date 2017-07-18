(function () {
"use strict";
var TIMEOUT_IN_SECS = 3 * 60;
var TEMPLATE = '<h1><span id="timer-minutes">00</span>:<span id="timer-seconds">00</span></h1>';
var QUOTES = ["Opportunity is missed by most people because it is dressed in overalls and looks like work. LET'S WORK!",
    "It seems the harder I work, the more luck I have.",
    "It is the working man who is the happy man. It is the idle man who is the miserable man.",
    "The secret of getting ahead is getting started.",
    "Even if you fall on your face, you’re still moving forward",
    "A dream doesn’t become reality through magic; it takes sweat, determination and hard work.",
    "Embrace the pain to inherit the gain."
];
// adds HTML tag to current page
var timerContainer = document.createElement('div');
timerContainer.setAttribute("style", "position: fixed; top: 50px; left: 60px; z-index: 1;");
var bodyTag = document.body;
bodyTag.insertBefore(timerContainer, bodyTag.firstChild);
timerContainer.innerHTML = TEMPLATE;

function getTimestampInSecs(){
  var timestampInMilliseconds = new Date().getTime();
  return Math.round(timestampInMilliseconds/1000);
}

function padZero(number){
  return ("00" + String(number)).slice(-2);
}

var timestampOnStart = getTimestampInSecs();

var timerMinutes = document.getElementById('timer-minutes');
var timerSeconds = document.getElementById('timer-seconds');
var timerParent = document.getElementById('timer-minutes').parentNode;

function displayTimer(){
  var currentTimestamp = getTimestampInSecs();
  var secsGone = currentTimestamp - timestampOnStart;
  var secsLeft = Math.max(TIMEOUT_IN_SECS - secsGone, 0);

  var minutes = Math.floor(secsLeft / 60);
  var seconds = secsLeft - minutes * 60;
  timerMinutes.innerHTML = padZero(minutes);
  timerSeconds.innerHTML = padZero(seconds);
  if (secsLeft  === 0 && secsGone % 30 === 0) {
      timerParent.setAttribute("style", "color: crimson;");
      alert('A wise man said: ' + QUOTES[Math.floor(Math.random() * QUOTES.length)]);
    }
}

setInterval(displayTimer, 300);
}());