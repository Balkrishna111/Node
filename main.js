const fs = require("fs");

fs.appendFile("example.txt", "this is a first text \n", (err) => {
  console.log(err);
});

fs.readFile("example.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
