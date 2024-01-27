const mongoose = require ('mongoose');

const mkSchema = new mongoose.Schema({
    oeuvres: {
        type: String
    }, 
    projets: {
        type: String
    }
});

const Photo = mongoose.model ('bgPhotos', mkSchema);

module.exports = Photo;