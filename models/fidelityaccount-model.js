const { Schema, model } = require('mongoose');

const fidelitySchema = new Schema({
  brandname: { type : Schema.Types.ObjectId, ref: 'Brand' },
  user: { type : Schema.Types.ObjectId, ref: 'User' },
  spencerlevel: String,
  title: String,
  description: String  
  },
  {
      timestamps: true
  }
);

module.exports = model('Fidelity', fidelitySchema);