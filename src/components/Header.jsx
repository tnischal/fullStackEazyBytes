import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faTags } from "@fortawesome/free-solid-svg-icons";


export default function Header() {
  return (
    <header className="header">
    <div className="container">
        
        <a href="/">
        <FontAwesomeIcon icon={faTags} className="fa-icon"/>
        Eazy Stickers
        </a>
        
        <nav className="nav">
            <ul>
                <li>
                    <a href='/' className='nav-link'>Home</a>
                </li>
                <li>
                    <a href='/about' className='nav-link'>About</a>
                </li>
                <li>
                    <a href='/contact' className='nav-link'>Contact</a>
                </li>
                <li>
                    <a href='/login' className='nav-link'>Log in</a>
                </li>
                <li>
                    <a href='/cart' className='nav-link'><FontAwesomeIcon icon={faShoppingBasket} className="fa-icon"/></a>
                </li>
            </ul>
        </nav>
       
    </div>
    </header>
  );
}
