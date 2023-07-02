import React, { useState, useEffect, useRef } from 'react'
import "./NavMain.css";
import Logo from '/logo_main.png'
import {AiOutlineMenuFold, AiOutlineMenuUnfold} from 'react-icons/ai';

const NavMain = (props) => {
    const [sidebar, setSidebar] = useState(false);
    const sidebarRef = useRef(null);

    useEffect(() => {
        if (sidebar) sidebarRef.current.style.height = `${props.sidebarHeight}px`;

    }, [sidebar]);

    return (
        <div className='nav-parent'>
            <div className='nav-items'>
                <div className='nav-logo'>
                    <img className={`logo-img ${sidebar && 'hidden'}`} src={Logo} alt="logo"/>
                </div>
                <div className="sidebar-icon" onClick={() => setSidebar(!sidebar)}>
                    <AiOutlineMenuFold />
                </div>
                <div className={`ul-elements ${sidebar && 'active'}`} ref={sidebarRef}>
                    {
                        sidebar && 

                        <div className='sidebar-content-active'>
                            <div className="sidebar-icon active" onClick={() => setSidebar(!sidebar)}>
                                <AiOutlineMenuUnfold />
                            </div>

                            <div className='nav-logo'>
                                <img className={`logo-img ${sidebar && 'active'}`} src={Logo} alt="logo"/>
                            </div>
                        </div>
                    }
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
        </div>
    )
}

export default NavMain