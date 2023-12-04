const Employee = require('../models/employee');

// Getting all employees
exports.getEmployees = async (req, res) => {
    try {
        const employeeList = await Employee.find({})
        res.status(200).send(employeeList)
    } catch (error) {
        res.status(500).send(error)
    }
}

// Registering an employee
exports.createEmployee = async (req, res) => {
    try {
        const newEmployee = new Employee({
            ...req.body
        })
        await newEmployee.save()
        res.status(201).send(newEmployee);

    } catch (error) {
        res.status(500).send(error);
    }
}

// Get Employee by _ID
exports.getEmployeeById = async (req, res) => {
    try{
        const emp = await Employee.findById(req.params.eid)
        if(emp){
            console.log("Employee found: " + emp)
            res.status(200).send(emp)

        }else{
            console.log("No Employee found")
            res.status(404).send("No Employee found")
        }

    }catch(error){
        res.status(500).send(error)
    }
}

// Updating Employee details
exports.updateEmployeeById = async (req, res) => {
    try {
        const updatedEmployeeData = {
            ...req.body
        }

        const updatedEmployee = await Employee.findOneAndUpdate(
            { _id: req.params.eid },
            updatedEmployeeData,
            { new: true }
        )

        if (!updatedEmployee) {
            res.status(404).send({
                "status": false,
                "message": "Employee couldn't be found"
            })
        }

        res.status(200).send({
            "status": true,
            "message": "EmployeeData has been updated",
            "employeeData": updatedEmployeeData 
        })
    } catch (error) {
        res.status(500).send({
            "status": false,
            "message": "Couldn't update employee data",
            "error": error
        })
    }
}

exports.deleteEmployeeById = async (req, res) => {
    try {
        employee = await Employee.findOneAndDelete(req.params.eid)
        if (!employee) {
            res.status(404).send({
                "status": false,
                "message": "Employee not found"
            })
        } else {
            res.status(204).send(employee)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}