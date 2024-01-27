import {useState,useEffect} from "react";
import axios from "../axiosUrl";
import {Link} from 'react-router-dom'
import h from '../assets/h.jpg'

export function Project ()
{
    // const [bgPhoto, setBgPhoto] = useState(null);


    // useEffect( () => {
        
    //    const fetchProfil = async () => {

    //         try {
                
    //             const data = await axios.get('/user/bgPhoto');
    //             setBgPhoto(data.data);
                
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
    const h3Style = 'sm:text-2xl text-xl font-bold text-gray-800';
    const labelStyle = 'text-gray-500 my-2 font-semibold';

    return (
       <div className="w-full">
         <section className=" flex flex-col  mt-28 justify-center lg:px-20 px-5 items-center" >

            <div className="flex gap-10 justify-center w-full items-center mt-10 relative lg:px-14 px-9 pt-20 mb-5 lg:flex-row flex-col p-4">

                <h1 className="sm:text-3xl text-2xl text-gray-200 absolute top-4 font-bold">Oeuvres</h1>

                    <div style={{backgroundImage: `url(${h})`}} className={`  bg-center bg-no-repeat bg-[length:400px_400px] lg:bg-cover lg:w-2/5 w-full rounded-xl flex flex-col items-center justify-center h-80 duration-500 `}>
                        <Link to = '/projets/oeuvresUnique' className="w-full h-full">
                            <div className="w-full h-full hover:backdrop-blur-sm duration-500 flex flex-col justify-center items-center">
                                <div className=" w-3/5 h-3/5 bg-gray-700 p-5 bg-opacity-40 flex flex-col justify-center items-center rounded-md">
                                    <h3 className='sm:text-2xl text-xl font-bold text-teal-300'>Oeuvres Uniques</h3>
                                </div>
                            </div>
                        </Link>
                    </div>

                <div style={{backgroundImage: `url(${h})`}} className={`  bg-center bg-no-repeat bg-[length:400px_400px] lg:bg-cover lg:w-2/5 w-full rounded-xl flex flex-col items-center justify-center h-80 duration-500 `}>
                    <div className="w-full h-full hover:backdrop-blur-sm duration-500 flex flex-col justify-center items-center">
                        <div className=" w-3/5 h-3/5 bg-gray-700 p-5 bg-opacity-40 flex flex-col justify-center items-center rounded-md">
                            <h3 className='sm:text-2xl text-xl font-bold text-teal-300'>Projets</h3>
                        </div>
                    </div>
                </div>
            </div>

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
                 
            </section>

       </div>
    )
}