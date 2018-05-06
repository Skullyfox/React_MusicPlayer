/**
 * Server entry point.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

'use strict';

//Developpement environnement variables
require('dotenv').config({
    path: 'config/.env'
});

//Dependancies
const express       = require('express');
const socketio      = require('socket.io');
const logger        = require('winston');
const path          = require('path');
const session       = require('express-session');
const passport      = require('passport');
const bodyParser    = require('body-parser');
const cookieParser  = require('cookie-parser');

//Configure logs
require(path.join(__dirname, '/src/server/middlewares/winston.js'))();

//Express config
const app    = express();
const http   = require('http').Server(app);

//Session config
const sessionParams = session({
    secret: process.env.SESSION_SECRET,
    name: 'sessionId',
    resave: false,
    saveUninitialized: false
});

//Passport config
require(path.join(__dirname, 'src/server/middlewares/passport.js'))();

//CORS config
app.use(require(path.join(__dirname, 'src/server/middlewares/allowCors.js')))

//App config
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sessionParams);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

//routes config
require(path.join(__dirname, 'src/server/routes/apiRoutes.js'))(app);
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.sendStatus(401);
    }
});
app.all('*', (req, res, next) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'public') })
})

// Socket.io config
require(path.join(__dirname, 'src/server/controllers/socketIoController.js')).init(http);

//App start
http.listen(process.env.PORT, () => {
    logger.info('===================================');
    logger.info(`server started on port ${process.env.PORT}`);
    logger.info('===================================');
})
