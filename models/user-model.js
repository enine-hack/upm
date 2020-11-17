// models/user-model.js

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

// import json from '../countries.json';

const userSchema = new Schema(
  {
    civility: {
      type: String, enum: ['Monsieur', 'Madame']
        // trim: true,
        // required: [true, 'civilite is required.']
    },
    firstname: {
      type: String,
      trim: true,
      required: [true, 'Firstname is required.']
    },
    lastname: {
      type: String,
      trim: true,
      required: [true, 'Lastname is required.']
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/.*@.*\..*/, 'Invalid email']
    },
    passwordHash: {
      type: String,
      required: [true, 'Password is required.']
    },
    dateOfBirth: {
      type: String,
    },
    Address: [
      {
        n : {
          type : String,
        },
        street : {
          type: String, enum: ['rue', 'ave', 'voie', 'chemin', 'cours', 'passage', 'impasse']
        },
        additional : {
          type : String,
        },
        zipcode : {
          type : String,
        },
        city : {
          type : String,
        },
        country : {
          type :  Schema.Types.ObjectId, ref: 'Country',
        },
        nationality : {
          type :  Schema.Types.ObjectId, ref: 'Country',
        },
        mobileNumber : {
          type : String,
        },
        idWechat : {
          type : String,
        },
        idLine : {
          type: String,
        }
      }
    ],

    favoritebrands: [
      {
        brandname : { 
          type : Schema.Types.ObjectId, ref: 'Brand'
        },
        notes : {
          type : String
        },
        image : {
          type : String
        },
        feedback : {
          type : String
      }
      }
    ]
  },

  {
    timestamps: true
  }
);

const Countries = mongoose.model('Countries', projectSchema);

module.exports = model('User', userSchema);