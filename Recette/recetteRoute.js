const express = require('express');
const router = express.Router();
const Recette = require('../Recette/Recette.js');

router.get('/all', async (req, res) => {
  const recette = recetteModel.find({},function(err, docs){
    console.log(docs);})
    res.json(recette);
});

router.post('/add', async (req, res) => {
  recetteModel = mongoose.model('Chef' ,authorSchema, 'BaseD');
  recetteModel.insertMany([
    {libelle: "ABBB"},
    {libelle: "DEDD"},
    
    ]).then((docs) => {
    console.log("Inserted recette");
    console.log(docs);
    }).catch((e)=>{console.log(e)})
});

router.put('/update/:name', async (req, res) => {
  const recette = req.params.name;
  const updatedrec = req.body;

  recetteModel.updateOne({nom:`${recette}`},{libelle:"fdgnh"},function(err, res){
      console.log(`Modified ${res.n} document`);
      });
      res.json(updatedrec); 
});

router.delete('/delete/:name', async (req, res) => {
  const name = req.params.name;
  recetteModel.deleteOne({nom:`${name}`},function(err, res){
      console.log(`Modified ${res.n} document`);
      });
});

module.exports = router;
