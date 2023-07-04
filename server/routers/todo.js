const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Connection = require("../models/connector");
const { validateToken, todoAuthChecker } = require("../middlewares");

Connection.linkConnection();
// RDB    : 제약
// NoSQL  ; 쉬움, 조회성능 좋음
router.post("", validateToken, async function (req, res) {
  try {
    const connection = Connection.getConnection();
    console.log(req.user);

    await connection.execute(
      `insert into todo(todo, completed, authorId) values(?, ?, ?)`,
      [req.body.todo, 0, req.user.id]
    );

    res.json("success");
  } catch {
    return res.status(403).json("invalid token");
  }
});

router.get("", async function (req, res) {
  console.log(process.env.JWT_SECRET);
  const connection = Connection.getConnection();
  const [rows] = await connection.execute("select * from todo");

  res.json(rows);
});

router.put("/:id", validateToken, todoAuthChecker, async (req, res) => {
  const id = req.params.id;
  const { todo, completed } = req.body;
  const connection = Connection.getConnection();

  try {
    await connection.execute(
      `update todo set todo = ?, completed = ? where id = ? and authorId = ?`,
      [todo, completed, id, req.user.id]
    );
    res.json("success");
  } catch {
    console.log("뭐 빼먹음 ㅋ");
  }
});

router.delete("/:id", validateToken, todoAuthChecker, async (req, res) => {
  const id = req.params.id;

  try {
    const connection = Connection.getConnection();

    await connection.execute(`delete from todo where id = ? and authorId = ?`, [
      id,
      req.user.id,
    ]);
    res.json("success");
  } catch {}
});

module.exports = router;
