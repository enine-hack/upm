const { Schema, model } = require('mongoose');

const subsriberSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/.*@.*\..*/, 'Invalid email']
    }
  },
  {
    timestamps: true
  }
);

module.exports = model('Subscriber', subsriberSchema);