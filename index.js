import express from 'express'
import createTB from './crud/createTB.js';
import connection from './db/conn.js';
import bodyParser from 'body-parser';
const app = express()
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.get("/",(req,res)=>{
    res.send("Welcome to server get response")
})
//create table
app.get("/createtb",  (req,res)=>{
    
res.send("table created successfully")
})
//insert new row
app.get("/insert",(req,res) =>{
  connection.connect(function(err){
        console.log("Connected");
        var sql = "INSERT INTO customers (name,address) VALUES ('arunmadhu100','saudi arabia')";
         connection.query(sql, function(err, result){
        if(result.affectedRows == 1){
            res.status(201).json({error:null,message:"Inserted successfully"})
        }
        if(err) { res.status(500).json({ error: err.message, message:"Failed to create new note"})}
        })
    })
} )
//get all data
app.get("/read",(req,res)=>{
    connection.connect(function(err){
        console.log(err)
        var sql="SELECT * from customers";
        connection.query(sql,function(err,result){
            if(err){res.status(500).json({error:err.message, message:"Failed to fetch data"})};
            res.status(200).json({
                err:null,
                output : result,
            })
            console.log(result);
        })
    })
})    
//get data by id
app.get("/read/:id", (req,res)=>{
   const rid = req.params.id;
   const user = "arunmadhuk"
   console.log("read id", rid)
    connection.connect(function(err){
    console.log(err);
    var sql="SELECT * from customers where name=?";
    connection.query(sql,user,function(err,result){

        if(err) throw err;
        res.status(200).json({
            err:null,
            note:result,
        })
    })

   })
})

//update data by id
app.get("/update", (req,res)=>{
    const newname = "saranya";
    connection.connect(function(err){
console.log(err)
    })
    var sql = "UPDATE customers SET name=? where name='arunmadhuk'";
    connection.query(sql,newname,function(err,result){
        if(err) throw err;
        res.status(200).json({
            err:null,
            message:"updated with new name",
            note:result.affectedRows,
        })
    })
})

//Delete by id
app.get("/delete", (req,res)=>{
    const newaddr = "Highway 37";
    connection.connect(function(err){
        console.log(err)
    })
    var sql = "DELETE FROM customers WHERE address = ?";
    connection.query(sql,newaddr,function(err,result){
if(err) throw err;
res.status(200).json({
    err:null,
    message:"deleted successfully",
    note:result.affectedRows,
})
    })
})
app.listen(port,()=> console.log(`server is running on ${port}`))