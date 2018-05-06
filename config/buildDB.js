'use strict'

const importer = require('node-mysql-importer');
const path     = require('path');


require('dotenv').config({
    path: path.join(__dirname, '.env')
});

importer.config({
    'host': process.env.DB_HOST,
    'user': process.env.DB_USER,
    'password': process.env.DB_PASSWORD || ""
});

importer.importSQL(path.join(__dirname, 'sampleDB.sql'))
.then( () => {
    console.log('all statements have been executed')
    process.exit();
}).catch( err => {
    console.log(`error: ${err}`)
});
