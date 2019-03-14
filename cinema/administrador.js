const mongoose = require("mongoose");
const crypto = require("crypto");
const Schema = mongoose.Schema;
let adm = new Schema({
  NOMBRE: String,
  CLAVE: String,
  EMAIL: String,
  IMAGEN: String,
  ESTADO: Number,
  SALT: String
});
adm.methods.setPassword = password => {
  console.log(password);
  let salt = crypto.randomBytes(16).toString("hex");
  console.log(password);
  let claveysalt = [];
  claveysalt.push(
    crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex")
  );
  claveysalt.push(salt);
  return claveysalt;
};
adm.methods.validPassword = (password, clavebuena, salt) => {
  console.log(salt + "1");
  console.log(clavebuena + "2");
  console.log(password + "3");
  let hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
    .toString("hex");
  console.log(hash + " hash");
  return clavebuena === hash;
};
module.exports = mongoose.model("Administrador", adm);
