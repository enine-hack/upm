const { json } = require('body-parser');
const express    = require('express');
const favbrandsRoutes = express.Router();
const mongoose = require('mongoose');

const Brand       = require('../models/brand-model')
const User       = require('../models/user-model');

// GET/Profil/favbrands => Affichage de la liste de mon porte marque
favbrandsRoutes.get('/myfavoritebrands', (req, res, next) => {
  if (req.session.currentUser) {
        res.status(200).json(req.session.currentUser);
        return;
      }
      res.status(403).json({ message: 'Unauthorized' });

  // Brand.find({})
  // .then((allBrandsFromDb) => {
     User.findById(req.session.currentUser)
      .populate('favoritebrands')
      .then((user) => {
        // const favbrandsId = user.favoritebrands.map(el=>el.id);
        // allBrandsFromDb.forEach(brand => {
        //   if (favbrandsId.includes(brand.id)){
        //   brand.infavorite = true
        //   }
        // })
        res.status(200).json(user)
      })
      .catch(err => {
        console.log(err , 'error')
        res.status(400).json({ message: 'Favorite brand ID not found.' });
      })
  // })
  // .catch(err => {
  //   console.log(err , 'error')
  //   res.status(400).json({ message: 'Brand ID in data not found.' });
  // })
})


// POST//addfavbrand => Ajout d'une nouvelle marque existante en BDD dans mon portemarque ou d'une nouvelle marque dans mon pending
favbrandsRoutes.post('/addfavbrand', (req, res, next) => {
  // ADD FAVORITE BRANDS QUI EXISTENT EN BDD
  // recupere l'id, vérifie si c'est bien un string puis converti le en array
    selectedfavbrands = req.body._id; // ma sélection
    console.log('FAV BRAND Req.body =======>', req.body._id);
    console.log(typeof(selectedfavbrands));
    if(typeof(selectedfavbrands) === 'string'){
       selectedfavbrands = selectedfavbrands.split()
       console.log('Selectedfavbrands splited =======>', selectedfavbrands)
      //console.log(typeof(selectedfavbrands)) 
      }
  
  // ADD PENDING BRANDS PAR LEUR BRANDNAME
  inputBrandname = req.body.brandname // ma nouvelle marque qui n'existe pas dans seeds
  console.log('PENDING BRAND Req.body =======>', inputBrandname);
  console.log(typeof(inputBrandname));
  if(typeof(inputBrandname) === 'string'){
    inputBrandname = inputBrandname.split()
    console.log('Pending brandname splited =======>',inputBrandname)
    //console.log(typeof(pendingbrandname)) 
  }

   // si il n'existe pas dans l'array => le rajouter
   User.findById(req.session.currentUser)
      .then((user) =>{
        console.log('user.favoritebrands before push =======>', user.favoritebrands)
        selectedfavbrands.forEach(selectedfavbrand => {
            // que si pas deja
          if (!user.favoritebrands.includes(selectedfavbrand)){
          user.favoritebrands.push(selectedfavbrand)
          console.log('user.favoritebrands after push =======>', user.favoritebrands)
          } 
          else if(user.favoritebrands.includes(selectedfavbrand)){
          res.status(400).json({ message: "The brand is already in your favorite ones" })
          }  
          });
            // mettre en mémoire la ligne du modèle User à updater
          let updatedUserFavbrands = {
            favoritebrands : user.favoritebrands
          }
            // utiliser update avec la variable en mémoire
          user.update(updatedUserFavbrands)
            .then(() => {
              console.log('user.favoritebrands en base =======>', user.favoritebrands)
              res.status(200).json({ message: "FavBrands updated" });
            })
            .catch((err) => {
            res.status(400).json({ message: "Favorite brand not saved in DB" });
             });
             
      }).catch((err) => {
        res.status(400).json({ message: "User id not found" });
      });


    // si il n'existe pas dans l'array => le rajouter
   User.findById(req.session.currentUser)
      .then((user) =>{
        console.log('user.pendingfavoritebrands before push =======>', user.pendingfavoritebrands)
        inputBrandname.forEach(inputBrandname => {
         // que si pas deja
        if (!user.pendingfavoritebrands.includes(inputBrandname)){
        user.pendingfavoritebrands.push(inputBrandname)
        console.log('user.pendingfavoritebrands after push =======>', user.pendingfavoritebrands)
       } 
       else if(user.pendingfavoritebrands.includes(inputBrandname)){
       res.status(400).json({ message: "The brand is already in pending" })
       }  
       });
         // mettre en mémoire la ligne du modèle User à updater
       let updatedUserPendingbrands = {
        pendingfavoritebrands : user.pendingfavoritebrands
       }
         // utiliser update avec la variable en mémoire
       user.update(updatedUserPendingbrands)
         .then(() => {
           console.log('user.pendingfavoritebrands en base =======>', user.pendingfavoritebrands)
           res.status(200).json({ message: "PendingBrands updated" });
         })
         .catch((err) => {
         res.status(400).json({ message: "Pending brand not saved in DB" });
          });
    }).catch((err) => {
     res.status(400).json({ message: "User id not found" });
   });
})



// GET/profil/favoritebrands/:id => Affichage d'une MARQUE SPECIFIQUE dans mon portemarque
favbrandsRoutes.get('/favoritebrands/:id', (req, res, next) => {
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


// DELETE/profil/favoritebrands/:id => Supprimer une marque spécifique de mon porte marque
favbrandsRoutes.delete('/profil/favoritebrands/:id', (req, res, next)=>{
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  User.findById(req.session.currentUser)
  
    .then(user => {
      console.log('INITIAL ARRAY', user.favoritebrands)
      if(!user.favoritebrands.includes(req.params.id)){
        res.status(404).json({ message: 'NON CA MARCHE PAAAAS' })
        } res.status(200).json({ message: 'OK CA MARCHE' });

          user.favoritebrands.splice(req.params.id, 1)
          
          user.save()
          .then(() => {
            console.log('NEW ARRAY FAVBRANDS', user.favoritebrands)
            
          })
          .catch((err) => {
            res.status(400).json({ message: "Favorite brand not saved in DB" });
          });
      })
      .catch((err) => {
        res.status(400).json({ message: "User id not found" });
      });
 
})




module.exports = favbrandsRoutes;
