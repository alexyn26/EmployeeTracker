const connection = require("./connection");

class db{
    constructor(connection){
        this.connection =connection;
    }

    createEmployee(employee){
        return(
            this.connection.promise().query(" INSERT INTO employee", employee)
            );
    }

    removeEmployee(employeeId){
        return(
            this.connection.promise().query(
                "DELETE FROM employee WHERE id =", employeeId)
            );
        
    }
    createRole(role){
        return(
            this.connection.promise().query(" INSERT INTO employee", role)
            );
    }
    removeRole(roleId){
        return(
            this.connection.promise().query("DELETE FROM role where id=", roleId)
            );
    }
    createDepartment(department){
        return(
            this.connection.promise().query(" INSERT INTO department", department)
            );
    }
    removeDepartment(departmentId){
        return(
            this.connection.promise().query("DELETE FROM role where id=", departmentId)
            );
    }
}
module.exports = new db(connection);