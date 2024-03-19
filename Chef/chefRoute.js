const express = require('express');
const router = express.Router();
const Chef = require('../Chef/Chef.js');

router.get('/all', async (req, res) => {
  const chef = ChefModel.find({},function(err, docs){
    console.log(docs);})
    res.json(chef);
});

router.post('/add', async (req, res) => {
  chefModel = mongoose.model('Chef' ,authorSchema, 'BaseD');
    chefModel.insertMany([
    {nom: "ABBB", specialite:"mami"},
    {nom: "DEDD", specialite:"LALA"},
    
    ]).then((docs) => {
    console.log("Inserted chef");
    console.log(docs);
    }).catch((e)=>{console.log(e)})
});

router.put('/update/:name', async (req, res) => {
 
  const chef = req.params.name;
  const updatedchef = req.body;

  chefModel.updateOne({nom:`${chef}`},{specialite:"fdgnh"},function(err, res){
      console.log(`Modified ${res.n} document`);
      });
      res.json(updatedchef); 
    });

router.delete('/delete/:name', async (req, res) => {

  const name = req.params.name;
  chefModel.deleteOne({nom:`${name}`},function(err, res){
      console.log(`Modified ${res.n} document`);
      });
});

module.exports = router;
