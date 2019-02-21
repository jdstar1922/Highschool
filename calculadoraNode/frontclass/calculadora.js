let that;
class Operacion{
    //declara la clase
      constructor(n1,n2){
        //define el molde para el objeto
        this.n1 = n1;
        this.n2 = n2;
        that = this;
      }
      suma(){
          return new Promise((resolve,reject)=>{
              try{
                  let xhr = new XMLHttpRequest();
                  //crea la peticion al server
                  xhr.open('POST','http://localhost:8080/Sumar');
                  //define la ruta
                  xhr.setRequestHeader('Content-Type','application/json');
                  //define el encabezado
                  xhr.onload = () =>{
                      //cuando carga
                      if(xhr.status === 200){
                          //si el estado es exitoso resuelve
                          resolve(JSON.parse(xhr.responseText));
                      }
                      else{
                          //si no rechaza
                          reject(xhr);
                      }
                  };
                  //envia el objeto como JSON
                  xhr.send(JSON.stringify(that));
              }
              catch(err){
                  //si hay algun error rechaza la promesa
                  reject(err.message);
              }
          });
      }
      resta(){
        return new Promise((resolve,reject)=>{
              try{
                  let xhr = new XMLHttpRequest();
                  //crea la peticion al server
                  xhr.open('POST','http://localhost:8080/Restar');
                  //define la ruta
                  xhr.setRequestHeader('Content-Type','application/json');
                  //define el encabezado
                  xhr.onload = () =>{
                      //cuando carga
                      if(xhr.status === 200){
                          //si el estado es exitoso resuelve
                          resolve(JSON.parse(xhr.responseText));
                      }
                      else{
                          //si no rechaza
                          reject(xhr);
                      }
                  };
                  //envia el objeto como JSON
                  xhr.send(JSON.stringify(that));
              }
              catch(err){
                  //si hay algun error rechaza la promesa
                  reject(err.message);
              }
          });
      }
      multiplicacion(){
        return new Promise((resolve,reject)=>{
              try{
                  let xhr = new XMLHttpRequest();
                  //crea la peticion al server
                  xhr.open('POST','http://localhost:8080/Multiplicar');
                  //define la ruta
                  xhr.setRequestHeader('Content-Type','application/json');
                  //define el encabezado
                  xhr.onload = () =>{
                      //cuando carga
                      if(xhr.status === 200){
                          //si el estado es exitoso resuelve
                          resolve(JSON.parse(xhr.responseText));
                      }
                      else{
                          //si no rechaza
                          reject(xhr);
                      }
                  };
                  //envia el objeto como JSON
                  xhr.send(JSON.stringify(that));
              }
              catch(err){
                  //si hay algun error rechaza la promesa
                  reject(err.message);
              }
          });
      }
      division(){
        return new Promise((resolve,reject)=>{
              try{
                  let xhr = new XMLHttpRequest();
                  //crea la peticion al server
                  xhr.open('POST','http://localhost:8080/Dividir');
                  //define la ruta
                  xhr.setRequestHeader('Content-Type','application/json');
                  //define el encabezado
                  xhr.onload = () =>{
                      //cuando carga
                      if(xhr.status === 200){
                          //si el estado es exitoso resuelve
                          resolve(JSON.parse(xhr.responseText));
                      }
                      else{
                          //si no rechaza
                          reject(xhr);
                      }
                  };
                  //envia el objeto como JSON
                  xhr.send(JSON.stringify(that));
              }
              catch(err){
                  //si hay algun error rechaza la promesa
                  reject(err.message);
              }
          });
      }
    }
