const express    = require('express');
const profilRoutes = express.Router();
const mongoose = require('mongoose');
const bcrypt     = require('bcryptjs');

const User       = require('../models/user-model');
const { restart } = require('nodemon');


// Route GET/PROFIL => to show our profil
profilRoutes.get('/profil', (req, res, next) => {
  // console.log(req.session.currentUser)
  // // if(req.session.user){res.status(200).json(req.session.user);
  // // return;
  // // }
  // // res.status(403).json({message: 'Non autorisé'})
  // User.find(req.session.currentUser)
  //   .then(allTheProfilInfo => {
  //     res.json(allTheProfilInfo);
  //   })
  //   .catch(err => {
  //     res.json(err);
  //   })
  if (!req.session.currentUser) {
    res.status(400).json({
      message: "Please login before access the user profile",
    });
    return;
  }
  console.log('id:', req.session.currentUser._id)
  User.findById(req.session.currentUser._id)

    .then((currentUser) => {
      res.status(200).json({ currentUser });
    })
    .catch((err) => {
      res.status(400).json({ message: "No user found" });
    });
});


// PUT/PROFIL => to update our profil
profilRoutes.put('/profil', (req, res, next)=>{
 
    const { email, password } = req.body;
    
    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);
    let updateUser = {
      email: email,
      password: hashPass,
    };


    User.findByIdAndUpdate(req.session.currentUser._id, updateUser, { new: true })
    .then((currentUser) => {
      
      res.status(200).json(updateUser);
      
    })
    .catch((error) => {
      res.status(500).json(error);
    });

})

// DELETE/PROFIL  => to delete our profil
// profilRoutes.delete('/profil', (req, res, next)=>{
//   if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
//     res.status(400).json({ message: 'Specified id is not valid' });
//     return;
//   }
//   User.findByIdAndRemove(req.params.id)
//     .then(() => {
//       res.json({ message: `Your profile is removed successfully (${req.params.id})` });
//     })
//     .catch( err => {
//       res.json(err);
//     })
// })

module.exports = profilRoutes;