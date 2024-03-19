const mongoose = require('mongoose');

const utilisateurSchema = new mongoose.Schema({
  nom: String,
  email: String,
  login: String,
  mdp: String
});

UserModel = mongoose.model('Utilisateur', utilisateurSchema);
module.exports=UserModel;
