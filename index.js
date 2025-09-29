// Called a default export

// const generateRandomNumber = require("./utils"); // Import function from utils

// No need for .js using common js import

// Importing multiple
// const { generateRandomNumber, celciusToFahrenheit } = require("./utils"); // Import function from utils

// console.log(`Random Number: ${generateRandomNumber()}`);

// console.log(`Celcius to fahrenhiet: ${celciusToFahrenheit(0)}`);

// Importing using module type | importing as default, no need for { }
// {} is needed for any other export
import getPosts, { getPostsLength } from "./postController.js";

console.log(getPosts());

console.log(`Length of posts : ${getPostsLength()}`);

// import { getPosts } from "./postController.js";
