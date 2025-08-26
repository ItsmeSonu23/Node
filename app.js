const path = require("path")

// console.log(__filename)
// console.log(__dirname);

const filePath = path.join(__dirname,"file.txt")
console.log(filePath);

const parsedata = path.parse(filePath)
console.log(parsedata);

const resolvedPath = path.resolve(filePath)
console.log(resolvedPath);

const ext = path.extname(filePath)
console.log(ext);

const base = path.basename(filePath)
console.log(base);

const dirname = path.dirname(filePath)
console.log(dirname);