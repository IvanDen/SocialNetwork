import React from 'react';
import Class from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <img className={Class.logo} src={'/img/logo.png'} alt="logo"/>
            <div className={Class.loginBlock}>
                {props.isAuth
                    ? <div>
                        <span className={Class.linc}>{props.login}</span>
                        <button onClick={props.logout}>Logout</button>
                      </div>
                    : <NavLink className={Class.linc} to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;