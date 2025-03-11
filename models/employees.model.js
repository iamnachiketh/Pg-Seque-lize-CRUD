'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      employees.belongsTo(models.dept, { foreignKey: "dept" });
    }
  }
  employees.init({
    empid: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    salary: DataTypes.DECIMAL,
    dept: DataTypes.STRING,
    hdate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'employees',
    id: false,
    timestamps: true
  });
  return employees;
};