/**
* Define all REST routes.
*
* @author Daria <lo.pennequin@gmail.com>
*/

'use strict';

const path          = require('path'),
    fs              = require('fs'),
    logger          = require('winston'),
    router          = require('express').Router(),
    privateRouter   = require('express').Router(),
    multer          = require('multer'),
    ctrl            = require(path.join(__dirname, '../controllers')),
    models          = require(path.join(__dirname, '../models')),
    expressJwt      = require('express-jwt'),
    secret          = { secret: process.env.TOKEN_SECRET };

/**
* logs the path of every request into the console.
* WARNING : since we are using 2 routers, every request will be logged twice in the console
*
*/
const logRequest = (req, res, next) => {
    logger.info('REST API call : ' + req.method + " | " + req.url);
    next();
};

module.exports = app => {
    router.post('/register', multer().array(), ctrl.user.validate, (req, res) => ctrl.user.register(req, res));
    router.post('/login', multer().array(), (req, res, next) => ctrl.user.signIn(req, res, next));

    privateRouter.get('/loggedin', (req, res, next) => res.sendStatus(200));
    privateRouter.get('/user/:id', (req, res, next) => ctrl.user.getById(req, res, next));

    app.use('/api', logRequest, router);
    app.use('/api', logRequest, expressJwt(secret), privateRouter);
};
