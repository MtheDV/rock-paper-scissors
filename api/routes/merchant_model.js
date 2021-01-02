// get the database controller
const db = require("../db");

const getMerchants = () => {
    return new Promise(function (resolve, reject) {
        db.query("SELECT * FROM merchants ORDER BY id ASC", (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.rows);
            }
        });
    });
}
const createMerchant = (body) => {
    return new Promise(function (resolve, reject) {
        const { name, email } = body;
        db.query("INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *", [name, email], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(`A new merchant has been added: ${results.rows[0]}`);
            }
        });
    });
}
const deleteMerchant = (id) => {
    return new Promise(function (resolve, reject) {
        const id = parseInt(id);
        db.query("DELETE FROM merchants WHERE id = $1", [id], (error) => {
            if (error) {
                reject(error);
            } else {
                resolve(`Merchant deleted with ID: ${id}`);
            }
        });
    });
}

module.exports = {
    getMerchants,
    createMerchant,
    deleteMerchant,
}