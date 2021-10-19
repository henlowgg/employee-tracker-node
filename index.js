const inquirer = require("inquirer");
const queries = require("./queries/queries");
const conTable = require("console.table")

//create menu prompts

const menuOptions = [
    {
        type: "list",
        name: "mainMenu",
        message: "What would you like to do?",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee role",
            "Quit",
        ],
    },
];

// function starting the application itself

function start() {
    console.log("Welcome to the Employee Tracker!");
    inquirer
    .prompt(menuOptions)
    .then((response) => {
        console.log(response);
        switch (response.mainMenu) {
            case "View all departments":
                queries.viewDepartments();
                break;

            case "View all roles":
                queries.viewRoles();
                break;

            case "View all employees":
                queries.viewEmployees();
                break;
            
            case "Add a department":
                queries.addDepartment();
                break;

            case "Add a role":
                queries.addRole();
                break;

            case "Add an employee":
                queries.addEmployee();
                break;

            case "Update an employee role":
                queries.updateRole();
                break;

            case "Quit":
                queries.quit();
                break;
        
            default:
                break;
        }
    });
}

start();