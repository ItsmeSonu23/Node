
import express from "express";

const router = express.Router();


router.post("/login",(req,res)=>{
    const {username,password} = req.body;
    console.log(username,password);
    res.send(`<h1>Login Page ${username} : ${password}</h1>`)
})

router.get("/name",(req,res)=>{
    const name = "Nikhil";
    res.render('Data',{name});
})

export default router;