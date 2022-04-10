import React, { useState } from 'react'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'
import ManageAccounts from '@mui/icons-material/ManageAccounts'
import Help from '@mui/icons-material/Help'

import {grey} from '@mui/material/colors'


import '../css/Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button,setButton] = useState(true);

    const handleClick = () => {
        setClick(!click);
    };

    const closeMobileMenu = () => {
        setClick(false);
    }
    const showButton= () =>{
        if(window.innerWidth<=960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };
    window.addEventListener('resize',showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo">
                        TRIPPER
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-name'>
                            {Cookies.get("username")} 
                        </li>
                        <li className='navItem'>
                            <Link to='/settings' className='nav-links' onClick={closeMobileMenu}>
                                <ManageAccounts sx={{color: grey[800], fontSize: 36}}/>
                            </Link>
                        </li>
                        <li className='navItem'>
                            <Link to='/help' className='nav-links' onClick={closeMobileMenu}>
                                <Help sx={{color: grey[800], fontSize: 36}}/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
