import React from 'react'
import "./NavMain.css";

const NavMain = () => {
  return (
    <div className='nav-parent'>
        <div className='nav-logo'>
            <img className='logo-img' src="bps_logo.png" alt=""/>
        </div>
        <div className='nav-items'>
            <ul>
                <li>
                    <a href=""> Home </a>
                </li>
                <li>
                    <a href=""> About Us </a>
                </li>
                <li>
                    <a href=""> Our Products </a>
                </li>
                <li>
                    <a href=""> Brochure </a>
                </li>
                <li>
                    <a href=""> Contact Us </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavMain