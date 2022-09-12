const fs = require("fs");

// create a directory with fs.mkdir - make directory

// if the directory already exists, let's not create it
if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory created");
  });
}

// if it does exist, remove (delete) the directory
if (fs.existsSync("./new")) {
  fs.rmdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory removed");
  });
}
