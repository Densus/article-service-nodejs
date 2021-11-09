'use strict';

const mysql = require('mysql');

// local mysql db connection
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'article_db'
});

dbConn.connect(function(err){
    if (err) throw err;
    console.log("Database connected!");
});

module.exports = dbConn;