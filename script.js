'use strict'

const againBtn = document.querySelector(".again")
const secretNr = document.querySelector(".number")
const numberInput = document.querySelector(".guess")
const checkBtn = document.querySelector(".check")
const messageDisplay = document.querySelector(".message")
const scoreDisplay = document.querySelector(".score")
const highScoreDisplay = document.querySelector(".high-score")
const resetHsBtn = document.querySelector(".reset-hs")
const body = document.querySelector("body")

let score = 20
let highScore = 0
let randomNr = getRandomNr()

function getRandomNr() {
  return Math.floor(Math.random() * 20) + 1
}

function compareNumbers(input) {
  const userNr = parseInt(input.value)
  
  if (!userNr || userNr < 1 || userNr > 20) {
    window.alert("Please pick a number between 1 and 20.")
    numberInput.value = ""
    return
  }
  
  if (userNr === randomNr) {
    messageDisplay.textContent = "You are correct! 🎉"
    secretNr.innerText = randomNr
    body.style.backgroundColor = "green"
    if (score > highScore) {
      highScoreDisplay.innerText = score
      highScore = score
    } 
  } else if (userNr < randomNr) {
    messageDisplay.textContent = "Too low. 👇"
    score--
  } else if (userNr > randomNr) {
    messageDisplay.textContent = "Too high. 👆"
    score--
  }
  scoreDisplay.innerText = score

  if (score <= 0) {
    messageDisplay.textContent = "Game Over! You suck! 💀"
    checkBtn.disabled = true
  }
}

function reset() {
  randomNr = getRandomNr()
  score = 20
  scoreDisplay.innerText = 20
  numberInput.value = ""
  messageDisplay.textContent = "Start guessing..."
  secretNr.innerText = "?"
  body.style.backgroundColor = "#222"
  checkBtn.disabled = false
}

checkBtn.addEventListener("click", () => compareNumbers(numberInput))
numberInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    compareNumbers(numberInput);
  }
})
againBtn.addEventListener("click", reset)
resetHsBtn.addEventListener("click", () => {
  highScore = 0
  highScoreDisplay.innerText = 0
})


