const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "info123",
    database: "shopping2"
});

connection.connect((err) => {
    if (err) throw err;

    console.log("Connected to MySQL");

    // Insert products
    const productQuery = `
        INSERT INTO product (name, price, quantity, description)
        VALUES
        ('Pizza', 200, 10, 'Food'),
        ('Dabeli', 80, 20, 'Food'),
        ('Noodles', 300, 15, 'Food')
    `;

    connection.query(productQuery, (err, result) => {
        if (err) throw err;
        console.log("Products inserted successfully");
        console.log(result);

        // Insert customers
        const customerQuery = `
            INSERT INTO customer (name, address)
            VALUES
            ('Chirag', 'Gujarat'),
            ('Golu', 'UP'),
            ('Amit', 'Bihar')
        `;

        connection.query(customerQuery, (err, result) => {
            if (err) throw err;
            console.log("Customers inserted successfully");
            console.log(result);

            connection.end();
        });
    });
});