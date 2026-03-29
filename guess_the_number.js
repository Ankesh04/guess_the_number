let randomNumber = parseInt(Math.random()  * 100 + 1);
//we change const to let because if start a new game it will be changed in the new game function

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess  = []
//previous guesses
let numGuess = 1;
//how many times user has tried
let playGame = true
//if user have attempts left or not

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value);  
        console.log(guess);
        validateGuess(guess);
    });
}



function validateGuess(guess){
    //this function is to check if the user is giving the write input like alphabets or negative numbers
    if(isNaN(guess)){
        alert('Plese Enter a valid Number')
    }
    else if(guess < 1){
        alert('Plese Enter a Number more than 0')
    }
    else if(guess > 100){
        alert('Plese Enter a Number less than 100')
    }
    else if(guess < 1){
        alert('Plese Enter a valid Number')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}


function checkGuess(guess){
    //in validation we are not sending any output to the user so that will be done in this function
    if(guess === randomNumber){
        displayMessage(`You guess it right`)
        endGame()
    }
    else if(guess > randomNumber){
        displayMessage(`Number is TOOO High`)
    }
    else if(guess < randomNumber){
        displayMessage(`Number is TOOO Low`)
    }
}

function displayGuess(guess){
    //display what user has guess
    userInput.value = '' //to clean the previous user input
    guessSlot.innerHTML += `${guess} `  //to add the user guess in previous guesses
    numGuess++; // guess remaining
    remaining.innerHTML = `${11- numGuess}`

}

function displayMessage(message){
    //it will interact with dom like lowering the guess remaining what guesses user has made etc.
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}


function endGame(){
    //as the name suggest
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame=false
    newGame();
}

function newGame(){
    //as the name suggest
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()  * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame=true
    })
}