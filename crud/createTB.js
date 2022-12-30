import connection from "../db/conn.js"

function createTB(){
    var sql = "CREATE TABLE signin (name VARCHAR(255), password VARCHAR(255))";
   const reqtb =  connection.query(sql)
   console.log(reqtb)
}

export default createTB;
