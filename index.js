const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'staff_management'
    },
    console.log('Connected to the staff_management database.')
);