const DeptModel = require("../models/dept.model");
const { sequelize } = require("../models/index");
const { DataTypes } = require("sequelize");


const getAllDept = async (req,res) => {
    try{
        const Dept = DeptModel(sequelize, DataTypes);

        const response = await Dept.findAll();

        res.status(200).json({
            status: 200,
            data: response,
            message: "List of deprtments"
        })


    }catch(error){
        res.status(500).json({
            status: 500,
            message: error.message,
            data: null
        });
    }
} 



module.exports = {
    getAllDept
}