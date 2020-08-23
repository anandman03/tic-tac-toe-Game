function turnMessage() {
    return `${currentPlayer}'s Turn`
}

function winMessage() {
    return `${currentPlayer} Wins !`
}

function drawMessage() {
    return `The Game ended in a draw !`
}

function printStatus() {
    const status = document.querySelector('#status')
    status.innerHTML = turnMessage()
}