import React from 'react';
import { Link } from 'react-router-dom';
export function Footer ()
{
    return (
        <footer>
            <div className="top-footer">
                <p>Moise Kafeka .</p>
            </div>
            <div className="middle-footer">
                <ul className="footer-menu">
                    <li className="footer_menu_list">
                        <Link to = '/'> Home </Link>
                        
                    </li>
                    <li className="footer_menu_list">
                        <Link to = '/projet'> Projects </Link>
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