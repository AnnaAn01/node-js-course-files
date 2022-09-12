const fs = require("fs");

// creating a readable stream and specifying the encoding in the options
const rs = fs.createReadStream("./files/lorem.txt", { encoding: "utf8" });

// specifying a writable stream
const ws = fs.createWriteStream("./files/new-lorem.txt");

// // listen for the data coming in from the stream a give it a new a chung of data = dataChunk
// rs.on("data", (dataChunk) => {
//   // passing in that dataChunk
//   ws.write(dataChunk);
// });

// same as listening, but more efficient
rs.pipe(ws);
