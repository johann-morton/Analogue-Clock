// *** Analogue Clock JavaScript *** //

// Set up variables for use in the app
const clockFace = document.querySelector('.clock-face');
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');


// Clock functions
function setDate() {
  const now = new Date();
  let seconds = now.getSeconds();
  // Divide seconds by 60 - 1 minute = 60 seconds
  let secondsDegrees = ((seconds / 60) * 360) + 90;
  // Pass secondsDegrees to the CSS transform function
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  let minutes = now .getMinutes();
  // Divide minutes by 60 - 1 hour = 60 minutes
  // Add seconds to keep second and minute hands consistent
  let minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  // Pass minutesDegrees to the CSS transform function
  minuteHand.style.transform =`rotate(${minutesDegrees}deg)`;

  let hour = now.getHours();
  // Divide hours by 12 - 1 full rotation
  // Add minutes to keep hour and minute hands consistent
  let hourDegrees = ((hour / 12) * 360) + ((minutes / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

window.addEventListener("load", function(event) {
  setInterval(setDate, 1000);
  setDate();
});
