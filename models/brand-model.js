const { Schema, model } = require('mongoose');

const brandSchema = new Schema({
    brandname: String,
    categorie: String,
    popularity: String,
    logoUrl: String,
    websiteUrl: String,
    newinUrl: String,
    coverImage : String,
    shopUrl : String,
    returnPolicyUrl: String,
    },
    {
        timestamps: true
    }
);

module.exports = model('Brand', brandSchema);