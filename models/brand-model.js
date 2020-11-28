const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

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

const Brand = mongoose.model('Brand', brandSchema)

module.exports = Brand;