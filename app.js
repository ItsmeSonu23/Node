const path = require("path")
const os = require("os")
const fs = require("fs")

// console.log(__filename)
// console.log(__dirname);

// const filePath = path.join(__dirname,"file.txt")
// console.log(filePath);

// const parsedata = path.parse(filePath)
// console.log(parsedata);

// const resolvedPath = path.resolve(filePath)
// console.log(resolvedPath);

// const ext = path.extname(filePath)
// console.log(ext);

// const base = path.basename(filePath)
// console.log(base);

// const dirname = path.dirname(filePath)
// console.log(dirname);

// console.log(os.platform());
// console.log(os.userInfo());
// console.log(os.arch());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.uptime());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.networkInterfaces());
// console.log(os.cpus());
// console.log(os.tmpdir());
// console.log(os.type());


// let filedata = "Hello i am sonu"
// const write = fs.writeFileSync("file.txt",filedata,"utf-8")
// console.log(write);

// const appendData = fs.appendFileSync("file.txt","\nHello i am raj","utf-8")
// console.log(appendData);

// const read = fs.readFileSync("file.txt","utf-8")
// console.log(read);

const deleteFile = fs.unlinkSync("file.txt")
console.log(deleteFile);
