const inquirer = require('inquirer');

inquirer.prompt(
    {
        type: 'list',
        name: 'startprompt',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Quit'],
        validate: optionSelected => {
            if (optionSelected) {
                return true;
            } else {
                console.log('You must do something!')
                return false;
            }
        }
    }).then((answer) => {
        if (answer.startprompt == "View all departments") {
            viewDepartments();
        } else if (answer.startprompt == "View all roles") {
            viewRoles();
        } else if (answer.startprompt == "View all employees") {
            viewEmployees();
        } else if (answer.startprompt == "Add a department") {
            addDepartment();
        } else if (answer.startprompt == "Add a role") {
            addRole();
        } else if (answer.startprompt == "Add an employee") {
            addEmployee();
        } else if (answer.startprompt == "Update an employee role") {
            updateRole();
        } else {
            return;
        }
    })

function viewDepartments() {
    
}

function viewRoles() {

}

function viewEmployees() {

}

function addDepartment() {
    inquirer.prompt(
        {
            type: 'input',
            name: 'departmentName',
            message: 'What is the new department name?',
            validate: newDeptName => {
                if (newDeptName) {
                    return true;
                } else {
                    console.log('Your new department must have a name!')
                    return false;
                }
            }
        }
    )
}

function addRole() {
    inquirer.prompt(
        {
            type: 'input',
            name: 'roleName',
            message: 'Please enter new role name',
            validate: roleName => {
                if (roleName) {
                    return true;
                } else {
                    console.log('You must enter a role name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'roleSalary',
            message: 'Enter new role salary',
            validate: roleSalary => {
                if (roleSalary) {
                    return true;
                } else {
                    console.log('You must enter a salary!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'roleDepartment',
            message: 'Enter new role department',
            validate: roleDepartment => {
                if (roleDepartment) {
                    return true;
                } else {
                    console.log('You must enter a department!')
                    return false;
                }
            }
        }
    )
}

function addEmployee() {
    inquirer.prompt (
        {
            type: 'input',
            name: 'employeeFirstName',
            message: 'Please enter employee first name',
            validate: employeeFirstName => {
                if (employeeFirstName) {
                    return true;
                } else {
                    console.log('You must enter a first name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeLastName',
            message: 'Please enter employee last name',
            validate: employeeLastName => {
                if (employeeLastName) {
                    return true;
                } else {
                    console.log('You must enter a last name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeRole',
            message: 'Please enter employee role',
            validate: employeeRole => {
                if (employeeRole) {
                    return true;
                } else {
                    console.log('You must enter a role!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeManager',
            message: 'Please enter employee manager',
            validate: employeeManager => {
                if (employeeManager) {
                    return true;
                } else {
                    console.log('You must enter a manager!')
                    return false;
                }
            }
        }
    )
}

function updateRole() {
    inquirer.prompt (
        {
            type: 'list',
            name: 'updateEmployee',
            message: 'Please select employee to update',
        }
    )
}