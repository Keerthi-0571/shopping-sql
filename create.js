const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "info123"
});

connection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Connected!");

    connection.query("CREATE DATABASE shopping2", (err, result) => {
        if (err) throw err;
        console.log("Database Created");
    });
});
