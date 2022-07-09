const inquirer = require('inquirer');
const consoleTable = require('console.table');
const mysql = require('mysql2');
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'employee_tracker'
    },
    console.log('Connected!')
);

const track = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'track',
            message: 'Select one of the following:',
            choices: ['View Departments', 'View Roles', 'View Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role'],
            validate: whatDo => {
                if ('View Departments' || 'View Roles' || 'View Employees' || 'Add Department' || 'Add Role' || 'Add Employee' || 'Update Employee Role') {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ])
    .then(function ({ track }) {
        switch (track) {
        case 'View Departments': 
            viewDepartment();

        case 'View Roles':
            viewRole();

        case 'View Employees':
            viewEmployee();
            
        case 'Add Department':
            addDepartment();
            
        case 'Add Role':
            addRole();

        case 'Add Employee':
            addEmployee();

        case 'Update Employee Role':
            updateRole();
            
        }
    });
}

track();