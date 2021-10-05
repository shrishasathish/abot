const mysql = require('mysql')

let connection = mysql.createConnection({
    host : '192.168.15.137',
    user : 'masood',    
    password : 'welcome',
    database:'abot',

    // host : '3.134.129.145',
    // user : 'root',    
    // password : 'siadev',
    // database:'abot',

});



module.exports = connection;