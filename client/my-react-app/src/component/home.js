import React, {useEffect, useState} from 'react';
import { SocialIcon } from 'react-social-icons';
import { Type } from './typeEffect';
import ScrollReveal from 'scrollreveal';
import axios from '../axiosUrl';


export function Home ()
{
    //uploading data from server 
    const [profil, setProfil] = useState(null);
    useEffect( () => {
        
       const fetchProfil = async () => {

            try {
                
                const data = await axios.get('/user/profil');
                setProfil(data.data.photo[0].photo);
                
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
    console.log (profil)
    
    //Sroll function to bring annimation to page when u scroll
    const sr = ScrollReveal({
        origin: 'top',
         
    });
    sr.reveal('.featured-text-card',{})
    sr.reveal('.featured-name',{delay: 100})
    sr.reveal('.featured-text-info',{delay: 200})
    sr.reveal('.featured-text-btn',{delay: 200})
    sr.reveal('.social_icons',{delay: 200})
    sr.reveal('.featured-image',{delay: 300})
    
    return (

        <div className='wrapper'>
            <section className="featured-box" id="home">
                <div className="featured-text">
                    <div className="featured-text-card">
                        <span>Moïse Kafeka</span>
                    </div>

                    <div className="featured-name">
                        <p>Je suis <span className="typedText"> <Type/> </span></p>
                    </div>

                    <div className="featured-text-info">
                        <p> J'ai de l'experience dans le dessin à crayon et numérique depuis maintenant 5 ans.</p>
                        <p> Ma spécialité étant le portrait je m'entraine du jour le jour pour toujours me surpasser et satisfaire mes clients</p>
                    </div>

                    <div className="featured-text-btn">
                        <button className="btn blue-btn">Louer mes services</button>
                        <button className="btn">Télécharger le CV <i className="uil uil-file-alt"></i></button>
                    </div>

                    <div className="social_icons">
                        <div className='icon'> <SocialIcon 
                            target="_blank" 
                            className="custom-class" 
                            bgColor='white' 
                            fgColor='black' 
                            url="https://twitter.com" />
                        </div>

                        <div className='icon' > <SocialIcon 
                            target="_blank" 
                            className="custom-class" 
                            bgColor='white' 
                            fgColor='black' 
                            url="https://facebook.com" />
                        </div>

                        <div className='icon' > <SocialIcon 
                            target="_blank" 
                            className="custom-class" 
                            bgColor='white' 
                            fgColor='black' 
                            url="https://linkdin.com" />
                        </div>
                        
                    </div>
                </div>

                <div className="featured-image">
                    <div className="image">
                        { profil === null ? <p>Loading...</p> : <img src= {`http://192.168.43.47:5000/${profil}`} alt="avatar"/>} 
                    </div>
                </div>
            </section>
        </div>
    )
}