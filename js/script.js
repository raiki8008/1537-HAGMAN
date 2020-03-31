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
/** An array of guessed letters. */
let guessedLetters = [];

//======================//
// HTML DOM Elements    //
//======================//

/** Array of DOM buttons */
let buttons = [];

//======================//
// Constructors         //
//======================//

// Generate Keyboard keys
function createButtons() {
    for (let i = 0; i < ALPHABET.length; i++) {
        buttons.push(new Button(ALPHABET[i]));
    }
}

// Button Constructor
function Button(letter, clicked) {
    this.letter = letter;
    this.clicked = false;
    this.btn = document.createElement("button");
    this.btn.innerHTML = letter;
    this.btn.style.width = WIDTH;
    this.btn.style.height = HEIGHT;
    document.body.appendChild(this.btn);
};


//======================//
// Functions            //
//======================//

/** Generates a random word from the array of words. */
function randomWord() {
    wordChoice = WORDS[Math.floor(Math.random() * WORDS.length)];
}



//======================//
// Main()               //
//======================//
createButtons();