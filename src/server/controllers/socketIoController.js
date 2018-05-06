'use strict';

const socketio = require('socket.io'),
      logger   = require('winston'),
      path     = require('path'),
      sql = require(path.join(__dirname, '../services/database.js'));
      
module.exports.init = (server) =>{
    let io = socketio.listen(server);

    io.on('connection', socket => {
        // logger.info('user connected to socket.io');

    });
    return io;
};
