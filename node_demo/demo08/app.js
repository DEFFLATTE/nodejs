
// 管道流

const fs = require('fs');

var readSteam = fs.createReadStream('./seaside.jpg');

var writeStream = fs.createWriteStream('./data/seaside.jpg');

readSteam.pipe(writeStream);