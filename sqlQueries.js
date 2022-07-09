const mysql = require('mysql2');
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'staff_management'
    },
    console.log('Connected!')
);

module.export = db;