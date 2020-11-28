const express    = require('express');
const allBrandsRoutes = express.Router();


const Brand       = require('../models/brand-model');

//GET/brandlist => Afficher toutes les marques
allBrandsRoutes.get('/brandslist', (req, res, next) => {
  Brand.find({})
  // .populate('brandname')
  .then((allbrandsfromdb) =>{
    console.log(allbrandsfromdb)
      res.status(200).json({allbrandsfromdb});
  })
  .catch( err =>{
      res.status(500).json({message: "No DB found"});
  })
})
// SOUS POSTMAN, AFFICHE UN TABLEAU VIDE []




//GET/brand/:id => Afficher une marque spécifique


module.exports = allBrandsRoutes;