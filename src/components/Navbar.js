import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const[button,setButton]=useState(true);

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
                        WebsiteName
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='navItem'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='navItem'>
                            <Link to='/groups' className='nav-links' onClick={closeMobileMenu}>
                                Groups
                            </Link>
                        </li>
                        <li className='navItem'>
                            <Link to='/messages' className='nav-links' onClick={closeMobileMenu}>
                                Message
                            </Link>
                        </li>
                        <li className='navItem'>
                            <Link to='/photos' className='nav-links' onClick={closeMobileMenu}>
                                Photos
                            </Link>
                        </li>
                        <li className='navItem'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                        <li className='navItem'>
                            <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;