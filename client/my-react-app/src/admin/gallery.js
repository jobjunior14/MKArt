import React, {useEffect, useState} from "react";
import ImageUploader from "./component/imagesUploader";
import axios from "axios";
import Gallery from "../component/gallerie";

export default function GalleryChanger () {


    const [photo, setPhoto] = useState(null);

    useEffect( () => {
        
       const fetchProfil = async () => {

            try {
                
                const data = await axios.get('http://localhost:5000/api/v1/user/profil');
                setPhoto(data.data.data.gallery);
                
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
       <div style={{padding: '10px', position: 'relative'}}>
           {photo === null ? <p>Loading...</p> : 
                <Gallery 
                    photo = {photo}
                />
           }
            
            <ImageUploader 
                nom = 'photo'
                route = 'gallery' 
            />
       </div>
    )
}