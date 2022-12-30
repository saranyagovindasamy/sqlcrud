import mysql from 'mysql2';

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'@kil@run2401',
    database:'mysqlcrud'
})



export default connection;