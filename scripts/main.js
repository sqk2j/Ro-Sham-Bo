let weaponChoice = [
    'Rock',
    'Paper',
    'Scissors'
]

function computerPlay(){
    let randomNumber = Math.floor(Math.random() * (weaponChoice.length));
    return weaponChoice[randomNumber];
}


function playRound(playerSelection, computerSelection){
    if (playerSelection == 'Rock' && computerSelection == "Rock"){
        return 'Rocks. Draw';
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper'){
        return 'Paper over Rock. I win.';
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors'){
        return 'Rock beats Scissors. You win';
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock'){
        return 'Paper over Rock. You win.';
    } else if (playerSelection == 'Paper' && computerSelection == 'Paper'){
        return 'Paper. Draw';
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors'){
        return 'Scissors cuts Paper. I win';
    } else if (playerSelection = 'Scissors' && computerSelection == 'Rock'){
        return 'Rock crushes Scissors. I win';
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper'){
        return 'Scissors cuts paper. You got me';
    } else if (playerSelection == 'Scissors' && computerSelection == "Scissors"){
        return 'Scissors. Draw';
    }
}

const playerSelection = 'Rock';
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
