const router = require("express").Router();
const EmployeeRouter = require("../router/employee.router");

const handelRouter = () => {
    router.use("/employees", EmployeeRouter);

    return router;
}


module.exports = handelRouter;