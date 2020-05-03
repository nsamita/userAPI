const { Pool, Client } = require('pg');

var connectionString = "postgres://postgres:12345@localhost:5432/userDB";

const con = new Pool({
  connectionString: connectionString,
})

module.exports = con;