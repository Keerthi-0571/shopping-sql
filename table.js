const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "info123",
    database: "shopping"
});

connection.connect((err) => {
    if (err) throw err;

    connection.query(
        `CREATE TABLE product (
            pname VARCHAR(25),
            category VARCHAR(25),
            price INT
        )`,
        (err, result) => {
            if (err) throw err;
            console.log("Product table created");
        }
    );

    connection.query(
        `CREATE TABLE customer (
            cname VARCHAR(25),
            address VARCHAR(25)
        )`,
        (err, result) => {
            if (err) throw err;
            console.log("Customer table created");
        }
    );

    connection.end();
});
