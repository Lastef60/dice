//SELECTIONNER LES ELEMENTS DANS LE DOM
const newGame = document.getElementById('newgame')
const rolldice = document.getElementById('diceBtnRoll')
const hold = document.getElementById('diceBtnHold')
const diceDiv = document.getElementById('objDice')
const diceImg = document.getElementById('objDiceImg')
let scorePlayerOne = document.getElementById('scoreOne')
let scorePlayerTwo = document.getElementById('scoreTwo')
let currentOne = document.getElementById('currentOne')
let currentTwo = document.getElementById('currentTwo)')
let playerOneP = document.getElementById('playerOneP')
let playerTwoP = document.getElementById('playerTwoP')
//PSEUDO CODE

//creation score
let scores;

//random



//AU CLIC BOUTON NEWGAME ADDEVENTLISTENER
newGame.addEventListener('click', function() {
//console.log ('bouton cliqué');
//LES SCORES SONT REINITIALISES
scores = 0;
scorePlayerOne.innerText = scores; 
scorePlayerTwo.innerText = scores;
//UN CERCLE ROUGE INDIQUE QUEL JOUEUR JOUE
playerOneP.innerText ='PLAYER 1 \ud83d\udd34'
//PLAYER1 PEUT JOUER MAIS PAS PLAYER2

});

//AU CLIC SUR ROLLDICE PAR PLAYER 1
rolldice.addEventListener('click', function() {
//LE DE DONNE UNE VALEUR ALEATOIRE ENTRE 1 ET 6
    let min= 1; 
    let max= 7; 
    let random = Math.floor(Math.random()*(max - min) + min); 
    console.log(random);
 ;
    //alert(random);
    
//affichage dé /
  let diceFace = document.createElement("IMG");
diceFace.setAttribute("src","img/dice"+random+".png")
document.getElementById('objDiceImg').appendChild(diceFace);

//le score est ajouté à 



});

/*rolldice.addEventListener('click', function() {
  document.getElementById('objDiceImg').removeChild(diceFace); 
});*/
