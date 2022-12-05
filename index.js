const {prompt} = require ("inquirer");
const {sql} = require ("mysql");
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
        choices: [
            {
                name: "add employee",
                value: "ADD_EMPLOYEE"
            },
            {
                name: "delete employee",
                value:"REMOVE_EMPLOYEE"
            },
            {
                name: "add role",
                value: "ADD_ROLE"
            },
            {
                name: "delete role",
                value:"REMOVE_ROLE"
            },
            {
                name: "add department",
                value: "ADD_DEPARTMENT"
            },
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
            case "REMOVE_EMPLOYEE":
                removeEmployee();
                break;
            case "ADD_ROLE":
                addRole();
                break;
            case "REMOVE_ROLE":
                removeRole();
                break;
            case "ADD_DEPARTMENT":
                addDepartment();
                 break;
            case "REMOVE_DEPARTMENT":
                removeDepartment();
                break;
            case "QUIT":
                quit();
        }
    })
}

function addEmployee() {
        prompt([
          {
            name: "firstname",
            message: "What is the employees name?",
          },
          {
            name: "lastname",
            message: "What is the employees  last name?",
          }
        ])
          .then(res=> {
            let fName = res.firstname;
            let lName = res.lastname;
          })
        }

function removeEmployee() {
  
        prompt([
          {
            type: "list",
            name: "employeeId",
            message: "Which employee would you like to delete",
          }
        ])
          .then(res => db.removeEmployee(res.employeeId))
          .then(() => console.log("Employee has been deleted"))
          .then(() => loadMainPrompts())
      }
  

  function addRole() {
 
  
        prompt([
          {
            name: "title",
            message: "What role would you like to add?",
          },
          {
            type: "list",
            name: "department_id",
            message: "Which department does the role belong to?",
            
          }
        ])
          .then(role => {
            db.createRole(role)
              .then(() => console.log("Role has been added."))
              .then(() => loadMainPrompts())
          })
      
  }
  
  function removeRole() {
          prompt([
          {
            type: "list",
            name: "roleId",
            message:"what role would you like to delete?",
           
          }
        ])
          .then(res => db.removeRole(res.roleId))
          .then(() => console.log("Role has been deleted"))
          .then(() => loadMainPrompts())
      
  }
  function addDepartment() {
    prompt([
      {
        name: "name",
        message: "What department would you like to add?",
      }
    ])
      .then(res => {
        let name = res;
        db.createDepartment(name)
          .then(() => console.log(`Department has been added.`))
          .then(() => loadMainPrompts())
      })
  }
  
  
  function removeDepartment() {
    
        prompt({
          type: "list",
          name: "departmentId",
          message:
            "What department would you like to delete",
          
        })
          .then(res => db.removeDepartment(res.departmentId))
          .then(() => console.log(`Department has been deleted`))
          .then(() => loadMainPrompts())
      
  }
  function quit() {
    console.log("Goodbye!");
    process.exit();
  }
