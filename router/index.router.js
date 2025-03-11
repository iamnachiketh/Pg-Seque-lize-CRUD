const router = require("express").Router();
const EmployeeRouter = require("./employee.router");
const DeptRouter = require("./dept.router")

const handelRouter = () => {
    router.use("/employees", EmployeeRouter);

    router.use("/dept", DeptRouter);

    return router;
}


module.exports = handelRouter;