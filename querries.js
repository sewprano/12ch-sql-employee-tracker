//Querries

const { title } = require("process");

//View all Departments
    //department names & department IDs

//View all roles
    //job title, role id, role department, role salary

//View all employees
    //employee id, first name, last name, job title, departments, salaries, managers
    db.query(
        SELECT 
        employee.id,
        employee.first_name,
        employee.last_name,
        role.title,
        department.name AS department,
        role.Salary AS salary,
        CONCAT(manager.first_name, ' '. manager.lastname) AS Manager_Name FROM employee
        // LEFT JOIN role ON role.id = employee.role_id
        // LEFT JOIN department ON department.id = role.department_id
        // LEDT JOIN employee manager ON manager.id = employee.manager_id
        ORDER BY employee.id
        )

//Add a department
    //prompt to add name of department
//Add a role
    //prompt to add name, salary, role department, 
//Add and employee
    //prompt to add first name, last name, role, manager


//Update an employee role
    //prompt to select employee and new role
