const express = require("express");
const router = express.Router();
const Connection = require("../models/connector");
const jwt = require("jsonwebtoken");

Connection.linkConnection();

// 세션: 사용자가 로그인을 하면, 로그인한 걸 어딘가에 계속 채워둠, 디테일한 유저 관리 가능 (기능 많음) (stateful)
// 토큰: 발급하고 끝냄, 사용자를 저장하고 있는 뭔가가 없어서 서버 부하 적음 -> 수평확장에 유리함 (stateless)

router.post("/signin", async function (req, res) {
  const { email, pw } = req.body;
  const connection = Connection.getConnection();
  const [[row]] = await connection.execute(
    "select * from user where email=? and pw=?",
    [email, pw]
  );

  if (row) {
    let token = jwt.sign(
      { id: row.id, email, exp: Math.floor(Date.now() / 1000) + 60 * 60 },
      "aiwufebcaniwediafaweopfjwoiefawoepokfowepokfpanojfiwekfpkaka;woffwnaof"
    );
    res.json(token);
  } else {
    res.status(401).json("no user");
  }
});

router.post("/signup", function (req, res) {
  const { email, pw } = req.body;
  const connection = Connection.getConnection();
  connection.execute("insert into user(email, pw) values(?, ?)", [email, pw]);

  res.json("success");
});

module.exports = router;
