const express = require('express');
const router = express.Router();
const {getProfil, getGallery} = require ('../controller/userController');



router
    .route('/profil')
    .get(getProfil)

router
    .route('/gallery')
    .get(getGallery)

module.exports = router;