import React from 'react';
import Class from './Logo.module.css';
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
        <div className={Class.logoWrap}>
            <NavLink to="/profile" className={Class.logoLink}>
                <img className={Class.logo} src={'/img/socialLogo.png'} alt="logo"/>
            </NavLink>
        </div>
    );
}

export default Logo;