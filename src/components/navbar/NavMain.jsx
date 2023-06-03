import React from 'react'
import "./NavMain.css";
import Logo from '/logo_main.png'

const NavMain = () => {
  return (
    <div className='nav-parent'>
        <div className='nav-items'>
            <div className='nav-logo'>
                <img className='logo-img' src={Logo} alt="logo"/>
            </div>
            <ul>
                <li>
                    <a href="/"> Home </a>
                </li>
                <li>
                    <a href="/#about-section"> About Us </a>
                </li>
                <li>
                    <a href="/#products-page"> Our Products </a>
                </li>
                <li>
                    <a href="#footer-main"> Contact Us </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavMain