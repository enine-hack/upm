const express    = require('express');
const newslettersRoutes = express.Router();

const Subscriber  = require('../models/subscriber-model');


newslettersRoutes.post('/', (req, res, next) => {
  const { email} = req.body

  if (!email) {
    res.status(400).json({message: 'Please enter your email.'});
    return;
  }
  const aNewSubscriber = new Subscriber({
    email: email
  })

  aNewSubscriber.save()
  .then(() => {
    res.status(200).json(aNewSubscriber);
  })
        
  .catch(err => {
    console.log(err)
    res.status(400).json({ message: 'Saving subscriber to database went wrong.' });
    })

})

module.exports = newslettersRoutes;