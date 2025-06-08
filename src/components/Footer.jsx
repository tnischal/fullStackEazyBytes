import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./footer.css";

export default function Footer() {
  return (
    <footer className='footer'>
        Built with
        <FontAwesomeIcon icon={faHeart} className='footer-icon' aria-hidden="true"/>        
        <a href='http:\\Eazybytes.com/' target='_blank' rel='noreferrer'>EazyBytes</a>
    </footer>
  )
}
