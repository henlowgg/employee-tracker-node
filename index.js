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
            "Add an employeee",
            "Update an employee role",
            "Quit",
        ],
    },
];