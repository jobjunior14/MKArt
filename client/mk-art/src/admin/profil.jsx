import React  from "react";
import ImageUploader from "./component/imagesUploader";

export default function ProfilChanger () {

    return (
        <div className="p-10 flex justify-center items-center">
            
            <ImageUploader 
                nom = 'profil'
                route = 'profil'   
            />
        </div>
    )
}