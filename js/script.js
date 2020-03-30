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
    "Word 2",
    "Word 3",
    "Word 4",
    "Word 5",
    "Word 6",
    "Word 7",
    "Word 8",
    "Word 9",
    "Word 10"
];
/** Parallel array to WORDS for their definitions */
const DEFINITIONS = [
    "A group of people appointed for a specific function, typically consisting of members of a larger group", 
    "A form of body modification where a design is made by inserting ink", 
    "is the set of physical phenomena associated with the presence and motion of electric charge",
    "Definition 2", 
    "Definition 4",
    "Definition 5",
    "Definition 6",
    "Definition 7",
    "Definition 8",
    "Definition 9",
    "Definition 10"
];
/** Letters of the alphabet */
const ALPHABET = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]

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

/** Creates a button */
function Button() {
    for (let i = 0; i < ALPHABET.length; i++) {
        document.getElementById("keyboard").innerHTML += "<button>" + Button[i] + "</button>";
    }
    
}Button();


//======================//
// Functions            //
//======================//

/** Generates a random word from the array of words. */
function randomWord () {
    wordChoice = WORDS[Math.floor(Math.random() * WORDS.length)];
    
}


