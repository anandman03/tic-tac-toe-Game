console.log('Your JS is linked up. Be the person you needed when you were little.')

// All variables and board section
let currentPlayer = ''
let gameStatus = true

let currentGameState = ['', '', '', '', '', '', '', '', '']


// Click events handle are defined here
document.querySelectorAll('#cell').forEach(cell => cell.addEventListener('click', handleCellClick));

// When cell is clicked
function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target
    const clickedCellIndex = parseInt(clickedCell.getAttribute('cell-index'))

    if(currentGameState[clickedCellIndex] != '' || !gameStatus) {
        return
    }
    playMove(clickedCell, clickedCellIndex)
    resultValidation()
}

// Play move if it is valid
function playMove(clickedCell, clickedCellIndex) {
    currentGameState[clickedCellIndex] = currentPlayer
    clickedCell.innerHTML = currentPlayer
}

// All the helper functions are defined here
function userInput(choice) {
    currentPlayer = choice
    const choiceSection = document.querySelector('#choice')
    const boardSection = document.querySelector('#board')
    
    choiceSection.style.visibility = 'hidden'
    boardSection.style.visibility = 'visible'

    printStatus()
}