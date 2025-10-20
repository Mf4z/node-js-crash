import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log("Hello " + name);
}

function goodbyeHandler(name) {
  console.log("Goodbye " + name);
}

// Register event listeners
myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodbyeHandler);

// Error Handling
myEmitter.on("error", (err) => {
  console.log("An Error Occurred : ", err);
});

// Emit events
myEmitter.emit("greet", "Muhammad");
myEmitter.emit("goodbye", "Muhammad");

// Simulate Error
myEmitter.emit("error", new Error("Something went wrong"));
