const {prompt} = require ("inquirer");
const { removeEmployee, removeDepartment } = require("./db");
const db = require("./db");
require ("console.table");


init();

function init(){
    loadMainPrompts();
}

function loadMainPrompts(){
    prompt([
        {
        type: "list",
        name: "option",
        message: "How can I help you?",
        options [
            {
                name: "add employee",
                value: "ADD_EMPLOYEE"
            }
            {
                name: "delete employee",
                value:"REMOVE_EMPLOYEE"
            }
            {
                name: "add role",
                value: "ADD_ROLE"
            }
            {
                name: "delete role",
                value:"REMOVE_ROLE"
            }
            {
                name: "add department",
                value: "ADD_DEPARTMENT"
            }
            {
                name: "delete department",
                value:"REMOVE_DEPARTMENT"
            }
          
        ]
        }


    ]).then(res =>{
        let option = res.option;

        switch (option) {
            case "ADD_EMPLOYEE":
                addEmployee();
                break;
            case "REMOVE_EMPLOYEE"
                removeEmployee();
                break;
            case "ADD_ROLE":
                addRole();
                break;
            case "REMOVE_ROLE"
                removeRole();
                break;
            case "ADD_DEPARTMENT":
                addDepartment();
                 break;
            case "REMOVE_DEPARTMENT"
                removeDepartment();
                break;
                
        }
    })
}