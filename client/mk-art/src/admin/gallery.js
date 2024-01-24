import React, {useEffect, useState} from "react";
import ImageUploader from "./component/imagesUploader";
import axios from "../../../client/mk-art/src/axiosUrl";
import Gallery from "./component/gallerieDisplay";

export default function GalleryChanger () {

    // state to save link of pictures in gallerry
    const [photo, setPhoto] = useState(null);

    //fetching data
    useEffect( () => {
        
       const fetchProfil = async () => {

            try {
                
                const data = await axios.get('/user/gallery');
                setPhoto(data.data);
                
            } catch (err) {
                if (err.message) {

                    console.log( err.data, err.data.status);
                } else {

                    console.log (err);
                }
            }
       };
       fetchProfil();

    }, []);


    return (

       <div style={{paddingInline: '10px', position: 'relative', display: 'inline-block'}}>
        <h2 style={{position: 'relative', justifyContent: 'center', margin: '100px auto' }}> Clickez sur une image pour la remplacer ou la supprimer </h2>

            {/* display images and retruning id onclick */}
           {photo === null ? <p>Loading...</p> :  photo.results === 0 ? <p> Pas de Photo ouups</p> :
                <Gallery 
                    photo = {photo.data.gallery}
                />
           }

            {/* to post image in gallery */}
            <ImageUploader 
                nom = 'photo'
                route = 'gallery' 
            />
       </div>
    )
}