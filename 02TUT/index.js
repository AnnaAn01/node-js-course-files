// const fs = require("fs");
// // reading a file using hard-coded path (not recommended)
// fs.readFile("./files/starter.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// console.log("Hello ...");

// // exit on uncaught error
// process.on("uncaughtException", (err) => {
//   console.log(`There was an ancaught errer: ${err}`);
//   process.exit(1);
// });

// // This way creates callback hell

// const fs = require("fs");
// const path = require("path");

// // reading a file (using path.join, not to use hard-coded path)
// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// console.log("Hello ...");

// // writing on a file
// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nice to meet you.",

//   (err) => {
//     if (err) throw err;
//     console.log("Write complete");
//   }
// );

// // append on a file
// fs.appendFile(
//   path.join(__dirname, "files", "test.txt"),
//   "Testing appendFile() method.",

//   (err) => {
//     if (err) throw err;
//     console.log("Append complete");
//   }
// );

// // writing on a file
// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nice to meet you.",

//   (err) => {
//     if (err) throw err;
//     console.log("Write complete");

//     // append on a file
//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "\n\nYes it is.",

//       (err) => {
//         if (err) throw err;
//         console.log("Append complete");
//       }
//     );
//   }
// );

// writing on a file
// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nice to meet you.",

//   (err) => {
//     if (err) throw err;
//     console.log("Write complete");

//     // append on a file
//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "\n\nYes it is.",

//       (err) => {
//         if (err) throw err;
//         console.log("Append complete");

//         fs.rename(
//           path.join(__dirname, "files", "reply.txt"),
//           path.join(__dirname, "files", "newReply.txt"),

//           (err) => {
//             if (err) throw err;
//             console.log("Rename complete");
//           }
//         );
//       }
//     );
//   }
// );

// To solve callback hell
const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    // reading data from a file called starter.txt
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));

    // we're writing that data to a new file called promiseWrite.tzt
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    // appending to that new file
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\nNice to meet you."
    );
    // renaming that file
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    );
    // to read the newly created promiseComplete file
    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "promiseComplete.txt"),
      "utf8"
    );
    // and logging the data from that file.
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};

fileOps();

// // exit on uncaught error
// process.on("uncaughtException", (err) => {
//   console.log(`There was an ancaught errer: ${err}`);
//   process.exit(1);
// });
