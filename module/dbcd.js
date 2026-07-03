const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "info123",
    port: 3306,
    database: "shopping2"
});

connection.connect((err) => {
    if (err) throw err;

    console.log("✅ Connected to shopping2 database");

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
        console.log("✅ Products inserted successfully");

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
            console.log("✅ Customers inserted successfully");

            // Delete one product
            connection.query(
                "DELETE FROM product WHERE price = 80",
                (err) => {
                    if (err) throw err;
                    console.log("✅ Product deleted");

                    // Delete one customer
                    connection.query(
                        "DELETE FROM customer WHERE name = 'Golu'",
                        (err) => {
                            if (err) throw err;
                            console.log("✅ Customer deleted");

                            // Display products
                            connection.query(
                                "SELECT name, price FROM product",
                                (err, products) => {
                                    if (err) throw err;

                                    console.log("\n📦 Products");
                                    console.table(products);

                                    // Display customers
                                    connection.query(
                                        "SELECT name, address FROM customer",
                                        (err, customers) => {
                                            if (err) throw err;

                                            console.log("\n👥 Customers");
                                            console.table(customers);

                                            connection.end();
                                            console.log("\n🔌 Connection Closed");
                                        }
                                    );
                                }
                            );
                        }
                    );
                }
            );
        });
    });
});