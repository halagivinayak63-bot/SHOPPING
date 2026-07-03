# 🛒 Shopping Management System

A simple **Shopping Management System** developed using **Node.js** and **MySQL**. This project demonstrates how to perform **CRUD (Create, Read, Update, Delete)** operations on product and customer data stored in a MySQL database.

---

## 📌 Features

- Connect to MySQL Database
- Create Database
- Create Product and Customer Tables
- Insert Product and Customer Records
- Read Data from Database
- Update Product and Customer Details
- Delete Product and Customer Records
- Simple and Beginner-Friendly Code

---

## 🛠️ Technologies Used

- Node.js
- JavaScript
- MySQL
- mysql2
- Visual Studio Code

---

## 📂 Project Structure

```
SHOPPING/
│
├── module/
│   ├── dbshops.js
│   ├── dbtableshops.js
│   ├── dbconnection.js
│   └── connection.js
│
├── InsertData.js
├── ReadData.js
├── UpdateData.js
├── DeleteData.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 🗄️ Database

**Database Name**

```
shopping2
```

### Product Table

| Column | Type |
|---------|------|
| product_id | INT (Primary Key) |
| name | VARCHAR(100) |
| price | DECIMAL(10,2) |
| quantity | INT |
| description | VARCHAR(255) |

---

### Customer Table

| Column | Type |
|---------|------|
| customer_id | INT (Primary Key) |
| cname | VARCHAR(100) |
| address | VARCHAR(100) |

---

## 🚀 Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/shopping-management.git
```

### Navigate to the Project Folder

```bash
cd shopping-management
```

### Install Dependencies

```bash
npm install
```

### Install MySQL Package

```bash
npm install mysql2
```

---

## ⚙️ Database Configuration

Update your MySQL credentials in the connection file.

```javascript
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "your_password",
    database: "shopping2"
});
```

---

## ▶️ Running the Project

Create Database

```bash
node module/dbshops.js
```

Create Tables

```bash
node module/dbtableshops.js
```

Insert Data

```bash
node InsertData.js
```

Read Data

```bash
node ReadData.js
```

Update Data

```bash
node UpdateData.js
```

Delete Data

```bash
node DeleteData.js
```

---

## 📸 Sample Output

```
Connected Successfully

Database Created Successfully

Product Table Created

Customer Table Created

Records Inserted Successfully

Records Retrieved Successfully

Records Updated Successfully

Records Deleted Successfully
```

---

## 📚 CRUD Operations

- ✅ Create Database
- ✅ Create Tables
- ✅ Insert Product Records
- ✅ Insert Customer Records
- ✅ Read Product Records
- ✅ Read Customer Records
- ✅ Update Product Records
- ✅ Update Customer Records
- ✅ Delete Product Records
- ✅ Delete Customer Records

---

## 🎯 Learning Objectives

This project helps beginners understand:

- Node.js with MySQL integration
- Database connectivity using mysql2
- SQL queries in Node.js
- CRUD operations
- Error handling
- Modular project structure

---

## 👨‍💻 Author

**Vinayak Halagi**

GitHub: https://github.com/your-github-username

---

## 📄 License

This project is developed for educational and learning purposes.
