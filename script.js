function init() {
  renderFields();
  showPlayer();
}

let fields = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
]

let playerofGame = ['X', 'O'];                            // every player listed here to work in function's
let currentPlayer = 'O';                                  // currentPlayer as the name says has to be set up at the start for the logic
let gameOver = false;                                    // geame over has to be false in order to play
let winningLine = [];                                   // winningline should be empty at start
let winningDirection = '';                              // winningDirection should be empty at the start
let currentIndex = playerofGame.indexOf(currentPlayer); // filter the current one from the playerofGame container
let nextPlayer = playerofGame[1 - currentIndex];    // current Index minus 1 to get the opposite
let nextPlayer1 = playerofGame[currentIndex];     // current Index as the name says


//function showPlayer(){
// let play = document.getElementById('player')
// if(currentPlayer === 'O'){
//play.innerHTML = `<p class="${currentPlayer}-template">move done: ${currentPlayer}</p><br><p class="${nextPlayer}-template"> next is: ${nextPlayer}</p>`
//}else if(currentPlayer === 'X'){
// play.innerHTML = `<p class="${currentPlayer}-template">move done: ${currentPlayer}</p><br><p class="${nextPlayer1}-template"> next is: ${nextPlayer1}</p>`
//}
//renderFields();
//}

function showPlayer() {
  let play = document.getElementById('player')
  if ((fields.every(element => element === null))) {    // checks if every element is still null
    play.innerHTML = `<p class="${currentPlayer}-template">set the fist letter: ${currentPlayer}</p>`
  } else if (currentPlayer === 'O') {    //if not every index is null, then show normal view
    play.innerHTML = `<p class="${currentPlayer}-template">move done: ${currentPlayer}</p><br><p class="${nextPlayer}-template"> next is: ${nextPlayer}</p>`
  } else if (currentPlayer === 'X') {
    play.innerHTML = `<p class="${currentPlayer}-template">move done: ${currentPlayer}</p><br><p class="${nextPlayer1}-template"> next is: ${nextPlayer1}</p>`
  };
  renderFields();
}



function renderFields() {
  const field = document.getElementById('gameBoard');
  field.innerHTML = '';   // should be empty at first

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');   // create nine div's 
    cell.classList.add('cell');   // add the class "cell" to each of the 9 div's

    // Template für X und O
    if (fields[i] === 'X') {
      cell.innerHTML = '<span class="X-template">X</span>'; //if X is the current player, add the X into the cell plus the class
    } else if (fields[i] === 'O') {
      cell.innerHTML = '<span class="O-template">O</span>'; //if O is the current player, add the X into the cell plus the class
    }

    // Gewinnerlinie markieren
    if (winningLine.includes(i)) {      //checks which of the indizes are part of posible winline
      cell.classList.add('winning-cell');   // add the white line who conect's all three symbols


      // Linie auf das mittlere Feld anwenden (zentral für Ausrichtung)
      if (winningLine.length === 3 && i === winningLine[1]) { //checks if the length of the winning line is three
        cell.classList.add(`line-${winningDirection}`);   // add's the class line into it plus the variable from the winning direction
      }
    };

    if (!fields[i] && !gameOver) {      // if fields is empty and gameover is false, then 
      cell.addEventListener('click', () => handleClick(i));   //add on every cell an eventlistener with a click trigger on it
    }

    field.appendChild(cell);    // cell is the childelement of field which is the container with the saved connection to the gameboard div
  }
}


//currentPlayer = currentPlayer === 'O' ? 'X' : 'O';

function handleClick(index) {
  if (!(fields[1]) && !gameOver) {               //checks if the array is not filled with two indizes (index 0 and 1)
    //if so (the first click is not done), then don't toggle classList
  } else {
    play.classList.toggle('X-template');          //if it's filled with two indizes, then toggle classList
  };
  fields[index] = currentPlayer;
  showPlayer(currentIndex);                     // show's the info which player' turn it is


  console.log('aktualisiert');
  if (checkWin(currentPlayer)) {                // checks if the current player has won in any line
    alert(`${currentPlayer} hat gewonnen!`);
    gameOver = true;                            // if so, set game over on true
    setTimeout(resetGame, 1500);                // set timeout to reset the game, delete the symbol' to start again
    return;
  }

  if (fields.every(field => field)) {           //if every field is filled whithout a winner, then it is break even
    alert("Unentschieden!");
    setTimeout(resetGame, 1500);                // also here set a timeout

    return;
  }


  currentPlayer = currentPlayer === 'O' ? 'X' : 'O';    // short if-statement is currentPlayer ? O, if not, then it is X, if not it is O again
}



function checkWin(player) {                        // function who check's if the currentPlayer has gotten any line to win
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],                // all possible winning line's listed here
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const combo of winningCombos) {                    //
    if (combo.every(index => fields[index] === player)) {
      winningLine = combo;
      winningDirection = getLineDirection(combo);       // here every winningDirection is outsourced to getLineDirection(combo)
      // in combo should be saved every possible winning combination
      return true;                                      // I don't know either why this one should return true;
    }
  }
  return false;                                         // I don't know why it should return false
}


function getLineDirection(combo) {
  const [a, b, c] = combo;

  // Horizontal: Differenz 1 zwischen den Zellen
  if (b - a === 1 && c - b === 1) return 'horizontal';            // here is some math: the differenz should be one eich to be horizontal

  // Vertikal: Differenz 3
  if (b - a === 3 && c - b === 3) return 'vertical';              // in vertikal case it should be three(3) - lowest rectangle to highest rectangle(reckteck)

  // Diagonal links oben → rechts unten (0, 4, 8)
  if (a === 0 && b === 4 && c === 8) return 'diagonal-right';     // top-left corner- index 0; middle index 4, bottom-right corner index 8 (easy count the rectangles index)

  // Diagonal rechts oben → links unten (2, 4, 6)
  if (a === 2 && b === 4 && c === 6) return 'diagonal-left';       // here the same but reverse bottom-left corner index 6, middle also index 4, and top-right corner index 2,

  return '';    // i don't know why it should return '',?
}


function resetGame() {
  renderFields();               // one of the finale move to change the order of renderFields();
  showPlayer();                  // i found out every task has to be in the right order to act porperly 
  winningLine = [];             // and set winningLine and winningDirection empty again  
  winningDirection = '';         // was tricky to follow every step here and understand
  fields = Array(9).fill(null);
  currentPlayer = 'O';
  gameOver = false;


};

//??? Questions in line -> 155, 136, 133, 128