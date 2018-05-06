/**
* The user model.
*
* @author Daria <lo.pennequin@gmail.com>
*/

'use strict';

const path      = require('path');
const sql       = require(path.join(__dirname, '../services/database.js'));
const logger    = require('winston');
const bcrypt    = require('bcrypt');
const passport  = require('passport');
const jwt       = require('jsonwebtoken');

module.exports.create = async post => {
    try {
        const db = new sql();
        await db.query(`INSERT INTO users SET ?`, post);
        await db.close();
    } catch (err) {
        logger.error(err)
    }
};

module.exports.fetch = async id => {
    try {
        const db = new sql();
        const user = (await db.query(`SELECT * FROM users WHERE id=${id} LIMIT 1`))[0];
        await db.close();
        return user;
    } catch (err) {
        logger.error(err)
    }
}
