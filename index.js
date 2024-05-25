const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")

let homeCounter
let guestCounter

resetScore()

function increment1Home() {
  homeCounter += 1
  homeScore.textContent = homeCounter
}
function increment2Home() {
  homeCounter += 2
  homeScore.textContent = homeCounter
}
function increment3Home() {
  homeCounter += 3
  homeScore.textContent = homeCounter
}

function increment1Guest() {
  guestCounter += 1
  guestScore.textContent = guestCounter
}
function increment2Guest() {
  guestCounter += 2
  guestScore.textContent = guestCounter
}
function increment3Guest() {
  guestCounter += 3
  guestScore.textContent = guestCounter
}

function resetScore() {
  homeCounter = 0
  guestCounter = 0
  homeScore.textContent = homeCounter
  guestScore.textContent = guestCounter
}