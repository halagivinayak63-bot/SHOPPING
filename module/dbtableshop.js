const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "info123",
    database: "shopping2"
});

connection.connect((err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log("Connected to MySQL");

    // Insert into Product
    connection.query(
        `INSERT INTO product (name, price, quantity, description)
         VALUES
         ('Pizza', 200, 10, 'Food'),
         ('Dabeli', 80, 20, 'Food'),
         ('Noodles', 300, 15, 'Food')`,
        (err, result) => {
            if (err) throw err;
            console.log("Products inserted");

            // Insert into Customer
            connection.query(
                `INSERT INTO customer (name, address)
                 VALUES
                 ('Chirag', 'Gujarat'),
                 ('Golu', 'UP'),
                 ('Amit', 'Bihar')`,
                (err, result) => {
                    if (err) throw err;

                    console.log("Customers inserted");
                    connection.end();
                }
            );
        }
    );
});