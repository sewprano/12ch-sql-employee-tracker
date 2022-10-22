const inquirer = require('inquirer');
const mysql = require('mysql');

let db;


const init = async () => {
    try {
        const connection = await mysql.createConnection (
            {
                host: 'localhost',
                user: 'root',
                password: 'ElvenCode59()',
                database: 'employee_db'
            }
        );

        console.log('connected to employee database');
        db = connection;
    
        //Display menu
        
    }

    catch {
        console.log('connection failed');
    }
}





    

