const express = require("express");
const employeeController = require('../controllers/employeeController')
const router = express.Router()

router.get('/employees', employeeController.getEmployees);
router.get('/employee:id', employeeController.getEmployeeById);
router.post('/employee', employeeController.createEmployee);
router.put('/employee:id', employeeController.updateEmployeeById);
router.delete('/employee:id', employeeController.deleteEmployeeById);

module.exports = router