import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Type } from './typeEffect';
import profile from './profile.png';

export function Home ()
{

    return (
        <section class="featured-box" id="home">
        <div class="featured-text">
            <div class="featured-text-card">
                <span>Moise Kafeka</span>
            </div>
            <div class="featured-name">
                <p>Je suis <span class="typedText"> <Type/> </span></p>
            </div>
            <div class="featured-text-info">
                <p> J'ai de l'experience dans le dessin à crayon depuis maintenant 5 ans ....
                </p>
            </div>
            <div class="featured-text-btn">
                <button class="btn blue-btn">Hire Me</button>
                <button class="btn">Download CV <i class="uil uil-file-alt"></i></button>
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
                <img src= {profile} alt="avatar"/>
            </div>
        </div>
        <div class="scroll-icon-box">
            <a href="#about" class="scroll-btn">
                <i class="uil uil-mouse-alt"></i>
                <p>Scroll Down</p>
            </a>
        </div>

    </section>
    )
}