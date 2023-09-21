import React from "react";
import Gallery from './gallerie';

export function Project ()
{
    return (
       <div className="wrapper">
         <section class="section" id="projects">
                <div class="top-header">
                    <span> </span>
                </div>
                <div class="project-container">
                    <div class="project-box">
                        <i class="uil uil-briefcase-alt"></i>
                        <h3>Complet</h3>
                        <label>Plus de 15 projects finis</label>
                    </div>
                    <div class="project-box">
                        <i class="uil uil-users-alt"></i>
                        <h3>Clients</h3>
                        <label> Plus de 25 clients satisfait</label>
                    </div>
                    <div class="project-box">
                        <i class="uil uil-award"></i>
                        <h3>Expérience</h3>
                        <label>Plus de 7 ans dans le domaine </label>
                    </div>
                </div>
                <p>
                    
                </p>
                <Gallery/>
            </section>

       </div>
    )
}