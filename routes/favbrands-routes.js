const express    = require('express');
const favbrandsRoutes = express.Router();
const mongoose = require('mongoose');

const Brand       = require('../models/brand-model')
const User       = require('../models/user-model');

// GET/Profil/favbrands => Affichage de la liste des favorites brands (bouton marque)
favbrandsRoutes.get('/profil/favoritebrands', (req, res, next) => {
  if (req.session.currentUser) {
        res.status(200).json(req.session.currentUser);
        return;
      }
      res.status(403).json({ message: 'Unauthorized' });

  Brand.find({})
  .then((allBrandsFromDb) => {
     User.findById(req.session.currentUser)
      .populate('favoritebrands')
      .then((user) => {
        const favbrandsId = user.favoritebrands.map(el=>el.id);
        allBrandsFromDb.forEach(brand => {
          if (favbrandsId.includes(brand.id)){
          brand.infavorite = true
          }
        })
        res.status(200).json(favbrandsId)
      })
      .catch(err => {
        console.log(err , 'error')
        res.status(400).json({ message: 'Favorite brand ID not found.' });
      })
  })
  .catch(err => {
    console.log(err , 'error')
    res.status(400).json({ message: 'Brand ID in data not found.' });
  })
})

// Ajout d'une nouvelle marque existante en BDD dans profil

// favbrandsRoutes.post('/profil/add-favbrand', (req, res, next) => {
//   if (req.session.currentUser) {
//     res.status(200).json(req.session.currentUser);
//     return;
//   }
//   res.status(403).json({ message: 'Unauthorized' });



// });




module.exports = favbrandsRoutes;
