const router = require("express").Router();
const EmployeeController = require("../controller/employees.controller");

router.post("/", EmployeeController.addEmployee);

router.get("/", EmployeeController.employeeDetails);

router.delete("/", EmployeeController.deleteEmployee);

router.put("/", EmployeeController.updateEmployee);

module.exports = router;