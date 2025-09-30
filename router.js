
import express from "express";
import {faker} from "@faker-js/faker"
import mysql from 'mysql2';

const router = express.Router();

const user = {
    id : faker.string.uuid(),
    name:faker.person.firstName(),
    email:faker.internet.email(),
    password:faker.internet.password(),
}

console.log(user);

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"admin",
    database:"node"
})


let quer = "insert into users (id,username,email,password) values (?,?,?,?)"
let data = [user.id,user.name,user.email,user.password]

con.query(quer,data,(err,result)=>{
    console.log(result);
    
})



router.get("/users",(req,res)=>{
    let getData = "Select id,username,email,password from users";
    con.query(getData,(err,result)=>{
        console.log(result);     
        res.send(result)
    })
    con.end()
})



export default router;