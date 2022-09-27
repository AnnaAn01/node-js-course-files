const logEvents = require("../03TUT/logEvents");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

// initialize object
const myEmitter = new MyEmitter();

// add listener for the log event
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  // emit event
  myEmitter.emit("log", "Log event emited!");
}, 2000);
