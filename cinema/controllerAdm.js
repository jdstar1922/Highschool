let Item = require("./administrador.js");
let Admin = new Item();
module.exports = class _Admin {
  constructor() {}
  //el constructor va vacio
  Guardar(req, res) {
    let claveEnc = Admin.setPassword(req.body.CLAVE);
    Item.create(
      {
        //crea elitem para la base de datos
        NOMBRE: req.body.NOMBRE,
        CLAVE: claveEnc[0],
        EMAIL: req.body.EMAIL,
        IMAGEN: req.body.IMAGEN,
        ESTADO: req.body.ESTADO,
        SALT: claveEnc[1]
      },
      (err, item) => {
        //analiza errores externos y dentro de la base
        if (err) {
          res.send(err);
        } else {
          Item.find((err, item) => {
            if (err) res.send(err);

            for (let it in item) {
              item[it].CLAVE = "Bebecita";
            }
            res.json(item);
          });
        }
      }
    );
  }
  Login(req, res) {
    console.log(req.body.EMAIL + "4");
    console.log(req.body.CLAVE + "5");
    Item.find({ EMAIL: req.body.EMAIL }, (err, item) => {
      if (err) {
        res.send(err);
      } else {
        if (item.length == 0) {
          res.status(400).send({
            message: "Datos Incorrectos"
          });
        } else {
          if (
            Admin.validPassword(req.body.CLAVE, item[0].CLAVE, item[0].SALT)
          ) {
            console.log(item[0]);
            item[0].SALT = "No f Way";
            res.json(item);
          } else {
            res.status(400).send({
              message: "Datos Incorrectos"
            });
          }
        }
      }
    });
  }
  Modificar(req, res) {
    console.log(req.body._id);
    Item.update(
      { _id: req.body._id },
      {
        $set: {
          //busca la id del item a modificar y cambia las caracteristicas
          NOMBRE: req.body.NOMBRE,
          CLAVE: req.body.CLAVE,
          EMAIL: req.body.EMAIL,
          IMAGEN: req.body.IMAGEN,
          ESTADO: req.body.ESTADO,
          SALT: req.body.SALT
        }
      },
      (err, item) => {
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
