/**
* the user controller.
*
* @author Daria <lo.pennequin@gmail.com>
*/

'use strict';

const path                              = require('path');
const sql                               = require(path.join(__dirname, '../services/database.js'));
const logger                            = require('winston');
const bcrypt                            = require('bcrypt');
const passport                          = require('passport');
const { body, check, validationResult } = require('express-validator/check');
const { matchedData }                   = require('express-validator/filter');
const jwt                               = require('jsonwebtoken');
const models                            = require(path.join(__dirname, '../models'));

module.exports.validate = [
    check('username')
        .isLength({ min: 4, max: 14 }).withMessage("Username must be between 4 and 14 characters")
        .custom(async (value, { req }) => {
            const db = new sql();
            const request = `SELECT id FROM users WHERE username = '${value}' LIMIT 1`;
            const user = (await db.query(request))[0];
            if (user) {
                throw new Error('This username already exists.')
            } else {
                return value
            }
        }),
    check('password')
        .isLength({ min: 6, max: 20 }).withMessage("Password must be between 6 and 20 characters."),
    check('email')
        .isEmail().withMessage("Email must be a valid email address.")
]

module.exports.register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
    } else {
        const post = Object.assign(req.body, { password: await bcrypt.hash(req.body.password, 10) });
        await models.user.create(post);
        res.status(200).json({ message: 'OK' });
    }
};

module.exports.signIn = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        let error = err || info;
        if (error) return res.status(401).json(error);
        if (user) {
            req.login(user, (err) => {
                if (err) throw err;
                const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET, { expiresIn: '2h' });
                res.status(200).json({
                    token: token,
                    uid: user.id
                });
            })
        }
    })(req, res, next)
}

module.exports.getById = async (req, res, next) => {
    const user = await models.user.fetch(req.params.id);
    res.status(200).json(user);
}
