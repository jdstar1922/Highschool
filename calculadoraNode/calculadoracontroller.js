class Operacion{
    //declara la clase
      constructor(n1,n2){
        //define el molde para el objeto
        this.n1 = n1;
        this.n2 = n2;
      }
      suma(){
        //suma los parametros y retorna el resultado
       return this.n1 + this.n2;
      }
      resta(){
        //resta los parametros y retorna el resultado
         return this.n1 - this.n2;
      }
      multiplicacion(){
        //multiplica los parametros y retorna el resultado
         return this.n1 * this.n2;
      }
      division(){
        //divide los parametros y retorna el resultado
         return this.n1 / this.n2;
      }
    }
exports.Sumar = (req, res) => {
    //exporta la clase
    let instancia = new Operacion(req.n1,req.n2);
    //instancia la clase
    res.json(instancia.suma());
    //responde con el resultado
}
exports.Restar = (req, res) => { 
    //exporta la clase
    let instancia = new Operacion(req.n1,req.n2);
    //instancia la clase
    res.json(instancia.resta());
    //responde con el resultado
}
exports.Multiplicar = (req, res) => {
    //exporta la clase
    let instancia = new Operacion(req.n1,req.n2);
    //instancia la clase
    res.json(instancia.multiplicacion());
    //responde con el resultado
}
exports.Dividir = (req, res) => {
    //exporta la clase
    let instancia = new Operacion(req.n1,req.n2);
    //instancia la clase
    res.json(instancia.division());
    //responde con el resultado
}