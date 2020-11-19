
const { Schema, model } = require('mongoose');

const purchaseSchema = new Schema({
  brandname: { type : Schema.Types.ObjectId, ref: 'Brand' },
  user: { type : Schema.Types.ObjectId, ref: 'User' },
  dateofpurchase: Date,
  amount: Number,
  uploadimage: String  
  },
  {
      timestamps: true
  }
);

module.exports = model('Purchase', purchaseSchema);

