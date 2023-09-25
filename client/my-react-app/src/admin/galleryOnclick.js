import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ImageUploader from "./component/imagesUploader";
import GalleryUser from "../component/galleryDisplay";

export default function GalleryOnclick()
{
    const {id} = useParams();

     // state to save link of pictures in gallerry
     const [photo, setPhoto] = useState(null);

     //message to display once delete
     const [message, setMessage] = useState(null);
     //fetching data
     useEffect( () => {
         
        const fetchProfil = async () => {
 
             try {
                 
                 const data = await axios.get(`http://localhost:5000/api/v1/admin/gallery/${id}`);
                 setPhoto([data.data.photo]);
                 
             } catch (err) {
                 if (err.message) {
 
                     console.log( err.data);
                 } else {
 
                     console.log (err);
                 }
             }
        };
        fetchProfil();
 
     }, [id]);



     // delete pictuer by Id //
     function deletePicture () {

        const fetchProfil = async () => {
 
            try {
                
                const data = await axios.delete(`http://localhost:5000/api/v1/admin/gallery/${id}`);
                setPhoto(null);
                setMessage(data.data ? 'Photo supprimee avec succes' : 'veillez patienter')
            } catch (err) {
                if (err.message) {

                    console.log( err.data);
                } else {

                    console.log (err);
                }
            }
       };
       fetchProfil();
     };

     return (

        <div style={{paddingInline: '10px', position: 'relative', display: 'inline-block'}}>
         <h2 style={{position: 'relative', justifyContent: 'center', margin: '100px auto' }}> Clickez sur delete pour supprimer  </h2>
 
             {/* display images and retruning id onclick */}
            {photo === null ? <p>{message === null ? 'Loading...' : message}</p> :
                 <GalleryUser
                     photo = {photo}
                 />
            }

            {/* deleting button */}
            <button onClick={deletePicture}> Supprimer La photo</button>
           
             {/* to post image in gallery */}
             <ImageUploader 
                 nom = 'photo'
                 route = {`gallery/${id}`}
             />
        </div>
     )
}