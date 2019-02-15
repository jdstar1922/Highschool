const calc = require('./calculadoracontroller.js');
//requiere la libreria
module.exports = app => {
    //define las diferentes rutas
    app.post('/Sumar',calc.Sumar);
    app.post('/Restar',calc.Restar);
    app.post('/Multiplicar',calc.Multiplicar);
    app.post('/Dividir',calc.Dividir);
}