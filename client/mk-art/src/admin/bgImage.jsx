import { useState } from "react";
import ImageUploader from "./component/imagesUploader";

export default function BGChanger () {

    //state define if user wants to update password or it informations
    const [oeuvres, setOeuvres] = useState(false);
    const [projets, setProjets] = useState(false);
    
    const handleprojets = () => {
        setProjets(true);
        setOeuvres(false);
    };

    const handleoeuvres = () => {
        setProjets(false);
        setOeuvres(true);
    };

    const homeUserPage = () => {
        setProjets(false);
        setOeuvres(false);
    }

    if (projets === false && oeuvres === false) {
        return (
            <div className=" flex justify-center items-center mt-28 flex-col" >
                <p className="my-10 text-gray-700 dark:text-gray-50 lg:text-2xl text-xl font-bold">Veillez choisir</p>
                <div className=" flex-col sm:flex-row justify-center items-center">
                    <div className=" text-center flex items-center justify-center w-52 p-3 hover:bg-slate-200  bg-slate-100 sm:mx-14 my-10 text-gray-700 font-semibold h-40 rounded-lg border-2" onClick={handleprojets}>Changer le BG Oeuvres</div>
                    <div className=" text-center flex items-center justify-center w-52 p-3 hover:bg-slate-200   bg-slate-100 sm:mx-14 my-10 text-gray-700 font-semibold h-40 rounded-lg border-2" onClick={handleoeuvres}>Changer BG Projets</div>
                </div>
            </div>
        );
    } else if (oeuvres) {

        return (

            <div className="p-10 flex flex-col justify-center items-center border-2 border-slate-800">
                <div className="mt-40 -mb-28">
                        <button onClick={homeUserPage} className=""> {'<'}</button>
                </div>
                <ImageUploader 
                    nom = 'photo'
                    route = 'bgPhoto?oeuvres=true'   
                />
            </div>   
        );
    } else if (projets) {
        return (

            <div className="p-10 flex flex-col justify-center items-center border-2 border-slate-800">
                    <div className="mt-40 -mb-28">
                        <button onClick={homeUserPage} className=""> {'<'}</button>
                    </div>
                <ImageUploader 
                    nom = 'photo'
                    route = 'bgPhoto?projets=true'   
                />
            </div>
        );
    }
    
}