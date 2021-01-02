const Pool = require("pg").Pool;
const pool = new Pool({
    user: "my_user",
    host: "localhost",
    database: "my_database",
    password: "root",
    port: 5432,
});

module.exports = {
    query: (text, params, callback) => {
            pool.query(text, params, callback);
    },
}