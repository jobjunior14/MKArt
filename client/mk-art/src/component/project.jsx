import {useState,useEffect} from "react";
import GalleryUser from './galleryDisplay';
import axios from "../axiosUrl";

export function Project ()
{
    const [photo, setPhoto] = useState(null);

    // useEffect( () => {
        
    //    const fetchProfil = async () => {

    //         try {
                
    //             const data = await axios.get('/user/gallery');
    //             setPhoto(data.data);
                
    //         } catch (err) {
    //             if (err.message) {

    //                 console.log( err.data, err.data.status);
    //             } else {

    //                 console.log (err);
    //             }
    //         }
    //    };

    //    fetchProfil();

    // }, [photo]);
    
    const div1Style = 'bg-gray-100 lg:w-1/3 w-3/4 rounded-xl flex flex-col items-center justify-center h-56 hover:bg-teal-300 duration-500';
    const h3Style = 'text-2xl font-bold text-gray-800';
    const labelStyle = 'text-gray-500 my-2 font-semibold';
    
    return (
       <div className="w-full">
         <section className=" flex flex-col  mt-28 justify-center lg:px-20 px-5 items-center" >
                
                <div className="flex justify-between gap-6 w-full items-center lg:p-10 lg:flex-row flex-col ">
                    <div className= {div1Style}>
                        <i className="uil uil-briefcase-alt text-black text-3xl"></i>
                        <h3 className={h3Style}>Complet</h3>
                        <label className={labelStyle}>Plus de 15 projects finis</label>
                    </div>
                    <div className= {div1Style}>
                        <i className="uil uil-users-alt text-black text-3xl"></i>
                        <h3 className={h3Style}>Clients</h3>
                        <label className={labelStyle}> Plus de 25 clients satisfait</label>
                    </div>
                    <div className= {div1Style}>
                        <i className="uil uil-award text-black text-3xl"></i>
                        <h3 className={h3Style}>Expérience</h3>
                        <label className={labelStyle}>Plus de 7 ans dans le domaine </label>
                    </div>
                </div>

                <div className="flex gap-10 justify-center w-full items-center mt-10 relative px-14 pt-20 mb-5 lg:flex-row flex-col p-5">

                    <h1 className="text-3xl text-gray-200 absolute top-4 font-bold">Oeuvres</h1>

                    <div className="bg-gray-100 lg:w-2/5 w-full rounded-xl flex flex-col items-center justify-center h-56 hover:bg-teal-300 duration-500 ">
                        <i className="uil uil-award text-black text-3xl"></i>
                        <h3 className={h3Style}>Expérience</h3>
                        <label className={labelStyle}>Plus de 7 ans dans le domaine </label>
                    </div>
                    <div className="bg-gray-100 lg:w-2/5 w-full rounded-xl flex flex-col items-center justify-center h-56 hover:bg-teal-300 duration-500 ">
                        <i className="uil uil-award text-black text-3xl"></i>
                        <h3 className={h3Style}>Expérience</h3>
                        <label className={labelStyle}>Plus de 7 ans dans le domaine </label>
                    </div>
                </div>
                 
                {/* <div className="roller">
                    {photo === null ? <p>Loading</p> : <GalleryUser photo = {photo.data.gallery} />}
                </div> */}
            </section>

       </div>
    )
}