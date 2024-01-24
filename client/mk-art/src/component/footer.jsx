import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
export function Footer ()
{
    const sr = ScrollReveal({
        origin: 'top',
           
    });
    sr.reveal('.top-footer',{delay: 300});
    sr.reveal('.footer-menu', {delay: 300});
    sr.reveal ('.footer-social-icons', {delay: 200});

    return (
        <footer>
            <div className="top-footer">
                <p>Moïse Kafeka .</p>
            </div>
            <div className="middle-footer">
                <ul className="footer-menu">
                    <li className="footer_menu_list">
                        <Link to = '/'>Acceuil</Link>
                        
                    </li>
                    <li className="footer_menu_list">
                        <Link to = '/projet'> Oeuvres </Link>
                    </li>
                    <li className="footer_menu_list">
                        <Link to = '/about'> A propos</Link>
                    </li>
                    <li className="footer_menu_list">
                        <Link to = '/contact'> Contacts</Link>
                    </li>
                </ul>
            </div>
            <div className="footer-social-icons">
                <div className="icon"><i className="uil uil-instagram"></i></div>
                <div className="icon"><i className="uil uil-linkedin-alt"></i></div>
                <div className="icon"><i className="uil uil-twitter"></i></div>
                <div className="icon"><i className="uil uil-github-alt"></i></div>
            </div>
            <div className="bottom-footer">
                <p>Copyright &copy; <a href="#home" style={{textDecoration: 'none'}}>Job Junior</a> - All rights reserved
                </p>
            </div>
        </footer>
    )
}