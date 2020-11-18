const { Schema, model } = require('mongoose');

const brandSchema = new Schema({
    brandname: String,
    categorie: String,
    popularity: String,
    logoUrl: String,
    websiteUrl: String,
    NewsUrl: String,
    coverImage : String,
    shopUrl : String,
    ReturnPolicyUrl: String,
    },
    {
        timestamps: true
    }
);

module.exports = model('Brand', brandSchema);