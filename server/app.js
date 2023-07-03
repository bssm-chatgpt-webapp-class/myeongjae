const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let db = [{ id: 1, text: "할일 1" }];

let id = 1;

app.get("/todo", function (req, res) {
  res.json(db);
});

app.post("/todo", function (req, res) {
  const { text } = req.body;
  id++;
  db.push({ id, text });
  console.log(db);
  res.json("success");
});

app.delete("/todo/:id", (req, res) => {
  const id = req.params.id;
  db = db.filter((item) => item.id !== +id);
  console.log(db);
  res.json("success");
});

app.put("/todo/:id", (req, res) => {
  const { text } = req.body;
  const id = req.params.id;
  db = db.map((item) => (item.id === +id ? { ...item, text } : item));
  res.json("success");
});

app.listen(4000);
