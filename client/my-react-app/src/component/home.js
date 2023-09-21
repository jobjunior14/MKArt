import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Type } from './typeEffect';
import mk1 from './mk1.png';

export function Home ()
{

    return (
        
            <div className='wrapper'>
            <section class="featured-box" id="home">
        <div class="featured-text">
            <div class="featured-text-card">
                <span>Moïse Kafeka</span>
            </div>
            <div class="featured-name">
                <p>Je suis <span class="typedText"> <Type/> </span></p>
            </div>
            <div class="featured-text-info">
                <p> J'ai de l'experience dans le dessin à crayon et numérique depuis maintenant 5 ans.</p>
                <p> Ma spécialité étant le portrait je m'entraine du jour le jour pour toujours me surpasser et satisfaire mes clients</p>
            </div>
            <div class="featured-text-btn">
                <button class="btn blue-btn">Louer mes services</button>
                <button class="btn">Télécharger le CV <i class="uil uil-file-alt"></i></button>
            </div>
            <div class="social_icons">
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
        <div class="featured-image">
            <div class="image">
                <img src= {mk1} alt="avatar"/>
            </div>
        </div>

    </section>
            </div>
    )
}