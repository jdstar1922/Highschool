const controllerpelicula = require("./controlerpelicula.js");
const controllerAdm = require("./controllerAdm.js");
module.exports = app => {
  let clasePelicula = new controllerpelicula();
  let claseAdmin = new controllerAdm();
  app.post("/api/nuevapelicula", clasePelicula.Guardar);
  app.post("/api/modificapelicula", clasePelicula.Modificar);
  app.post("/api/eliminapelicula", clasePelicula.Eliminar);
  app.post("/api/seleccionapelicula", clasePelicula.Seleccionartodos);
  app.post("/api/seleccionarporfecha", clasePelicula.Seleccionarporfecha);
  app.post("/api/seleccionarporid", clasePelicula.Seleccionarporid);
  app.post("/api/ssleccionarpornombre", clasePelicula.Seleccionarpornombre);
  app.post("/api/nuevousuario", claseAdmin.Guardar);
  app.post("/api/modificausuario", claseAdmin.Modificar);
  app.post("/api/eliminausuario", claseAdmin.Eliminar);
  app.post("/api/seleccionausuario", claseAdmin.Seleccionartodos);
  app.post("/api/seleccionarporid", claseAdmin.Seleccionarporid);
  app.post("/api/seleccionarpornombre", claseAdmin.Seleccionarpornombre);
  app.post("/api/login", claseAdmin.Login);
  app.get("*", (req, res) => {
    res.sendfile("./login.html");
  });
};
