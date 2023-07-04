// get the client
const mysql = require("mysql2/promise");
const MYSQL = require("../config/env");

class Connection {
  constructor() {}
  static connection = null;

  static async linkConnection() {
    if (this.connection === null) {
      this.connection = await mysql.createConnection({
        host: MYSQL.MYSQL_HOST,
        user: MYSQL.MYSQL_USER,
        database: MYSQL.MYSQL_DB,
        password: MYSQL.MYSQL_PW,
      });
    }
  }

  static getConnection() {
    return this.connection;
  }
}

module.exports = Connection;
