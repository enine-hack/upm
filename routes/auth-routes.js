const express    = require('express');
const authRoutes = express.Router();

const bcrypt     = require('bcryptjs');

const User       = require('../models/user-model');

//SIGN UP
authRoutes.post('/signup', (req, res, next) => {
  const {email, password} = req.body

  if (!email || !password) {
    res.status(400).json({ message: 'Provide email and password' });
    return;
  }
  if (password.length < 8) {
    res.status(400).json({ message: 'Please make your password at least 8 characters long for security purposes.' });
    return;
  }
  
  User.findOne({ email })
    .then(foundUser => {
      if (foundUser) {
        res.status(400).json({ message: 'E-mail taken. Choose another one.' });
        return;
      }
      const salt     = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);
      const aNewUser = new User({
        email:email,
        password: hashPass
      });
      aNewUser.save()
        .then(() => {
          // Persist our new user into session
          req.session.currentUser = aNewUser
         res.status(200).json(aNewUser);
        })
        .catch(err => {
          console.log(err , 'error')
          res.status(400).json({ message: 'Saving user to database went wrong.' });
        })
      ;
    })
    .catch(err => {
      res.status(500).json({message: "Email check went bad."});
    })
  ;
});

//LOG IN
authRoutes.post('/login', (req, res, next) => {
  const {email, password} = req.body
  User.findOne({email}).then(user => {
    if (!user) {
      res.status(400).json({ message: 'No user with that e-mail.' })
      return;
     
    }
    // compareSync
    if (bcrypt.compareSync(password, user.password) !== true) {
      res.status(400).json({ message: 'Wrong password.' })
      return;
    } else {
      req.session.currentUser = user
      res.json(user)
     
    }
  }).catch(next)
});

//LOG OUT
authRoutes.post('/logout', (req, res, next) => {
  req.session.destroy()
  res.json({message: 'Your are now logged out.'})
});

//LOGGED IN
authRoutes.get('/loggedin', (req, res, next) => {
  // req.isAuthenticated() is defined by passport
  if (req.session.currentUser) {
      res.status(200).json(req.session.currentUser);
      return;
  }
  res.status(403).json({ message: 'Unauthorized' });
});




module.exports = authRoutes;





