var Item = require("./pelicula");
module.exports = class _Pelicula {
  constructor() {}
  //el constructor va vacio
  Guardar(req, res) {
    Item.create(
      {
        //crea elitem para la base de datos
        NOMBRE: req.body.NOMBRE,
        DURACIONMINUTOS: req.body.DURACIONMINUTOS,
        GENERO: req.body.GENERO,
        IDIOMAAUDIO: req.body.IDIOMAAUDIO,
        IDIOMASUB: req.body.IDIOMASUB,
        SINOPSIS: req.body.SINOPSIS,
        CLASIFICACION: req.body.CLASIFICACION,
        PRECIO: req.body.PRECIO,
        HORAINICIO: req.body.HORAINICIO,
        FECHA: req.body.FECHA,
        MINUTOINICIO: req.body.MINUTOINICIO,
        ASIENTOS: req.body.ASIENTOS,
        IMAGEN: req.body.IMAGEN,
        ESTADO: req.body.ESTADO
      },
      (err, item) => {
        //analiza errores externos y dentro de la base
        if (err) {
          res.send(err);
        } else {
          Item.find((err, item) => {
            if (err) res.send(err);
            res.json(item);
          });
        }
      }
    );
  }
  Modificar(req, res) {
    console.log(req.body._id);
    Item.update(
      { _id: req.body._id },
      {
        $set: {
          //busca la id del item a modificar y cambia las caracteristicas
          NOMBRE: req.body.NOMBRE,
          DURACIONMINUTOS: req.body.DURACIONMINUTOS,
          GENERO: req.body.GENERO,
          IDIOMAAUDIO: req.body.IDIOMAAUDIO,
          IDIOMASUB: req.body.IDIOMASUB,
          SINOPSIS: req.body.SINOPSIS,
          CLASIFICACION: req.body.CLASIFICACION,
          PRECIO: req.body.PRECIO,
          HORAINICIO: req.body.HORAINICIO,
          FECHA: req.body.FECHA,
          MINUTOINICIO: req.body.MINUTOINICIO,
          ASIENTOS: req.body.ASIENTOS,
          IMAGEN: req.body.IMAGEN,
          ESTADO: req.body.ESTADO
        }
      },
      (err, item) => {
        console.log(req.body.FECHA);
        //busca errores internos y externos
        if (err) {
          res.send(err);
        }
        // Obtine y devuelve todas las personas tras crear una de ellas
        else {
          Item.find((err, item) => {
            if (err) res.send(err);
            res.json(item);
          });
        }
      }
    );
  }
  Eliminar(req, res) {
    Item.remove({ _id: req.body.id }, (err, item) => {
      //busca la id y elmina el documento
      if (err) {
        res.send(err);
      }
      // Obtine y devuelve todas las personas tras crear una de ellas
      else {
        Item.find((err, item) => {
          if (err) res.send(err);
          res.json(item);
        });
      }
    });
  }
  Seleccionartodos(req, res) {
    Item.find((err, item) => {
      //selecciona todos los documentos
      if (err) {
        res.send(err);
      } else {
        res.json(item); // devuelve todas las Personas en JSON
      }
    });
  }
  Seleccionarporfecha(req, res) {
    //selecciona todos los que tenga la misma fecha
    Item.find({ FECHA: req.body.FECHA }, (err, item) => {
      if (err) {
        res.send(err);
      } else {
        res.json(item); // devuelve todas las Personas en JSON
      }
    });
  }
  Seleccionarporid(req, res) {
    //selecciona por id
    Item.find({ _id: req.body._id }, (err, item) => {
      if (err) {
        res.send(err);
      } else {
        res.json(item); // devuelve todas las Personas en JSON
      }
    });
  }
  Seleccionarpornombre(req, res) {
    //selecciona por nombre
    Item.find({ NOMBRE: req.body.NOMBRE }, (err, item) => {
      if (err) {
        res.send(err);
      } else {
        res.json(item); // devuelve todas las Personas en JSON
      }
    });
  }
};
