const Profil = require (`${__dirname}/../models/profilModel`);
const Gallery = require ('../models/galerieModel')
const catchAssynch = require ('../utils/catchAssynch');
const AppError = require ('../utils/appError');
const fs = require ('fs');

exports.getProfil = catchAssynch (async (req, res, next) =>
{
    const profilePhoto = await Profil.find();

    res.status(200).json({
        status: 'sucess',
        path: {
            profilePhoto
        }
    })
});

exports.postProfil = catchAssynch (async (req, res, next) => {

    if (req.file) {

        let photo = await Profil.find();
        const a = [...photo];
        if (a.length >= 2)
        {
            const profil = await Profil.findByIdAndDelete(photo[0].id);

            res.status(201).json({
                status: 'sucess',
                message: 'Profile Mis a jour avec succes'
            });
        } else {
            
            const profil =  await Profil.create({photo: req.file.path});

            res.status(201).json({
                status: 'sucess',
                message: 'Profile crée avec succes'
            });
        }        
    } else {
        return next (new AppError('Vous devrez mettre une Photo au format PNG', 404));
    }
    
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

exports.postGallery = catchAssynch ( async ( req, res, next) => {

   if (req.file) {

        let photo = await Gallery.find();
        const a = [...photo];
        console.log (a.length);

        if (a.length >= 18) {
            
            return next ( new AppError ('Vous ne pouvez pas poster plus de 18 photos', 404))
        } else {
            
            const galleryPhoto = await Gallery.create({photo: req.file.path});

            res.status(201).json({
                status: 'sucess',
                message: 'Photo enregistrée avec succes'
            });
        }
    } else {

        return next ( new AppError ('Selectioner au plus une photo JPG ou PNG :(', 404))
    }
});

exports.updateGallery = catchAssynch (async ( req, res, next)=> {

    if (req.file) {

        const profil = await Gallery.findById(req.params.id )
        
        //deleting picture from the system
        try {
            fs.unlinkSync(profil.photo)
        } catch (error) {
            console.log(error)
        };
        
        //update the pat with the same ID
        await Gallery.findByIdAndUpdate(req.params.id, {photo: req.file.path}, {new: true});

        res.status(200).json({
            status: 'success',
            message: "Photo mis à jour avec succes"
        })
        if (!profil) {

            return next ( new AppError ("Ouups :( cette photo n'existe pas dans le serveur", 404))
        }
    } else {
        
        return next ( new AppError ('vous devrez selectionner au minimum une photo au format PNG', 404));
    };
});

exports.deleteGallery = catchAssynch (async ( req, res, next)=> {

   

        const profil = await Gallery.findByIdAndDelete(req.params.id);
        
        
        if (!profil) {
            
            return next ( new AppError ("Ouups :( cette photo n'existe pas dans le serveur", 404))
        };
        
        try {
            fs.unlinkSync(profil.photo)
        } catch (error) {
            console.log(error)
        };

        res.status(200).json ({
            status: 'sucess',
            message: "Photo supprimée avec succes"
        })
});

exports.getDetail = catchAssynch (async (req, res, next) => {

    const profil = await Gallery.findById(req.params.id);

    if (!profil) {
            
        return next ( new AppError ("Ouups :( cette photo n'existe pas dans le serveur", 404))
    };

    res.status(200).json ({
        status: 'sucess',
        photo: profil
    })
});