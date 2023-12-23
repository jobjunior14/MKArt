const path = require('path');
const multer = require ('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb (null, './uploads/gallery');
    },
    filename: (req, file, cb) => {
        const ext = path.extname (file.originalname);
        cb(null, Date.now() + 'mkGallery' + ext);
    }
});

const upload = multer({

    storage: storage, 

    fileFilter: (req, file, callback) => {
        
        if ( file.mimetype == 'image/png' || file.mimetype == 'image/jpeg'  ){

            callback (null, true);

        } else {

            console.log ('Seulemt les png ou jpg'); 
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
});

module.exports = upload