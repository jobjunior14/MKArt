import {NavLink} from 'react-router-dom';
import React, {useState} from 'react';

export function NavBar()
{ 
    const [showNav, setShowNav] = useState(false);
    const [styeShadwonNav, setstyeShadwonNav ] = useState ({
        boxShadow : "none",
        height : "90px",
        lineHeight : "90px"
    });

    window.onscroll = () =>
    {
        if (document.body.scrollTop > 5 || document.documentElement.scrollTop >  5)
        {
            setstyeShadwonNav ({
                boxShadow : "0 1px 6px rgba(0, 0, 0, 0.1)",
                height : "70px",
                lineHeight : "70px",
            });
        } else{
            setstyeShadwonNav (
                {
                    boxShadow : "none",
                    height : "90px",
                    lineHeight : "90px"
                }
            )
        }
    };
    
    function myMenuFunction(){

        setShowNav( !showNav ? true : false );
    };

    return (
        <nav id = "header" style={styeShadwonNav}>
                <div className="nav-logo">
                <p className="nav-name">MkArt </p>
                <span>.</span>
            </div>
            <div className={showNav ? 'nav-menu responsive' : 'nav-menu'  }  id='myNavMenu'>
                <ul className='nav_menu_list'>
                    <li className='nav_list'>
                <NavLink 
                    className={ ({isActive}) => isActive ? "active-link" : "nav-link "}
                    to = '/'>Acceuil</NavLink>
                        <div className='cirlce'></div>
                    </li>

                    <li className='nav_list'>
                <NavLink 
                    className={ ({isActive}) => isActive ? "active-link" : "nav-link "}
                    to = '/projet'>Oeuvres</NavLink>
                        <div className='cirlce'></div>
                    </li>

                     <li className='nav_list'>
                <NavLink 
                    className={ ({isActive}) => isActive ? "active-link" : "nav-link "}
                    to = '/about'>Propos</NavLink>
                        <div className='cirlce'></div>
                    </li>

                    <li className='nav_list'>
                <NavLink 
                    className={ ({isActive}) => isActive ? "active-link" : "nav-link "}
                    to = '/contact'>Contacts</NavLink> 
                        <div className='cirlce'></div>
                    </li>
                    <div className="nav-button">
                        <button className="btn">Télécharger le CV <i className="uil uil-file-alt"></i></button>
                    </div>
                </ul>
            </div>

            <div className='nav-menu-btn'>
                <i className="uil uil-bars" onClick={myMenuFunction}></i>
            </div>
        </nav>
    )
}