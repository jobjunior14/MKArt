import React from "react";

export function About ()
{
    return (
        <section class="section" id="about">
        <div class="top-header">
            <h1>A propos de moi</h1>
        </div>
        <div class="row">
            <div class="col">
                <div class="about-info">
                    <h3>Mon introduction</h3>
                    <p>J'ai toujours été passionner par le dessin à crayon depuis l'enfance.
                        Evoluant en freelance j'ai déjà participer dans plusieur..... 
                    </p>
                    <div class="about-btn">
                        <button class="btn">Télécharger le CV <i class="uil uil-import"></i></button>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="skills-box">
                    <div class="skills-header">
                        <h3>Frontend</h3>
                    </div>
                    <div class="skills-list">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Bootstrap</span>
                        <span>JavaScript</span>
                        <span>Vue</span>
                        <span>React</span>
                        <span>Angular</span>
                    </div>
                </div>
                <div class="skills-box">
                    <div class="skills-header">
                        <h3>Backend</h3>
                    </div>
                    <div class="skills-list">
                        <span>PHP</span>
                        <span>JAVA</span>
                        <span>Python</span>
                        <span>C++</span>
                    </div>
                </div>
                <div class="skills-box">
                    <div class="skills-header">
                        <h3>Database</h3>
                    </div>
                    <div class="skills-list">
                        <span>MySQL</span>
                        <span>PostgreSQL</span>
                        <span>MongoDB</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}