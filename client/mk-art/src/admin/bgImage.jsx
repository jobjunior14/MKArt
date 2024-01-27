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
            <div >
                <p className="my-10 text-gray-700 dark:text-gray-50 lg:text-2xl text-xl font-bold">Veillez choisir</p>
                <button className=" w-52 p-3 hover:bg-slate-200  duration-200 hover:scale-110 bg-slate-100 mx-14 my-10 text-gray-700 font-semibold h-40 rounded-lg border-2" onClick={handleprojets}>Changer le BG Oeuvres</button>
                <button className=" w-52 p-3 hover:bg-slate-200  duration-200 hover:scale-110 bg-slate-100 mx-14 my-10 text-gray-700 font-semibold h-40 rounded-lg border-2" onClick={handleoeuvres}>Changer BG Projets</button>
            </div>
        );
    } else if (oeuvres) {

        return (

            <div className="p-10 flex justify-center items-center">
                <div className="relative flex">
                    <div className="relative flex justify-center items-center ">
                        <button onClick={homeUserPage} className=" pr-px text-gray-700 hover:bg-slate-400 duration-150 text-xl place-content-end mx-5 bg-slate-200 w-8 h-8 rounded-full"> {'<'}</button>
                    </div>
                </div>
                <ImageUploader 
                    nom = 'profil'
                    route = 'bgPhoto?projets=true'   
                />
            </div>   
        );
    } else if (projets) {
        return (

            <div className="p-10 flex justify-center items-center">
                <div className="relative flex">
                    <div className="relative flex justify-center items-center ">
                        <button onClick={homeUserPage} className=" pr-px text-gray-700 hover:bg-slate-400 duration-150 text-xl place-content-end mx-5 bg-slate-200 w-8 h-8 rounded-full"> {'<'}</button>
                    </div>
                </div>
                <ImageUploader 
                    nom = 'photo'
                    route = 'bgPhoto?projets=true'   
                />
            </div>
        );
    }
    
}