// const path = require("path")
// const os = require("os")
// const fs = require("fs")

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

// const deleteFile = fs.unlinkSync("file.txt")
// console.log(deleteFile);

// 1callback 
// 2.promises
// 3. async/await


// const fs = require("fs/promises")
// const path = require("path")

// const filename = "CallFile.txt"
// const filepath = path.join(__dirname, filename)

// create file by callback file module

// fs.writeFile(filepath,"Hello this is call back related file module","utf-8",(err)=>{
//     if(err){
//         console.log(err);

//     }else{
//         console.log("file created successfully");
//     }
// })


// Read file

// fs.readFile(filepath,"utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })


// Update file
// fs.appendFile(filepath,"\nHello this is append file","utf-8",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file updated successfully");
//     }
// })

// Deleted file
// fs.unlink(filepath,(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file deleted successfully");
//     }
// })


//File system Promises 

// fs.promises.writeFile(filepath,"Hello this is my promises file","utf-8").then(()=>{
//     console.log("file created successfully");
// }).catch((err)=>{
//     console.log(err);
// })

// fs.promises.readFile(filepath,"utf-8").then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


// Update file by promises

// fs.promises.appendFile(filepath,"\nHello this is promises append file","utf-8").then(()=>{
//     console.log("file updated successfully");
// }).catch((err)=>{
//     console.log(err);
// })

// delete file 
// fs.promises.unlink(filepath).then(()=>{
//     console.log("file deleted successfully");
// }).catch((err)=>{
//     console.log(err);
// })

//File system Async/Await

// async function writeFile() {
//     try {
//         await fs.writeFile(filepath, "Hello this is my async/await file", "utf-8")
//         console.log("file created successfully");
//     } catch (error) {
//         console.log(error);
//     }

// }

// writeFile()


// async function renameFile(){
//     try {
//         await fs.rename(filepath,"CallFileAsync.txt")
//         console.log("file renamed successfully");
//     } catch (error) {
//         console.log(error);
//     }
// }


// renameFile()


// creating server

// const http = require("http")
// import http from "http"

// const server = http.createServer((req,res)=>{
//     if(req.url ==="/"){
//         res.write("<h1>Welcome to Home Page</h1>")
//         res.end()
//     }else if(req.url==="/contact"){
//         res.write("<h1>Welcome to Contact Page</h1>")
//         res.end()
//     }else if(req.url==="/about"){
//         res.write("<h1>Welcome to About Page</h1>")
//         res.end()
//     }else{
//         res.write("<h1>404 Not Found</h1>")
//         res.end()
//     }
// })

// const PORT = 3000
// server.listen(PORT,()=>{
//     console.log(`Server is running on port ${PORT}`);
// })


// import readline from "readline"

// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// const todo = []

// const showmenu = ()=>{
//     console.log("1.Add Task");
//     console.log("2.Show Task");
//     console.log("3.Exit");
//     rl.question("Enter your choice: ",handleInput)
// }

// const handleInput = (option)=>{
//     if(option=="1"){
//         rl.question("Enter your task : ",(task)=>{
//             todo.push(task);
//             console.log("Task added successfully");
//             showmenu();
//         })
//     }else if(option=="2"){
//         console.log("Todo Task List : ");
//         todo.forEach((task,index)=>{
//             console.log(`${index+1}. ${task}`);
//         })
//         showmenu();
//     }else if(option=="3"){
//         console.log("Bye Bye");
//         rl.close();
//     }else{
//         console.log("Invalid option");
//         showmenu();
//     }
// }

// handleInput()






import express from 'express'
import dotenv from 'dotenv'
import * as path from "path";
import router from "./router.js";

dotenv.config()

const app = express()
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// app.get("/:username",(req,res)=>{
//     const {username} = req.params;
//     console.log(username);
    
//     res.send(`<h1>Welcome to express ${username}</h1>`)
// })

// app.get("/user/:username/bio/:slug",(req,res)=>{
//     const {username,slug} = req.params;
//     console.log(username,slug);
    
//     res.send(`<h1> ${slug}</h1>`)
// })

// app.get("/about",(req,res)=>{
//     const data = req.query;
//     console.log(data);
//     res.send("<h1>About Page</h1>")
// })
app.set("view engine", "ejs")
app.set("views",path.join(import.meta.dirname,'views'))
app.use("/",router);

app.use((req,res)=>{
    // return res.status(404).send("Page Not Found")
    return res.status(404).sendFile(path.join(import.meta.dirname,"public","404.html"))
})


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
