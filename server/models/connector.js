// get the client
const mysql = require("mysql2/promise");

class Connection {
  constructor() {}
  static connection = null;

  static async linkConnection() {
    if (this.connection === null) {
      this.connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "bssmProject",
        password: "1029384756",
      });
    }
  }

  static getConnection() {
    return this.connection;
  }
}

module.exports = Connection;
