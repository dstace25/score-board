let homeScore = 0;
let guestScore = 0;

const homeScoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");

homeScoreEl.textContent = homeScore;
guestScoreEl.textContent = guestScore;

function increamentHome(num) {
  console.log(num);
  homeScore += num;
  homeScoreEl.textContent = homeScore;
}
function increamentGuest(num) {
  console.log(num);
  guestScore += num;
  guestScoreEl.textContent = guestScore;
}

function resetScores() {
  homeScore = 0;
  guestScore = 0;
  homeScoreEl.textContent = 0;
  guestScoreEl.textContent = 0;
}
