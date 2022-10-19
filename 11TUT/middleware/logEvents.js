// usses common js, e use require
const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

// importing the fs module
const fs = require("fs");
// importing promises
const fsPromises = require("fs").promises;
// importing the path module
const path = require("path");

// defining logEvents function
const logEvents = async (message, logName) => {
  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  // using the dateTime and creating a tab delimited log file
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);
  try {
    // going one directory up with ".."
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "..", "logs"));
    }

    await fsPromises.appendFile(
      path.join(__dirname, "..", "logs", logName),
      logItem
    );
  } catch (err) {
    console.log(err);
  }
};

const logger = (req, res, next) => {
  logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, "reqLog.txt");
  console.log(`${req.method} ${req.path}`);
  next();
};

// exporting the logEvents function and we'll be able to use it in the index.js file
module.exports = { logger, logEvents };
