const mysql = require("mysql2");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "info123",
    database: "shopping"
});

connection.connect(function (err) {
    connection.query("select * from product", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});

connection.connect(function (err) {
    connection.query("select * from customer", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});

module.exports = connection;
