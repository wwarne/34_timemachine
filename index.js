(function () {
"use strict";
var TIMEOUT_IN_SECS = 3 * 60;
var TEMPLATE = '<h1><span id="timer-minutes">00</span>:<span id="timer-seconds">00</span></h1>';
var QUOTES = ["Еще не все колеса изобретены: мир слишком удивителен, чтобы сидеть сложа руки.",
    "Работа — лучшее лекарство от всех бед.",
    "Чем упорнее вы работаете, тем удачливее вы становитесь.",
    "Большинство людей упускают появившуюся возможность. Потому что она бывает одета в комбинезон и с виду напоминает работу.",
    "Отсутствие времени – это не оправдание.",
    "Великие дела нужно совершать , а не обдумывать их бесконечно.",
    "Наш большой недостаток в том, что мы слишком быстро опускаем руки. Наиболее верный путь к успеху – все время пробовать еще один раз.",
    "Просыпаясь утром, спроси себя: «Что я должен сделать?» Вечером, прежде чем заснуть: «Что я сделал?».",
    "Любое достижение начинается с решения попробовать.",
    "Дисциплина — это решение делать то, чего очень не хочется делать, чтобы достичь того, чего очень хочется достичь."];
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
      alert(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
    }
}
setInterval(displayTimer, 300);

}());