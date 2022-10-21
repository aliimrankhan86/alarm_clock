/* 

  TODO In case we need to draw dialines 

  var dialLines = document.getElementsByClassName('diallines');
  var clockEl = document.getElementsByClassName('clock')[0];

  for (var i = 1; i < 60; i++) {
    clockEl.innerHTML += "<div class='diallines'></div>";
    dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
  } 

*/


const clock = () => {

  /* Storing Hours, Mins & Seconds */
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var seconds = d.getSeconds();

  /* Calculating the roatation of the Hands */
  var hoursDeg = hours * 30 + mins * (360 / 720);
  var minsDeg = mins * 6 + seconds * (360 / 3600);
  var seondsDeg = seconds * 6;

  /* Selecting the IDs of the Elements */
  const HourElms = document.querySelector('#hour');
  const MinuteElms = document.querySelector('#minute');
  const SecondElms = document.querySelector('#second');

  /* Setting the correct Rotation of the Hands */
  HourElms.style.transform = "rotate(" + hoursDeg + "deg)";
  MinuteElms.style.transform = "rotate(" + minsDeg + "deg)";
  SecondElms.style.transform = "rotate(" + seondsDeg + "deg)";
}

setInterval(clock, 100); // Intiating the function 