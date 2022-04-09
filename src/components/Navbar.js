import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
                        <li className='navItem'>
                            <Link to='/settings' className='nav-links' onClick={closeMobileMenu}>
                                Account Settings
                            </Link>
                        </li>
                        <li className='navItem'>
                            <Link to='/help' className='nav-links' onClick={closeMobileMenu}>
                                Help
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
