const { Schema, model } = require('mongoose');

const countrySchema = new Schema({
    country : String,
    language: String,
    flagurl: String,
    },

    {
        timestamps: true
    }
);

module.exports = model('Country', countrySchema);