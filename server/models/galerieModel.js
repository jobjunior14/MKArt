const mongoose = require ('mongoose');

const mkSchema = new mongoose.Schema({
    photo: {
        type: String
    }
});

const Photo = mongoose.model ('Gallery', mkSchema);

module.exports = Photo;