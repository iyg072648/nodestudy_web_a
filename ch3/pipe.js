const fs = require("fs");

const readStream = fs.createReadStream("./readMe.txt", "utf8")
const writeStrem = fs.createWriteStream("./writePipe.txt")

readStream.pipe(writeStrem);