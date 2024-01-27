const express = require('express');
const router = express.Router();
const {getProfil, postProfil, getGallery, postGallery, deleteGallery, updateGallery, getDetail, setBgPhoto} = require ('../controller/adminController');
// const {getGallery, postGallery, deleteGallery, updateGallery} = require ('../controller/userControllerGallery');

const uploadProfil = require ('../middleware/uploadProfil');
const uploadGallery = require ('../middleware/uploadGallery');


router
    .route('/profil')
    .get(getProfil)
    .post(uploadProfil.single('profil'), postProfil);

router
    .route('/gallery')
    .get(getGallery)
    .post(uploadGallery.single('photo'), postGallery);

router 
    .route('/gallery/:id')
    .post(uploadGallery.single('photo'),updateGallery)
    .delete(deleteGallery)
    .get (getDetail);

router 
    .route('/bgPhoto')
    .post(uploadGallery.single('photo'),setBgPhoto );

module.exports = router;