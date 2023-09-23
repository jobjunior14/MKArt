import React from "react";
import Gallery from './gallerie';
import ScrollReveal from "scrollreveal";
export function Project ()
{
    const sr = ScrollReveal({
       origin: 'right'
    });

    sr.reveal('.roller', {delay: 400});
    sr.reveal('.project-container', {delay: 500});
    sr.reveal('.project-box', {delay: 500});
    
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
                    <Gallery/>
                </div>
            </section>

       </div>
    )
}