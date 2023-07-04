const jwt = require("jsonwebtoken");
const Connection = require("../models/connector");

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    const filteredToken = token.replace("Bearer ", "");
    const user = jwt.verify(filteredToken, process.env.JWT_SECRET);
    const connection = Connection.getConnection();
    const [results] = await connection.execute(
      "select * from user where id = ?",
      [user.id]
    );

    req.user = results[0];

    next();
  } catch (error) {
    return res.status(403).json("invalid token");
  }
};

const todoAuthChecker = async (req, res, next) => {
  try {
    const connection = Connection.getConnection();
    const [results] = await connection.execute(
      "select * from todo where id = ?",
      [req.params.id]
    );
    if (results[0].authorId !== req.user.id) throw new Error("Unauthorized");
    next();
  } catch (error) {
    return res.status(401).json("unauthorized");
  }
};

module.exports = { validateToken, todoAuthChecker };
