import express from 'express'
import createTB from './crud/createTB.js';
import insertData from './crud/insertData.js';
import connection from './db/conn.js';
const app = express()
const port = 3000;

app.get("/",(req,res)=>{
    res.send("Welcome to server get response")
})

app.get("/createtb",  (req,res)=>{
    
res.send("table created successfully")
})

app.get("/insert", (req,res)=>{
    var insert_Data = new insertData();
   connection.query(insert_Data,function(err,result){
if(err)
    res.send(err);
    res.json(result)

   })
    
})

app.listen(port,()=> console.log(`server is running on ${port}`))