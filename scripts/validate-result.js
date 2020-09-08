// Check if any result occurs
function resultValidation() {
    //In win-moves.js
    if(!checkStatus()) {
        checkDraw()
        changeUser()
    }
    else {
        claimWin()
        return
    }
}

// If the game ends claim win
function claimWin() {
    document.querySelector('#final-screen').style.visibility = 'visible'
    document.querySelector('#board').style.visibility = 'hidden'
    document.querySelector('#status').style.visibility = 'hidden'

    const winner = document.querySelector('#winner')
    winner.innerHTML = winMessage()
    gameStatus = false
}

// If the game ends in a draw
function checkDraw() {
    let roundDraw = !currentGameState.includes('')
    if(!roundDraw) {
        return
    }
    
    document.querySelector('#final-screen').style.visibility = 'visible'
    document.querySelector('#board').style.visibility = 'hidden'
    document.querySelector('#status').style.visibility = 'hidden'

    const winner = document.querySelector('#winner')
    winner.innerHTML = drawMessage()
    gameStatus = false
}

// Change player after each move
function changeUser() {
    currentPlayer = (currentPlayer == 'X') ? 'O' : 'X'
    printStatus()
}