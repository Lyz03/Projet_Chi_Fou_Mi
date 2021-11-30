const userP = document.querySelector('#user p');
const pcP = document.querySelector('#pc p');
const resultSpan = document.querySelector('#result span');
const userPointsP = document.getElementById('user_points');
const pcPointsP = document.getElementById('pc_points');

let userChoice = '';
let pcChoice;
let playerTurn = 1;
let userPoints = 0;
let pcPoints = 0;

document.getElementById('rock').addEventListener("click", function () {
    user('rock');
});
document.getElementById('paper').addEventListener("click", function () {
    user('paper');
});
document.getElementById('scissors').addEventListener("click", function () {
    user('scissors');
});

function user(button) {
    if (userPoints === 3 || pcPoints === 3){
        win();
        resetButton();
    } else {
        if (playerTurn % 2 === 1) {
            userChoice = button;
            userP.innerText = button;
            playerTurn++;
        } else {
            pc();
            winCondition(userChoice, pcChoice, userPoints);
        }

        userPointsP.innerText = 'Vous : ' + userPoints;
        pcPointsP.innerText = 'Ordi : ' + pcPoints;
    }
}

function pc() {
    playerTurn++;
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            pcChoice = 'rock';
            pcP.innerText = 'rock';
            break
        case  1:
            pcChoice = 'paper';
            pcP.innerText = 'paper';
            break
        case 2:
            pcChoice = 'scissors';
            pcP.innerText = 'scissors';
            break
    }
}

/*
* Search if someone won
 */
function winCondition() {
    if (userChoice === pcChoice) {
        pcPoints += 0;
        userPoints += 0;
    } else if (userChoice === 'rock' && pcChoice === 'scissors') {
        userPoints += 1;
    } else if (pcChoice === 'rock' && userChoice === 'scissors') {
        pcPoints += 1;
    } else if (userChoice === 'paper' && pcChoice === 'rock') {
        userPoints += 1;
    } else if (pcChoice === 'paper' && userChoice === 'rock') {
        pcPoints += 1;
    } else if (userChoice === 'scissors' && pcChoice === 'paper') {
        userPoints += 1;
    } else if (pcChoice === 'scissors' && userChoice === 'paper') {
        pcPoints += 1;
    }
}

function win() {
    if (userPoints === 3) {
        resultSpan.innerText = 'Bravo ! Vous avez gagné !'
    } else if (pcPoints === 3) {
        resultSpan.innerText = 'L\'ordi à gagné !'
    }
}

function resetButton() {
    const resetButton = document.getElementById('resetButton');
    resetButton.style.display = 'block';
    resetButton.addEventListener("click", function () {
        userChoice = '';
        pcChoice = '';
        playerTurn = 1;
        userPoints = 0;
        pcPoints = 0;
        resultSpan.innerText = '';
        userPointsP.innerText = '';
        pcPointsP.innerText = '';
    });
}