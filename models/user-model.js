const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    civility: {
      type: String, enum: ['Monsieur', 'Madame']
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/.*@.*\..*/, 'Invalid email']
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    },
    dateOfBirth: {
      type: String,
    },
    numberAddress : {
      type : String,
    },
    typeofstreet : {
      type: String, enum: ['rue', 'ave', 'voie', 'chemin', 'cours', 'passage', 'impasse']
    },
    additionalAddress : {
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
    },

    favoritebrands: [{ type : Schema.Types.ObjectId, ref: 'Brand' }], 
    // notes: [{ type : Schema.Types.ObjectId, ref: 'Notes' }], 
    // fidelityAccount: [{ type : Schema.Types.ObjectId, ref: 'Fidelity' }],
    // purchaseHistory: [{ type : Schema.Types.ObjectId, ref: 'Purchase' }]

  },

  {
    timestamps: true
  }
);


module.exports = model('User', userSchema);