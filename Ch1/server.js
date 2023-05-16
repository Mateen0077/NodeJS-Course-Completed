console.log("Hello matex")


const os = require('os');
const path = require("path");
const math = require("./math");
// alternative way to import is
const {add} = require("./math");

console.log(add(2,3));
console.log("Multiplying " + math.mul(2,3));

// console.log(__dirname);
// console.log(__filename);
// console.log(os.type);
// console.log(os.version());
// console.log(os.homedir());

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));

