const express    = require('express');
const allBrandsRoutes = express.Router();
const mongoose = require('mongoose');

const Brand       = require('../models/brand-model');

//GET/brandlist => Afficher toutes les marques
allBrandsRoutes.get('/brandslist', (req, res, next) => {
  Brand.find( {}, { brandname : 1, popularity: 1, logoUrl : 1 })
  // .populate('brandname')
  .then((allbrandsfromDb) =>{
    
      res.status(200).json(allbrandsfromDb);
  })
  .catch( err =>{
      res.status(500).json({message: "No DB found"});
  })
})

//GET/brand/:id => Afficher une marque spécifique
allBrandsRoutes.get('/brandslist/:id', (req, res, next) => {
  console.log(req.params.id)
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Brand id is not valid' });
    return;
  }

  Brand.findById(req.params.id)
    .then(response => {
      console.log(response)
      if(!response){res.status(404).json({ message: 'Brand not found' })}
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(404).json({ message: 'Connexion to database not found' });
    })

})



module.exports = allBrandsRoutes;