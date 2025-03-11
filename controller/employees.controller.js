const EmployeeModel = require("../models/employees.model");
const { sequelize } = require("../models/index");
const { DataTypes } = require("sequelize");
const addEmployee = async (req, res) => {

    try {
        const data = req.body;

        const Employee = EmployeeModel(sequelize, DataTypes);

        const employee = await Employee.create(data);

        res.status(201).json({
            message: "Employee successfully added",
            data: employee,
            status: 201
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
            status: 500
        })
    }
}


const employeeDetails = async (req, res) => {
    try {
        const empid = req.query.id;

        const Employee = EmployeeModel(sequelize, DataTypes);

        const employee = await Employee.findOne({
            where: {
                empid: empid
            }
        });

        if (!employee) {
            res.json({
                message: "Employee dosent exists",
                status: 404,
                data: null
            });
        }

        res.status(200).json({
            status: 200,
            message: "Details of the employee",
            data: employee
        })

    } catch (error) {
        res.status(500).json({
            status: 500,
            data: null,
            message: error.message
        });
    }
}


const deleteEmployee = async (req, res) => {
    try {
        const empid = req.body.id;

        const Employee = EmployeeModel(sequelize, DataTypes);

        const response = await Employee.destroy({
            where: {
                empid
            }
        });

        res.status(200).json({
            data: response
        });

    } catch (error) {
        res.json({
            status: 500,
            message: error.message,
            data: null
        });
    }
}


const updateEmployee = async (req, res) => {
    try {
        const data = req.body;

        const Employee = EmployeeModel(sequelize, DataTypes);

        const emp = await Employee.update(data, {
            where: {
                empid: data.empid
            }
        }, { new: true});

        res.json({
            data: emp
        });

    } catch (error) {
        res.json({
            status: 500,
            data: null,
            message: error.message
        });
    }
}


module.exports = {
    addEmployee,
    employeeDetails,
    deleteEmployee,
    updateEmployee
}