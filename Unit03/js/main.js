document.querySelector('#title').innerText = "Guessing Game"

//Pick a random number between 0 and 16

let correctNumber = Math.floor(Math.random() * 15)

let guessed = false
let totalGuesses = 0
let gamerGuess = 0
correctNumber += 1

console.log(`The correct number is ${correctNumber}`)

function evalGuess() {
    totalGuesses += 1 //total guesses = total guesses +1
    gamerGuess = document.querySelector('#guess').value
    console.log(correctNumber, gamerGuess)
    const feedback = document.querySelector('#feedback')

    if (gamerGuess == correctNumber) {
        feedback.innerText = 'You are a winner!!!'
    }
    else if (gamerGuess > correctNumber && gamerGuess < 16) {
        feedback.innerText = 'Too high, try again.'
    }
    else if (gamerGuess < correctNumber && gamerGuess > 0) {
        feedback.innerText = 'Too low, try again.'
    }
    else {
        feedback.innerText = 'Please Choose a number between 1 & 15 and try again.'
    }
    //End of if else statement

    const attempts = document.querySelector('#attempts')
    attempts.innerText = `${totalGuesses}`
}// End of evalGuess Function