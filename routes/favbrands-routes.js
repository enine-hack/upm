const { json } = require('body-parser');
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



// POST//profil/add-favbrand => Ajout d'une nouvelle marque existante en BDD dans profil
favbrandsRoutes.post('/profil/add-favbrand', (req, res, next) => {
// 1. récupère ma sélection sous forme d'Object ID du Brand model : req.body.id /'String'
// et transforme le en array

  selectedfavbrands = req.body._id; // ma sélection
    console.log(req.body._id)
    console.log(typeof(selectedfavbrands))
    if(typeof(selectedfavbrands) === 'string'){
       selectedfavbrands = selectedfavbrands.split()
       console.log(selectedfavbrands)
       console.log(typeof(selectedfavbrands)) 
      }

  Brand.findById(selectedfavbrands)
  .then(response => {
    console.log(response)
    if(!response){res.status(404).json({ message: 'Brand not found' })}
    res.status(200).json(response);
  })
  .catch(err => {
    res.status(404).json({ message: 'Connexion to database not found' });
  })

  User.findById(req.session.currentUser)
    .then((user) =>{
      selectedfavbrands.forEach(selectedfavbrand => {
        // que si pas deja
        if (!user.favoritebrands.includes(selectedfavbrand)){
          user.favoritebrands.push(selectedfavbrand)
          //console.log(user.favoritebrands)
        }  
      });
      user.save()
        .then(() => {
          console.log(user.favoritebrands)
          
        })
        .catch((err) => {
          res.status(400).json({ message: "Favorite brand not saved in DB" });
        });
    })
    .catch((err) => {
      res.status(400).json({ message: "User id not found" });
    });
})


// GET/profil/favoritebrands/:id => Affichage d'une MARQUE SPECIFIQUE dans mon portemarque
favbrandsRoutes.get('/profil/favoritebrands/:id', (req, res, next) => {
    // va vérifier l'id de mon url 
    console.log(req.params.id)
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'Brand id is not valid' });
      return;
    }
  
  // es-tu loggué ?
  User.findById(req.session.currentUser)
  
  .then(user => {
    console.log(user.favoritebrands)
    if(!user.favoritebrands.includes(req.params.id)){
      res.status(404).json({ message: 'NON CA MARCHE PAAAAS' })}
    res.status(200).json({ message: 'OK CA MARCHE' });

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
  .catch(err => {
    res.status(404).json({ message: 'User not found' });
  })




})

// DELETE/profil/favoritebrands/:id => to delete a specific project
favbrandsRoutes.delete('/profil/favoritebrands/:id', (req, res, next)=>{
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  User.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(200).json({ message: `Brand with ${req.params.id} is removed successfully.` });
    })
    .catch( err => {
      res.status(400).json({ message: 'Specified brand id is not valid' });
    })
})

module.exports = favbrandsRoutes;
