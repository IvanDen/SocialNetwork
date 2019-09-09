import React from 'react';
import Class from './header.module.css';

const Header = () => {
    return (
        <header>
            <img className={Class.logo} src={'/img/logo.png'} alt="logo"/>
        </header>
    );
}

export default Header;