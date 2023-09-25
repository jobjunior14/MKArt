import React, {useState,useEffect} from "react";
import GalleryUser from './galleryDisplay';
import ScrollReveal from "scrollreveal";
import axios from "axios";

export function Project ()
{
    const sr = ScrollReveal({
       origin: 'right'
    });

    sr.reveal('.roller', {delay: 400});
    sr.reveal('.project-container', {delay: 500});
    sr.reveal('.project-box', {delay: 500});


    const [photo, setPhoto] = useState(null);

    useEffect( () => {
        
       const fetchProfil = async () => {

            try {
                
                const data = await axios.get('http://localhost:5000/api/v1/user/gallery');
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
       <div className="wrapper">
         <section className="section" id="projects">
                <div className="top-header">
                    <span> </span>
                </div>
                <div className="project-container">
                    <div className="project-box">
                        <i className="uil uil-briefcase-alt"></i>
                        <h3>Complet</h3>
                        <label>Plus de 15 projects finis</label>
                    </div>
                    <div className="project-box">
                        <i className="uil uil-users-alt"></i>
                        <h3>Clients</h3>
                        <label> Plus de 25 clients satisfait</label>
                    </div>
                    <div className="project-box">
                        <i className="uil uil-award"></i>
                        <h3>Expérience</h3>
                        <label>Plus de 7 ans dans le domaine </label>
                    </div>
                </div>
                <p>
                    
                </p>
                <div className="roller">
                    {photo === null ? <p>Loading</p> : <GalleryUser photo = {photo.data.gallery} />}
                </div>
            </section>

       </div>
    )
}