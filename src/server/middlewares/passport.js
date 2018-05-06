/**
* Passport configuration.
*
* @author Daria <lo.pennequin@gmail.com>
*/

'use strict';

const passport          = require('passport');
const path              = require('path');
const LocalStrategy     = require('passport-local').Strategy;
const bcrypt            = require('bcrypt');
const sql               = require(path.join(__dirname, '../services/database.js'));

module.exports = () => {
    passport.use('local', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },authenticate));

    passport.serializeUser( (id, done) => {
        done(null, id);
    });

    passport.deserializeUser( async (user, done) => {
        const request = `SELECT * FROM users WHERE id=${user.id} LIMIT 1`;
        const db      = new sql();
        const result  = await db.query(request)[0];

        await db.close();
        done(err, {id: result.id});
    });
}

const authenticate = async (username, password, done) => {
    try{
        const request = `SELECT id, username, password FROM users WHERE username = '${username}'`;
        const db      = new sql();
        const user    = (await db.query(request))[0];
        await db.close();

        if (!user) return done(null, false, { message: 'Incorrect username.' });

        bcrypt.compare(password, user.password, (err, res) => res !== true
            ? done(null, false, { message: 'Incorrect password.' })
            : done(null, user)
        );

    } catch(err) {
        return done(err) ;
    }
}
