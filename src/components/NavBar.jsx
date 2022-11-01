import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <header className=' header'>
            <Link to='/' className='item-navbar'>Home</Link>
            <Link to='/contactos' className='item-navbar'>Contactos</Link>
            <Link to='/about' className='item-navbar'>Nosotros</Link>
        </header>
    );
}

export default NavBar;
