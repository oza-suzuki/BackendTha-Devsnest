var fs = require("fs");

//make a folder
fs.mkdirSync("day5");

//create a file and write
fs.writeFileSync("day5/hello.txt", "hello");

//update the file information
fs.appendFileSync("day5/hello.txt", " hello world");

//print the file information onto the terminal
const data = fs.readFileSync("day5/hello.txt", "utf-8");
console.log(data);

//Rename the file name
fs.renameSync("day5/hello.txt", "day5/day5.txt");

//Remove file
fs.unlinkSync("day5/day5.txt");

//remove folder
fs.rmdir(day5);
