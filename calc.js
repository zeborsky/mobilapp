// Selecting DOM elements
let screen = document.querySelector('.screen'); // Represents the main display screen
let resultsScreen = document.querySelector('.results-screen'); // Represents the results display screen

// Array to store calculation results
let resultsArr = [];

// Initialize the display string
let displayStr = "";

// Function to handle input on the main display screen
function screenFunc(symb) {
    // Limit the length of the display string to 19 characters
    if (displayStr.length >= 19) {
        return;
    }

    // Function to check if a character is an arithmetic operation
    function isOperation(char) {
        return char === '+' || char === '-' || char === '*' || char === '/';
    }

    // Function to check if a character is a number
    function hasNumbers(char) {
        return char >= '0' && char <= '9';
    }

    // Get the last character in the display string
    const lastChar = displayStr.slice(-1);

    // Handling different cases for input
    if (displayStr.length === 0 && symb !== '-' && !isOperation(symb)) {
        displayStr += symb; // Append the symbol to the display string
    } else if (displayStr.length === 0 && symb === '-') {
        displayStr += symb; // Append the symbol to the display string (for negative numbers)
    } else if ((displayStr.length === 0 || (displayStr.length === 1 && lastChar === '-')) && !hasNumbers(symb)) {
        return; // Do not allow non-numeric characters after a negative sign
    } else if (isOperation(lastChar) && isOperation(symb)) {
        displayStr = displayStr.slice(0, -1) + symb; // Replace the last operation with the new one
    } else {
        displayStr += symb; // Append the symbol to the display string
    }

    // Update the main display screen with the updated display string
    screen.innerText = displayStr;
}

// Function to perform calculation
function calkFunk() {
    // Evaluate the display string
    displayStr = eval(displayStr);
    // Convert the result to a string
    displayStr = displayStr.toString();

    // Store the result in the results array
    resultsArr.push(displayStr);
    // Update the results display screen with the array contents
    resultsScreen.innerText = "results: " + resultsArr.toString();

    // Update the main display screen with the result
    screen.innerText = displayStr;
}

// Function to clear the main display screen
function clearFunc() {
    displayStr = ""; // Clear the display string
    screen.innerText = displayStr; // Update the main display screen
}

// Function to remove the last character from the main display screen
function removeNumberFunc() {
    displayStr = displayStr.substring(0, displayStr.length - 1); // Remove the last character from the display string
    screen.innerText = displayStr; // Update the main display screen
}

// Function to clear the results array and the results display screen
function clearResultsArr() {
    resultsArr.splice(0, resultsArr.length); // Clear the results array
    resultsScreen.innerText = "results: " + resultsArr.toString(); // Update the results display screen
}

