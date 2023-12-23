const mongoose = require ('moongose');
const validator = require ('validator');


const adminSchema = new mongoose.Schema ({

    name: {
        type: String,
        require: true
    },

    password: {
        type: Number,
        require: true
    }
});

const Admin = mongoose.mongoose('', adminSchema);