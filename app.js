const newgameBtn = document.getElementById('newgame')
const rollBtn = document.getElementById('diceBtnRoll')
const holdBtn = document.getElementById('diceBtnHold')
const diceImg = document.getElementById('objDiceImg')
const diceFace = document.createElement("IMG")
const globalOne = document.getElementById('scoreOne')
const globalTwo = document.getElementById('scoreTwo')
const currentOne = document.getElementById('currentOne')
const currentTwo = document.getElementById('currentTwo')
const playerOneP = document.getElementById('playerOneP')
const playerTwoP = document.getElementById('playerTwoP')
const playerOne = document.getElementsByClassName('playerOne')
const playerTwo = document.getElementsByClassName('playerTwo')
let roundOne = 0
let roundTwo = 0
let scoreGlobalOne = 0
let scoreGlobalTwo = 0
let active = playerOne
let random = 0


const scoreinit = () => {
  roundOne = 0
  roundTwo = 0
  scoreGlobalOne = 0
  scoreGlobalTwo = 0
}

const newgame = () => {

  scoreinit();
  currentOne.innerText = roundOne
  currentTwo.innerText = roundTwo
  globalOne.innerText = scoreGlobalOne
  globalTwo.innerText = scoreGlobalTwo
  playerOneP.innerText = 'PLAYER 1 \ud83d\udd34'
  playerTwoP.innerText = 'PLAYER 2 '
  currentTwo.disabled = true
  active = playerOne
}

const activePlayerOne = () => {
  playerOneP.innerText = 'PLAYER 1 \ud83d\udd34'
  playerTwoP.innerText = 'PLAYER 2 '
  roundOne += random
  currentOne.innerText = roundOne
  currentTwo.disabled = true
  currentOne.disabled = false
  roundTwo = 0
  diceImg.removeChild(diceFace)
}

const activePlayerTwo = () => {
  playerOneP.innerText = 'PLAYER 1 '
  playerTwoP.innerText = 'PLAYER 2 \ud83d\udd34'
  roundTwo += random
  currentTwo.innerText = roundTwo
  currentTwo.disabled = false
  currentOne.disabled = true
  roundOne = 0
  if (diceImg.contains(diceFace)) { 
    //pour verifier si diceImg contient diceFace et eviter erreur en console
    diceImg.removeChild(diceFace)
  }
}

const switchPlayer = () => {
  random = 0
  // Change le joueur actif
  if (active === playerOne) {
    activePlayerTwo()
    active = playerTwo
  } else {
    activePlayerOne()
    active = playerOne
  }
}

const rolldice = () => {
  random = Math.floor(Math.random() * 6) + 1
  console.log("roll cliqué", random)
  //diceFace
  diceFace.setAttribute("src","img/dice"+random+".png")
  diceFace.style.width = "60px"
  diceFace.style.height="60px"
  diceImg.appendChild(diceFace)
  //random add current
  if (active === playerOne) {
    roundOne += random
    currentOne.innerText = roundOne
  } else {
    roundTwo += random
    currentTwo.innerText = roundTwo
  }
  // if random = 1 current = 0 and change active player
  if (random === 1) {
    switchPlayer()
  }
}
function hold() {
  random = Math.floor(Math.random() * 6) + 1
  if (active === playerOne) {
    scoreGlobalOne += roundOne
    globalOne.innerText = scoreGlobalOne
    roundOne = 0
    currentOne.innerText = roundOne
    currentOne.disabled = true
    currentTwo.disabled = false
    playerOneP.innerText = 'PLAYER 1'
    playerTwoP.innerText = 'PLAYER 2 \ud83d\udd34'
    if (scoreGlobalOne >= 100) {
      alert('Player 1 wins!')
      newgame()
    }
  } else {
    scoreGlobalTwo += roundTwo
    globalTwo.innerText = scoreGlobalTwo
    roundTwo = 0
    currentTwo.innerText = roundTwo
    currentTwo.disabled = true
    currentOne.disabled = false
    playerOneP.innerText = 'PLAYER 1 \ud83d\udd34'
    playerTwoP.innerText = 'PLAYER 2'
    if (scoreGlobalTwo >= 100) {
      alert('Player 2 wins!')
      newgame()
    }
  }
  switchPlayer(active, playerOne, playerTwo)
}

newgameBtn.addEventListener('click', newgame)
rollBtn.addEventListener('click', rolldice)
holdBtn.addEventListener ('click', hold )