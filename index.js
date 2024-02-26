// Import the readline module
const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Generate random number
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Remaining attempts
let remainingAttempts = 6;

// Game loop
function gameLoop() {
  // Ask the player to enter a number
  rl.question('Please enter a number between 1 and 100: ', (guess) => {
    // Convert the player's input to an integer
    const guessNumber = parseInt(guess);

    // Check if the player's input is valid
    if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
      console.log('Invalid input. Please enter a number between 1 and 100.');
      gameLoop();
      return;
    }

    // Check if the player's input is correct
    if (guessNumber === randomNumber) {
      // The player guessed the number correctly
      console.log('Congratulations, you guessed the number correctly!');
      rl.close();
    } else {
      // The player guessed incorrectly
      remainingAttempts--;

      if (remainingAttempts === 0) {
        // The player has run out of attempts
        console.log('You have run out of attempts. The correct number was:', randomNumber);
        rl.close();
      } else {
        // The player has remaining attempts
        if (guessNumber > randomNumber) {
          console.log(`Your guess is too high. You have ${remainingAttempts} attempts remaining.`);
        } else {
          console.log(`Your guess is too low. You have ${remainingAttempts} attempts remaining.`);
        }
        gameLoop();
      }
    }
  });
}

// Start the game
gameLoop();
