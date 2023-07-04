const express = require("express");
const router = express.Router();

const todoRouter = require("./todo");
const authROuter = require("./auth");

router.use("/todo", todoRouter);
router.use("/auth", authROuter);

module.exports = router;
