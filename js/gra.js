//  POŁĄCZENIA Z HTML
var buttonScissors = document.getElementById('scissors');
var buttonRock = document.getElementById('rock');
var buttonPaper = document.getElementById('paper');
var newGameButton = document.getElementById('newGame');
var restartGameButton = document.getElementById('restart');
var result = document.getElementById('result');
//var playerScore = document.getElementById('user-score');
//var computerScore = document.getElementById('pc-score');
// TODO: przerobic calosc na taki obiekt gameParams
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
    result.innerHTML = ' ';
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
        result.innerHTML = 'The winnner is Computer : ' + gameParams.computerScore + ':' + gameParams.playerScore;
        toggleButtonDisabled(true);
        showTable();
    } else {
        result.innerHTML = 'The winner is Player :' + gameParams.playerScore + ':' + gameParams.computerScore;
        toggleButtonDisabled(true);
        showTable();
    }
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
        result.innerHTML += 'DRAW! You played ' + userChoice + '<br>' + 'Computer got ' + computerChoice + '<br>'
    } else if (
        computerChoice === 'Rock' && userChoice === 'Scissors' ||
        computerChoice === 'Paper' && userChoice === 'Rock' ||
        computerChoice === 'Scissors' && userChoice === 'Paper'
    ) {
        whoWon = 'Computer is the winner';
        result.innerHTML += 'You LOST! You played ' + userChoice + '<br>' + 'Computer got ' + computerChoice + '<br>';
        gameParams.computerScore += 1;
    } else {
        whoWon = 'Player is the winner';
        result.innerHTML += 'You WON! You played ' + userChoice + '<br>' + 'Computer got ' + computerChoice + '<br>';
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
    const tableContainer = document.getElementById('modal');
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








///Show Modal
(function(){ 
	/* W kodzie HTML i CSS dodaliśmy style dla prostego modala, który będzie zawsze wyśrodkowany w oknie. 
	
	Teraz wystarczy napisać funkcję otwierającą modal:
	*/
	
	var showModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.add('show');
	};
	
	// Mimo, że obecnie mamy tylko jeden link, stosujemy kod dla wielu linków. W ten sposób nie będzie trzeba go zmieniać, kiedy zechcemy mieć więcej linków lub guzików otwierających modale
	
	var modalLinks = document.querySelectorAll('.show-modal');
	
	for(var i = 0; i < modalLinks.length; i++){
		modalLinks[i].addEventListener('click', showModal);
	}
	
	// Dodajemy też funkcję zamykającą modal, oraz przywiązujemy ją do kliknięć na elemencie z klasą "close". 

	var hideModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.remove('show');
	};
	
	var closeButtons = document.querySelectorAll('.modal .close');
	
	for(var i = 0; i < closeButtons.length; i++){
		closeButtons[i].addEventListener('click', hideModal);
	}
	
	// Dobrą praktyką jest również umożliwianie zamykania modala poprzez kliknięcie w overlay. 
	
	document.querySelector('#modal-overlay').addEventListener('click', hideModal);
	
	// Musimy jednak pamiętać, aby zablokować propagację kliknięć z samego modala - inaczej każde kliknięcie wewnątrz modala również zamykałoby go. 
	
	var modals = document.querySelectorAll('.modal');
	
	for(var i = 0; i < modals.length; i++){
		modals[i].addEventListener('click', function(event){
			event.stopPropagation();
		});
	}
	
	/* I to wszystko - mamy już działający modal! 
	
	ĆWICZENIE: 
	Zmień funkcję showModal tak, aby w momencie wyświetlania była zmieniana treść nagłówka na dowolną inną, np. "Modal header". 
	*/
	
})(); 