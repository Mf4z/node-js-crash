// Called a default export

// const generateRandomNumber = require("./utils"); // Import function from utils

// No need for .js using common js import

// Importing multiple
const { generateRandomNumber, celciusToFahrenheit } = require("./utils"); // Import function from utils

console.log(`Random Number: ${generateRandomNumber()}`);

console.log(`Celcius to fahrenhiet: ${celciusToFahrenheit(0)}`);
