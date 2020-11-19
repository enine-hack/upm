const { Schema, model } = require('mongoose');

const notesSchema = new Schema({
  brandname: { type : Schema.Types.ObjectId, ref: 'Brand' },
  user: { type : Schema.Types.ObjectId, ref: 'User' },
  notes: String,
  uploadImage: String  
  },
  {
      timestamps: true
  }
);

module.exports = model('Notes', notesSchema);