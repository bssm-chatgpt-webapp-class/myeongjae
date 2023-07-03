const express = require("express");
const router = express.Router();

let db = [{ id: 1, text: "할일 1" }];

let currentId = 1;

router.get("/todo", function (req, res) {
  res.json(db);
});

router.post("/todo", function (req, res) {
  const { text } = req.body;
  currentId++;
  db.push({ id: currentId, text });
  console.log(db);
  res.json("success");
});

router.delete("/todo/:id", (req, res) => {
  const id = req.params.id;
  db = db.filter((item) => item.id !== +id);
  console.log(db);
  res.json("success");
});

router.put("/todo/:id", (req, res) => {
  const { text } = req.body;
  const id = req.params.id;
  db = db.map((item) => (item.id === +id ? { ...item, text } : item));
  res.json("success");
});

module.exports = router;
