const express = require('express');
const router = express.Router();
const {getProfil, getGallery, getBgPhoto} = require ('../controller/userController');



router
    .route('/profil')
    .get(getProfil);

router
    .route('/gallery')
    .get(getGallery);

router
    .route('/bgPhoto')
    .get(getBgPhoto);

module.exports = router;