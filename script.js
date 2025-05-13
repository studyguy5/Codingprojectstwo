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

let playerofGame = ['X', 'O'];
let currentPlayer = 'O';
let gameOver = false;
let winningLine = [];
let winningDirection = '';
let currentIndex = playerofGame.indexOf(currentPlayer);
let nextPlayer = playerofGame[1 - currentIndex];



function showPlayer(nextPlayer){
  let play = document.getElementById('player')
  renderFields();
     
    
    play.innerHTML = `current Player: <br>${currentPlayer} ${playerofGame[nextPlayer]}`
}



function renderFields() {
  const field = document.getElementById('gameBoard');
  field.innerHTML = '';

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    // Template für X und O
    if (fields[i] === 'X') {
      cell.innerHTML = '<span class="x-template">X</span>';
    } else if (fields[i] === 'O') {
      cell.innerHTML = '<span class="o-template">O</span>';
    }

    // Gewinnerlinie markieren
    if (winningLine.includes(i)) {
      cell.classList.add('winning-cell');


      // Linie auf das mittlere Feld anwenden (zentral für Ausrichtung)
      if (winningLine.length === 3 && i === winningLine[1]) {
        cell.classList.add(`line-${winningDirection}`);
      }
    };

    if (!fields[i] && !gameOver) {
      cell.addEventListener('click', () => handleClick(i));
    }

    field.appendChild(cell);
  }
}


//currentPlayer = currentPlayer === 'O' ? 'X' : 'O';

function handleClick(index) {
  if (!(fields[1]) || gameOver){    //checks if the array is not filled with two indizes (index 0 and 1)
    //if so (the first click), then don't toggle classList
  }else{
  player.classList.toggle('o-template');    //if it's filled with two indizes, then toggle classList
  }
  fields[index] = currentPlayer;
  showPlayer(currentPlayer);

  console.log('aktualisiert');
  if (checkWin(currentPlayer)) {
    alert(`${currentPlayer} hat gewonnen!`);
    gameOver = true;
    setTimeout(resetGame, 1500);
    return;
  }

  if (fields.every(field => field)) {
    alert("Unentschieden!");
    setTimeout(resetGame, 1500);

    return;
  }

  
  currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
}



function checkWin(player) {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const combo of winningCombos) {
    if (combo.every(index => fields[index] === player)) {
      winningLine = combo;
      winningDirection = getLineDirection(combo);

      return true;
    }
  }
  return false;
}


function getLineDirection(combo) {
  const [a, b, c] = combo;

  // Horizontal: Differenz 1 zwischen den Zellen
  if (b - a === 1 && c - b === 1) return 'horizontal';

  // Vertikal: Differenz 3
  if (b - a === 3 && c - b === 3) return 'vertical';

  // Diagonal links oben → rechts unten (0, 4, 8)
  if (a === 0 && b === 4 && c === 8) return 'diagonal-right';

  // Diagonal rechts oben → links unten (2, 4, 6)
  if (a === 2 && b === 4 && c === 6) return 'diagonal-left';

  return '';
}


function resetGame() {
  renderFields();               // one of the finale move to change the order of renderFields();
  winningLine = [];             // and set winningLine and winningDirection empty again  
  winningDirection = '';         // was tricky to follow every step here and understand
  fields = Array(9).fill(null);
  currentPlayer = 'O';
  gameOver = false;

  
}

