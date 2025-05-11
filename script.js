function init() {
  renderFields();

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

let currentPlayer = 'X';
let gameOver = false;
let winningLine = [];
let winningDirection = '';



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
      if (winningLine[1] === i) {
        cell.classList.add(`line-${winningDirection}`);
      }
    }


    if (!fields[i] && !gameOver) {
      cell.addEventListener('click', () => handleClick(i));
    }

    field.appendChild(cell);
  }
}



function handleClick(index) {
  if (fields[index] || gameOver) return;

  fields[index] = currentPlayer;
  renderFields();

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

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
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
  fields = Array(9).fill(null);
  currentPlayer = 'X';
  gameOver = false;
  renderFields();
}

