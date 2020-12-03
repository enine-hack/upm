const express    = require('express');
const profilRoutes = express.Router();
const mongoose = require('mongoose');
const bcrypt     = require('bcryptjs');

const User       = require('../models/user-model');
const { restart } = require('nodemon');
const { populate } = require('../models/user-model');




// PUT/PROFIL => to update our profil
profilRoutes.put('/profil', (req, res, next)=>{

    const { password } = req.body;

    if (password.length < 8) {
      res.status(400).json({ message: 'Please make your password at least 8 characters long for security purposes.' });
      return;
    }


    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);
    let updateUser = {
      // email: email,
      password: hashPass,
    };


    User.findByIdAndUpdate(req.session.currentUser._id, updateUser, { new: true })
    .then((updatedUser) => {
      
      res.status(200).json(updatedUser);
      
    })
    .catch((error) => {
      res.status(500).json(error);
    });

})

// Route GET/PROFIL => to show our profil
profilRoutes.get('/profil', (req, res, next) => {
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

// DELETE/PROFIL  => to delete our profil
profilRoutes.delete('/profil', (req, res, next)=>{
  if(!mongoose.Types.ObjectId.isValid(req.session.currentUser._id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
  User.findByIdAndRemove(req.session.currentUser._id)
    .then(() => {
      res.json({ message: `Your profile is removed successfully` });
    })
    .catch( err => {
      res.json(err);
    })
})

//PROFILE EDIT
profilRoutes.post("/profiledit", (req, res, next) => {
  const {civility,
        firstname,
        lastname,
        dateOfBirth,
        numberAddress,
        typeofstreet,
        additionalAddress,
        zipcode,
        city,
        country,
        mobileNumber,
        idWechat,
        idLine} = req.body

  // Vérifier si le user est connecté
  if (!req.session.currentUser) {
    res.status(401).json({
      message: "Please login before access the user profile",
    });
    return;
  }

  const aNewProfile = {
    civility: civility,
    firstname: firstname,
    lastname: lastname,
    dateOfBirth: dateOfBirth,
    numberAddress: numberAddress,
    typeofstreet: typeofstreet,
    additionalAddress: additionalAddress,
    zipcode: zipcode,
    city: city,
    country : country,
    mobileNumber: mobileNumber,
    idWechat: idWechat,
    idLine: idLine
  };

  User.findByIdAndUpdate(req.session.currentUser._id, aNewProfile)
        .then((updatedUser) => {
          res.status(200).json(updatedUser);
      }).catch(err => {
        res.status(500).json(err)
      })

  });

module.exports = profilRoutes;