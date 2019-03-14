const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 8080;
mongoose.connect('mongodb://localhost:27017/Taquilla');
//conecta con mongo
const db = mongoose.connection;
//almacena la conexion
db.on('error',console.error.bind(console,'MongoDB connection error'));
//si hay algun error lo dice
app.configure(()=>{
    //configurar express
   app.use(express.static(__dirname + '/'));
   app.use(express.logger('dev'));
   app.use(express.methodOverride());
});
const bodyParser = require('body-parser');
//usa bodyparser
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));
require('./router.js')(app);
app.listen(port,()=>{console.log(`App por el puerto ${port}`)});