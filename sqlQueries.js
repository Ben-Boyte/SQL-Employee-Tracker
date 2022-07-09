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

// const department = () => {

//     db.query(`SELECT * FROM department`, (err, rows) => {
//         //console.log(rows);
//     });

// }

module.export = db;