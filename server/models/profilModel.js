const mongoose = require ('mongoose');

const mkSch = new mongoose.Schema({
    photo: {
        type: String
    }
});

const Profil = mongoose.model ('Profil', mkSch);

module.exports = Profil;