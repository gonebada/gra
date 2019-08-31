//  Get modal element
const modal = document.getElementById('resultModal');
// Get close button
const closeBtn = document.getElementsByClassName('closeBtn')[0];
const modalBodyContent = document.getElementById('modalBodyContent');
//Listen for open click
//Listen for oustide click
window.addEventListener('click', clickOutside);
//Listen for close click
closeBtn.addEventListener('click', closeModal);

// function to open modal
function openModal() {
    modal.style.display = 'block';
}
// function to open modal
function closeModal() {
    modal.style.display = 'none';
}
// function to close modal if outside click
function clickOutside(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}


//  POŁĄCZENIA Z HTML
var buttonScissors = document.getElementById('scissors');
var buttonRock = document.getElementById('rock');
var buttonPaper = document.getElementById('paper');
var newGameButton = document.getElementById('newGame');
var restartGameButton = document.getElementById('restart');
var resultBasic = document.getElementById('resultBasic');
var result = document.getElementById('result');
//var playerScore = document.getElementById('user-score');
//var computerScore = document.getElementById('pc-score');
var gameParams = {
    playerScore: 0,
    computerScore: 0,
    roundsToWin: 0,
    currentRound: 0,
    progress: []
};
var pastRounds = 0;
var buttonsMove = document.querySelectorAll('.player-move');

newGameButton.addEventListener('click', function () {
    resetGame();
    gameParams.roundsToWin = window.prompt('Do ilu rund wygranych chcesz grac?');
    if (gameParams.roundsToWin !== '' && !isNaN(gameParams.roundsToWin)) {

        toggleButtonDisabled(false);
    } else {
        toggleButtonDisabled(true);
        alert('Invalid number');
    }
});

restartGameButton.addEventListener('click', function () {
    resetGame();
    gameParams.playerScore = 0;
    gameParams.computerScore = 0;
    gameParams.roundsToWin = 0;
    gameParams.currentRound = 0;
    progress = [];
})

function resetGame() {
    resultBasic.innerHTML = ' ';
    toggleButtonDisabled(true);
}

// buttonScissors.addEventListener('click', function () {
//     playerMove('Scissors');
// });
// buttonRock.addEventListener('click', function () {
//     playerMove('Rock');
// });
// buttonPaper.addEventListener('click', function () {
//     playerMove('Paper');
// });

//for (var i = 0; i < buttonsMove.length; i++) {
//    var currentMove = buttonsMove[i].getAttribute('data-move');
//    buttonsMove[i].addEventListener('click', function () {
//        playerMove(currentMove);
//    });
//}

// FUNKCJA PLAYER CHOICE
document.querySelectorAll('.player-move').forEach(function (element) {
    element.addEventListener('click', function () {
        playerMove(element.getAttribute('data-move'));
    });
});

function playerMove(userChoice) {
    var winner;
    var computerChoice = getRandomNumber();
    if (gameParams.computerScore < gameParams.roundsToWin &&
        gameParams.playerScore < gameParams.roundsToWin) {
        // FUNKCJA PODAJĄCA OSOBĘ WYGRANĄ
        showResult(userChoice, computerChoice);
    } else if (gameParams.computerScore == gameParams.roundsToWin) {
        modal.style.display = 'block';
        result.innerHTML = 'The winnner is Computer - ' + gameParams.computerScore + ':' + gameParams.playerScore;
        toggleButtonDisabled(true);
        showTable();
    } else {
        modal.style.display = 'block';
        result.innerHTML = 'The winner is Player -' + gameParams.playerScore + ':' + gameParams.computerScore;
        toggleButtonDisabled(true);
        showTable();
    }
}

///testowanie do modala
function showModal() {
    modalBodyContent.innerHTML = 'The winner is Player :';
    modal.style.display = 'block';
}


// FUNKCJA losowania
function getRandomNumber() {
    var computerChoice = ['Paper', 'Rock', 'Scissors']
    var getRandomNumber = Math.floor(Math.random() * 3); //+ min;
    return computerChoice[getRandomNumber];
}

//FUNKCJA do komunikatu
var showResult = function (userChoice, computerChoice) {
    var whoWon;
    if (computerChoice === userChoice) {
        whoWon = 'draw';
        resultBasic.innerHTML += 'DRAW! You played ' + userChoice + '<br>' + 'Computer got ' + computerChoice + '<br>'
    } else if (
        computerChoice === 'Rock' && userChoice === 'Scissors' ||
        computerChoice === 'Paper' && userChoice === 'Rock' ||
        computerChoice === 'Scissors' && userChoice === 'Paper'
    ) {
        whoWon = 'Computer scored point';
        resultBasic.innerHTML += 'You LOST! You played ' + userChoice + '<br>' + 'Computer got ' + computerChoice + '<br>';
        gameParams.computerScore += 1;
    } else {
        whoWon = 'Player scored point';
        resultBasic.innerHTML += 'You WON! You played ' + userChoice + '<br>' + 'Computer got ' + computerChoice + '<br>';
        gameParams.playerScore += 1;
    }
    gameParams.currentRound += 1;
    gameParams.progress.push({
        roundNumber: gameParams.currentRound,
        computerScore: gameParams.computerScore,
        playerScore: gameParams.playerScore,
        whoWon: whoWon
    });
    console.log(gameParams);
}

var toggleButtonDisabled = function (flag) {
    buttonScissors.disabled = flag;
    buttonRock.disabled = flag;
    buttonPaper.disabled = flag;
}
//Insert into table
/*
function showModal() {
    let modal = document.getElementById('modal');
    modal.innerHTML = '<table><thead><tr><th>Rounds Played</th><th>Player Score</th><th>Computer Score</th><th>Round Result</th></tr></thead><tbody>';
    var tableBody = document.createElement('table-body');
    for (i = 0; i < gameParams.length; i++) {
        tableBody.innerHTML += '<tr><td>' + gameParams[i].roundsToWin + '</td><td>' + gameParams[i].playerScore + '</td><td>' + gameParams[i].computerScore + '</td>';
    }
    modal.innerHTML += '</tbody>';
}*/

function showTable() {
    const table = createScoreTable();
    const tableContainer = document.getElementById('modal-table');
    tableContainer.innerHTML = "";
    tableContainer.appendChild(table);
}

function createScoreTable() {
    const theadText = ["Rounds Played", "Computer Score", "Player Score", "Result"];
    let table = document.createElement("table"),
        thead = document.createElement("thead"),
        tbody = document.createElement("tbody"),
        trow = document.createElement("tr");

    theadText.forEach(text => {
        let td = document.createElement("td");
        td.innerHTML = text;
        trow.appendChild(td);
    });
    thead.appendChild(trow);

    let progress = gameParams.progress;

    for (var i = 0; i <= progress.length; i++) {
        let trow = document.createElement("tr");
        let progressObj = progress[i];

        for (var round in progressObj) {
            let td = document.createElement("td");
            td.innerHTML = progressObj[round];
            trow.appendChild(td);
        }
        tbody.appendChild(trow);
    }
    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
}