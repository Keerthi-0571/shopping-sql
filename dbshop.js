const mysql2 = require('mysql2');
var connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'info123',
    database: 'shopping2',
});


connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
    connection.query(
        "SELECT pname, price FROM product",
        function (err, result) {
            if (err) throw err;
            console.log("Products:");
            console.log(result);
            connection.query(
                "SELECT cname FROM customer",
                function (err, result) {
                    if (err) throw err;
                    console.log("Customers:");
                    console.log(result);

                    connection.end();
                }
            );
        }
    );
});