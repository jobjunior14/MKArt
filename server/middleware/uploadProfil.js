const path = require('path');
const multer = require ('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb (null, 'uploads/profil');
    },
    filename: (req, file, cb) => {
        const ext = path.extname (file.originalname);
        cb(null, Date.now() + 'mkProfil' + ext);
    }
});

const upload = multer({

    storage: storage, 

    fileFilter: (req, file, callback) => {
        
        if ( file.mimetype == 'image/png' ){

            callback (null, true);

        } else {

            console.log ('Seulemt les png'); 
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
});

module.exports = upload