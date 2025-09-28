function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function celciusToFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

// Export file using common js
// For exporting just one
module.exports = generateRandomNumber;

// For exporting multiple
module.exports = {
  generateRandomNumber,
  celciusToFahrenheit,
};
