const router = require("express").Router();
const DeptController = require("../controller/dept.controller");


router.get("/", DeptController.getAllDept);

module.exports = router;