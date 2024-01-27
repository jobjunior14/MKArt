const Gallery = require ('../models/galerieModel')
const catchAssynch = require ('../utils/catchAssynch');
const Profil = require (`${__dirname}/../models/profilModel`);
const BgPhoto = require ('../models/bgPhoto');


exports.getProfil = catchAssynch (async (req, res, next) =>
{
    const profilePhoto = await Profil.find();

    res.status(200).json({
        status: 'sucess',
        photo:profilePhoto
    })
});

exports.getGallery = catchAssynch (async ( req, res, next) => {

    const gallery = await Gallery.find();

        
        res.status(200).json({
            status: 'sucess',
            results: gallery.length,
            data: {
                gallery
            }
        });
});


exports.getBgPhoto = catchAssynch (async (req, res, next) => {

    const bg = await BgPhoto.find();

    res.status(200).json({
        status: 'success',
        data: bg
    })
});
