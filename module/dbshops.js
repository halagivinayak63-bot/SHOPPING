const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "info123" // Replace with your actual MySQL password
});

connection.connect((err) => {
    if (err) {
        console.error("❌ Connection Failed!");
        console.error(err.message);
        return;
    }

    console.log("✅ Connected to MySQL");

    connection.query("CREATE DATABASE IF NOT EXISTS shopping2", (err, result) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log("✅ Database 'shopping2' created successfully.");
        console.log(result);

        connection.end();
    });
});