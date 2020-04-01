//======================//
// Constants            //
//======================//

/** Maximum number of tries */
const MAX_TRIES = 7;
/** Array of words to guess */
const WORDS = [
    "COMMITTEE",
    "TATTOO",
    "ELECTRICITY",
    "DEBUGGING",
    "LOGIC ERROR",
    "ALGORITHMS",
    "CROWDSOURCING",
    "NETWORK",
    "PARADIGM",
    "COMPILING"
];
/** Parallel array to WORDS for their definitions */
const DEFINITIONS = [
    "A group of people appointed for a specific function, typically consisting of members of a larger group",
    "A form of body modification where a design is made by inserting ink",
    "Is the set of physical phenomena associated with the presence and motion of electric charge",
    "Process of finding and removing errors from a program's source code",
    "A bug in a program that causes it to operate incorrectly, but not to terminate abnormally (or crash)",
    "A process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer",
    "To obtain (information or input into a particular task or project) by enlisting the services of a large number of people",
    "Allows your computer to connect to other computers around the world",
    "A way of thinking or a way of doing something",
    "Process of translating source code within a source file from higher-level language into lower-level language"
];
/** Letters of the alphabet */
const ALPHABET = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]
/** Sprite width */
const SPRITE_WIDTH = 60;

/** Keyboard button dimensions */
const HEIGHT = 60;
const WIDTH = 60;

//======================//
// Global Variables     //
//======================//

/** Random word for the user. */
let wordChoice = "";
/** The starting number of user mistakes. */
let mistakes = 0;
/** The number of guesses. */
let guesses = 0;
/** An array of guessed letters. */
let guessedLetters = [];
/** Current sprite left position */
let spriteCurrent = 60;

//======================//
// HTML DOM Elements    //
//======================//

/** Array of DOM buttons */
let buttons = [];

//======================//
// Constructors         //
//======================//

// Button Constructor
function Button(letter) {
    this.letter = letter;
    this.isClicked = false;
    this.btn = document.createElement("button");
    this.btn.innerHTML = letter;
    this.btn.style.width = WIDTH;
    this.btn.style.height = HEIGHT;

    // random styling to make the keys look nicer
    this.btn.style.border = "1px solid black";
    this.btn.style.float = "left";
    this.btn.style.padding = "10px 10px";
    this.btn.style.textAlign = "center"
    this.btn.style.textDecoration = "none";
    this.btn.style.display = "inline-block";
    this.btn.style.fontSize = "16px";

    // TODO: fix keyboard so that it doesnt just append vertically
    document.getElementById("keyboard").appendChild(this.btn);

    // click handler
    this.btn.onclick = checkLetter(this.btn, letter);
}


//======================//
// Functions            //
//======================//

/** Generates a random word from the array of words. */
function randomWord() {
    let wordHint = document.getElementById("wordHint");
    let randomWord = Math.floor(Math.random() * WORDS.length);
    
    wordChoice = WORDS[randomWord];
    wordHint.innerHTML = DEFINITIONS[randomWord];

    // TODO: remove the line below
    console.log(wordChoice); // for TESTING
}

/** Checks whether the clicked letter exists in the word. */
function checkLetter(button, letter) {
    return function () {
        button.onclick = null;
        button.style.backgroundColor = "black";
        button.isClicked = true;
        guesses++;

        if (!wordChoice.includes(letter)) { // if letter does not exist in word
            incMistakes();
            incHangman();
            guessedLetters.push(letter);
            return alert("Wrong!");
        } else { // letter does exist in word
            revealLetter(letter);
            guessedLetters.push(letter);

            if (isGuessed(wordChoice, guessedLetters)) {
                win();
            } else {
                return alert("Correct!");
            }
        }
    }
}

/** Creates the 26 buttons for the keyboard */
function createButtons() {
    for (let i = 0; i < ALPHABET.length; i++) {
        buttons.push(new Button(ALPHABET[i]));
    }
}

/** Adds a body part to the hangman */
function incHangman() {
    let hangmanImage = document.getElementById("hangmanImage");

    spriteCurrent -= SPRITE_WIDTH;

    hangmanImage.style.background = "url(/images/Spritesheet.png) " + spriteCurrent + "px 0";
}

/** Increments user mistakes by 1 and calls gameOver if tries reach 7 */
function incMistakes() {
    let mistakesText = document.getElementById("mistakes");

    mistakes++;

    mistakesText.innerHTML = mistakes + "/7";
    if (mistakes === MAX_TRIES) {
        gameOver();
    }
}

/** check if the word has been guessed */
function isGuessed(word, guesses) {
    for (let i = 0; i < word.length; i++) {
        if (!guesses.includes(word.charAt(i))) {
            return false;
        }
    }
    return true;
}

/** Reveals a letter of the random word (user guessed correct) */
function revealLetter(letter) {
    // TODO: implement
}

/** Ends the game and displays message to user */
function gameOver() {
    alert("GAME OVER. OUT OF TRIES.");
    alert("The word was: " + wordChoice);
    reset();
}

/** Ends the game and displays message to user */
function win() {
    // TODO: HAGman
    alert("Congratulations! You saved HAGman!");
    reset();
}

/** resets the game */
function reset() {
    location.reload();
}


//======================//
// Main()               //
//======================//
createButtons();
randomWord();