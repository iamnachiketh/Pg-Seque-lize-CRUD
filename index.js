const express = require("express");
const dotenv = require("dotenv");
const { sequelize } = require("./models/index");
const handelRouter = require("./router/index.router");
dotenv.config()

const app = express();

app.use(express.json());

(async () => {
    await sequelize.sync();
})();

app.use("/api/v1", handelRouter());

app.listen(3000, () => console.log("Server is running!!"));