const express    = require('express');
const { count } = require('../models/business-model');
const businessRoutes = express.Router();

const Business       = require('../models/business-model');

businessRoutes.post('/partners', (req, res, next) => {
  const { society,
          activity,
          country,
          firstname,
          lastname,
          phone,
          email} = req.body
  
  if (!email || !society || !country || !lastname) {
    res.status(400).json({ message: 'For a better service, please provide at least your email, lastname contact, society and country' });
    return;
  }


  const aNewProspect = new Business({
    society: society,
    activity: activity,
    country: country,
    firstname: firstname,
    lastname: lastname,
    phone: phone,
    email: email
  })

  aNewProspect.save()
    .then(() => {
      res.status(200).json(aNewProspect);
    })
          
    .catch(err => {
      res.status(400).json({ message: 'Saving prospect to database went wrong.' });
      })
});

module.exports = businessRoutes;
