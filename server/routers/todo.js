const express = require("express");
const router = express.Router();
const Connection = require("../models/connector");

Connection.linkConnection();

let db = [{ id: 1, text: "할일 1" }];

let currentId = 1;
// RDB    : 제약
// NoSQL  ; 쉬움, 조회성능 좋음
router.get("", async function (req, res) {
  const connection = Connection.getConnection();
  const [rows] = await connection.execute("select * from todo");
  res.json(rows);
});

router.post("", function (req, res) {
  const { todo } = req.body;
  const connection = Connection.getConnection();
  connection.execute(`insert into todo(todo, completed) values(?, ?)`, [
    todo,
    0,
  ]);

  res.json("success");
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  const connection = Connection.getConnection();
  connection.execute(`delete from todo where id = ?`, [id]);
  res.json("success");
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { todo, completed } = req.body;
  const connection = Connection.getConnection();
  connection.execute(`update todo set todo = ?, completed = ? where id = ?`, [
    todo,
    completed,
    id,
  ]);
  res.json("success");
});

module.exports = router;
