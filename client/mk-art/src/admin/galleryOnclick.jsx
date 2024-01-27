import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "../axiosUrl";
import ImageUploader from "./component/imagesUploader";
import GalleryUser from "../component/galleryDisplay";
import useDataFetcher from '../util/dataFecther';

export default function GalleryOnclick()
{
    const {id} = useParams();

    const {loading, error, data} = useDataFetcher(`/admin/gallery/${id}`);

     //message to display once delete
     const [message, setMessage] = useState(null);
     
     // delete pictuer by Id //
     function deletePicture () {

        const fetchProfil = async () => {
 
            try {
                
                const data = await axios.delete(`/admin/gallery/${id}`);
                
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
     }

     return (

        <div className="p-3 mt-28 justify-center items-center flex flex-col">
         <h2 className="text-center text-teal-300 font-semibold"> Clicker sur *Choisissez un fichier pour mettre a jour l&apos;image*  </h2>
 
             {/* display images and retruning id onclick */}
            {data === null ? <p>{message === null ? 'Loading...' : message}</p> :
                <di className = 'justify-center items-center flex'>
                    <GalleryUser
                        photo = {[data.photo]}
                    />
                </di>
            }

            <button className="m-5" onClick={deletePicture}> Supprimer La photo</button>
           
             {/* to update Image*/}
             <ImageUploader 
                 nom = 'photo'
                 route = {`gallery/${id}`}
             />
        </div>
     )
}