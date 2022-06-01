import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(){

    const [click,setClick] = React.useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return(
            <nav className='navbar'>
                <div className='navbar__logo'>
                    <Link to="/" className='navbar__logo-link'>
                        <img src="../images/logo.png" alt="logo" className='navbar__logo-image'/>
                    </Link>
                </div>
                <ul className={click ? 'navbar__items-active' : 'navbar__items'}>
                    <li className='navbar__items-item'>
                        <Link onClick={closeMobileMenu} to='/' className='navbar__items-link'>Home</Link>
                    </li>
                    <li className='navbar__items-item'>
                        <Link onClick={closeMobileMenu} to='/services' className='navbar__items-link'>Services</Link>
                    </li>
                    <li className='navbar__items-item'>
                        <Link onClick={closeMobileMenu} to='/products' className='navbar__items-link'>Products</Link>
                    </li>
                    <li className='navbar__items-item'>
                        <Link onClick={closeMobileMenu} to='/sign-up' className='navbar__items-link navbar__items-button'>
                            <button className='navbar__items-link--button'>Sign up</button>
                        </Link>
                    </li>
                </ul>
                <FontAwesomeIcon icon={faBars} className={click ? 'navbar__burger-close' : 'navbar__burger'} onClick={handleClick} ></FontAwesomeIcon>
                    
                <FontAwesomeIcon icon={faClose} className={!click ? 'navbar__close' : 'navbar__close-active'} onClick={handleClick}></FontAwesomeIcon>
            </nav>
    )
}
