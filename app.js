const newgameBtn = document.getElementById('newgame')
const rollBtn = document.getElementById('diceBtnRoll')
const holdBtn = document.getElementById('diceBtnHold')
let diceImg = document.getElementById('objDiceImg')
let diceFace = document.createElement("IMG");
let globalOne = document.getElementById('scoreOne')
let globalTwo = document.getElementById('scoreTwo')
let currentOne = document.getElementById('currentOne')
let currentTwo = document.getElementById('currentTwo')
let playerOneP = document.getElementById('playerOneP')
let playerTwoP = document.getElementById('playerTwoP')
const playerOne = document.getElementsByClassName('playerOne');
const playerTwo = document.getElementsByClassName('playerTwo');
let roundOne = 0;
let roundTwo = 0;
let scoreGlobalOne = 0;
let scoreGlobalTwo = 0;
let active = playerOne;


function scoreinit() {
  roundOne = 0;
  roundTwo = 0;
  scoreGlobalOne = 0;
  scoreGlobalTwo = 0;
};

function switchPlayer(active, playerOne, playerTwo) { 
  // Change le joueur actif
    if (active === playerOne) {
    playerTwoP.innerText ='PLAYER 2 \ud83d\udd34';
    playerOneP.innerText ='PLAYER 1';
    currentTwo.disabled = false;
    currentOne.disabled = true;
    roundOne = 0;
    roundTwo = 0;
    currentOne.innerText = roundOne;
    currentTwo.innerText = roundTwo;
    roundTwo += random;
    currentTwo.innerText = roundTwo;
  } else {
    playerTwoP.innerText ='PLAYER 2 ';
    playerOneP.innerText ='PLAYER 1 \ud83d\udd34';
    currentTwo.disabled = true;
    currentOne.disabled = false;
    roundOne = 0;
    roundTwo = 0;
    currentOne.innerText = roundOne;
    currentTwo.innerText = roundTwo;
    
  }
};

function newgame() {
  console.log('ng cliqué');
  scoreinit(); 
  currentOne.innerText = roundOne;
  currentTwo.innerText = roundTwo;
  globalOne.innerText = scoreGlobalOne;
  globalTwo.innerText = scoreGlobalTwo;
  playerOneP.innerText ='PLAYER 1 \ud83d\udd34';
  currentTwo.disabled = true;
};

function rolldice (){
  let random = Math.floor(Math.random() * 6) + 1; 
  console.log("roll cliqué", random)
//diceFace
  diceFace.setAttribute("src","img/dice"+random+".png")
  diceFace.style.width = "60px";
  diceFace.style.height="60px";
  diceImg.appendChild(diceFace);
//random add current
  if (active === playerOne) {
    roundOne += random;
    currentOne.innerText = roundOne;
  } else {
    roundTwo += random;
    currentTwo.innerText = roundTwo;
  };
// if random = 1 current = 0  and change active player
  if (random ===1) {
    switchPlayer();
  };
};

// si joueur 1 clique sur hold score = score + current et joueur 2 joue
function hold() {
  console.log('hold cliqué')
  if (active === playerOne) {
    scoreGlobalOne += roundOne;
    globalOne.innerText = scoreGlobalOne;
    roundOne = 0;
    currentOne.innerText = 0;
  } else {
    scoreGlobalTwo += roundTwo;
    globalTwo.innerText = scoreglobalTwo;
    roundTwo = 0;
    currentTwo.innerText = 0;
  };
  switchPlayer();
};  

newgameBtn.addEventListener('click', newgame);
rollBtn.addEventListener('click', rolldice);
holdBtn.addEventListener ('click', hold );

