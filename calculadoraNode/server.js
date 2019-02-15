const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 8080;

app.configure(()=>{
   app.use(express.static(__dirname + '/'));
   app.use(express.logger('dev'));
   app.use(express.methodOverride());
});
    const bodyParser = require('body-parser');
    app.use(bodyParser.json({limit:'50mb'}));
    app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));
    require('./router.js')(app);
    app.listen(port,()=>{console.log(`App por el puerto ${port}`)});
