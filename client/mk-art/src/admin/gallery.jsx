import React, {useEffect, useState} from "react";
import ImageUploader from "./component/imagesUploader";
import Gallery from "./component/gallerieDisplay";
import useDataFecther from "../util/dataFecther";
export default function GalleryChanger () {

    const {loading, error, data} = useDataFecther('/user/gallery');


    return (

       <>
            <div className='p-20 mt-10'>
                { !loading && !error ? <div className="flex justify-center items-center">
                    <Gallery photo = { data ? data.data.gallery : ''} />
                </div> : 
                !error && loading  ? <div className='gallery'>

                    <div className='gallery_item w-["200px"] animate-pulse h-64 bg-slate-700 bg-opacity-30'></div>
                    <div className='gallery_item w-["200px"] animate-pulse h-64 bg-slate-700 bg-opacity-30'></div>
                    <div className='gallery_item w-["200px"] animate-pulse h-64 bg-slate-700 bg-opacity-30'></div>
                    <div className='gallery_item w-["200px"] animate-pulse h-64 bg-slate-700 bg-opacity-30'></div>
                    <div className='gallery_item w-["200px"] animate-pulse h-64 bg-slate-700 bg-opacity-30'></div>
                    <div className='gallery_item w-["200px"] animate-pulse h-64 bg-slate-700 bg-opacity-30'></div>
                </div> : <div className='w-64 h-64 border-2 border-gray-300 rounded-xl flex justify-center items-center p-5'> <p>Erreur lors du chargement de l&apos;image</p></div>
                }
            </div>

            {/* to post image in gallery */}
            <ImageUploader 
                nom = 'photo'
                route = 'gallery' 
            />
       </>
    )
}