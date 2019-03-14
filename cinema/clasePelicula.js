class _Pelicula {
  constructor(
    _id,
    NOMBRE,
    DURACIONMINUTOS,
    GENERO,
    IDIOMAAUDIO,
    IDIOMASUB,
    SINOPSIS,
    CLASIFICACION,
    PRECIO,
    HORAINICIO,
    FECHA,
    MINUTOINICIO,
    ASIENTOS,
    IMAGEN,
    ESTADO
  ) {
    this._id = _id;
    this.NOMBRE = NOMBRE;
    this.DURACIONMINUTOS = DURACIONMINUTOS;
    this.GENERO = GENERO;
    this.IDIOMAAUDIO = IDIOMAAUDIO;
    this.IDIOMASUB = IDIOMASUB;
    this.SINOPSIS = SINOPSIS;
    this.CLASIFICACION = CLASIFICACION;
    this.PRECIO = PRECIO;
    this.HORAINICIO = HORAINICIO;
    this.FECHA = FECHA;
    this.MINUTOINICIO = MINUTOINICIO;
    this.ASIENTOS = ASIENTOS;
    this.IMAGEN = IMAGEN;
    this.ESTADO = ESTADO;
  }
  Guardar() {
    var objetoaenviar = this;
    // Return a new promise.
    return new Promise(function(resolve, reject) {
      // Do the usual XHR stuff
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8080/api/Nuevapelicula");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function() {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr);
          }
        };
        xhr.send(JSON.stringify(objetoaenviar));
      } catch (err) {
        reject(err.message);
      }
    });
  }
  Modificar() {
    var objetoaenviar = this;
    // Return a new promise.
    return new Promise(function(resolve, reject) {
      // Do the usual XHR stuff
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8080/api/Modificapelicula");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function() {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr);
          }
        };
        xhr.send(JSON.stringify(objetoaenviar));
      } catch (err) {
        reject(err.message);
      }
    });
  }
  Eliminar() {
    var objetoaenviar = this;
    // Return a new promise.
    return new Promise(function(resolve, reject) {
      // Do the usual XHR stuff
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8080/api/Eliminapelicula");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function() {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr);
          }
        };
        xhr.send(JSON.stringify(objetoaenviar));
      } catch (err) {
        reject(err.message);
      }
    });
  }
  Seleccionartodos() {
    var objetoaenviar = this;
    // Return a new promise.
    return new Promise(function(resolve, reject) {
      // Do the usual XHR stuff
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8080/api/seleccionartodos");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function() {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr);
          }
        };
        xhr.send(JSON.stringify(objetoaenviar));
      } catch (err) {
        reject(err.message);
      }
    });
  }
  Seleccionarporfecha() {
    var objetoaenviar = this;
    // Return a new promise.
    return new Promise(function(resolve, reject) {
      // Do the usual XHR stuff
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8080/api/seleccionarporfecha");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function() {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr);
          }
        };
        xhr.send(JSON.stringify(objetoaenviar));
      } catch (err) {
        reject(err.message);
      }
    });
  }
  Seleccionarporid(req, res) {
    var objetoaenviar = this;
    // Return a new promise.
    return new Promise(function(resolve, reject) {
      // Do the usual XHR stuff
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8080/api/seleccionarporid");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function() {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr);
          }
        };
        xhr.send(JSON.stringify(objetoaenviar));
      } catch (err) {
        reject(err.message);
      }
    });
  }
  Seleccionarpornombre(req, res) {
    var objetoaenviar = this;
    // Return a new promise.
    return new Promise(function(resolve, reject) {
      // Do the usual XHR stuff
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8080/api/seleccionarpornombre");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function() {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(xhr);
          }
        };
        xhr.send(JSON.stringify(objetoaenviar));
      } catch (err) {
        reject(err.message);
      }
    });
  }
  peliculasPorMesyAño(mes, anno) {
    var objetoaenviar = this;
    let vectordepeliculasfiltradas = [];
    // Return a new promise.
    return new Promise(function(resolve, reject) {
      // Do the usual XHR stuff
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8080/api/seleccionapelicula");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function() {
          if (xhr.status === 200) {
            let peliculas = JSON.parse(xhr.responseText);
            for (let elemento in peliculas) {
              let fecha = new Date(peliculas[elemento].FECHA);
              if (
                fecha.getMonth() + 1 === mes &&
                fecha.getFullYear() === anno
              ) {
                vectordepeliculasfiltradas.push(peliculas[elemento]);
              }
            }
            resolve(vectordepeliculasfiltradas);
          } else {
            reject(xhr);
          }
        };
        xhr.send(JSON.stringify(objetoaenviar));
      } catch (err) {
        reject(err.message);
      }
    });
  }
}
