let randomnumber = parseInt(Math.random() * 100 + 1)
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessslot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworhi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevguess = []; //we have mde this array to store the previous guesses of the user that he had chosen so far.
let numguesses = 1; //this is the variable that we will keep updating to see that we hwo many more guesses will be remaining

let playgame = true;

if (playgame) {
    //first we need to restrict the by default behaviour of  the submit button hence to do that we can do:
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateguess(guess);
    })
}
//functions:
function validateguess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess < 1) {
        alert('Please enter a number that is greater than 0')
    } else if (guess > 100) {
        alert('Please enter a number that is less than or equal to 100')
    } else {
        prevguess.push(guess);
        if (numguesses === 11) {
            displayguess(guess);
            displaymessage(`the game was over.The random number was ${randomnumber}`)
            endgame()
        } else {
            displayguess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess) {
    if (guess === randomnumber) {
        displaymessage('you guessed it right')
        endgame();
    } else if (guess < randomnumber) {
        displaymessage('your guess is too low')
    } else if (guess > randomnumber) {
        displaymessage('your guess is too high')
    }
}

function displayguess(guess) {
    userInput.value = '' //this is because we need to keep reseting the users input value as each time the user will amke a different guess
    guessslot.innerHTML += `${guess} `
    numguesses++;
    remaining.innerHTML = `${11 - numguesses}`


}

function displaymessage(message) {
    loworhi.innerHTML = `<h2>${message}</h2>`
}

function endgame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = '<h2 id="newgame">Start new game</h2>'
    startOver.appendChild(p)
    playgame = false
    newgame();
}

function newgame() {
    const newgamebutton = document.querySelector('#newgame')
    newgamebutton.addEventListener('click', function() {
        randomnumber = parseInt(Math.random() * 100 + 1)
        prevguess = [];
        numguesses = 1;
        guessslot.innerHTML = '';
        remaining.innerHTML = '10'
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playgame = true;
    })
}