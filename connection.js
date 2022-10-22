const mysql = require('mysql2');




const db = async () => {
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
        //return db = connection;
    
        //Display menu

    }

    catch {
        console.log('connection failed');
    }
}

module.exports = db





    

