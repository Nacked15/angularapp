'use strict'

var mongoose = require('mongoose');
var app = require('./app');

mongoose.connect('mongodb://localhost:27017/dbfavs', (err, res) =>{
    if(err){
        throw err;
    } else {
        console.log('Conexión a DB establecido correctamente');
    }

    app.listen(3678, function() {
        console.log('App listening on port 3678!');
    });
});